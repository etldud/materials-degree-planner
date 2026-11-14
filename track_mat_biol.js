// File: track_mat_biol.js
// Track: Materials Engineering and Biology (Combined)
// Updated Syllabus & Electives with Dual Tags

window.AppTracks = window.AppTracks || {};

window.AppTracks['materials_biology'] = {
    id: "materials_biology",
    name: "הנדסת חומרים וביולוגיה (משולב)",
    semestersCount: 9,
    targets: {
        total: 180.0, 
        mandatory: 148.0
    },
    courseTypes: {
        "mandatory": { label: "חובה", bgColor: "#ffebee", borderColor: "#e57373" },
        "mat_elective": { label: "בחירה פקולטית - חומרים", bgColor: "#e3f2fd", borderColor: "#64b5f6" },
        "list_a1": { label: "רשימה א1 (חומרים)", bgColor: "#c8e6c9", borderColor: "#4caf50" }, 
        "bio_elective": { label: "בחירה פקולטית - ביולוגיה", bgColor: "#e0f2f1", borderColor: "#4db6ac" },
        "list_b1": { label: "רשימה ב1 (ביולוגיה)", bgColor: "#b2ebf2", borderColor: "#00bcd4" }, 
        "malag": { label: "מל\"ג", bgColor: "#fff9c4", borderColor: "#fbc02d" },
        "general_elective": { label: "בחירה חופשית", bgColor: "#fff3e0", borderColor: "#ffb74d" },
        "sport": { label: "ספורט", bgColor: "#f3e5f5", borderColor: "#ba68c8" }
    },
    stats: [
        {
            isSplit: true,
            cssClass: 'stat-split-box',
            parts: [
                { id: 'list_a1', label: 'רשימה א1', types: ['list_a1'], target: 1, countBy: 'courses', color: '#4caf50', borderColor: '#81c784' },
                { id: 'list_b1', label: 'רשימה ב1', types: ['list_b1'], target: 2, countBy: 'courses', color: '#00bcd4', borderColor: '#4dd0e1' }
            ]
        },
        {
            isSplit: true,
            cssClass: 'stat-split-box',
            parts: [
                { id: 'mat', label: 'נקודות חומרים', types: ['mat_elective', 'list_a1'], target: 10.0, color: '#1976d2', borderColor: '#64b5f6' },
                { id: 'bio', label: 'נקודות ביולוגיה', types: ['bio_elective', 'list_b1'], target: 10.0, color: '#00897b', borderColor: '#4db6ac' }
            ]
        },
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
        { id: "104019", name: "Linear Algebra M", hebrewName: "אלגברה לינארית מ'", points: 4.5, type: ["mandatory"], sem: 1 },
        { id: "104041", name: "Calculus 1 M", hebrewName: "חדו\"א 1 מ'", points: 5.0, type: ["mandatory"], sem: 1 },
        { id: "114051", name: "Physics 1", hebrewName: "פיזיקה 1", points: 2.5, type: ["mandatory"], sem: 1 },
        { id: "124120", name: "Principles of Chemistry", hebrewName: "יסודות הכימיה", points: 5.0, type: ["mandatory"], sem: 1 },
        { id: "134058", name: "Biology 1", hebrewName: "ביולוגיה 1", points: 3.0, type: ["mandatory"], sem: 1 },
        { id: "324033", name: "Tech English B", hebrewName: "אנגלית טכנית-מתקדמים ב'", points: 3.0, type: ["mandatory"], sem: 1 },
        
        // Semester 2
        { id: "104043", name: "Calculus 2 M", hebrewName: "חדו\"א 2 מ'", points: 5.0, type: ["mandatory"], sem: 2 },
        { id: "104131", name: "ODEs H", hebrewName: "משוואות דיפרנציאליות רגילות ח'", points: 2.5, type: ["mandatory"], sem: 2 },
        { id: "114052", name: "Physics 2", hebrewName: "פיזיקה 2", points: 3.5, type: ["mandatory"], sem: 2 },
        { id: "125801", name: "Organic Chemistry", hebrewName: "כימיה אורגנית", points: 5.0, type: ["mandatory"], sem: 2 },
        { id: "134019", name: "Intro to Biochem", hebrewName: "מבוא לביוכימיה ואנזימולוגיה", points: 2.5, type: ["mandatory"], sem: 2 },
        { id: "314011", name: "Structure & Props", hebrewName: "מבנה ותכונות חומרים הנדסיים", points: 4.0, type: ["mandatory"], sem: 2 },
        
        // Semester 3
        { id: "094481", name: "Probability", hebrewName: "מבוא להסתברות וסטטיסטיקה", points: 4.0, type: ["mandatory"], sem: 3 },
        { id: "104228", name: "PDEs M", hebrewName: "משוואות דיפרנציאליות חלקיות מ'", points: 3.0, type: ["mandatory"], sem: 3 },
        { id: "124400", name: "Quantum Chem 1", hebrewName: "כימיה קוונטית 1", points: 5.0, type: ["mandatory"], sem: 3 },
        { id: "134020", name: "General Genetics", hebrewName: "גנטיקה כללית", points: 3.5, type: ["mandatory"], sem: 3 },
        { id: "134082", name: "Molecular Biology", hebrewName: "ביולוגיה מולקולרית", points: 2.5, type: ["mandatory"], sem: 3 },
        { id: "134113", name: "Metabolic Pathways", hebrewName: "מסלולים מטבולים", points: 3.5, type: ["mandatory"], sem: 3 },
        { id: "314009", name: "Materials Lab", hebrewName: "מעבדה בחומרים הנדסיים ח'", points: 1.5, type: ["mandatory"], sem: 3 },
        
        // Semester 4
        { id: "124122", name: "Chem Lab", hebrewName: "מעבדה ביסודות הכימיה", points: 1.0, type: ["mandatory"], sem: 4 },
        { id: "124413", name: "Stat Thermodynamics", hebrewName: "תרמודינמיקה סטטיסטית", points: 2.5, type: ["mandatory"], sem: 4 },
        { id: "134117", name: "Physiology", hebrewName: "פיזיולוגיה", points: 3.5, type: ["mandatory"], sem: 4 },
        { id: "134128", name: "Cell Biology", hebrewName: "ביולוגיה של התא", points: 3.5, type: ["mandatory"], sem: 4 },
        { id: "315003", name: "Mat Thermodynamics", hebrewName: "תרמודינמיקה של חומרים", points: 4.0, type: ["mandatory"], sem: 4 },
        { id: "315051", name: "Diffusion", hebrewName: "דיפוזיה במוצקים", points: 2.5, type: ["mandatory"], sem: 4 },
        { id: "234128", name: "Intro to CS Python", hebrewName: "מבוא למחשב שפת פייתון", points: 4.0, type: ["mandatory"], sem: 4 },
        
        // Semester 5
        { id: "127427", name: "Solid State Ex", hebrewName: "מצב מוצק מורחב", points: 3.5, type: ["mandatory"], sem: 5 },
        { id: "134142", name: "Mol Genetics Lab", hebrewName: "מעבדה בגנטיקה מולקולרית", points: 2.5, type: ["mandatory"], sem: 5 },
        { id: "314003", name: "Solid Mechanics", hebrewName: "מבוא למכניקת המוצקים", points: 2.5, type: ["mandatory"], sem: 5 },
        { id: "314006", name: "Characterization", hebrewName: "אפיון מבנה והרכב חומרים", points: 4.0, type: ["mandatory"], sem: 5 },
        { id: "276413", name: "Basic Immunology", hebrewName: "אימונולוגיה בסיסית", points: 3.0, type: ["mandatory"], sem: 5 },
        { id: "315052", name: "Kinetics Trans", hebrewName: "קינטיקת טרנספורמציות בחומרים", points: 2.5, type: ["mandatory"], sem: 5 },
        
        // Semester 6
        { id: "134121", name: "Micro & Virology", hebrewName: "מיקרוביולוגיה ווירולוגיה", points: 3.0, type: ["mandatory"], sem: 6 },
        { id: "134143", name: "Biochem Lab", hebrewName: "מעבדה בביוכימיה ומטבוליזם", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "314311", name: "Ceramics", hebrewName: "חומרים קרמיים ורפרקטוריים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "314312", name: "Polymers", hebrewName: "מבוא לחומרים פולימריים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "315008", name: "Mech Behavior", hebrewName: "התנהגות מכנית של חומרים", points: 3.5, type: ["mandatory"], sem: 6 },
        { id: "315030", name: "Electronic Props", hebrewName: "תכונות חומרים אלקטרוניים", points: 2.5, type: ["mandatory"], sem: 6 },
        { id: "315039", name: "Transport", hebrewName: "מעבר תנע חום ומסה", points: 4.0, type: ["mandatory"], sem: 6 },
        
        // Semester 7
        { id: "134111", name: "Zoology", hebrewName: "זואולוגיה", points: 3.0, type: ["mandatory"], sem: 7 },
        { id: "314014", name: "Biomedical Mat", hebrewName: "חומרים ביו רפואיים", points: 2.5, type: ["mandatory"], sem: 7 },
        { id: "314532", name: "Corrosion", hebrewName: "אלקטרוכימיה, קורוזיה ושיטות הגנה", points: 2.5, type: ["mandatory"], sem: 7 },
        { id: "315001", name: "Adv Lab 1", hebrewName: "מעבדת חומרים מתקדמת 1 ח'", points: 2.0, type: ["mandatory"], sem: 7 },
        { id: "315037", name: "Metallic Materials", hebrewName: "תכונות ושימושים של חומרים מתכתיים", points: 2.5, type: ["mandatory"], sem: 7 },
        
        // Semester 8
        { id: "125101", name: "Anal Chem Eng", hebrewName: "כימיה אנליטית למהנדסים", points: 1.5, type: ["mandatory"], sem: 8 },
        { id: "315002", name: "Adv Lab 2", hebrewName: "מעבדת חומרים מתקדמת 2 ח'", points: 2.0, type: ["mandatory"], sem: 8 },
        
        // Semester 9
        { id: "315014", name: "Final Project", hebrewName: "פרויקט מתקדם בהנדסת חומרים", points: 4.0, type: ["mandatory"], sem: 9 }
    ],
    electiveCourses: [
        // --- Mat Electives - List A1 (Dual Tag) ---
        { id: "03150049", name: "Biomineralization", hebrewName: "ביומינרליזציה וחומרים ביולוגיים (א1)", points: 2.0, type: ["list_a1", "mat_elective"], sem: 0 },
        { id: "03150018", name: "Biomedical Eng Mat", hebrewName: "חומרים בהנדסה ביו רפואית (א1)", points: 2.0, type: ["list_a1", "mat_elective"], sem: 0 },
        
        // --- Mat Electives - General Faculty (Updated from Single Major) ---
        { id: "03140124", name: "Adv Topics 1", hebrewName: "נושאים מתקדמים בהנדסת חומרים 1", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03140126", name: "Adv Topics 2", hebrewName: "נושאים מתקדמים בהנדסת חומרים 2", points: 2.0, type: ["mat_elective"], sem: 0 },
        { id: "03140306", name: "Laser Processing", hebrewName: "עבוד חומרים בעזרת קרני לייזר", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150016", name: "Semiconductors", hebrewName: "התקני מוליכים למחצה להנדסת חומרים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150017", name: "Coatings", hebrewName: "תהליכי גימור וציפויים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150021", name: "Powder Metallurgy", hebrewName: "מטלורגית אבקות", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150025", name: "Adv Project 2", hebrewName: "פרויקט מתקדם בחומרים 2", points: 3.0, type: ["mat_elective"], sem: 0 },
        { id: "03150027", name: "Reliability", hebrewName: "אמינות התקני מיקרואלקטרוניקה", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150031", name: "Elec Ceramics", hebrewName: "חומרים אלקטרוניים קרמיים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150034", name: "Ceramic Proc", hebrewName: "תהליכי עיבוד וייצור של חומרים קרמיים", points: 2.0, type: ["mat_elective"], sem: 0 },
        { id: "03150035", name: "Elective Project", hebrewName: "פרויקט בחירה בהנדסת חומרים", points: 3.0, type: ["mat_elective"], sem: 0 },
        { id: "03150038", name: "MEMS", hebrewName: "חומרים למערכות מיקרו-אלקטרומכניות", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150040", name: "Glass", hebrewName: "מבוא למדעי הזכוכית", points: 2.0, type: ["mat_elective"], sem: 0 },
        { id: "03150041", name: "Optical Phenom", hebrewName: "תופעות אופטיות בחומרים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150042", name: "Nano", hebrewName: "מבוא לננומדע וננוטכנולוגיה", points: 2.0, type: ["mat_elective"], sem: 0 },
        { id: "03150044", name: "Optical Mat", hebrewName: "חומרים אופטיים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150045", name: "Micro Mfg", hebrewName: "תהליכי ייצור במיקרואלקטרוניקה", points: 3.5, type: ["mat_elective"], sem: 0 },
        { id: "03150046", name: "VLSI", hebrewName: "אריזות לרכיבי VLSI מתקדמות", points: 2.0, type: ["mat_elective"], sem: 0 },
        { id: "03150050", name: "Adhesives", hebrewName: "דבקים ומחברים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150053", name: "Bio Polymers", hebrewName: "הנדסה של פולימרים ביו רפואיים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150054", name: "Fail Analysis", hebrewName: "ניתוח כשלונות ומניעתם", points: 2.0, type: ["mat_elective"], sem: 0 },
        { id: "03150056", name: "Crystal Growth", hebrewName: "גידול גבישים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150057", name: "Comp Mat Sci", hebrewName: "מבוא למדע חישובי של חומרים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150060", name: "Epitaxy", hebrewName: "יסודות האפיטקסיה", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150061", name: "2D Mat Devices", hebrewName: "התקנים אלקטרוניים מבוססי חומרים דו מימדיים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150063", name: "Coupled Phenom", hebrewName: "תופעות צימוד במוליכים למחצה", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150200", name: "Polymer Networks", hebrewName: "מכניקה של רשתות פולימריות בחומרים ביולוגיים", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03150202", name: "Quantum Dots", hebrewName: "נקודות קוונטיות קולואידיות", points: 2.5, type: ["mat_elective"], sem: 0 },
        { id: "03160000", name: "Polymer Structure", hebrewName: "מבנה והתנהגות של פולימרים", points: 2.5, type: ["mat_elective"], sem: 0 },
        
        // --- Bio Electives - List B1 (Dual Tag) ---
        { id: "134133", name: "Evolution", hebrewName: "אבולוציה (ב1)", points: 3.0, type: ["list_b1", "bio_elective"], sem: 0 },
        { id: "134134", name: "Animal Lab", hebrewName: "מעבדה בעולם החי (ב1)", points: 2.5, type: ["list_b1", "bio_elective"], sem: 0 },
        { id: "134040", name: "Plant Mol Phys", hebrewName: "פיזיולוגיה מולקולרית של הצמח (ב1)", points: 2.5, type: ["list_b1", "bio_elective"], sem: 0 },
        { id: "134144", name: "Plant Phys Lab", hebrewName: "מעבדה בפיזיולוגיה של הצמח (ב1)", points: 2.5, type: ["list_b1", "bio_elective"], sem: 0 },
        { id: "134119", name: "Gene Expression Control", hebrewName: "בקרת הביטוי הגנטי (ב1)", points: 2.5, type: ["list_b1", "bio_elective"], sem: 0 },
        { id: "134123", name: "Bio Seminar", hebrewName: "סמינר בביולוגיה (ב1)", points: 2.0, type: ["list_b1", "bio_elective"], sem: 0 },
        { id: "134153", name: "Ecology", hebrewName: "אקולוגיה (ב1)", points: 3.0, type: ["list_b1", "bio_elective"], sem: 0 },
        { id: "134039", name: "Mol Virology", hebrewName: "וירולוגיה מולקולרית (ב1)", points: 2.5, type: ["list_b1", "bio_elective"], sem: 0 },
        { id: "134156", name: "Mol Biophysics", hebrewName: "ביופיסיקה מולקולרית (ב1)", points: 2.5, type: ["list_b1", "bio_elective"], sem: 0 },
        { id: "134155", name: "Endocrinology", hebrewName: "אנדוקרינולוגיה (ב1)", points: 2.5, type: ["list_b1", "bio_elective"], sem: 0 },
        { id: "134152", name: "Intro to Neurobio", hebrewName: "מבוא לנוירוביולוגיה (ב1)", points: 2.5, type: ["list_b1", "bio_elective"], sem: 0 },
        
        // --- Bio Electives - General Faculty ---
        { id: "134049", name: "Bio Research Proj", hebrewName: "פרויקט מחקר בביולוגיה (1)", points: 3.0, type: ["bio_elective"], sem: 0 },
        { id: "134088", name: "Adv Bio Lab", hebrewName: "מעבדה מתקדמת בביולוגיה (1)", points: 3.0, type: ["bio_elective"], sem: 0 },
        { id: "134129", name: "Cancer Biology", hebrewName: "הביולוגיה של מחלת הסרטן", points: 2.5, type: ["bio_elective"], sem: 0 },
        { id: "134140", name: "Ubiquitin", hebrewName: "יוביקוויטין ומחזור חלבונים", points: 2.5, type: ["bio_elective"], sem: 0 },
        { id: "134141", name: "Comp Biology", hebrewName: "ביולוגיה חישובית", points: 3.0, type: ["bio_elective"], sem: 0 },
        { id: "134145", name: "Drug Sciences", hebrewName: "מדעי התרופה", points: 2.5, type: ["bio_elective"], sem: 0 },
        { id: "134147", name: "Metabolism & Diseases", hebrewName: "מטבוליזם ומחלות באדם", points: 2.5, type: ["bio_elective"], sem: 0 },
        { id: "136014", name: "Bio Drug Dev", hebrewName: "פיתוח תרופות ביולוגיות", points: 2.5, type: ["bio_elective"], sem: 0 },
        { id: "134151", name: "Modern RNA", hebrewName: "העולם המודרני של הרנ\"א", points: 2.5, type: ["bio_elective"], sem: 0 },
        { id: "136088", name: "Human Mol Genetics", hebrewName: "גנטיקה מולקולרית של האדם", points: 2.5, type: ["bio_elective"], sem: 0 },
        { id: "136090", name: "Protein-DNA & p53", hebrewName: "התקשרות חלבון דנ\"א ותפקוד p53", points: 2.0, type: ["bio_elective"], sem: 0 },
        { id: "136093", name: "Biomacromol Design", hebrewName: "מבנה ותכנון של ביומקרומולקולות", points: 2.5, type: ["bio_elective"], sem: 0 },

        // --- General Electives ---
        { id: "94591", name: "Economics", hebrewName: "מבוא לכלכלה", points: 3.5, type: ["general_elective"], sem: 0 },
        { id: "94101", name: "Indus Mgmt", hebrewName: "מבוא להנדסת תעשיה וניהול", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "34045", name: "Economic Dec", hebrewName: "מבוא להחלטות כלכליות למהנדסים", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "35046", name: "Proj Mgmt", hebrewName: "ניהול פרויקטים", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "14616", name: "Proj Exec", hebrewName: "ביצוע פרויקטים, ניהול למנהיגות", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "36083", name: "Decisions", hebrewName: "החלטות: אתגרים והשלכות", points: 2.0, type: ["general_elective"], sem: 0 },
        { id: "104192", name: "App Math", hebrewName: "מבוא למתמטיקה שימושית", points: 3.0, type: ["general_elective"], sem: 0 },
        { id: "104215", name: "Complex", hebrewName: "פונקציות מרוכבות א'", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "114082", name: "Physics Lab 2", hebrewName: "מעבדה לפיזיקה 2", points: 1.5, type: ["general_elective"], sem: 0 },
        { id: "116029", name: "Biophysics", hebrewName: "מבוא לביופיזיקה", points: 3.5, type: ["general_elective"], sem: 0 },
        { id: "124417", name: "Spectroscopy", hebrewName: "כימיה פיסיקלית- ספקטרו מולקולרית", points: 3.5, type: ["general_elective"], sem: 0 },
        { id: "125102", name: "Anal Lab", hebrewName: "מעבדה כימיה אנליטית למהנדסים", points: 2.0, type: ["general_elective"], sem: 0 },
        { id: "127437", name: "Photocatalysis", hebrewName: "פוטוקטליזה", points: 2.0, type: ["general_elective"], sem: 0 },
        { id: "127438", name: "Symmetry", hebrewName: "סימטריה ושימושיה בכימיה", points: 4.0, type: ["general_elective"], sem: 0 },
        { id: "124416", name: "Electromagnetism", hebrewName: "אלקטרומגנטיות וחומר", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "54135", name: "Chem Eng", hebrewName: "מבוא להנדסה כימית וביוכימית", points: 3.5, type: ["general_elective"], sem: 0 },
        { id: "35053", name: "Renew Energy", hebrewName: "אנרגיה מתחדשת ובת קיימא", points: 3.0, type: ["general_elective"], sem: 0 },
        { id: "35050", name: "Opt Sys", hebrewName: "תכנון מערכות אופטיות 1", points: 3.5, type: ["general_elective"], sem: 0 },
        { id: "064413", name: "Microbio Lab", hebrewName: "מעבדה במיקרוביולוגיה(3)", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "064611", name: "Env Toxicology", hebrewName: "טוקסיקולוגיה סביבתית", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "066327", name: "Biomol Physics", hebrewName: "שיטות פיסיקליות לאפיון ביומולקולות", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "066520", name: "Biotech Processes", hebrewName: "ניתוח תהליכים בתעשייה הביוטכנולוגית", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "096414", name: "Industrial Stat", hebrewName: "סטטיסטיקה תעשייתית(4)", points: 3.0, type: ["general_elective"], sem: 0 },
        { id: "104214", name: "Fourier", hebrewName: "טורי פורייה והתמרות אינטגרלית", points: 3.0, type: ["general_elective"], sem: 0 },
        { id: "126304", name: "Structural Bio", hebrewName: "ביולוגיה מבנית", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "236523", name: "Intro Bioinfo", hebrewName: "מבוא לביואינפורמטיקה", points: 3.0, type: ["general_elective"], sem: 0 },
        { id: "134158", name: "Bioinfo Methods", hebrewName: "שיטות בביואינפורמטיקה למדעי החיים", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "084630", name: "CAD Drawing", hebrewName: "שרטוט הנדסי", points: 4.0, type: ["general_elective"], sem: 0 },
        { id: "336531", name: "Biochem Sensors", hebrewName: "עקרונות של חיישנים ביוכימיים", points: 2.5, type: ["general_elective"], sem: 0 },
        { id: "314100", name: "Mat Learning", hebrewName: "עקרונות ודרכי למידה בהנדסת חומרים", points: 1.0, type: ["general_elective"], sem: 0 },
    ]
};