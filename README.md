# Counter 
![Screenshot 2025-02-01 214014](https://github.com/user-attachments/assets/5f8619bb-aa60-47b9-bf8d-d408251f8463)
<h2>About the project</h2>
I built this project for Start2Impact's frontend development course. The task was to develop a simple counter that increases
or decreases the value of a certain number by one. This project allowed me to implement the basics of JavaScript I learned thanks to the course. To this I added various themes
to pick from and a simple function that shows the current date.


## Built with

- HTML
- CSS 
- JavaScript



# What I learned
Not only did I learn to apply the theoretical notions I had learned regarding the fundamentals of JavaScript - from the very basics to functions or DOM manipulation - but 
I also had the possibility to learn more about CSS, particularly in relation to creating a theme. This gave me the right confidence to find the resources I need to add what I want to my
projects and the ability to discern the reliable ones from the others. <br>
When it comes to dealing with CSS variables, Kevin Powell's tutuorials were of great help. Here's an example of the way they were used in this project: 


```css
.light {
    --clr-body-bg: #F8FAFC;
    --clr-text: rgb(36, 36, 36);
    --clr-button: #9AA6B2;
    --clr-hover: #7e8c9a; 
  }
```
When it comes to Javascript, I was delighted to find a simple way to add a date to my project in my quest to make it more appealing. That being: 

```javascript
const dateAndTime = new Date();
document.getElementById("dateAndTime").innerHTML= dateAndTime.toDateString();
```
# Recources 

- [Edoardo Midali's JavaScript tutorial](https://www.youtube.com/playlist?list=PLP5MAKLy8lP9FUx06-avV66mS8LXz7_Bb)
- [30 Days of JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript)


