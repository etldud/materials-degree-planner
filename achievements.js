// File: achievements.js
// Gamification and Milestones for the Degree Planner

window.AppAchievements = [
    // ==========================================
    // SHARED ACHIEVEMENTS (Applies to all tracks)
    // ==========================================
    {
        id: 'first_blood',
        icon: '🩸',
        title: 'דם ראשון (First Blood)',
        description: 'השלמת את הקורס הראשון שלך. הדרך לתואר מתחילה כאן!',
        check: function(planner) {
            return planner.courses.some(c => c.isCompleted() && c.location.startsWith('semester-'));
        }
    },
    {
        id: 'halfway_there',
        icon: '🧗‍♂️',
        title: 'נגעת בקיר (Halfway There)',
        description: 'השלמת לפחות 50% מסך הנקודות הנדרשות לתואר.',
        check: function(planner) {
            let completed = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && !c.excludeFromDegree && c.location.startsWith('semester-')) {
                    completed += c.points;
                }
            });
            return planner.coreTargets.total > 0 && completed >= (planner.coreTargets.total / 2);
        }
    },
    {
        id: 'final_countdown',
        icon: '🏁',
        title: 'הישורת האחרונה (The Final Countdown)',
        description: 'נשארו לך פחות מ-20 נקודות לסיום התואר השלם!',
        check: function(planner) {
            let completed = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && !c.excludeFromDegree && c.location.startsWith('semester-')) {
                    completed += c.points;
                }
            });
            const remaining = planner.coreTargets.total - completed;
            return completed > 0 && remaining > 0 && remaining <= 20;
        }
    },
    {
        id: 'deans_list',
        icon: '📜',
        title: "מצטיין דיקן (Dean's List)",
        description: 'הגעת לממוצע של מעל 90 בסמסטר עם לפחות 10 נק"ז.',
        check: function(planner) {
            for (let i = 1; i <= planner.semestersCount; i++) {
                let sumPts = 0;
                let sumGrades = 0;
                planner.courses.forEach(c => {
                    if (c.location === `semester-${i}` && c.isCompleted() && c.getNumericGrade() !== null && !c.excludeFromDegree) {
                        sumPts += c.points;
                        sumGrades += c.points * c.getNumericGrade();
                    }
                });
                if (sumPts >= 10.0 && (sumGrades / sumPts) >= 90) return true;
            }
            return false;
        }
    },
    {
        id: 'perfect_score',
        icon: '💯',
        title: '100! (Perfect Score)',
        description: 'קיבלת ציון 100 עגול ומושלם בקורס. כבוד!',
        check: function(planner) {
            return planner.courses.some(c => c.getNumericGrade() === 100 && c.location.startsWith('semester-') && !c.excludeFromDegree);
        }
    },
    {
        id: 'healthy_body_mind',
        icon: '🏃‍♂️',
        title: 'נפש בריאה בגוף בריא (Healthy Body & Mind)',
        description: 'השלמת בהצלחה את חובת הספורט לתואר.',
        check: function(planner) {
            let sportPts = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.types.includes('sport') && c.location.startsWith('semester-') && !c.excludeFromDegree) sportPts += c.points;
            });
            return sportPts >= 2.0;
        }
    },
    {
        id: 'moral_engineer',
        icon: '⚖️',
        title: 'לא לצינור הדם (Engineer with Moral)',
        description: 'סיימת את כל קורסי המל"ג. עכשיו אתה גם אדם ערכי!',
        check: function(planner) {
            let malagPts = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.types.includes('malag') && c.location.startsWith('semester-') && !c.excludeFromDegree) malagPts += c.points;
            });
            return malagPts >= 6.0;
        }
    },
    {
        id: 'free_spirit',
        icon: '🕊️',
        title: 'חופשי ומאושר (Free Spirit)',
        description: 'סיימת את כל מכסת הבחירה החופשית שלך.',
        check: function(planner) {
            let freePts = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.types.includes('general_elective') && c.location.startsWith('semester-') && !c.excludeFromDegree) freePts += c.points;
            });
            return freePts >= 4.0;
        }
    },
    {
        id: 'lab_rat',
        icon: '🔬',
        title: 'עכבר מעבדה (Lab Rat)',
        description: 'השלמת 5 קורסי מעבדה או יותר. אל תשכח לראות קצת שמש.',
        check: function(planner) {
            let labCount = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.hebrewName.includes('מעבד') && c.location.startsWith('semester-') && !c.excludeFromDegree) labCount++;
            });
            return labCount >= 5;
        }
    },
    {
        id: 'looking_ahead',
        icon: '🔭',
        title: 'מבט לעתיד (Looking Ahead)',
        description: 'לקחת קורס שמוגדר כקורס לתארים מתקדמים (תואר שני).',
        check: function(planner) {
            return planner.courses.some(c => c.isCompleted() && c.types.includes('graduate') && c.location.startsWith('semester-'));
        }
    },
    {
        id: 'the_entrepreneur',
        icon: '💡',
        title: 'יזם (The Entrepreneur)',
        description: 'לקחת קורס שקשור ליזמות, כלכלה או ניהול.',
        check: function(planner) {
            return planner.courses.some(c => 
                c.isCompleted() && 
                c.location.startsWith('semester-') && 
                (c.hebrewName.includes('יזמ') || c.hebrewName.includes('עסקי') || c.hebrewName.includes('כלכל')) &&
                !c.excludeFromDegree
            );
        }
    },
    {
        id: 'yield_strength',
        icon: '💥',
        title: 'מאמץ כניעה (Yield Strength)',
        description: 'השלמת סמסטר עם יותר מ-27 נקודות זכות. איך אתה עדיין עומד?',
        check: function(planner) {
            for (let i = 1; i <= planner.semestersCount; i++) {
                let completedPts = 0;
                planner.courses.forEach(c => {
                    if (c.location === `semester-${i}` && c.isCompleted() && !c.excludeFromDegree) completedPts += c.points;
                });
                if (completedPts > 27.0) return true;
            }
            return false;
        }
    },
    {
        id: 'diy_master',
        icon: '🛠️',
        title: 'עשה זאת בעצמך (DIY)',
        description: 'יצרת ושיבצת לפחות 3 קורסים מותאמים אישית (Custom Courses).',
        check: function(planner) {
            let customCount = 0;
            planner.courses.forEach(c => {
                if (c.isCustom && c.location.startsWith('semester-')) customCount++;
            });
            return customCount >= 3;
        }
    },

    // ==========================================
    // MATERIALS EXPERTISE (Now open to all tracks)
    // ==========================================
    {
        id: 'materials_specialist',
        icon: '🧲',
        title: 'המומחה (The Specialist)',
        description: 'השלמת לפחות 15 נקודות של בחירה פקולטית הנדסת חומרים.',
        check: function(planner) {
            let pts = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.types.includes('mat_elective') && c.location.startsWith('semester-') && !c.excludeFromDegree) pts += c.points;
            });
            return pts >= 15;
        }
    },
    {
        id: 'double_trouble_project',
        icon: '🚀',
        title: 'פרויקטור כפול (Double Project)',
        description: 'סיימת גם פרויקט מתקדם וגם פרויקט בחירה בהנדסת חומרים.',
        check: function(planner) {
            const proj1 = planner.courses.find(c => c.id === '315014' && c.isCompleted() && c.location.startsWith('semester-'));
            const proj2 = planner.courses.find(c => c.id === '03150035' && c.isCompleted() && c.location.startsWith('semester-')); // Changed ID to match shared electives
            return proj1 && proj2;
        }
    },
    {
        id: 'polymer_engineer',
        icon: '🧪',
        title: 'מהנדס פולימרים',
        description: 'השלמת לפחות שני קורסים הקשורים בפולימרים.',
        check: function(planner) {
            let count = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.hebrewName.includes('פולימר') && c.location.startsWith('semester-') && !c.excludeFromDegree) count++;
            });
            return count >= 2;
        }
    },
    {
        id: 'metal_worker',
        icon: '⚙️',
        title: 'איש הברזל (Metal Worker)',
        description: 'השלמת לפחות שני קורסים הקשורים בחומרים מתכתיים או מטלורגיה.',
        check: function(planner) {
            let count = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && (c.hebrewName.includes('מתכת') || c.hebrewName.includes('מטלורג')) && c.location.startsWith('semester-') && !c.excludeFromDegree) count++;
            });
            return count >= 2;
        }
    },
    {
        id: 'ceramic_guru',
        icon: '🏺',
        title: 'גורו קרמיקה (Ceramics Guru)',
        description: 'השלמת לפחות שני קורסים הקשורים בחומרים קרמיים.',
        check: function(planner) {
            let count = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.hebrewName.includes('קרמי') && c.location.startsWith('semester-') && !c.excludeFromDegree) count++;
            });
            return count >= 2;
        }
    },

    // ==========================================
    // SPECIFIC TRACK: MATERIALS & PHYSICS
    // ==========================================
    {
        id: 'quantum_entanglement',
        tracks: ['materials_physics'],
        icon: '🌌',
        title: 'שזירה קוונטית (Quantum Entanglement)',
        description: 'השלמת בהצלחה גם את פיזיקה קוונטית 1 וגם את קוונטית 2.',
        check: function(planner) {
            const q1 = planner.courses.find(c => c.id === '115203' && c.isCompleted() && c.location.startsWith('semester-') && !c.excludeFromDegree);
            const q2 = planner.courses.find(c => c.id === '115204' && c.isCompleted() && c.location.startsWith('semester-') && !c.excludeFromDegree);
            return q1 && q2;
        }
    },
    {
        id: 'schrodinger_cat',
        tracks: ['materials_physics'],
        icon: '🐈‍⬛',
        title: 'חי או מת? (Schrodinger Cat)',
        description: 'השלמת קורס בחירה שקשור לקוונטים (מעבר לקורסי החובה). האם באמת הבנת אותו?',
        check: function(planner) {
            return planner.courses.some(c => 
                c.isCompleted() && 
                c.types.includes('phys_elective') &&
                c.location.startsWith('semester-') && 
                (c.hebrewName.includes('קוונט') || c.hebrewName.includes('קוואנט')) &&
                !c.excludeFromDegree
            );
        }
    },
    {
        id: 'binary_system',
        tracks: ['materials_physics'],
        icon: '⭐',
        title: 'מערכת בינארית (Binary System)',
        description: 'השלמת בהצלחה שני קורסי כוכבית (*) של פיזיקה.',
        check: function(planner) {
            let count = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.types.includes('phys_star') && c.location.startsWith('semester-') && !c.excludeFromDegree) count++;
            });
            return count >= 2;
        }
    },
    {
        id: 'lord_of_the_labs',
        tracks: ['materials_physics'],
        icon: '⚡',
        title: 'שר המעבדות (Lord of the Labs)',
        description: 'השלמת 4 מעבדות בפיזיקה במהלך התואר.',
        check: function(planner) {
            let count = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.hebrewName.includes('מעבדה') && c.hebrewName.includes('פיזיקה') && c.location.startsWith('semester-') && !c.excludeFromDegree) count++;
            });
            return count >= 4;
        }
    },
    {
        id: 'seventh_dimension',
        tracks: ['materials_physics'],
        icon: '🎲',
        title: 'המימד השביעי (The 7th Dimension)',
        description: 'השלמת בדיוק 7 קורסי בחירה של פיזיקה.',
        check: function(planner) {
            let count = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.types.includes('phys_elective') && c.location.startsWith('semester-') && !c.excludeFromDegree) count++;
            });
            return count === 7;
        }
    },

    // ==========================================
    // SPECIFIC TRACK: MATERIALS & CHEMISTRY
    // ==========================================
    {
        id: 'breaking_bad',
        tracks: ['materials_chemistry'],
        icon: '⚗️',
        title: 'שובר שורות (Breaking Bad)',
        description: 'הוצאת מעל 90 גם בקורס כימיה אורגנית 1 וגם בכימיה אורגנית 2.',
        check: function(planner) {
            const org1 = planner.courses.find(c => c.isCompleted() && c.hebrewName.includes('אורגנית 1') && c.getNumericGrade() !== null && c.getNumericGrade() > 90 && c.location.startsWith('semester-') && !c.excludeFromDegree);
            const org2 = planner.courses.find(c => c.isCompleted() && c.hebrewName.includes('אורגנית 2') && c.getNumericGrade() !== null && c.getNumericGrade() > 90 && c.location.startsWith('semester-') && !c.excludeFromDegree);
            return org1 && org2;
        }
    },
    {
        id: 'analytical_master',
        tracks: ['materials_chemistry'],
        icon: '🔍',
        title: 'אנליטיקן (Analytical Master)',
        description: 'השלמת לפחות שני קורסים או מעבדות בכימיה אנליטית.',
        check: function(planner) {
            let count = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.hebrewName.includes('אנליטית') && c.location.startsWith('semester-') && !c.excludeFromDegree) count++;
            });
            return count >= 2;
        }
    },
    {
        id: 'physical_chemist',
        tracks: ['materials_chemistry'],
        icon: '🌡️',
        title: 'כימאי פיזיקלי (Physical Chemist)',
        description: 'השלמת לפחות שלושה קורסים בכימיה פיסיקלית.',
        check: function(planner) {
            let count = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.hebrewName.includes('פיסיקלית') && c.location.startsWith('semester-') && !c.excludeFromDegree) count++;
            });
            return count >= 3;
        }
    },
    {
        id: 'quantum_chemist',
        tracks: ['materials_chemistry'],
        icon: '⚛️',
        title: 'כימאי קוונטי (Quantum Chemist)',
        description: 'השלמת את כימיה קוונטית 1 עם ציון של 85 ומעלה.',
        check: function(planner) {
            return planner.courses.some(c => 
                c.id === '124400' && 
                c.isCompleted() && 
                c.getNumericGrade() !== null && c.getNumericGrade() >= 85 && 
                c.location.startsWith('semester-') &&
                !c.excludeFromDegree
            );
        }
    },
    {
        id: 'the_alchemist',
        tracks: ['materials_chemistry'],
        icon: '🧙‍♂️',
        title: 'האלכימאי (The Alchemist)',
        description: 'השלמת 4 או יותר מעבדות בכימיה.',
        check: function(planner) {
            let count = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.hebrewName.includes('מעבדה') && c.hebrewName.includes('כימיה') && c.location.startsWith('semester-') && !c.excludeFromDegree) count++;
            });
            return count >= 4;
        }
    },

    // ==========================================
    // SPECIFIC TRACK: MATERIALS & BIOLOGY
    // ==========================================
    {
        id: 'the_biologist',
        tracks: ['materials_biology'],
        icon: '🧬',
        title: 'הביולוג (The Biologist)',
        description: 'השלמת לפחות 2 קורסים מרשימת הבחירה של ביולוגיה (רשימה ב\'1).',
        check: function(planner) {
            let bioCount = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.types.includes('list_b1') && c.location.startsWith('semester-') && !c.excludeFromDegree) bioCount++;
            });
            return bioCount >= 2;
        }
    },
    {
        id: 'geneticist',
        tracks: ['materials_biology'],
        icon: '🔗',
        title: 'גנטיקאי (Geneticist)',
        description: 'השלמת בהצלחה את הקורסים בגנטיקה ובביולוגיה מולקולרית.',
        check: function(planner) {
            const gen = planner.courses.find(c => c.id === '134020' && c.isCompleted() && c.location.startsWith('semester-') && !c.excludeFromDegree);
            const mol = planner.courses.find(c => c.id === '134082' && c.isCompleted() && c.location.startsWith('semester-') && !c.excludeFromDegree);
            return gen && mol;
        }
    },
    {
        id: 'cell_explorer',
        tracks: ['materials_biology'],
        icon: '🦠',
        title: 'חוקר התא (Cell Explorer)',
        description: 'השלמת את הקורסים בביולוגיה של התא ובמיקרוביולוגיה.',
        check: function(planner) {
            const cell = planner.courses.find(c => c.id === '134128' && c.isCompleted() && c.location.startsWith('semester-') && !c.excludeFromDegree);
            const micro = planner.courses.find(c => c.id === '134121' && c.isCompleted() && c.location.startsWith('semester-') && !c.excludeFromDegree);
            return cell && micro;
        }
    },
    {
        id: 'biomedical_expert',
        tracks: ['materials_biology'],
        icon: '🫀',
        title: 'מומחה ביו-רפואי',
        description: 'השלמת לפחות חמישה קורסים מתקדמים שקשורים בביו-חומרים או ביו-רפואה (קורסים שמכילים "ביו" בשמם).',
        check: function(planner) {
            let count = 0;
            planner.courses.forEach(c => {
                if (c.isCompleted() && c.hebrewName.includes('ביו') && c.location.startsWith('semester-') && !c.excludeFromDegree) count++;
            });
            return count >= 5;
        }
    },
    {
        id: 'metabolic_master',
        tracks: ['materials_biology'],
        icon: '⚡',
        title: 'מאסטר מטבולי',
        description: 'סיימת את הקורס מסלולים מטבוליים עם ציון של 90 ומעלה.',
        check: function(planner) {
            return planner.courses.some(c => 
                c.id === '134113' && 
                c.isCompleted() && 
                c.getNumericGrade() !== null && c.getNumericGrade() >= 90 && 
                c.location.startsWith('semester-') &&
                !c.excludeFromDegree
            );
        }
    }
];