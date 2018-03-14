# Smart Dashboard

Hey guys! What you have in front of you right now is your very own, personal dashboard. It greets you, gives you a random but inspiring quote, tells you what the time and date is, gets the weather, and keeps track of all your todos. 

Or at least... that's what it's supposed to do. 

You see, it's not quite done yet. It needs some polishing and some of its features still haven't been built. That's what you guys are going to do today.

By the end of this walkthrough, you will learn how to:

 - Customize the background to any color or image
 - Insert your Name and any quote you'd like
 - Build a random quote selector
 - Customize the color of your todos in their different states. In other words, they will display a different color when they're being hovered over, when they're being crossed off, and when they're just being left the way they are.
 - Add in the weekday and date in the clock and style it to look good

As a disclaimer, I am building this webpage with a particular framework called React, and what this means is that you guys are gonna see a lot of different subfolders and a bunch of code written everywhere that's organized in a particular way. Don't worry about any of it besides the specific parts that I lead you through :)

## Alright, let's begin!

What is HTML?

- HTML stands for *Hyper Text Markup Language*
- HTML is a language that describes the structure of a web page element by element, building block by building block. It basically says **what** is on the webpage. Is there text here? Is there an image? Is there a group of elements? [More info...](https://www.w3schools.com/html/html_intro.asp)

What is CSS?

-  CSS stands for *Cascading Style Sheets*
- CSS decides **how** HTML  looks. Should this text be blue, or big? Should this part of the webpage be on the left side of the screen? [More info...](https://www.w3schools.com/css/default.asp)

What is JavaScript (or JS for short)?

- JavaScript is what makes a webpage interactive. When you click a button to send data to a server, or when you want the text to turn blue ONLY when you hover over it, JavaScript is responsible for making all that happen.
- Unlike HTML/CSS, JavaScript is a programming language like Python (what you saw with our rock paper scissors example) and can be used to write other coding programs outside of those meant just for web development as well.
- [More Info...](https://www.w3schools.com/js/)

### Getting setup

Before we get started with customizing the dashboard, we have to install some packages to make sure that the code actually has access to the framework I used to build the web application. Don't worry if it doesn't make sense. For now, you can just follow the steps.

1. Open a terminal window and navigate to your desktop

	`cd desktop` 

2. Install git if you haven't yet, git is basically a piece of software meant for downloading, storing, and sharing code 
	`git --version`
	If you don't have it installed it yet, this will cause the terminal to ask you to install it. In this case, just follow the instructions shown and it should take care of everything for you.
	
3.	Download this repository of code with git
	`git init`
	`git remote add origin git@github.com:ConderS/ACE\_WebDev\_Student.git`
	`git pull origin master`

4. Install the packages we need to run the application
	`npm install`

5. Start the demo locally on your computer!
	`npm start`

From here on out, any changes you make and save will also cause the web application to automatically update. So just wait a few seconds after each change you make and you should see it reflect on the web page.

Also, quite the ugly thing we have here. Let's make it pretty.

### Customizing the Background

Within the `src` directory, go into the `styles` folder and open up `index.css`. 
Btw, the location of this file is represented in this manner as `src/styles/index.css` and that's how I'll refer to file locations moving forward.
 
 This is all CSS, and `body`  happens to be the HTML element that covers the entire webpage. If we we change the color of the `body` element, then it should change the backdrop of the entire webpage.

So, let's add `background-color: steelblue;`

Voila, now we have a decent-looking background. `background-color` is a special CSS property that specifically addresses the color of the background of the HTML element. The color we chose is something that CSS already knows about, you can add custom colors by just putting in [hex color codes](http://www.color-hex.com/)

But we have a really cool background image too. Let's delete the `background-color` property and add this instead: `background-image: url("../assets/footer_lodyas.png");`

I've included an image called `footer_lodyas.png` in your `assets` folder so when you add this particular string inside `url()` it means -- go out of this folder to the one above it `..`,  to the `assets` folder, to the image `footer_lodyas.png` and set it as the `background-image`. 

All you have to do to customize your background-image is save an image in the `assets` folder and substitute its name where `footer_lodyas.png` is right now.

### Inserting your Name & Quotes

Now, go to `src/components/Me.jsx`, we're going to add some HTML now.

The HTML in this particular web framework is located within the `return (` statement. So go there and find `<div className="me-container">`. `div` is an HTML element, and it has a class called `me-container` that we use as a reference name for adding CSS to.

Now within `div`, put `<h1 className="me-title">Welcome _NAME_</h1>` and write your name in place of `_NAME_`. This creates an `h1` element, or a header, with the text "Welcome [your name]". It also has a class called `me-title` for us to style the header with later (like changing its color).

Underneath the `h1` element, put:
      `<p className="subheader">How are you?</p>`
      `<p className="subheader">- Bot</p>`

Now you've added paragraph text, `p` with a `subheader` CSS class each, that displays the text written between the `p` tags. You should now see this text showing in the center of the screen.

Go to `me.css` now and place the following CSS inside underneath what's already written:

    .me-title {
      margin-bottom: 20px;
      color: #ecf0f1;
    }
    
    .subheader {
      color: #bdc3c7;
    }


Remember those CSS classes we added earlier, here's when they come into play. With `margin-bottom` we tell the `h1` element (the one with the `.me-title` class) to push whatever is underneath it by `20px`, which is the `p` text in this case. This gives a bit more space in between so they dont look cramped together. And with the `color` property and the hex codes, we've set the text to some nice white and grayish text.


### Building a random quote selector

...in progress...


### Customizing the color of the Todos

### Adding the Weekday and the Date to the Clock and styling it
