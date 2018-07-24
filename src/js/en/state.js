try {
    new Morris.Donut({
        element: 'common-state',
        data: [
            {label: "Premium", value: 3},
            {label: "I", value: 10},
            {label: "II", value: 35},
            {label: "III", value: 147},
            {label: "IV", value: 197},
            {label: "V", value: 550},
            {label: "Uncategorized reporting\n (reports in foreign languages)", value: 14}
        ],
        resize: true,
        axes: false
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: 'types',
        data: [
            {y: "Premium level", a: 100},
            {y: "I level", a: 20, b: 80},
            {y: "II level", a: 65, b: 35},
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ["\"One-volume\" Report  (%)", "\"Two-volume\" Report  (%)"],
        //stacked:true
        resize: true,
        axes: false
    });

} catch (e) {
}
try {
    new Morris.Donut({
        element: "iii-level",
        data: [
            {label: "\"One-volume\" Report ", value: 144},
            {label: "\"Two-volume\" Report ", value: 3},
        ],
        resize: true,
        axes: false
    });

} catch (e) {
}
try {
    new Morris.Bar({
        element: "org-form",
        data: [
            {x: "State unitary enterprise", y: 1},
            {x: "Public joint-stock company", y: 7},
            {x: "Open joint-stock company", y: 1},
            {x: "Joint-stock company", y: 4},
        ],
        xkey: 'x',
        ykeys: 'y',
        labels: ["Reports, number"],
        resize: true,
        axes: false
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: "ii-form",
        data: [
            {x: "State unitary enterprise", y: 1},
            {x: "Public joint-stock company", y: 23},
            {x: "Open joint-stock company", y: 1},
            {x: "Joint-stock company", y: 10},
        ],
        xkey: 'x',
        ykeys: 'y',
        labels: ["Reports, number"],
        resize: true,
        axes: false
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: "iii-form",
        data: [
            {x: "State unitary enterprise", y: 3},
            {x: "Public joint-stock company", y: 87},
            {x: "Open joint-stock company", y: 26},
            {x: "Joint-stock company", y: 27},
            {x: "Closed joint-stock company", y: 1},
            {x: "Limited liability company", y: 2},
            {x: "(Federal) State unitary enterprise", y: 1},
        ],
        xkey: 'x',
        ykeys: 'y',
        labels: ["Report, number"],
        resize: true,
        axes: false
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: "iv-form",
        data: [
            {x: "Public joint-stock company", y: 101},
            {x: "Open joint-stock company", y: 49},
            {x: "Joint-stock company", y: 35},
            {x: "Closed joint-stock company", y: 2},
            {x: "Limited liability company", y: 7},
            {x: "(Federal) State unitary enterprise", y: 2},
        ],
        xkey: 'x',
        ykeys: 'y',
        labels: [""],
        resize: true,
        axes: false
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: "v-form",
        data: [
            {x: "Public joint-stock company", y: 19},
            {x: "Open joint-stock company", y: 54},
            {x: "Closed joint-stock company", y: 59},
            {x: "Joint-stock company", y: 102},
            {x: "Limited liability company", y: 291},
            {x: "Non-ublic joint-stock company", y: 2},
            {x: "(Federal) State unitary enterprise", y: 22},
            {x: "Research center", y: 1}
        ],
        xkey: 'x',
        ykeys: 'y',
        labels: ["Report, number"],
        resize: true,
        axes: false
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: "transp-econom-sectors",
        data: [
            {x: "Nuclear industry", y: 3.7},
            {x: "Electric-power industry", y: 2.67},
            {x: "Telecommunications and communications ", y: 2.44},
            {x: "Banks and other investment and financial organizations", y: 2.25},
            {x: "Precious metals and diamonds industry", y: 2.2},
            {x: "Agricultural industry", y: 1.21},
            {x: "Retail", y: 1.2},
            {x: "Wholesale Trade", y: 1.08},
            {x: "Information Technology", y: 1.07},
            {x: "Mass media", y: 1},
        ],
        xkey: 'x',
        ykeys: 'y',
        labels: [""],
        resize: true,
        axes: false
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: 'level-kredits',
        data: [
            {x: "Creditworthiness Level 1 companies", y: 3.81},
            {x: "Creditworthiness Level 2 companies", y: 3.33},
            {x: "Creditworthiness Level 3 companies", y: 3},
            {x: "Creditworthiness Level 4 companies", y: 2.33},
        ],
        xkey: 'x',
        ykeys: 'y',
        labels: [""],
        resize: true,
        axes: false
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: 'raspr',
        data: [
            {x: "Creditworthiness Conditional Level 1", y: 0, y1: 7, y2: 12, y3: 13, y4: 0, y5: 0},
            {x: "Creditworthiness Conditional Level 2", y: 0, y1: 1, y2: 5, y3: 15, y4: 0, y5: 0},
            {x: "Creditworthiness Conditional Level 3", y: 1, y1: 1, y2: 1, y3: 6, y4: 4, y5: 1},
            {x: "Creditworthiness Conditional Level 4", y: 0, y1: 0, y2: 0, y3: 2, y4: 4, y5: 0},
        ],
        xkey: 'x',
        ykeys: ['y', 'y1', 'y2', 'y3', 'y4', 'y5'],
        labels: ["Number of Premium Level companies",
            "Number of Level I companies ", "Number of Level II companies ", "Number of Level III companies ", "Number of Level IV companies ", "Number of Level V companies "],
        resize: true,
        axes: false
        // stacked:true
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: 'raspr2',
        data: [
            {x: "Number of Premium Level companies", y: 0, y1: 0, y2: 1, y3: 0, y4: 0, y5: 0},
            {x: "Number of Level I companies ", y: 7, y1: 1, y2: 1, y3: 0, y4: 0, y5: 0},
            {x: "Number of Level II companies ", y: 12, y1: 15, y2: 1, y3: 0, y4: 0, y5: 0},
            {x: "Number of Level III companies ", y: 13, y1: 16, y2: 6, y3: 2, y4: 0, y5: 0},
            {x: "Number of Level IV companies ", y: 0, y1: 0, y2: 4, y3: 2, y4: 2, y5: 0},
            {x: "Number of Level V companies ", y: 0, y1: 0, y2: 1, y3: 0, y4: 0, y5: 1},
        ],
        xkey: 'x',
        ykeys: ['y', 'y1', 'y2', 'y3', 'y4', 'y5'],
        labels: ["Creditworthiness Conditional Level 1 ",
            "Creditworthiness Conditional Level 2 ", "Creditworthiness Conditional Level 3 ", "Creditworthiness Conditional Level 4 ",
            "Creditworthiness Conditional Level 5 ", "Creditworthiness Conditional Level 6 "],
        resize: true,
        axes: false
        // stacked:true
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: 'krupn',
        data: [
            {x: "Companies listed only on the Moscow Stock-Exchange ", y: 2.36},
            {x: "Companies listed only on foreign stock-exchange markets", y: 2.33},
            {x: "Companies listed at the same time on the Moscow and foreign stock-exchange markets", y: 3.51},
            {x: "Companies not listed on any stock exchange", y: 1.37}
        ],
        xkey: 'x',
        ykeys: 'y',
        labels: [""],
        resize: true,
        axes: false
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: 'kf-prozr',
        data: [
            {x: "Companies listed only on the Moscow Stock-Exchange", y: 2.36},
            {x: "Companies listed only on foreign stock-exchange markets", y: 2.30},
            {x: "Companies listed at the same time on the Moscow and foreign stock-exchange markets", y: 3.51},
            {x: "Companies not listed on any stock exchange", y: 1.36},
        ],
        xkey: 'x',
        ykeys: 'y',
        labels: [""],
        resize: true,
        axes: false
    });
} catch (e) {
}
try {
    new Morris.Bar({
        element: "system-kf",
        data: [
            {x: "All surveyed companies", y: 1.69},
            {x: "Companies listed simultaneously both on the Moscow Stock-Exchange and ", y: 3.51},
            {x: "Companies listed on foreign stock-exchange markets only", y: 2.33},
            {x: "Companies listed on the Moscow Stock-Exchange only", y: 2.36},
            {x: "System-forming companies ", y: 2.05},
        ],
        xkey: 'x',
        ykeys: 'y',
        labels: ["Transparency Ratio of System-Forming Companies"],
        resize: true,
        axes: false
    });
} catch (e) {
}