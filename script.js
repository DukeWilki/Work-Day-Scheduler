
const today = $("#today");
const rightNow = $("#rightNow");
const now = moment();
const date = now.format("dddd, Do MMMM YYYY"); 
// const date = moment().format("dddd, Do MMMM YYYY"); 
const time = now.format("h:mm a"); 
today.html(date);
rightNow.html(time);


// timezones
const perth = moment().add(-2, 'hours');
console.log(perth);

const broome = moment().zone("-08:00");
console.log(broome);


const lax = moment().tz("America/Los_Angeles").format();
console.log(lax);


// GOAL
// to have a day planner from 9 - 5, user can record data on every timeblock
// The item should persist, when i come back, the data should still still be there
// 



// when the user load the page, 

// we see todays date

// we check if all items in local storage belong to today, if not we delete all of the items that are not from today

// we see the schedule from 9 - 5
// (only for today)
// option1: prepopulate the table in html
// cons: hard to maintain

// option2: dynamically generate the table rows
// 
// create row

const times = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm']

for (let index = 0; index < times.length; index++) {
    const time = times[index];
    
    
    // document.createElement('tr')
    const row = $('<tr>')
    
    const td1 = $('<td>')
    td1.text(time)

    const td2 = $('<td>')
    td2.text("   ...   data   ...   ")

    const td3 = $('<td>')
    td3.text("save")

    row.append(td1, td2, td3)
    $("#table").append(row)
}


// each schedule item can contain notes (from local storage)
// a 'save' button

// past time block, current timeblock, future should have diff colour


// when the save button is clicked
// save whatever the user entered in the textarea and the date entered to local storage






