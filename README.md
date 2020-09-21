# work-day-scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

# Usage

![Screenshot](./assets/img/screenshot.pngscreenshot.png)

The Work Day Scheduler dynamically creates rows based on the users work hours (default 9am-5pm). If a time block is in the past, the box color is gray. If the box represents the current hour, the color is red. If the box represents time in the future, the color is green.

Each text box is tied to its own local storage and includes a save button. When the save button is clicked, the current contents of the text box of that row overwrites the local storage and updates the "todo" item (which will survive on reload)
