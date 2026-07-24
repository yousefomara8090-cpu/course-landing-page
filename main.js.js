// ==========================
// Constants
// ==========================

const TODAY = new Date();

const MS_IN_A_DAY = 1000 * 60 * 60 * 24;


// ==========================
// Arrays
// ==========================

const courseNames = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap"
];

const courseStatuses = [
    "Open Now",
    "Coming Soon",
    "Open Now",
    "Closed"
];

const courseLaunchDates = [
    "2026-06-20",
    "2026-07-20",
    "2026-06-25",
    "2026-05-10"
];

const courseDescriptions = [
    "Build page structure",
    "Create modern UI",
    "Build interactive websites",
    "Responsive Framework"
];


// ==========================
// daysLeft()
// ==========================

function daysLeft(dateString){

    const launchDate = new Date(dateString);

    return Math.ceil(
        (launchDate - TODAY) / MS_IN_A_DAY
    );

}


// ==========================
// daysLabel()
// ==========================

function daysLabel(days){

    if(days > 0){

        return `${days} days left`;

    }

    if(days === 0){

        return "Launching today";

    }

    return `Already launched ${Math.abs(days)} days ago`;

}


// ==========================
// filterByStatus()
// ==========================

function filterByStatus(status){

    const result = [];

    for(let i = 0 ; i < courseStatuses.length ; i++){

        if(courseStatuses[i] === status){

            result.push(courseNames[i]);

        }

    }

    return result;

}


// ==========================
// All Courses
// ==========================

console.log("========== ALL COURSES ==========");

for(let i=0 ; i<courseNames.length ; i++){

    const days = daysLeft(courseLaunchDates[i]);

    console.log(

        courseNames[i],

        "|",

        courseStatuses[i],

        "|",

        daysLabel(days)

    );

}



// ==========================
// Open Courses
// ==========================

console.log("========== OPEN NOW ==========");

console.log(

filterByStatus("Open Now")

);


// ==========================
// Upcoming Courses
// ==========================

console.log("========== UPCOMING COURSES ==========");

for(let i=0 ; i<courseNames.length ; i++){

    const days = daysLeft(courseLaunchDates[i]);

    if(days > 0){

        console.log(

            courseNames[i],

            "-",

            days,

            "days remaining"

        );

    }

}