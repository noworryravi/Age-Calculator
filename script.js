let userInput = document.getElementById("input");
let result = document.getElementById("result");

// do not understand the below line of code! it used to select only today date or past date not future date.
userInput.max = new Date().toISOString().split('T')[0];
// new Date() creates a Date object for the current date and time.

// The toISOString() method then converts that date to a string in the format "YYYY-MM-DDTHH:mm:ss.sssZ" (e.g., "2024-02-02T12:34:56.789Z").

// Finally, split('T')[0] is used to extract only the date portion of the string by splitting at the 'T' character.

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let CurrentDate = new Date();
    
    let d2 = CurrentDate.getDate();
    let m2 = CurrentDate.getMonth() + 1;
    let y2 = CurrentDate.getFullYear();

    let y3, m3, d3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1 + 1) + d2 - d1;
        // getDaysInMonth(y1, m1 + 1) = gives the no. of days of the user birthdate.
    }

    if(m3 < 0){
        y3--;
        m3 = 11;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
    // The "getDaysInMonth" function is designed to calculate the number of days in a given month of a specific year.
}


