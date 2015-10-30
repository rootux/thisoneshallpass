# Viewer app
### Decisions

I've decided to show basic javascript skills.
I've created our own namespace **viewerApp** - for this "small" size project it may seem a little "Analysis paralysis" yet I felt I should have some structure to the app. also - all is in  **script.js** file - we could move every part of the app (models, controllers, views) to it's own file/folder

I've decided to use a queue so we will have an order of calls and in the future if we add more people it won't matter

### Main methods
**toggle** - toggle the 'on' class on the button and if button just turned 'on' add it to the queue

**welcomePerson** - 
if button is not 'on' - doesn't show welcome
otherwise animates the welcome message (P.S it has a callback because the queue.js lib needs a callback)

### 3rd Libraries

- I've used JQuery for the animations, though if you want I can craft it with CSS3 animations.
- For the main model - I've used [Queue.js](https://github.com/mbostock/queue).

### Coupling notes
I could use another data model (Along with the queue) that will save the states of each button - instead I've decided to use a class on the button as a mean to check if the button is currently press or not - this decision creates some coupling on the welcomePerson function - I believe otherwise it would be harder to maintain and also could lead to UI / Model 'out of sync' bugs.