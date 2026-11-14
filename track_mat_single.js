// File: track_mat_single.js
// Track: Materials Engineering (Single Major)
// Data Source: Syllabus 2022/2023

window.AppTracks = window.AppTracks || {};

window.AppTracks['materials_single'] = {
    id: "materials_single",
    name: "הנדסת חומרים (חד חוגי)",
    semestersCount: 8,
    targets: {
        total: 160.0,
        mandatory: 124.0, 
        matMin: 24.0,     
        gen: 12.0         
    },
    courseTypes: {
        "mandatory": { label: "חובה", bgColor: "#ffebee", borderColor: "#e57373" },
        "mat_elective": { label: "בחירה פקולטית - חומרים", bgColor: "#e3f2fd", borderColor: "#64b5f6" },
        "malag": { label: "מל\"ג", bgColor: "#fff9c4", borderColor: "#fbc02d" },
        "general_elective": { label: "בחירה חופשית", bgColor: "#fff3e0", borderColor: "#ffb74d" },
        "sport": { label: "ספורט", bgColor: "#f3e5f5", borderColor: "#ba68c8" }
    },
    stats: [
        { id: 'mat', label: 'בחירת חומרים', types: ['mat_elective'], target: 24.0, cssClass: 'stat-mat', color: '#1976d2', borderColor: '#64b5f6' },
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
        { id: "104019", name: "Linear Algebra M", hebrewName: "אלגברה לינארית מ'", points: 4.5, type: ["mandatory"], sem: 1 },
        { id: "104041", name: "Calculus 1 M", hebrewName: "חדו\"א 1 מ'", points: 5.0, type: ["mandatory"], sem: 1 },
        { id: "114051", name: "Physics 1", hebrewName: "פיזיקה 1", points: 2.5, type: ["mandatory"], sem: 1 },
        { id: "124117", name: "Principles of Chemistry A", hebrewName: "יסודות הכימיה א'", points: 3.0, type: ["mandatory"], sem: 1 },
        { id: "234128", name: "Intro to CS Python", hebrewName: "מבוא למחשב שפת פייתון", points: 4.0, type: ["mandatory"], sem: 1 },
        { id: "324033", name: "Technical English B", hebrewName: "אנגלית טכנית מתקדמים ב'", points: 3.0, type: ["mandatory"], sem: 1 },
        { id: "104043", name: "Calculus 2 M", hebrewName: "חדו\"א 2 מ'", points: 5.0, type: ["mandatory"], sem: 2 },
        { id: "124118", name: "Principles of Chemistry B", hebrewName: "יסודות כימיה ב'", points: 3.0, type: ["mandatory"], sem: 2 },
        { id: "104131", name: "ODEs H", hebrewName: "משוואות דיפרנציאליות רגילות ח'", points: 2.5, type: ["mandatory"], sem: 2 },
        { id: "114052", name: "Physics 2", hebrewName: "פיזיקה 2", points: 3.5, type: ["mandatory"], sem: 2 },
        { id: "314011", name: "Structure & Properties", hebrewName: "מבנה ותכונות חומרים הנדסיים", points: 4.0, type: ["mandatory"], sem: 2 },
        { id: "114081", name: "Physics Lab 1", hebrewName: "מעבדה לפיזיקה 1", points: 1.5, type: ["mandatory"], sem: 2 },
        { id: "104228", name: "PDEs M", hebrewName: "משוואות דיפרנציאליות חלקיות מ'", points: 3.0, type: ["mandatory"], sem: 3 },
        { id: "124400", name: "Quantum Chemistry 1", hebrewName: "כימיה קוונטית 1", points: 5.0, type: ["mandatory"], sem: 3 },
        { id: "314003", name: "Mechanics of Solids", hebrewName: "מבוא למכניקת המוצקים", points: 2.5, type: ["mandatory"], sem: 3 },
        { id: "314009", name: "Materials Lab H", hebrewName: "מעבדה בחומרים הנדסיים ח'", points: 1.5, type: ["mandatory"], sem: 3 },
        { id: "94481", name: "Probability & Statistics", hebrewName: "מבוא להסתברות וסטטיסטיקה", points: 4.0, type: ["mandatory"], sem: 3 },
        { id: "124413", name: "Stat Thermodynamics", hebrewName: "תרמודינמיקה סטטיסטית", points: 2.5, type: ["mandatory"], sem: 4 },
        { id: "124414", name: "Chemical Kinetics", hebrewName: "כימיה פיסיקלית- קינטיקה כימית", points: 2.5, type: ["mandatory"], sem: 4 },
        { id: "124801", name: "Organic Chemistry 1B", hebrewName: "כימיה אורגנית 1 ב' (2)", points: 2.5, type: ["mandatory"], sem: 4 },
        { id: "315003", name: "Mat Thermodynamics", hebrewName: "תרמודינמיקה של חומרים", points: 4.0, type: ["mandatory"], sem: 4 },
        { id: "315051", name: "Diffusion", hebrewName: "דיפוזיה במוצקים", points: 2.5, type: ["mandatory"], sem: 4 },
        { id: "315008", name: "Mech Behavior", hebrewName: "התנהגות מכנית של חומרים", points: 3.5, type: ["mandatory"], sem: 4 },
        { id: "127427", name: "Solid State Ex", hebrewName: "מצב מוצק מורחב", points: 3.5, type: ["mandatory"], sem: 5 },
        { id: "314006", name: "Characterization", hebrewName: "אפיון מבנה והרכב חומרים", points: 4.0, type: ["mandatory"], sem: 5 },
        { id: "315052", name: "Kinetics Trans", hebrewName: "קינטיקת טרנספורמציות בחומרים", points: 2.5, type: ["mandatory"], sem: 5 },
        { id: "314532", name: "Corrosion", hebrewName: "אלקטרוכימיה, קורוזיה ושיטות הגנה", points: 2.5, type: ["mandatory"], sem: 5 },
        { id: "315037", name: "Metallic Materials", hebrewName: "תכונות ושימושים של חומרים מתכתיים", points: 2.5, type: ["mandatory"], sem: 5 },
        { id: "315058", name: "Comp Methods", hebrewName: "שיטות לניתוח חומרים באמצעות מחשב", points: 2.0, type: ["mandatory"], sem: 5 },
        { id: "314311", name: "Ceramics", hebrewName: "חומרים קרמיים ורפרקטוריים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "314312", name: "Polymers", hebrewName: "מבוא לחומרים פולימריים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "315030", name: "Electronic Props", hebrewName: "תכונות חומרים אלקטרוניים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "315039", name: "Transport", hebrewName: "מעבר תנע חום ומסה", points: 4.0, type: ["mandatory"], sem: 6 },
        { id: "314016", name: "Computer Graphics", hebrewName: "גרפיקה ממוחשבת", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "315242", name: "Composites", hebrewName: "חומרים מרוכבים", points: 2.5, type: ["mandatory"], sem: 7 },
        { id: "315059", name: "Functional Mat", hebrewName: "חומרים פונקציונליים-תכונות והתקנים", points: 2.5, type: ["mandatory"], sem: 7 },
        { id: "314309", name: "Proc & Mfg", hebrewName: "תהליכי ייצור ועיבוד חומרים", points: 2.5, type: ["mandatory"], sem: 7 },
        { id: "315001", name: "Adv Lab 1", hebrewName: "מעבדת חומרים מתקדמת 1ח'", points: 2.0, type: ["mandatory"], sem: 7 },
        { id: "315002", name: "Adv Lab 2", hebrewName: "מעבדת חומרים מתקדמת 2 ח'", points: 2.0, type: ["mandatory"], sem: 8 },
        { id: "315012", name: "Selection", hebrewName: "בחירת חומרים מתקדמת", points: 2.5, type: ["mandatory"], sem: 8 },
        { id: "315014", name: "Final Project", hebrewName: "פרויקט מתקדם בחומרים", points: 4.0, type: ["mandatory"], sem: 8 }
    ],
    // מערך קורסי הבחירה ריק, הכל נשאב מהקבצים המשותפים!
    electiveCourses: []
};