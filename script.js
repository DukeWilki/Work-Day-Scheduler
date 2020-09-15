
const today = $("#today");
const rightNow = $("#rightNow");
const now = moment();
const date = now.format("dddd, Do MMMM YYYY"); 
// const date = moment().format("dddd, Do MMMM YYYY"); 
const time = now.format("h:mm a"); 
today.html(date);
rightNow.html(time);


// // timezones
// const perth = moment().add(-2, 'hours');
// console.log(perth);

// const broome = moment().zone("-08:00");
// console.log(broome);


// const lax = moment().tz("America/Los_Angeles").format();
// console.log(lax);


// GOAL
// to have a day planner from 9 - 5, user can record data on every timeblock
// The item should persist, when i come back, the data should still still be there
// 



// when the user load the page, 
// we see todays date

const times = ['9 am'
, '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm'
]
console.log(times[0])
const currentHour = moment().hours()
console.log(currentHour);

for (let index = 0; index < times.length; index++) {
    const time = times[index];

// // we check if all items in local storage belong to today, if not we delete all of the items that are not from today

// // we see the schedule from 9 - 5
// // (only for today)
// // option1: prepopulate the table in html
// // cons: hard to maintain
// // option2: dynamically generate the table rows
// // create row//

var hourIdentity = index + 9;



        document.createElement('tr')
        const row = $('<tr>')
        
        const td1 = $('<td>')
        td1.text(time)

        const td2 = $('<input type="text" id="appointment'+ hourIdentity + '"><br>')
        td2.text("   ...   data   ...   ")

        const td3 = $('<td id="savebtn"><button id="save'+ hourIdentity + '" disabled>Save</button></td>')

        row.append(td1, td2, td3)
        $("#table").append(row)

        const appointment = document.getElementById("appointment" + hourIdentity)
        const save = document.getElementById("save" + hourIdentity)
        console.log(appointment)
        appointment.addEventListener("keyup", () => {
        save.disabled = !appointment.value;
        console.log(appointment)
});
}

//         const td3 = $('<td id="savebtn"><button id="save" disabled>Save</button></td>')

//         row.append(td1, td2, td3)
//         $("#table").append(row)
// }
// window.onload = start;
// function start() {
//     document.createElement('tr')
//     const row9 = $('<tr>')
//             const td1 = $('<td>')
//             td1.text('time')
//                 const td2 = $('<td>')
//         td2.text('time')
//                 const td3 = $('<td>')
//         td3.text('time')
//         row9.append(td1, td2, td3)
//     $("#table").append(row9)
// }



// if (time < $("#rightNow")) {
//     // background-color: #b9a569;
// }

// each schedule item can contain notes (from local storage)
// a 'save' button

// past time block, current timeblock, future should have diff colour


// when the save button is clicked
// save whatever the user entered in the textarea and the date entered to local storage

// const save = document.getElementById("save")




// localStorage.setItem("currentScore", points);




