// Find BUG ctrl + f ---> BUG 


// -----------------------------------------------------------------------------
// -------------------------------  NAME ARRAYS  -------------------------------
// -----------------------------------------------------------------------------


// Months names
const monthsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    "November",
    'December'
]

// Day names
const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',  
]



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// --------------------------------  TODAY DAY  --------------------------------
// -----------------------------------------------------------------------------



let today = new Date(); // Date Today // Mon Jan 1 2000 00:00:00
let todayInMs = Date.now(); // Date Today in milliseconds // 1656448707844

let todayDay = today.getDay(); // Today Day // 0-6
let todayDayName = dayNames[today.getDay()]; // Today Day Name

let todayMonth = today.getMonth();
let todayMonthName = monthsNames[today.getMonth()] // Today Month Name

let todayYear = today.getFullYear(); // Today Year 



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// --------------------  FUNCTIONS TO DISPLAY DATE AND TIME  -------------------
// -----------------------------------------------------------------------------



// Function to display today date
function displayDate() {
    let todayDay = today.getDate();
    let todayDayName = dayNames[today.getDay()];

    let todayMonthName = monthsNames[today.getMonth()];

    let todayYear = today.getFullYear();

    let todayDate = todayDayName + ", "+ todayDay + ". " + todayMonthName + " " + todayYear + ".";

    document.getElementById("js-display__date").innerText = todayDate;
    document.getElementById("js-display__date").textContent = todayDate;

    setTimeout(displayDate, 1000);
}


// Function to display today time 
function displayTime() {
    let date = new Date();

    let h = date.getHours();   // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59

    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("js-display__time").innerText = time;
    document.getElementById("js-display__time").textContent = time;
    
    setTimeout(displayTime, 1000);
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// ------------------  DETERMINATED LENGHT OF SELECTED MONTH  ------------------
// -----------------------------------------------------------------------------

/* 
    To dynamically determinate month length
    * try later *
*/


/* HTMLElement.prototype.empty = function() {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
}

function clearAll() {
    let selectDay = document.getElementById('js-selectDay');
    while (selectDay.children.length > 1) {
        selectDay.removeChild(selectDay.lastChild);
    }
}

// Months names with lenght in days
const monthDays = {
    January: 31,
    February: function() {
        daysInMonth();
    },
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
};


function daysInMonth() {
    let selectDropdown = document.getElementById("js-selectMonth");
    let selectedMonthValue = selectDropdown.options[selectDropdown.selectedIndex].value // Get month value
    let selectedMonthName = monthsNames[selectedMonthValue] // Get month value
    console.log(selectedMonthName);

    if (selectedMonthName == "February")  {
        let selectDay = document.getElementById("js-selectDay");
        let daysInMonth = 28;
        //selectDay.empty();
        clearAll();
        //console.log(selectDropdown.empty());
        // Loop to create day option element and display day number
        for (let day = 1; day < daysInMonth + 1; day++) { // day = 1; 1 < 32; 1 + 2;
            numberDays += day +  ","; // x += y // x = x + y // "" + 1,2,3,4 ..
            let option = document.createElement("option"); // Create option element
            document.getElementById("js-selectDay").appendChild(option).value = day;  // Add element to dropdown select list

            let dayNumber = document.createTextNode(day + "."); // Create option element day number node .
            option.appendChild(dayNumber); // Append day number node to option element
}

        console.log(daysInMonth);
        return daysInMonth;
    }

    console.log(selectedMonthName);

    let daysInMonth = monthDays[selectedMonthName];
    console.log(daysInMonth);
    return daysInMonth;
} */



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ---------------------  LOOPS FOR DROPDOWM SELECT VALUES  --------------------
// -----------------------------------------------------------------------------




// Numbers od days in one month 1-31
let numberDays = "";

// Numbers of month in one year 0-11
let monthlength = monthsNames.length;

// Years number from today - 150 years 
let years = "";



// Loop to create day option element and display day number
for (let day = 1; day < 32; day++) { // day = 1; 1 < 32; 1 + 2;
    numberDays += day +  ","; // x += y // x = x + y // "" + 1,2,3,4 ..
    let option = document.createElement("option"); // Create option element
    document.getElementById("js-selectDay").appendChild(option).value = day;  // Add element to dropdown select list

    let dayNumber = document.createTextNode(day + "."); // Create option element day number node .
    option.appendChild(dayNumber); // Append day number node to option element
}


// Loop to create month option element and display month name 
for (let i = 0; i < monthlength; i++) { // index = 0; 0 < 12; 0 = 1;
    
    let option = document.createElement("option"); // Create option element 
    document.getElementById("js-selectMonth").appendChild(option).value = i; // Add element to dropdown list

    let monthName = document.createTextNode(monthsNames[i]); // Create option element month name node 
    option.appendChild(monthName); // Append month name node to option element
}


// Loop to create year option element and display year number
for (let year = todayYear; year > todayYear - 151; year--) { // year = today ; year is bigger than today- 150 -- ; today - 150 year 
    years += year +  ","; // x += y // x = x + y // "" - 2022,2021,2020,2019 ..  

    let option = document.createElement("option"); // Create option element
    document.getElementById("js-selectYear").appendChild(option).value = year;  // Add element to dropdown select list

    let yearNumber = document.createTextNode(year + "."); // Create year number node . 
    option.appendChild(yearNumber); // Append year number node to option element
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ----------------------- FUNCTIONS TO GET SELECTED DATE  ---------------------
// -----------------------------------------------------------------------------



// Function to get selected Day 
function getBirthDay() {
    let selectDropdown = document.getElementById("js-selectDay"); // Day Dropdown list
    let selectedDay = selectDropdown.options[selectDropdown.selectedIndex].value; // Get day value
    validateDay(); // Validate input
    return selectedDay;
}


// Function to get selected Month 
function getBirthMonth() {
    let selectDropdown = document.getElementById("js-selectMonth"); // Month Dropdown list
    let selectedMonth = selectDropdown.options[selectDropdown.selectedIndex].value; // Get month value
    validateMonth(); // Validate input
    return selectedMonth;
}


//Function to get selected Year 
function getBirthYear() {
    let selectDropdown = document.getElementById("js-selectYear"); // Year dropdown list
    let selectedYear = selectDropdown.options[selectDropdown.selectedIndex].value; // Get year value
    validateYear(); // Validate input
    //isLeapYear(); // Check if year is leap 
    return selectedYear;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ------------------------- FUNCTIONS TO SET BIRTH DATE  ----------------------
// -----------------------------------------------------------------------------



// Function to set birth date
function setBirthDate() {
    const selectedDay = getBirthDay();
    const selectedMonth = getBirthMonth();
    const selectedYear = getBirthYear();
    const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
    return selectedDate; // Return date-time object
}


// Function to set birth date for next birthday.
function setNextBirthDate() {
    let todayMonth = today.getMonth(); // 0-11
    let todayYear = "";

    let birthDate = setBirthDate().getDate(); // 1-31
    let birthMonth = setBirthDate().getMonth(); // 0-11

    
    if (birthMonth > todayMonth) { // To check if aready had birthday 
        todayYear = today.getFullYear(); //  Year 
        console.log(todayYear);
    } else {
        todayYear = today.getFullYear() + 1; // Year +1 // Aready have birthday this year
        console.log(todayYear);
    }

    let nextBirthDate = new Date(todayYear, birthMonth, birthDate);

    return nextBirthDate;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// --------------------------- LENGTH IN MILLISECONDS  -------------------------
// -----------------------------------------------------------------------------



// Return one day in ms // 86400000
function dayLength() {
    const msPerDay = 24 * 60 * 60 * 1000;
    return msPerDay;
}

// Return one week in ms // 604800000
function weekLength() {
    const msPerWeek = dayLength() * 7;
    return msPerWeek;
}

// Return one month in ms // 2629746000
function monthLength() {
    const msPerMonth = 2629746000;
    return msPerMonth;
}

// Return one year in ms // 31556952000
function yearLength() {
    const msPerYear = 31556952000;
    return msPerYear;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// --------------------------- FUNCTIONS TO CALCULATE OLD   --------------------
// -----------------------------------------------------------------------------



function calcDaysOld() {
    let selectedDate = setBirthDate();
    let daysOld = (today.getTime() - selectedDate.getTime()) / dayLength();
    return daysOld;
}

function calcWeeksOld() {
    let selectedDate = setBirthDate();
    let weeksOld = (today.getTime() - selectedDate.getTime()) / weekLength();
    return weeksOld;
}

function calcMonthOld() {
    let selectedDate = setBirthDate();
    let monthsOld = (today.getTime() - selectedDate.getTime()) / monthLength();
    return monthsOld;
}

function calcYearsOld() {
    let selectedDate = setBirthDate();
    let yearsOld = (today.getTime() - selectedDate.getTime()) / yearLength();
    return yearsOld;
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ---------------------------- VALIDATE INPUT DATA  ---------------------------
// -----------------------------------------------------------------------------


// Mesages to display
const message = {
    error: {
        day: "Please select day",
        month: "Please select month",
        year: "Please select year"
    },
    leapYear: "This is leap year"
}


// Function to validate input day and display message
function validateDay() {
    let dropDownDay = document.getElementById("js-selectDay");
    let messageElem = document.getElementById("js-day-container");
    let collection = document.getElementById("js-day-container").children;
    

    if (dropDownDay.selectedIndex == 0) {
        dropDownDay.style.marginBottom = "0";
        console.log(dropDownDay.style.marginBottom)
    } else {
        dropDownDay.style.marginBottom = "";
    }

    dropDownDay = dropDownDay.selectedIndex;

    if (dropDownDay == 0) {
        collection[2].style.color = 'red';
        messageElem.querySelector('small').innerHTML = message.error.day;
        dropDownDay = document.getElementById("js-selectDay");
        dropDownDay.classList.add("error-shadow");
        return false;
    } else {
        dropDownDay = document.getElementById("js-selectDay");
        dropDownDay.classList.contains('error-shadow');
        dropDownDay.classList.remove('error-shadow');
        messageElem.querySelector('small').innerHTML = "";
        messageElem.style.color = '';
        return true
    }
}


// Function to validate input month and display message
function validateMonth() {
    let dropDownMonth = document.getElementById("js-selectMonth");
    let messageElem = document.getElementById("js-month-container");
    let collection = document.getElementById("js-month-container").children;

    if (dropDownMonth.selectedIndex == 0) {
        dropDownMonth.style.marginBottom = "0";
        console.log(dropDownMonth.style.marginBottom)
    } else {
        dropDownMonth.style.marginBottom = "";
    }

    dropDownMonth = dropDownMonth.selectedIndex;
    
    if (dropDownMonth == 0) {
        collection[2].style.color = 'red';
        messageElem.querySelector('small').innerHTML = message.error.month;
        dropDownMonth = document.getElementById("js-selectMonth");
        dropDownMonth.classList.add("error-shadow");
        return false;
    } else {
        dropDownMonth = document.getElementById("js-selectMonth");
        dropDownMonth.classList.contains('error-shadow');
        dropDownMonth.classList.remove('error-shadow');
        messageElem.querySelector('small').innerHTML = "";
        messageElem.style.color = '';
        return true
    }
}


// Function to validate input year and display message
function validateYear() {
    let dropDownYear = document.getElementById("js-selectYear");
    let messageElem = document.getElementById("js-year-container");
    let collection = document.getElementById("js-year-container").children;

    if (dropDownYear.selectedIndex == 0) {
        dropDownYear.style.marginBottom = "0";
        console.log(dropDownYear.style.marginBottom)
    } else {
        dropDownYear.style.marginBottom = "";
    }

    dropDownYear = dropDownYear.selectedIndex;
    
    if (dropDownYear == 0) {
        collection[2].style.color = 'red';
        messageElem.querySelector('small').innerHTML = message.error.year;
        dropDownYear = document.getElementById("js-selectYear");
        dropDownYear.classList.add("error-shadow");
        return false;
    } else {
        dropDownYear = document.getElementById("js-selectYear");
        dropDownYear.classList.contains('error-shadow');
        dropDownYear.classList.remove('error-shadow');
        messageElem.querySelector('small').innerHTML = "";
        messageElem.style.color = '';
        return true
    }
}

// Function to check if all fields are selected
function validate() {
    let validate = [validateDay(), validateMonth(), validateYear()];

    if (validate[0] === false || validate[1] === false || validate[2] === false) {
        console.log(validate)
        return false;
    } else {
        return true;
    }
}


// Function to check if selected year is leap year 
function isLeapYear() {
    let selectDropdown = document.getElementById("js-selectYear"); // Year dropdown list
    let selectedYear = selectDropdown.options[selectDropdown.selectedIndex].value; // Get year value

    if ((0 == selectedYear % 4) && (0 != selectedYear % 100) || (0 == selectedYear % 400)) {
        console.log(selectedYear + ' is a leap year');
        return true;
    } else {
        console.log(selectedYear + ' is not a leap year');
        return false;
    }
}


// Return selected value as number 
function monthSelected() {
    let selectDropdown = document.getElementById("js-selectMonth"); // Month dropdown list
    let selectedMonth = selectDropdown.options[selectDropdown.selectedIndex].value; // Get year value
    let selectedValue = parseInt(selectedMonth, 10);
    return selectedValue;
}


// Check if selected month is february
function IsFebruary() {
    let selectedMonth = monthSelected();
    
    if (selectedMonth === 1) {
        return true;
    } else {
        return false;
    }
}   



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// -------------------------- FUNCTIONS TO DISPLAY DATA  -----------------------
// -----------------------------------------------------------------------------



// Function show data
function showData() {
    let valid = validate();

    if (valid === true) {
        displayResults();
    } else {
        displayHome();
    }
}


// Function to reset data
function reset() {
    let dropDownDay = document.getElementById("js-selectDay");
    let dropDownMonth = document.getElementById("js-selectMonth");
    let dropDownYear = document.getElementById("js-selectYear");
    dropDownDay.selectedIndex = 0;
    dropDownMonth.selectedIndex = 0;
    dropDownYear.selectedIndex = 0;
    displayHome();
}


// Function to display home
function displayHome() {
    let home = document.querySelector("#js-home");
    let results = document.querySelector("#js-results");
    let footer = document.querySelector("#js-footer");

    results.style.display = "none";
    home.style.display = "block";
    footer.style.position = "fixed";
    
    bodyHeightFull();
    //removeMargin();
}


// Function to display results
function displayResults() {
    let results = document.querySelector("#js-results");
    let home = document.querySelector("#js-home");
    let footer = document.querySelector("#js-footer");
    
    results.style.display = "block";
    home.style.display = "none";
    footer.style.position = "relative";

    bodyHeightFull();

    displayBirthDate();
    displayRemainingDays();
    displayNextBirthday();
    displayAge();
}


// Function to display birth date
function displayBirthDate() {
    let birthDate = setBirthDate(); // Date object

    let birthDayDate = birthDate.getDate(); // Day date 1-31
    let birthDay = birthDate.getDay();  // Day 0-6, 0 = Sunday, 6 = Saturday
    let birthDayName = dayNames[birthDay]; // Monday ....

    let birthMonth = getBirthMonth(); // 0-11
    let birthMonthName = monthsNames[birthMonth]; // 0 = January -- 11 = December

    let birthYear = getBirthYear(); // Year
    let birthDateFormated = birthDayDate + ". " + birthMonthName + " " + birthYear + " . ";

    document.getElementById("js-displayBirthDate").innerText = birthDateFormated;
    document.getElementById("js-displayBirthDate").textContent = birthDateFormated;
    document.getElementById("js-displayBirthDayName").innerText = birthDayName;
    document.getElementById("js-displayBirthDayName").textContent = birthDayName;

}


// Function to display days till next birthday
function displayRemainingDays() {
    let todayDate = today.getTime();
    let birthDate = setNextBirthDate().getTime();
    let daysRemaining = (birthDate - todayDate) / dayLength();

    document.getElementById("js-days-remaining").innerText = Math.ceil(daysRemaining);
    document.getElementById("js-days-remaining").textContent = Math.ceil(daysRemaining);
}


// Function to display day name for next birthday
function displayNextBirthday() {
    let birthDay = setNextBirthDate().getDay();  // Day 0-6, 0 = Sunday, 6 = Saturday
    let birthDayName = dayNames[birthDay]; // Monday ....

    document.getElementById("js-displayNextBirthDay").innerText = birthDayName;
    document.getElementById("js-displayNextBirthDay").textContent = birthDayName;
}


// Display old in days,weeks,months,years
function displayAge() {
    let daysOld = calcDaysOld();
    let weeksOld = calcWeeksOld();
    let monthsOld = calcMonthOld();
    let yearsOld = calcYearsOld();

    document.getElementById("js-age-days").innerText = Math.floor(daysOld);
    document.getElementById("js-age-days").textContent = Math.floor(daysOld);
    document.getElementById("js-age-weeks").innerText = Math.floor(weeksOld);
    document.getElementById("js-age-weeks").textContent = Math.floor(weeksOld);
    document.getElementById("js-age-months").innerText = Math.floor(monthsOld);
    document.getElementById("js-age-months").textContent = Math.floor(monthsOld);
    document.getElementById("js-age-years").innerText = Math.floor(yearsOld);
    document.getElementById("js-age-years").textContent = Math.floor(yearsOld);
}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// ----------------------------- DISPLAY BUG FIX -------------------------------
// -----------------------------------------------------------------------------



/* 
    BUG FIX ---->   Bug:    
                            When I display the results the body is short
                            and the background color does not cover the
                            whole body.

                    Fix:
                            Is ​​a function that checks the display
                            of the results, if the display is "block",
                            the body style height is 100%, if not,
                            then it is set to empty and takes the
                            already set style from base scss.

                            ** Try to fix it later in another way.

*/


function bodyHeightFull() {
    let results = document.getElementById("js-results");
    let body = document.getElementById("js-body");
    let fullHeight = 100 + "%";
    let footer = document.getElementById("js-footer");
    

    if (results.style.display === "block") {
        body.style.height = fullHeight;
        footer.style.left = "0";
    } else {
        body.style.height = "";
        footer.style.left = "";
    }

}



// -----------------------------------------------------------------------------
// -----------------------------------  END  -----------------------------------
// -----------------------------------------------------------------------------


// Display date and time
displayDate();
displayTime();




// Check preferred theme, set theme and set logo
let logo = document.getElementById('js-logo-image');
let checkbox = document.querySelector("input[name=js-theme__toggle--input]");

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
    logo.src = "/assets/images/logo/logo-light.png";
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    checkbox.checked = false;
    console.log(checkbox)
    logo.src = "/assets/images/logo/logo-dark.png";
}



// switch theme if checkbox is engaged and change logo
checkbox.addEventListener('change', (cb) => {
    document.documentElement.setAttribute(
        'data-theme',
        cb.target.checked ? 'dark' : 'light'
    );

    if (logo.src.match("/assets/images/logo/logo-light.png")) {
        logo.src = "/assets/images/logo/logo-dark.png";
        console.log("je")
    }
    else {
        logo.src = "/assets/images/logo/logo-light.png";
        console.log("nije")
    }
});


/* 
    Function to check if message is rendered
    and remove margin from form select dropdowns

*/
function removeMargin() {
    let nodes = document.querySelectorAll("select");
    let message = document.querySelectorAll("small");
    console.log(nodes)
    console.log(message[0].style.cssText)

    for (let i = 0; i < nodes.length; i++) {
        //console.log(nodes)
           // message
        if (message[0].style.cssText == "color: red;") {
            nodes[i].style.margin = "0";
        }
    }
}

