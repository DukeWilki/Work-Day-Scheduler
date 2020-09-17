// GOAL
// to have a day planner from 9 - 5, user can record data on every timeblock
// The item should persist, when i come back, the data should still still be there

// when the user load the page, 
// we see todays date
// we see only todays appointments
// we see a schedule of the standard workday in hour blocks
// hour blocks in the past are greyed out
// current hour block is highlighted

// Display date and time
const today = $("#today");
const rightNow = $("#rightNow");
const now = moment();
const date = now.format("dddd, Do MMMM YYYY"); 
const time = now.format("h:mm a"); 
today.html(date);
rightNow.html(time);

// If today's date is not reflected in local storage, then planner is out of date. It will delete all appointments and record todays date.
let lastLogIn = localStorage.getItem("lastLogIn")
if (date !== lastLogIn) {
    localStorage.clear();
    localStorage.setItem("lastLogIn", date)
} 

// Set up data feilds
const times = [
    '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'
// , '6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm'
]

const currentHour = moment().hours()
console.log("Current hour: " + currentHour);

for (let index = 0; index < times.length; index++) {
    const time = times[index];

// find number suffix for element ID
var hourIdentity = index + 9;
console.log(hourIdentity)

document.createElement('tr')
        const row = $('<tr>')
        
        const td1 = $('<td>')
        td1.text(time)

        const td2 = $('<input type="text" value="" id="appointment'+ hourIdentity + '"><br>')
        if (hourIdentity < currentHour) {
            console.log("past")
            // $("body").bind(["appointment"+ hourIdentity], function() {
            // $(this).find("appointment"+ hourIdentity).addClass("past")});
            // document.getElementById("appointment"+ hourIdentity).style="color:grey;"
            // document.getElementById("appointment"+ hourIdentity).classList.add('past');
        } else if (hourIdentity === currentHour) {
            console.log("present")
            // document.getElementById("appointment"+ hourIdentity).style="color:green;"
            // document.getElementById("appointment"+ hourIdentity).classList.add('present');
        } else {
            console.log("future")
            // document.getElementById("appointment9"+ hourIdentity).classList.add('future');
        }
          
      

        const td3 = $('<td id="savebtn"><button id="save'+ hourIdentity + '" disabled>Save</button></td>')

        row.append(td1, td2, td3)
        $("#table").append(row)



        // Enable editing of appointments and saving of data - keep past events un-savable 
        const appointment = document.getElementById("appointment" + hourIdentity)
        const save = document.getElementById("save" + hourIdentity)
        console.log(appointment.value)
             
        if (currentHour <= hourIdentity){
        appointment.addEventListener("keyup", () => {
        save.disabled = !appointment.value;

        save.addEventListener ("click", (e) => {
            localStorage.setItem(appointment.id, appointment.value) 
            save.disabled = appointment.value;
          });
}); 
        };
}

if (localStorage.appointment9 !== undefined) {
var appointment9 = document.getElementById("appointment9");
appointment9.setAttribute("value", localStorage.appointment9);
}

if (localStorage.appointment10 !== undefined) {
var appointment10 = document.getElementById("appointment10");
appointment10.setAttribute("value", localStorage.appointment10);
}

if (localStorage.appointment11 !== undefined) {
var appointment11 = document.getElementById("appointment11");
appointment11.setAttribute("value", localStorage.appointment11);
}

if (localStorage.appointment12 !== undefined) {
var appointment12 = document.getElementById("appointment12");
appointment12.setAttribute("value", localStorage.appointment12);
}

if (localStorage.appointment13 !== undefined) {
var appointment13 = document.getElementById("appointment13");
appointment13.setAttribute("value", localStorage.appointment13);
}

if (localStorage.appointment14 !== undefined) {
var appointment14 = document.getElementById("appointment14");
appointment14.setAttribute("value", localStorage.appointment14);
}

if (localStorage.appointment15 !== undefined) {
var appointment15 = document.getElementById("appointment15");
appointment15.setAttribute("value", localStorage.appointment15);
}

if (localStorage.appointment16 !== undefined) {
var appointment16 = document.getElementById("appointment16");
appointment16.setAttribute("value", localStorage.appointment16);
}

if (currentHour === 9) {
    document.getElementById("appointment9").classList.add('present');
} else if (currentHour === 10) {
    document.getElementById("appointment10").classList.add('present');
    document.getElementById("appointment9").classList.add('past');
} else if (currentHour === 11) {
    document.getElementById("appointment9").classList.add('past');
    document.getElementById("appointment10").classList.add('past');
    document.getElementById("appointment11").classList.add('present');
} else if (currentHour === 12) {
    document.getElementById("appointment9").classList.add('past');
    document.getElementById("appointment10").classList.add('past');
    document.getElementById("appointment11").classList.add('past');
    document.getElementById("appointment12").classList.add('present');
} else if (currentHour === 13) {
    document.getElementById("appointment9").classList.add('past');
    document.getElementById("appointment10").classList.add('past');
    document.getElementById("appointment11").classList.add('past');
    document.getElementById("appointment12").classList.add('past');
    document.getElementById("appointment13").classList.add('present');
} else if (currentHour === 14) {
    document.getElementById("appointment9").classList.add('past');
    document.getElementById("appointment10").classList.add('past');
    document.getElementById("appointment11").classList.add('past');
    document.getElementById("appointment12").classList.add('past');
    document.getElementById("appointment13").classList.add('past');
    document.getElementById("appointment14").classList.add('present');
} else if (currentHour === 15) {
    document.getElementById("appointment9").classList.add('past');
    document.getElementById("appointment10").classList.add('past');
    document.getElementById("appointment11").classList.add('past');
    document.getElementById("appointment12").classList.add('past');
    document.getElementById("appointment13").classList.add('past');
    document.getElementById("appointment14").classList.add('past');
    document.getElementById("appointment15").classList.add('present');
} else if (currentHour === 16) {
    document.getElementById("appointment9").classList.add('past');
    document.getElementById("appointment10").classList.add('past');
    document.getElementById("appointment11").classList.add('past');
    document.getElementById("appointment12").classList.add('past');
    document.getElementById("appointment13").classList.add('past');
    document.getElementById("appointment14").classList.add('past');
    document.getElementById("appointment15").classList.add('past');
    document.getElementById("appointment16").classList.add('present');
} 


// each schedule item can contain notes (from local storage)
// a 'save' button

// past time block, current timeblock, future should have diff colour


// when the save button is clicked
// save whatever the user entered in the textarea and the date entered to local storage

// const save = document.getElementById("save")




// localStorage.setItem("currentScore", points);




