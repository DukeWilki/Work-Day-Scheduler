# Work Day Scheduler
This assignment was to create a daily planner with one our blocks for the standard workday

## Contents
<p>
The app is composed of three files:
index.html script.js style.css
</p>

## Design
<p>
Soft colours were used as many office workers spend a lot of time on computer screens. The only bright colour used is the light green to indicate the present. This was chosen to draw the users attention and the colours accociation of "go".
</p>

## Usability
<p>
The first time logging in each day, the app will refresh local storage. It will hold onto any data entered until its first load the following day. Events in the past cannot be saved.
</p>

## User Story
<p>
    
    AS AN employee with a busy schedule
    I WANT to add important events to a daily planner
    SO THAT I can manage my time effectively
   
</p>

## Acceptance Criteria 
<p>
    
    GIVEN I am using a daily planner to create a schedule

    WHEN I open the planner
    THEN the current day is displayed at the top of the calendar

    WHEN I scroll down
    THEN I am presented with timeblocks for standard business hours

    WHEN I view the timeblocks for that day
    THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    
    WHEN I click into a timeblock
    THEN I can enter an event

    WHEN I click the save button for that timeblock
    THEN the text for that event is saved in local storage

    WHEN I refresh the page
    THEN the saved events persist

</p>

## Screenshots
NB an adjustmet on part of the code was used to show the colour coding, this is why the time at the top of the page does not reflect the time on the table in the first image. This adjustment has been removed from the code so the time will now match the table.
![Screenshot 1](https://github.com/DukeWilki/Work-Day-Scheduler/blob/master/Assets/application.JPG)
![Screenshot 2](https://github.com/DukeWilki/Work-Day-Scheduler/blob/master/Assets/localstorage.JPG)

### Link to the App
https://dukewilki.github.io/Work-Day-Scheduler/

### Licence
Not applicable

## Built With
* [VScode](https://code.visualstudio.com/) - The editor of choice
* [Terminal](https:///) - What would we do without our bash?

## Authors
* **LUKE WILKINSON**

## Credits and links
