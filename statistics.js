// File: statistics.js
// Analytics and Charting Module for Degree Planner

window.AppStats = {
    charts: {},

    openModal: function(planner) {
        if (!planner.currentTrackId) {
            alert("אנא בחר מסלול תחילה.");
            return;
        }
        const modal = document.getElementById('analytics-modal');
        modal.style.display = 'flex';
        this.renderCharts(planner);
    },

    closeModal: function() {
        document.getElementById('analytics-modal').style.display = 'none';
    },

    renderCharts: function(planner) {
        // Destroy existing charts to avoid overlap when reopening
        Object.keys(this.charts).forEach(key => {
            if (this.charts[key]) {
                this.charts[key].destroy();
            }
        });

        const semestersCount = planner.semestersCount;
        const labels = [];
        const semAverages = [];
        const cumAverages = [];
        const semPoints = [];
        
        let totalPointsCum = 0;
        let totalGradePointsCum = 0;

        const distribution = { '90-100': 0, '80-89': 0, '70-79': 0, '60-69': 0, 'Under 60': 0 };
        
        const categoryStats = {};
        const allTypes = planner.getAllCourseTypes();
        Object.keys(allTypes).forEach(type => {
            categoryStats[type] = { 
                name: allTypes[type].label, 
                pts: 0, 
                sum: 0, 
                color: allTypes[type].bgColor, 
                border: allTypes[type].borderColor 
            };
        });

        // Determine the actual order of semesters (including summers)
        const semOrder = [];
        for (let i = 1; i <= semestersCount; i++) {
            semOrder.push(i.toString());
            if (planner.summerSemesters && planner.summerSemesters.includes(i)) {
                semOrder.push(`${i}_summer`);
            }
        }

        // Process data per semester/summer in order
        semOrder.forEach(loc => {
            labels.push(loc.includes('_summer') ? `קיץ ${parseInt(loc)}` : `סמסטר ${loc}`);
            
            let semPts = 0;
            let semGradePts = 0;
            let semCompletedPts = 0; 

            planner.courses.forEach(c => {
                if (c.excludeFromDegree) return; 

                if (c.location === `semester-${loc}` && c.isCompleted()) {
                    semCompletedPts += c.points;
                    
                    const g = c.getNumericGrade();
                    if (g !== null) {
                        semPts += c.points;
                        semGradePts += (g * c.points);

                        if (g >= 90) distribution['90-100']++;
                        else if (g >= 80) distribution['80-89']++;
                        else if (g >= 70) distribution['70-79']++;
                        else if (g >= 60) distribution['60-69']++;
                        else distribution['Under 60']++;
                    }
                }
            });

            semPoints.push(semCompletedPts);

            if (semPts > 0) {
                semAverages.push((semGradePts / semPts).toFixed(2));
            } else {
                semAverages.push(null);
            }

            totalPointsCum += semPts;
            totalGradePointsCum += semGradePts;

            if (totalPointsCum > 0) {
                cumAverages.push((totalGradePointsCum / totalPointsCum).toFixed(2));
            } else {
                cumAverages.push(null);
            }
        });
        
        planner.courses.forEach(c => {
            if (c.excludeFromDegree) return; 
            
            if (c.isCompleted() && c.location.startsWith('semester-')) {
                const g = c.getNumericGrade();
                if (g !== null) {
                    const primaryType = c.primaryType || 'general_elective';
                    if (categoryStats[primaryType]) {
                        categoryStats[primaryType].pts += c.points;
                        categoryStats[primaryType].sum += (g * c.points);
                    }
                }
            }
        });

        // 1. Averages Line Chart
        const ctxAvg = document.getElementById('chart-averages').getContext('2d');
        this.charts.avg = new Chart(ctxAvg, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'ממוצע סמסטריאלי',
                        data: semAverages,
                        borderColor: '#ff9800',
                        backgroundColor: '#ff9800',
                        fill: false,
                        tension: 0.3,
                        spanGaps: true,
                        pointRadius: 5
                    },
                    {
                        label: 'ממוצע מצטבר (גלובלי)',
                        data: cumAverages,
                        borderColor: '#2196f3',
                        backgroundColor: '#2196f3',
                        fill: false,
                        tension: 0.3,
                        spanGaps: true,
                        borderWidth: 3,
                        pointRadius: 5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { suggestedMin: 60, max: 100 } },
                plugins: { title: { display: false } }
            }
        });

        // 2. Points Bar Chart
        const ctxPts = document.getElementById('chart-points').getContext('2d');
        this.charts.pts = new Chart(ctxPts, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'נק"ז שהושלמו בהצלחה',
                    data: semPoints,
                    backgroundColor: 'rgba(76, 175, 80, 0.7)',
                    borderColor: 'rgba(76, 175, 80, 1)',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { title: { display: false } }
            }
        });

        // 3. Grade Distribution Doughnut Chart
        const ctxDist = document.getElementById('chart-dist').getContext('2d');
        this.charts.dist = new Chart(ctxDist, {
            type: 'doughnut',
            data: {
                labels: ['90-100', '80-89', '70-79', '60-69', 'Under 60'], 
                datasets: [{
                    data: [
                        distribution['90-100'],
                        distribution['80-89'],
                        distribution['70-79'],
                        distribution['60-69'],
                        distribution['Under 60']
                    ],
                    backgroundColor: ['#4caf50', '#8bc34a', '#ffeb3b', '#ff9800', '#f44336'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    title: { display: false },
                    legend: { position: 'left' } 
                }
            }
        });
        
        // 4. Category Averages Bar Chart
        const catLabels = [];
        const catAvgs = [];
        const catBg = [];
        const catBorder = [];
        
        Object.keys(categoryStats).forEach(key => {
            if (categoryStats[key].pts > 0) {
                catLabels.push(categoryStats[key].name);
                catAvgs.push((categoryStats[key].sum / categoryStats[key].pts).toFixed(2));
                catBg.push(categoryStats[key].color || '#90a4ae');
                catBorder.push(categoryStats[key].border || '#607d8b');
            }
        });
        
        const ctxCat = document.getElementById('chart-category-avg').getContext('2d');
        this.charts.cat = new Chart(ctxCat, {
            type: 'bar',
            data: {
                labels: catLabels,
                datasets: [{
                    label: 'ממוצע קטגוריה',
                    data: catAvgs,
                    backgroundColor: catBg,
                    borderColor: catBorder,
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { suggestedMin: 60, max: 100 } },
                plugins: { 
                    title: { display: false }, 
                    legend: { display: false } 
                }
            }
        });

        // 5. Populate Included vs Excluded Lists
        const incList = document.getElementById('included-courses-list');
        const excList = document.getElementById('excluded-courses-list');
        incList.innerHTML = '';
        excList.innerHTML = '';

        planner.courses.forEach(c => {
            if (!c.isCompleted() || !c.location.startsWith('semester-')) return;
            
            const li = document.createElement('li');
            li.style.marginBottom = '5px';
            const gradeStr = c.binaryPass ? 'עובר' : c.getNumericGrade();
            
            if (c.excludeFromDegree) {
                li.innerText = `${c.hebrewName} (${c.points} נק"ז) - ציון: ${gradeStr} [הוחרג ידנית]`;
                excList.appendChild(li);
            } else if (c.countedInDegree) {
                let partialText = '';
                if (c.partialCount && c.partialCount < c.points) {
                    partialText = ` [נספרו רק ${c.partialCount.toFixed(1)} מתוך ${c.points} עקב הגעה למכסת התואר]`;
                }
                li.innerText = `${c.hebrewName} (${c.points} נק"ז) - ציון: ${gradeStr}${partialText}`;
                incList.appendChild(li);
            } else {
                li.innerText = `${c.hebrewName} (${c.points} נק"ז) - ציון: ${gradeStr} [הושמט עקב ציון נמוך/עודף מקום]`;
                excList.appendChild(li);
            }
        });
    }
};