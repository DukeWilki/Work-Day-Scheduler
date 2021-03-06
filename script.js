// Display date and time
const today = $("#today");
const rightNow = $("#rightNow");
const now = moment();
const date = now.format("dddd, Do MMMM YYYY");
const time = now.format("h:mm a");
today.html(date);
rightNow.html(time);

// If today's date is not reflected in local storage, then scheduler is out of date. It will delete all appointments and record todays date.
let lastLogIn = localStorage.getItem("lastLogIn");
if (date !== lastLogIn) {
  localStorage.clear();
  localStorage.setItem("lastLogIn", date);
}

// Set up hour feilds
const times = [
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm"
];

const currentHour = moment().hours();

for (let index = 0; index < times.length; index++) {
  const time = times[index];

  // find number suffix for element ID
  const hourIdentity = index + 9;

  // highlight funtion - past is greyed out, present is highlighted, future stays as default
  const highlight = function ()  {
    $(".block").each(function () {
      const hourBlock = parseInt($(this).attr("id"));
      if (hourBlock < currentHour) {
        $(this).addClass("past");
      } else if (hourBlock === currentHour) {
        $(this).addClass("present");
      } else if (hourBlock > currentHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("hidden");
      }
    });
  };

  // Construct table rows and data
  document.createElement("tr");
  const row = $('<tr class="block" id=' + hourIdentity + ">");
  highlight();

  const td1 = $("<td>");
  td1.text(time);

  let appointmentText = localStorage["appointment" + hourIdentity];
  if (appointmentText === undefined) {
    appointmentText = "";
  }

  const td2 = $(
    '<input type="text" value="' +
      appointmentText +
      '" id="appointment' +
      hourIdentity +
      '"><br>'
  );

  const td3 = $(
    '<td id="savebtn"><button id="save' +
      hourIdentity +
      '" disabled>Save</button></td>'
  );

  row.append(td1, td2, td3);
  $("#table").append(row);

  // Enable editing of appointments and saving of data - keep past events un-savable
  const appointment = document.getElementById("appointment" + hourIdentity);
  const save = document.getElementById("save" + hourIdentity);

  if (currentHour <= hourIdentity) {
    appointment.addEventListener("keyup", () => {
      save.disabled = !appointment.value;

      save.addEventListener("click", (e) => {
        localStorage.setItem(appointment.id, appointment.value);
        save.disabled = appointment.value;
      });
    });
  }
}
