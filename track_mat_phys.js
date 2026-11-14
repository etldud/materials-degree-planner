// File: track_mat_phys.js
// Track: Materials Engineering and Physics (Combined)
// Data Source: User's customized syllabus and preferences

window.AppTracks = window.AppTracks || {};

window.AppTracks['materials_physics'] = {
    id: "materials_physics",
    name: "הנדסת חומרים ופיזיקה (משולב)",
    semestersCount: 9,
    targets: {
        // Total points updated after removing English A
        total: 179.5, 
        // Mandatory points updated to exactly 142.5
        mandatory: 142.5, 
        fac: 25.0
    },
    courseTypes: {
        "mandatory": { label: "חובה", bgColor: "#ffebee", borderColor: "#e57373" },
        "mat_elective": { label: "בחירה פקולטית - חומרים", bgColor: "#e3f2fd", borderColor: "#64b5f6" },
        "phys_elective": { label: "בחירה פקולטית - פיזיקה", bgColor: "#f3e5f5", borderColor: "#9c27b0" },
        "phys_star": { label: "בחירה פיזיקה - כוכבית (*)", bgColor: "#e1bee7", borderColor: "#8e24aa" }, 
        "malag": { label: "מל\"ג", bgColor: "#fff9c4", borderColor: "#fbc02d" },
        "general_elective": { label: "בחירה חופשית", bgColor: "#fff3e0", borderColor: "#ffb74d" },
        "sport": { label: "ספורט", bgColor: "#f3e5f5", borderColor: "#ba68c8" }
    },
    stats: [
        { id: 'fac', label: 'בחירה פקולטית', types: ['mat_elective', 'phys_elective', 'phys_star'], target: 25.0, cssClass: 'stat-fac', color: '#7b1fa2', borderColor: '#9c27b0' },
        { id: 'phys_star', label: 'כוכבית פיזיקה (*)', types: ['phys_star'], target: 2, countBy: 'courses', cssClass: 'stat-phys-star', color: '#8e24aa', borderColor: '#7b1fa2' },
        {
            isSplit: true,
            cssClass: 'stat-split-box',
            parts: [
                { id: 'gen_sport', label: 'ספורט', types: ['sport'], target: 2.0, countBy: 'points', color: '#ba68c8', borderColor: '#ab47bc' },
                { id: 'gen_malag', label: 'מל"ג', types: ['malag'], target: 6.0, countBy: 'points', color: '#fbc02d', borderColor: '#f9a825' },
                { id: 'gen_free', label: 'בחירה חופשית', types: ['general_elective'], target: 4.0, countBy: 'points', color: '#f57c00', borderColor: '#ffb74d' }
            ]
        }
    ],
    mandatoryCourses: [
        // Semester 1
        { id: "104064", name: "Algebra 1", hebrewName: "אלגברה 1", points: 5.0, type: ["mandatory"], sem: 1 }, 
        { id: "104012", name: "Calculus 1 T", hebrewName: "חדו\"א 1 ת'", points: 5.0, type: ["mandatory"], sem: 1 },
        { id: "114074", name: "Physics 1 P", hebrewName: "פיזיקה 1 פ'", points: 5.0, type: ["mandatory"], sem: 1 },
        { id: "125001", name: "General Chemistry", hebrewName: "כימיה כללית", points: 3.0, type: ["mandatory"], sem: 1 },
        { id: "234128", name: "Python", hebrewName: "פייתון", points: 4.0, type: ["mandatory"], sem: 1 },
        { id: "044102", name: "Elec Lab Safety", hebrewName: "בטיחות בחשמל", points: 0.0, type: ["mandatory"], sem: 1 },
        
        // Semester 2
        { id: "104013", name: "Calculus 2 T", hebrewName: "חדו\"א 2 ת'", points: 5.5, type: ["mandatory"], sem: 2 },
        { id: "104038", name: "Algebra 2", hebrewName: "אלגברה 2", points: 2.5, type: ["mandatory"], sem: 2 },
        { id: "104136", name: "ODEs", hebrewName: "מד\"ר", points: 4.0, type: ["mandatory"], sem: 2 },
        { id: "114020", name: "Physics Lab 1", hebrewName: "מעבדה לפיזיקה 1", points: 1.5, type: ["mandatory"], sem: 2 },
        { id: "114076", name: "Physics 2 P", hebrewName: "פיזיקה 2 פ'", points: 5.0, type: ["mandatory"], sem: 2 },
        { id: "314011", name: "Structure & Properties", hebrewName: "מבנה ותכונות", points: 4.0, type: ["mandatory"], sem: 2 },
        
        // Semester 3
        { id: "114021", name: "Physics Lab 2 M", hebrewName: "מעבדה לפיזיקה 2 מ'", points: 1.5, type: ["mandatory"], sem: 3 },
        { id: "104034", name: "Probability", hebrewName: "הסתברות", points: 3.5, type: ["mandatory"], sem: 3 },
        { id: "104214", name: "Fourier & Integral Trans", hebrewName: "פורייה והתמרות", points: 2.5, type: ["mandatory"], sem: 3 },
        { id: "104220", name: "PDEs", hebrewName: "מד\"ח", points: 2.5, type: ["mandatory"], sem: 3 },
        { id: "104215", name: "Complex Functions", hebrewName: "מרוכבות", points: 2.5, type: ["mandatory"], sem: 3 },
        { id: "114086", name: "Waves", hebrewName: "גלים", points: 3.5, type: ["mandatory"], sem: 3 },
        { id: "114101", name: "Analytical Mechanics", hebrewName: "מכניקה אנליטית", points: 4.0, type: ["mandatory"], sem: 3 },
        { id: "314009", name: "Materials Lab", hebrewName: "מעבדה בחומרים", points: 1.5, type: ["mandatory"], sem: 3 },
        { id: "324033", name: "Technical English B", hebrewName: "אנגלית טכנית מתקדמים ב'", points: 3.0, type: ["mandatory"], sem: 3 },
        
        // Semester 4
        { id: "115203", name: "Quantum Physics 1", hebrewName: "קוונטית 1", points: 5.0, type: ["mandatory"], sem: 4 },
        { id: "114035", name: "Physics Lab 3", hebrewName: "מעבדה לפיזיקה 3", points: 1.5, type: ["mandatory"], sem: 4 },
        { id: "114036", name: "Stat & Thermal Physics", hebrewName: "סטתרמית", points: 5.0, type: ["mandatory"], sem: 4 },
        { id: "124414", name: "Kinetics", hebrewName: "כימיה קינטית", points: 2.5, type: ["mandatory"], sem: 4 },
        { id: "124801", name: "Organic Chemistry 1B", hebrewName: "כימיה אורגנית 1ב'", points: 2.5, type: ["mandatory"], sem: 4 },
        { id: "315003", name: "Mat Thermodynamics", hebrewName: "תרמודינמיקה של חומרים", points: 4.0, type: ["mandatory"], sem: 4 },
        { id: "315051", name: "Diffusion", hebrewName: "דיפוזיה", points: 2.5, type: ["mandatory"], sem: 4 },
        
        // Semester 5
        { id: "116217", name: "Solid State Physics", hebrewName: "פיזיקת מצב מוצק", points: 3.5, type: ["mandatory"], sem: 5 },
        { id: "115204", name: "Quantum Physics 2", hebrewName: "קוונטית 2", points: 5.0, type: ["mandatory"], sem: 5 },
        { id: "314003", name: "Solid Mechanics", hebrewName: "מכניקת המוצקים", points: 2.5, type: ["mandatory"], sem: 5 },
        { id: "314006", name: "Characterization", hebrewName: "אפיון מבנה והרכב", points: 4.0, type: ["mandatory"], sem: 5 },
        { id: "315052", name: "Kinetics Trans", hebrewName: "קינטיקת טרנספורמציות", points: 2.5, type: ["mandatory"], sem: 5 },
        
        // Semester 6
        { id: "114246", name: "Electromagnetism", hebrewName: "אלקטרומגנטיות", points: 5.0, type: ["mandatory"], sem: 6 },
        { id: "314311", name: "Ceramics", hebrewName: "חומרים קרמיים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "314312", name: "Polymers", hebrewName: "פולימרים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "315008", name: "Mech Behavior", hebrewName: "התנהגות מכנית", points: 3.5, type: ["mandatory"], sem: 6 },
        { id: "315030", name: "Electronic Props", hebrewName: "תכונות חומרים אלקטרוניים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "315039", name: "Transport", hebrewName: "מעבר תנע חום ומסה", points: 4.0, type: ["mandatory"], sem: 6 },
        
        // Semester 7
        { id: "314532", name: "Corrosion", hebrewName: "קורוזיה", points: 2.5, type: ["mandatory"], sem: 7 },
        { id: "315037", name: "Metallic Materials", hebrewName: "חומרים מתכתיים", points: 2.5, type: ["mandatory"], sem: 7 },
        { id: "315001", name: "Adv Lab 1", hebrewName: "מעבדה מתקדמת 1 ח'", points: 2.0, type: ["mandatory"], sem: 7 },
        
        // Semester 8
        { id: "315002", name: "Adv Lab 2", hebrewName: "מעבדה מתקדמת 2 ח'", points: 2.0, type: ["mandatory"], sem: 8 },
        
        // Semester 9
        { id: "315014", name: "Final Project", hebrewName: "פרויקט חומרים", points: 4.0, type: ["mandatory"], sem: 9 }
    ],
    
    // The physics elective courses remain intact here, general electives are loaded from the shared file
    electiveCourses: [
        // Physics star courses (Dual identity)
        { id: "114210", name: "Optics", hebrewName: "אופטיקה (*)", points: 3.5, type: ["phys_star", "phys_elective"], sem: 0 },
        { id: "116029", name: "Intro to Biophysics", hebrewName: "מבוא לביופיזיקה (*)", points: 3.5, type: ["phys_star", "phys_elective"], sem: 0 },
        { id: "116004", name: "Nuclear Physics", hebrewName: "פיזיקה של גרעינים וחלקיקים (*)", points: 3.5, type: ["phys_star", "phys_elective"], sem: 0 },
        { id: "116354", name: "Astrophysics", hebrewName: "אסטרופיזיקה וקוסמולוגיה (*)", points: 3.5, type: ["phys_star", "phys_elective"], sem: 0 },
        
        // Physics electives
        { id: "116027", name: "Continuum Theory", hebrewName: "תורת הרצף", points: 3.5, type: ["phys_elective"], sem: 0 },
        { id: "114226", name: "Research Report Autumn", hebrewName: "דו\"ח סגל מחקר סתיו", points: 1.0, type: ["phys_elective"], sem: 0 },
        { id: "114227", name: "Research Report Spring", hebrewName: "דו\"ח סגל מחקר אביב", points: 1.0, type: ["phys_elective"], sem: 0 },
        { id: "116028", name: "Physics Seminar Winter", hebrewName: "סמינר בפיזיקה-חורף", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "116030", name: "Physics Seminar Spring", hebrewName: "סמינר בפיזיקה-אביב", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "116041", name: "Laser Physics & Quantum Optics", hebrewName: "לייזרים ואופטיקה קוונטית", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "117010", name: "Solid State Exp Methods 1", hebrewName: "שיטות ניסיוניות במצב מוצק 1", points: 3.5, type: ["phys_elective"], sem: 0 },
        { id: "116105", name: "Stat & Numerical Methods", hebrewName: "שיטות סטטיסטיות ונומריות בפיזיקה", points: 2.5, type: ["phys_elective"], sem: 0 },
        { id: "117015", name: "Atomic Physics", hebrewName: "פיזיקה של אטומים", points: 3.5, type: ["phys_elective"], sem: 0 },
        { id: "117016", name: "Plasma Physics", hebrewName: "פיסיקת הפלסמה", points: 2.5, type: ["phys_elective"], sem: 0 },
        { id: "117018", name: "Semiconductor Physics", hebrewName: "מוליכים למחצה", points: 2.5, type: ["phys_elective"], sem: 0 },
        { id: "117021", name: "Superconductivity", hebrewName: "על מוליכות", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "117066", name: "Adv Optics", hebrewName: "אופטיקה מתקדמת", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "117090", name: "Observational Astro", hebrewName: "אסטרופיזיקה תצפיתית", points: 2.5, type: ["phys_elective"], sem: 0 },
        { id: "117098", name: "Hamiltonian Chaos", hebrewName: "כאוס המילטוני", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "117140", name: "Group Theory", hebrewName: "תורת החבורות בפיזיקה", points: 3.5, type: ["phys_elective"], sem: 0 },
        { id: "114250", name: "Physics Lab 5 T", hebrewName: "מעבדה לפיזיקה 5 ת'", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "116033", name: "Nuclear Astro Processes", hebrewName: "תהליכים גרעיניים", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "114027", name: "Physics Lab 5", hebrewName: "מעבדה לפיזיקה 5", points: 4.5, type: ["phys_elective"], sem: 0 },
        { id: "116161", name: "Theoretical Physics 1", hebrewName: "פיזיקה תיאורטית 1", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "116163", name: "Exp Physics Topics 1", hebrewName: "פיזיקה ניסויית 1", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "116321", name: "Cell Biophysics", hebrewName: "ביופיזיקה של התא", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "117001", name: "Intro to String Theory", hebrewName: "תורת המיתרים", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "117002", name: "Nonlinearity and Chaos", hebrewName: "אי לינאריות וכאוס", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "117003", name: "Physics of Water", hebrewName: "פיזיקה של מים", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "117004", name: "Exp Methods in Correlated Electrons", hebrewName: "שיטות ניסיוניות באלקטרונים", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "117006", name: "Mesoscopic Physics", hebrewName: "פיזיקה מזוסקופית", points: 3.5, type: ["phys_elective"], sem: 0 },
        { id: "114037", name: "Physics Lab M", hebrewName: "מעבדה לפיזיקה מ\"ח", points: 1.5, type: ["phys_elective"], sem: 0 },
        { id: "114102", name: "Spacetime & Black Holes", hebrewName: "חורים שחורים", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "116003", name: "Laser Physics", hebrewName: "פיזיקה של לייזרים", points: 3.5, type: ["phys_elective"], sem: 0 },
        { id: "116356", name: "Quantum Tech Lab", hebrewName: "מעבדה בטכנולוגיות קוונטיות", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "116355", name: "Quantum Comp Lab", hebrewName: "מעבדה בחישוב קוונטי", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "214301", name: "Physics Teaching Methods", hebrewName: "דרכי הוראת הפיזיקה 1", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "116034", name: "Macroscopic Quantum Systems", hebrewName: "מערכות קוונטיות מקרוסקופיות", points: 3.0, type: ["phys_elective"], sem: 0 },
        { id: "116110", name: "Atmospheric Physics", hebrewName: "פיסיקה של האטמוספרה", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "116035", name: "Quantum Theory of Matter 1", hebrewName: "תורת הקוונטים של החומר 1", points: 3.5, type: ["phys_elective"], sem: 0 },
        { id: "116036", name: "Quantum Structures in Semiconductors", hebrewName: "מבנים קוונטים", points: 2.5, type: ["phys_elective"], sem: 0 },
        { id: "116037", name: "Noisy Quantum Computing", hebrewName: "מחשוב קוונטי רועש", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "116039", name: "Cold Atoms and Molecules Physics", hebrewName: "אטומים ומולקולות קרים", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "116040", name: "Adv Quantum Information", hebrewName: "אינפורמציה קוונטית מתקדמת", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "116081", name: "Quantum Technologies", hebrewName: "טכנולוגיות קוונטיות", points: 2.0, type: ["phys_elective"], sem: 0 },
        { id: "116094", name: "Computational Physics", hebrewName: "פיסיקה חישובית", points: 2.0, type: ["phys_elective"], sem: 0 }
    ]
};