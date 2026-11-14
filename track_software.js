// File: track_template.js
// Template for creating a completely new degree or track

window.AppTracks = window.AppTracks || {};

// Replace 'new_track_id' with a unique ID in English (no spaces)
window.AppTracks['new_track_id'] = {
    id: "new_track_id",
    name: "שם התואר או המסלול (למשל: הנדסת תוכנה)",
    semestersCount: 8, // Number of semesters in this degree
    targets: {
        total: 160.0, // Total points required for the degree
        mandatory: 120.0 // Total mandatory points
    },
    
    // Define your own course types and colors here! You can invent any type you need.
    courseTypes: {
        "mandatory": { label: "חובה", bgColor: "#ffebee", borderColor: "#e57373" }, // Reddish
        "elec_type_1": { label: "בחירה פקולטית", bgColor: "#e3f2fd", borderColor: "#64b5f6" }, // Blueish
        "elec_type_2": { label: "בחירה חופשית", bgColor: "#fff3e0", borderColor: "#ffb74d" }, // Orangeish
        "sport": { label: "ספורט", bgColor: "#f3e5f5", borderColor: "#ba68c8" } // Purpleish
    },
    
    // The statistics boxes that will appear at the top
    stats: [
        // Example 1: Standard box counting points
        { id: 'elec1', label: 'בחירה פקולטית', types: ['elec_type_1'], target: 30.0, color: '#1976d2', borderColor: '#64b5f6' },
        
        // Example 2: Box counting COURSES instead of points (add countBy: 'courses')
        { id: 'elec2', label: 'קורסי העשרה', types: ['elec_type_2'], target: 2, countBy: 'courses', color: '#f57c00', borderColor: '#ffb74d' },
        
        /* // Example 3: A Split Box (Remove the /* to use it)
        {
            isSplit: true,
            cssClass: 'stat-split-box',
            parts: [
                { id: 'partA', label: 'חלק א', types: ['elec_type_1'], target: 10, color: '#4caf50', borderColor: '#81c784' },
                { id: 'partB', label: 'חלק ב', types: ['elec_type_2'], target: 5, color: '#00bcd4', borderColor: '#4dd0e1' }
            ]
        }
        */
    ],
    
    // Mandatory Courses List
    // sem: 1-8 decides which semester box it drops into.
    mandatoryCourses: [
        { id: "100001", name: "Math 1", hebrewName: "מתמטיקה 1", points: 5.0, type: "mandatory", sem: 1 },
        { id: "100002", name: "Physics 1", hebrewName: "פיזיקה 1", points: 5.0, type: "mandatory", sem: 2 }
    ],
    
    // Elective Courses Bank
    // sem: 0 puts them in the bank on the right side.
    electiveCourses: [
        { id: "200001", name: "Elective A", hebrewName: "קורס בחירה א", points: 3.0, type: "elec_type_1", sem: 0 },
        { id: "200002", name: "Elective B", hebrewName: "קורס בחירה ב", points: 2.0, type: "elec_type_2", sem: 0 }
    ]
};