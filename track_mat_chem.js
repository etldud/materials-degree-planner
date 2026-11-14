// File: track_mat_chem.js
// Track Data: Materials Engineering and Chemistry (Dual Degree)
// Updated Syllabus & Electives with Dual Tags

window.AppTracks = window.AppTracks || {};

window.AppTracks['materials_chemistry'] = {
    id: 'materials_chemistry',
    name: 'הנדסת חומרים וכימיה (משולב)',
    semestersCount: 9,
    targets: {
        total: 179.5,
        mandatory: 141.0 
    },
    courseTypes: {
        "mandatory": { label: "חובה", bgColor: "#ffebee", borderColor: "#e57373" },
        "mat_elective": { label: "בחירה פקולטית - חומרים", bgColor: "#e3f2fd", borderColor: "#64b5f6" },
        "chem_elective": { label: "בחירה פקולטית - כימיה", bgColor: "#e8f5e9", borderColor: "#81c784" },
        "chem_star": { label: "בחירה כימיה - כוכבית (*)", bgColor: "#c8e6c9", borderColor: "#4caf50" }, 
        "chem_lab": { label: "בחירה כימיה - מעבדת חובה", bgColor: "#b2dfdb", borderColor: "#009688" }, 
        "malag": { label: "מל\"ג", bgColor: "#fff9c4", borderColor: "#fbc02d" },
        "general_elective": { label: "בחירה חופשית", bgColor: "#fff3e0", borderColor: "#ffb74d" },
        "sport": { label: "ספורט", bgColor: "#f3e5f5", borderColor: "#ba68c8" }
    },
    stats: [
        { id: 'mat', label: 'חומרים (מינימום)', types: ['mat_elective'], target: 11.5, cssClass: 'stat-mat', color: '#1976d2', borderColor: '#64b5f6' },
        { id: 'chem', label: 'כימיה (מינימום)', types: ['chem_elective', 'chem_star', 'chem_lab'], target: 11.5, cssClass: 'stat-chem', color: '#388e3c', borderColor: '#81c784' },
        {
            isSplit: true,
            cssClass: 'stat-split-box',
            parts: [
                { id: 'chem_star', label: 'כוכבית (*)', types: ['chem_star'], target: 2, countBy: 'courses', color: '#4caf50', borderColor: '#81c784' },
                { id: 'chem_lab', label: 'מעבדה', types: ['chem_lab'], target: 1, countBy: 'courses', color: '#009688', borderColor: '#4db6ac' }
            ]
        },
        { id: 'fac', label: 'סה״כ פקולטית', types: ['mat_elective', 'chem_elective', 'chem_star', 'chem_lab'], target: 26.5, cssClass: 'stat-fac', color: '#7b1fa2', borderColor: '#9c27b0' },
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
        { id: "104019", name: "Linear Algebra M", hebrewName: "אלגברה לינארית מ' (1)", points: 4.5, type: ["mandatory"], sem: 1 },
        { id: "104041", name: "Calculus 1 M", hebrewName: 'חדו"א 1 מ\'', points: 5.0, type: ["mandatory"], sem: 1 },
        { id: "114051", name: "Physics 1", hebrewName: "פיזיקה 1", points: 2.5, type: ["mandatory"], sem: 1 },
        { id: "124117", name: "Principles of Chemistry A", hebrewName: "יסודות הכימיה א", points: 3.0, type: ["mandatory"], sem: 1 },
        { id: "234128", name: "Intro to CS (Python)", hebrewName: "מבוא למחשב שפת פייתון", points: 4.0, type: ["mandatory"], sem: 1 },
        { id: "324033", name: "Technical English B", hebrewName: "אנגלית טכנית מתקדמים ב'", points: 3.0, type: ["mandatory"], sem: 1 },
        
        // Semester 2
        { id: "104043", name: "Calculus 2 M", hebrewName: 'חדו"א 2 מ\'', points: 5.0, type: ["mandatory"], sem: 2 },
        { id: "104131", name: "ODEs H", hebrewName: "משוואות דיפרנציאליות רגילות ח'", points: 2.5, type: ["mandatory"], sem: 2 },
        { id: "114052", name: "Physics 2", hebrewName: "פיזיקה 2", points: 3.5, type: ["mandatory"], sem: 2 },
        { id: "114081", name: "Physics Lab 1", hebrewName: "מעבדה לפיזיקה 1", points: 1.5, type: ["mandatory"], sem: 2 },
        { id: "124118", name: "Principles of Chemistry B", hebrewName: "יסודות כימיה ב'", points: 3.0, type: ["mandatory"], sem: 2 },
        { id: "124220", name: "Analytical Chemistry 1", hebrewName: "כימיה אנליטית 1 מ'", points: 3.0, type: ["mandatory"], sem: 2 },
        { id: "314011", name: "Structure & Properties", hebrewName: "מבנה ותכונות חומרים הנדסיים", points: 4.0, type: ["mandatory"], sem: 2 },
        
        // Semester 3
        { id: "94481", name: "Probability", hebrewName: "מבוא לסטטיסטיקה והסתברות", points: 4.0, type: ["mandatory"], sem: 3 },
        { id: "104228", name: "PDEs M", hebrewName: "משוואות דיפרנציאליות חלקיות מ'", points: 3.0, type: ["mandatory"], sem: 3 },
        { id: "124212", name: "Analytical Lab 1", hebrewName: "מעבדה כימיה אנליטית 1 מורחב", points: 2.0, type: ["mandatory"], sem: 3 },
        { id: "124708", name: "Organic Chemistry 1", hebrewName: "כימיה אורגנית 1מ'", points: 5.0, type: ["mandatory"], sem: 3 },
        { id: "124400", name: "Quantum Chemistry 1", hebrewName: "כימיה קוונטית 1", points: 5.0, type: ["mandatory"], sem: 3 },
        { id: "314009", name: "Materials Lab", hebrewName: "מעבדה בחומרים הנדסיים ח'", points: 1.5, type: ["mandatory"], sem: 3 },
        
        // Semester 4
        { id: "124413", name: "Stat Thermodynamics", hebrewName: "תרמודינמיקה סטטיסטית", points: 2.5, type: ["mandatory"], sem: 4 },
        { id: "124414", name: "Kinetics", hebrewName: "כימיה פיסיקלית- קינטיקה כימית", points: 2.5, type: ["mandatory"], sem: 4 },
        { id: "124711", name: "Organic Chemistry 2", hebrewName: "כימיה אורגנית 2", points: 4.0, type: ["mandatory"], sem: 4 },
        { id: "124911", name: "Organic Lab 1", hebrewName: "מעבדה כימיה אורגנית 1 מ'", points: 3.0, type: ["mandatory"], sem: 4 },
        { id: "315003", name: "Mat Thermodynamics", hebrewName: "תרמודינמיקה של חומרים", points: 4.0, type: ["mandatory"], sem: 4 },
        { id: "315051", name: "Diffusion", hebrewName: "דיפוזיה במוצקים", points: 2.5, type: ["mandatory"], sem: 4 },
        
        // Semester 5
        { id: "124305", name: "Inorganic Chemistry", hebrewName: "כימיה אי אורגנית", points: 2.5, type: ["mandatory"], sem: 5 },
        { id: "124416", name: "Electromag", hebrewName: "אלקטרומגנטיות וחומר", points: 2.5, type: ["mandatory"], sem: 5 },
        { id: "127427", name: "Solid State Ex", hebrewName: "מצב מוצק מורחב", points: 3.5, type: ["mandatory"], sem: 5 },
        { id: "314003", name: "Mechanics of Solids", hebrewName: "מבוא למכניקת המוצקים", points: 2.5, type: ["mandatory"], sem: 5 },
        { id: "314006", name: "Characterization", hebrewName: "אפיון מבנה והרכב חומרים", points: 4.0, type: ["mandatory"], sem: 5 },
        { id: "315052", name: "Kinetics Trans", hebrewName: "קינטיקת טרנספורמציות בחומרים", points: 2.5, type: ["mandatory"], sem: 5 },
        
        // Semester 6
        { id: "124213", name: "Analytical 2 Ex", hebrewName: "כימיה אנליטית 2 מורחב", points: 1.5, type: ["mandatory"], sem: 6 },
        { id: "124417", name: "Spectroscopy", hebrewName: "כימיה פיסיקלית- ספקטרוסקופיה מולקולרית", points: 3.5, type: ["mandatory"], sem: 6 },
        { id: "314311", name: "Ceramics", hebrewName: "חומרים קרמיים ורפרקטוריים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "314312", name: "Polymers", hebrewName: "מבוא לחומרים פולימריים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "315008", name: "Mech Behavior", hebrewName: "התנהגות מכנית של חומרים", points: 3.5, type: ["mandatory"], sem: 6 },
        { id: "315030", name: "Electronic Props", hebrewName: "תכונות חומרים אלקטרוניים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "315039", name: "Transport", hebrewName: "מעבר תנע חום ומסה", points: 4.0, type: ["mandatory"], sem: 6 },
        
        // Semester 7
        { id: "124618", name: "Phys Chem Lab", hebrewName: "מעבדה בכימיה פיסיקלית להנ.חומרים", points: 3.0, type: ["mandatory"], sem: 7 }, 
        { id: "134127", name: "Modern Biology Topics", hebrewName: "נושאים בביולוגיה מודרנית", points: 2.0, type: ["mandatory"], sem: 7 }, 
        { id: "314532", name: "Corrosion", hebrewName: "קורוזיה ושיטות הגנה", points: 2.5, type: ["mandatory"], sem: 7 },
        { id: "315001", name: "Adv Lab 1", hebrewName: "מעבדת חומרים מתקדמת 1 ח'", points: 2.0, type: ["mandatory"], sem: 7 },
        { id: "315037", name: "Metallic Materials", hebrewName: "תכונות ושימושים של חומרים מתכתיים", points: 2.5, type: ["mandatory"], sem: 7 },
        
        // Semester 8
        { id: "124214", name: "Analytical Lab 2", hebrewName: "מעבדה כימיה אנליטית 2 מורחב", points: 2.0, type: ["mandatory"], sem: 8 },
        { id: "315002", name: "Adv Lab 2", hebrewName: "מעבדת חומרים מתקדמת 2 ח'", points: 2.0, type: ["mandatory"], sem: 8 },
        
        // Semester 9
        { id: "315014", name: "Final Project", hebrewName: "פרויקט מתקדם בהנדסת חומרים", points: 4.0, type: ["mandatory"], sem: 9 }
    ],
    electiveCourses: [



        // --- קורסי כוכבית כימיה וקורסי מעבדות חובה (זהות כפולה) ---
        { id: '124210', name: 'BioInorganic', hebrewName: 'כימיה ביו אי אורגנית (*)', points: 2.5, type: ['chem_star', 'chem_elective'], sem: 0 },
        { id: '124353', name: 'Proj Chem', hebrewName: 'פרויקט מוגבר בכימיה (*)', points: 4.0, type: ['chem_star', 'chem_elective'], sem: 0 },
        { id: '124355', name: 'Res Proj', hebrewName: 'פרויקט מחקר מוגבר בכימיה (*)', points: 6.0, type: ['chem_star', 'chem_elective'], sem: 0 },
        { id: '1260601', name: 'Adv Phys Theo', hebrewName: 'כימיה פיסיקלית מתקדמת עיונית (*)', points: 2.0, type: ['chem_star', 'chem_elective'], sem: 0 },
        { id: '1260602', name: 'Adv Phys Exp', hebrewName: 'כימיה פיסיקלית מתקדמת ניסיונית (*)', points: 3.0, type: ['chem_star', 'chem_elective'], sem: 0 },
        { id: '1260700', name: 'Adv Org', hebrewName: 'כימיה אורגנית מתקדמת (*)', points: 3.0, type: ['chem_star', 'chem_elective'], sem: 0 },
        
        { id: '126302', name: 'Env Anal Lab', hebrewName: 'מעבדה כימיה אנליטית מתקדמת בניטור סביבתי (חובה)', points: 2.0, type: ['chem_lab', 'chem_elective'], sem: 0 },
        { id: '126303', name: 'Inorg Lab', hebrewName: 'מעבדה מתקדמת בכימיה אי אורגנית ואורגנו מתכתית (חובה)', points: 3.0, type: ['chem_lab', 'chem_elective'], sem: 0 },
        { id: '126600', name: 'Adv Phys Lab', hebrewName: 'מעבדה מתקדמת בכימיה פיסיקלית (חובה)', points: 3.0, type: ['chem_lab', 'chem_elective'], sem: 0 },
        { id: '1260901', name: 'Adv Org Lab', hebrewName: 'מעבדה כימיה אורגנית מתקדמת (חובה)', points: 3.0, type: ['chem_lab', 'chem_elective'], sem: 0 },
        { id: '1260902', name: 'Phys Org Lab', hebrewName: 'מעבדה כימיה אורגנית פיסיקלית מתקדמת (חובה)', points: 3.0, type: ['chem_lab', 'chem_elective'], sem: 0 },

        // --- קורסי בחירה פקולטית כימיה (מעודכן וממוזג עם ה-CSV) ---
        { id: '1260603', name: 'Comp App', hebrewName: 'כימיה חישובית יישומית', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1260605', name: 'Quantum Tech Lab Adv', hebrewName: 'מעבדה בטכנולוגיות קוונטיות מתקדמות', points: 4.0, type: ['chem_elective'], sem: 0 },
        { id: '1240912', name: 'Org Lab 2', hebrewName: 'מעבדה כימיה אורגנית 2', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1260200', name: 'Adv Inorganic', hebrewName: 'כימיה אי-אורגנית מתקדמת', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1260304', name: 'Struct Bio Topics', hebrewName: 'נושאים נבחרים בביולוגיה מבנית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '1260604', name: 'Quantum Tech Lab A', hebrewName: 'מעבדה בטכנולוגיות קוונטיות א\'', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1270002', name: 'Het Catalysis', hebrewName: 'קטליזה הטרוגנית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '1270009', name: 'Biomimetic Topics', hebrewName: 'נושאים נבחרים בכימיה ביומימטית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '1270010', name: 'Open Quantum Sys', hebrewName: 'מבוא למערכות קוונטיות פתוחות', points: 4.0, type: ['chem_elective'], sem: 0 },
        { id: '1270206', name: 'Laser Anal', hebrewName: 'כימיה אנליטית באמצעות לייזרים', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '1270208', name: 'Bio Anal', hebrewName: 'ביוכימיה אנליטית', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1270403', name: 'Surface Phys Chem', hebrewName: 'כימיה פיסיקלית של השטח', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1270425', name: 'Schrodinger', hebrewName: 'מאה גישות לפתרון משוואות שרדינגר', points: 3.5, type: ['chem_elective'], sem: 0 },
        { id: '1270433', name: 'Surface Exp', hebrewName: 'שיטות נסיוניות במדעי השטח', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '1270436', name: 'Small Sys', hebrewName: 'תרמודינמיקה של מערכות קטנות', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '1270437', name: 'Photocatalysis', hebrewName: 'פוטוקטליזה', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1270438', name: 'Symmetry', hebrewName: 'סימטריה בכימיה', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1270441', name: 'Bio Photochem', hebrewName: 'פוטוכימיה ביולוגית', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1270442', name: 'Small Sys Phys Chem', hebrewName: 'פיזיקה וכימיה של מערכות קטנות', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1270443', name: 'Mol Elec', hebrewName: 'אלקטרוניקה מולקולרית', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '1270446', name: 'Quantum Tech', hebrewName: 'מבוא לטכנולוגיה קוונטית מולקולרית', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '1270447', name: 'Quantum App', hebrewName: 'יישומי טכנולוגיה קוונטית מולקולרית', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '1270450', name: 'Bio Photochem Quant', hebrewName: 'ביופוטוכימיה ותופעות קוונטיות', points: 3.5, type: ['chem_elective'], sem: 0 },
        { id: '124310', name: 'Organometallic', hebrewName: 'כימיה אורגנו-מתכתית', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '124357', name: 'Intro Res', hebrewName: 'מבוא למחקר בכימיה', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '124430', name: 'Phys Methods', hebrewName: 'שיטות בכימיה פיסיקלית', points: 3.5, type: ['chem_elective'], sem: 0 },
        { id: '124435', name: 'Surface Chem Phys', hebrewName: 'כימיה פיסיקלית של פני שטח', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '124505', name: 'Env Chem', hebrewName: 'כימיה סביבתית', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '124510', name: 'Comp Chem', hebrewName: 'עקרונות כימיה חישובית', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '124703', name: 'Struct Activity', hebrewName: 'מבנה ופעילות בכימיה אורגנית', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '124706', name: 'BioOrganic', hebrewName: 'מבוא לכימיה ביו-אורגנית', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '124716', name: 'Stereochem', hebrewName: 'סטריאוכימיה', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '124803', name: 'Biochem', hebrewName: 'עקרונות הביוכימיה', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '126207', name: 'Inst Anal', hebrewName: 'מעבדה באנליזה מכשירית', points: 4.0, type: ['chem_elective'], sem: 0 },
        { id: '127100', name: 'Patents', hebrewName: 'פטנטים בכימיה', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127107', name: 'Porphyrins', hebrewName: 'כימיה של פורפירינים ומטולופורפירינים', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127108', name: 'Trans Metals', hebrewName: 'כימיה אורגנומתכתית של מתכות מעבר', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127205', name: 'XRD', hebrewName: 'קביעת מבנה גבישי ע"י דיפרקצית קרני X', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127406', name: 'NMR', hebrewName: 'תהודה מגנטית גרעינית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127408', name: 'Photochem', hebrewName: 'פוטוכימיה פיסיקלית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127415', name: 'QM Calc', hebrewName: 'שיטות חישוב בכימיה קוונטית ויישומן', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127418', name: 'Semicon Chem', hebrewName: 'כימיה של מוליכים למחצה', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127419', name: 'Stat Thermo 2', hebrewName: 'תרמודינמיקה סטטיסטית 2', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '127421', name: 'Exp Methods Phys Chem', hebrewName: 'שיטות ניסיוניות ומתקדמות בפיזיקה כימית', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127423', name: 'Scattering', hebrewName: 'תורת פיזור קוונטית ושימושיה בכימיה', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127424', name: 'Adv NMR', hebrewName: 'שיטות ויישומים מתקדמים בתמ"ג', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127430', name: 'Opto', hebrewName: 'אופטואלקטרוניקה ואלקטרוניקה מולקולרית', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127432', name: 'Laser Pulses', hebrewName: 'שיטות נסיוניות בפולסי לייזר קצרים', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127434', name: 'Surface Dyn', hebrewName: 'דינמיקה, דיפוזיה וחיכוך על פני השטח', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127435', name: 'Resonance', hebrewName: 'תופעות רוננס בטבע', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127444', name: 'Mol Eng', hebrewName: "הנ' מולקולרית של חומרים ביולוגיים וביו' אלקטרוניקה", points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127448', name: 'Quantum Lab', hebrewName: 'מעבדה לקוונטים בכימיה', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127449', name: 'Comp Quant Lab', hebrewName: 'מעבדה בכימיה קוונטית חישובית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127451', name: 'Quantum Mat', hebrewName: 'כימיה פיסיקלית של חומרים קוונטים', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127452', name: 'Quantum Control', hebrewName: 'שליטה ומדידה קוונטית בכימיה פיס', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127500', name: 'Symmetry Fund', hebrewName: 'יסודות הסימטריה', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '127708', name: 'Phys Org', hebrewName: 'כימיה אורגנית פיסיקלית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127710', name: 'Orbitals', hebrewName: 'אורביטלים מולקולריים בכימיה אורגנית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127724', name: 'Polymer Intro', hebrewName: 'מבוא לכימיה של פולימרים', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127727', name: 'Organometallic Syn', hebrewName: 'תרכובות אורגנומתכתית בסינתזה אורגנית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127728', name: 'Main Group', hebrewName: 'יסודות הקבוצה הראשית בכימיה אורגנית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127730', name: 'Struct Det', hebrewName: 'קביעת מבנה בשיטות פיסיקליות', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '127731', name: 'Carbs', hebrewName: 'כימיה וביוכימיה של פחמימות', points: 2.5, type: ['chem_elective'], sem: 0 },
        { id: '127738', name: 'Org 3', hebrewName: 'כימיה אורגנית 3 מורחב', points: 3.5, type: ['chem_elective'], sem: 0 },
        { id: '127739', name: 'Biomimetic', hebrewName: 'כימיה ביומימטית', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127740', name: 'Polymer Syn', hebrewName: 'פולימרים: מסינתזה לארכיטקטורה', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '127741', name: 'Peptides', hebrewName: 'כימיה של פפטידים וחלבונים', points: 3.0, type: ['chem_elective'], sem: 0 },
        { id: '127742', name: 'Medicinal', hebrewName: 'כימיה מדיצינלית של אנטיביוטיות', points: 2.0, type: ['chem_elective'], sem: 0 },
        { id: '128719', name: 'Chemistry in Drug Dev', hebrewName: 'הכימיה בפיתוח תרופות', points: 2.0, type: ['chem_elective'], sem: 0 },
    ]
};