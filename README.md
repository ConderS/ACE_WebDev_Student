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

As a disclaimer, I am building this webpage with a particular framework called React, and what this means is that you guys are gonna see a lot of different subfolders and a bunch of particular code written everywhere that might seem really unrelated to everything else. Don't worry about any of it besides the specific parts that I lead you through :) 

Lastly, if you start having trouble with the things I mention here, don't be afraid to send me a quick email: conshou@gmail.com. I'm always happy to help.

## Alright, let's begin!

What is HTML?

- HTML stands for *Hyper Text Markup Language*
- HTML is a language that describes the structure of a web page element by element, building block by building block. It basically says **what** is on the webpage. Is there text here? Is there an image? Is there a group of elements? [More info...](https://www.w3schools.com/html/html_intro.asp)

What is CSS?

-  CSS stands for *Cascading Style Sheets*
- CSS decides **how** HTML  looks. Should this text be blue, or big? Should this part of the webpage be on the left side of the screen? [More info...](https://www.w3schools.com/css/default.asp)

What is JavaScript (or JS for short)?

- JavaScript is what makes a webpage interactive. It allows HTML/CSS to change based on some signal that you decide on. When you click a button to send data to a server, or when you want the text to turn blue ONLY when you hover over it, JavaScript is responsible for making all that happen.
- 
- Unlike HTML/CSS, JavaScript is a programming language like Python (what you saw with our rock paper scissors example) and can be used to write other coding programs outside of those meant just for web development as well.
- [More Info...](https://www.w3schools.com/js/)

### Getting setup

Before we get started with customizing the dashboard, we have to install some packages to make sure that the code actually has access to the framework I used to build the web application. Don't worry if it doesn't make sense. For now, you can just follow the steps.

1. Open a terminal window and navigate to your desktop

	`cd ~/desktop` 

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
 
 This is all CSS, and `body`  happens to be the HTML element that covers the entire webpage (located in `public/index.html`). If we we change the color of the `body` element, then it should change the backdrop of the entire webpage.

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

Go to `src/styles/components/me.css` now and place the following CSS inside underneath what's already written:

    .me-title {
      margin-bottom: 20px;
      color: #ecf0f1;
    }
    
    .subheader {
      color: #bdc3c7;
    }


Remember those CSS classes we added earlier, here's when they come into play. With `margin-bottom` we tell the `h1` element (the one with the `.me-title` class) to push whatever is underneath it by `20px`, which is the `p` text in this case. This gives a bit more space in between so they dont look cramped together. And with the `color` property and the hex codes, we've set the text to some nice white and grayish text.


### Building a random quote selector

Lets get some quotes down now and have the text randomly choose between them. Because this involves

In the `Me.jsx` file, find the `randomQuotes()` function. I've already stored some quotes into an array called `quotes`. Now we're going to do just a little bit of arithmetic to get this working. 

First we're going to need the number of quotes in the `quotes` array. We can use `quotes.length` to make that happen. However, we also to subtract 1 too for reasons I'll explain later. So write in: `var numberOfQuotes = quotes.length - 1;` 

Notice that we're creating a variable called `numberofQuotes` that we're storing this information in.

Now, like the rock-paper-scissors example you guys saw earlier in a programming language called Python, we're going to use a random generator available in JavaScript to do something similar.

In the next line, write: `var random = Math.random() * numberOfQuotes;`. 

We're saying here, get a random decimal between 0 and 1 and multiply it with `numberOfQuotes`, so this means if we have 3 quotes, and we've subtracted 1 like earlier, it's going to choose a number between 0 and 2 now. 

However, the thing about arrays, is that we can only access them by using integers to denote the position. The first element is located at index 0, the second at index 1, etc... So we need to round the decimal to some integer: `var quoteIndex = Math.round(random);`

Also, because arrays store the first element at index 0 rather than 1, it's why we had to subtract 1 earlier, so that we're in the correct range. Otherwise, if we round to 3 and try getting the quote located at index 3, we'd get an error. It's because our third, and last quote, is stored at index 2 and nothing exists at indices beyond that.

Now, let's get the quote with the `quoteIndex` that we've calculated:
 `var randomQuote = quotes[index];`

And since this is the quote we want, let's return it from the function:
`return randomQuote;`

Now, for reasons out of the scope of this guide, this quote is going to be returned and we're going to have access to it in the HTML now. Just keep in mind that the way in which we have access to it right now is particular to the kind of web framework I've build this dashboard in, but you won't always be able to refer to it like this. Either way, you guys can get the gist of how JavaScript and HTML work together.

Go to where you wrote the `h1` header and change the `p` elements to the following:

            <p className="subheader">{randomQuote.text}</p>
            <p className="subheader">{randomQuote.author}</p>

Now we've inserted a random quote object into the HTML and substituted its properties `text` and `author` as the text for the `p` elements to display. This is also only particular to the web framework I've built this in.

Objects are basically custom data that you can define to be associated with any number or type of properties. They're defined by `{}` as you can see in the `quotes` array, and the properties I'm referring to are also the same properties that I've created for each object in the array. If this is too much info at once - again, don't worry about it :) It's just to get your feet wet. 

### Customizing the color of the Todos

You might also notice that the todos are all one color and don't do anything when you click on them. This just requires a little bit of CSS.

Go to `src/styles/components/todos.css` 

Under the comment: `/* Set all odd list items to a different color (zebra-stripes) */` we're going to place the corresponding CSS.


    ul li:nth-child(odd) {
        background: rgba(249, 249, 249, 0.1);
    }

This is a very specific usage of CSS that you probably won't use that often. Basically it's setting the color of the background to the rgba value that's shown. `background`	 is a CSS property that can take in either color or image urls, so in this case it's functioning the same as `background-color`. 

Here, the CSS is: **For each** `ul` element that exists in this code, look at the `li` elements contained within, and set the background of every odd-numbered `li` element to this rgba value. The first `li` element would have this styling placed on it and so would the third, and fifth, etc..

 I chose these specific elements because I actually generate the Todo items as `li` HTML elements within one big `ul` element. So that's why it works out the way it does.

Now let's set a background color for hovering. 

	ul li:hover {
	    background: rgba(221, 221, 221, 0.5);
	}

In CSS, we can actually set styling on a specific *state* of an element. You can look up the different states available for HTML elements but in this case we're only concerned with the `hover` state. By including `:hover` to `li` we're saying that we want to set this styling only when we hover over a `li`  element that happens to be contained with a `ul` element.

Hopefully that wasn't too confusing. 

Now as our very last set of styling, we want the text to be crossed off when we click on it and the color to change too. Let's add:

	ul li.checked {
	    background: rgba(250, 250, 250, 0.8);
	    color: #fff;
	    text-decoration: line-through;
	}

In the JavaScript code, we're actually manually adding the `checked` class to the `li` element when we click on it. Don't worry about how it's done, for our purposes I just wanted you to understand that `checked` can be any CSS class and that it's not some special keyword like the above cases for `hover` and `nth-child`. Also notice that we're using the `.` here to refer to `checked` and not the `:`, this usually means we're referring to a class and not a state.

Great. We're done. When the todo item is checked, the background is set to white, the color of the text is set to white, and the text gets crossed off (`text-decoration` is responsible for this last part).

### Adding the Weekday and the Date to the Clock and styling it

This is a bit more involved, but we're going to add in the Month, Date, and Weekday now to the Clock.

In `src/components/Time.jsx` write the following underneath the `MONTH_NAMES` and `DAYS` arrays: `const date = new Date();`

JavaScript has an object called `Date` that you can create in the way that we just did. We basically created an *instance* of it and set it to a variable called `date`. It's not "stored" in the same way  we've stored information in our other variables but for now, you can treat it the same way as you would any other variable.

The `Date` object happens to have a `.getMonth()` function that, when called, gets the current Month. January is represented as 0, February as 1, March as 2, and so on. Conveniently, we can use this number as an index for the `MONTH_NAMES` array. So let's write: 
`const month = MONTH_NAMES[date.getMonth()];`

This means get the current Month from the `date` variable that contains the `Date` object. And use that value as the index for the `MONTH_NAMES` array. Since March is represented as 2, this will get index 2 of the array or the third position (since everything starts at 0), and this happens to also correspond to the string "March". We store this string into a variable called `month`.

Note: you might notice that we use `var` and `const` for creating variables. The only difference between the two is that `var` lets you modify the variable after you create it, and `const` prevents you from doing so. I usually `const` so I remind myself I'm not supposed to change the value of that variable anymore.

Now let's get the date of the month with the function `.getDate()` that the `Date` object also happens to have.
`const monthDay = date.getDate();`

And now the actual weekday:
`const day = DAYS[date.getDay()];`

Since `.getDay()` returns a number representation of the weekday like `.getMonth()` does (Sunday is 0, Monday is 1, etc..) we use the same tactic as before and use the number as an index for the `DAY` array of strings.

Now we're going to add some HTML with the unique `{}` that we used last time to plug in the information contained within these variables. Underneath the `<Clock ... />` element, write the following:

	   <p className="date">{day}</p>
	   <p className="date">{month} {monthDay}</p> 

We add some `p` elements again with a `date` class. Let's style it now:

In `src/styles/components/time.css`, write at the bottom:

	.date {
	    color: #ecf0f1;
	    font-size: 2em;
	    width: max-content;
	    margin-right: 0;
	}

We set the color of the text to a particular hex color code, the font-size to a particular value, the width to the maximum width of the elements contained within (this might be out of the scope of this guide), and we remove some spacing on the right to make sure it fits (again, this might be out of this guide's scope so don't stress about it). 

Awesome! You're done. If you go to this [link](https://github.com/ConderS/ACE_WebDev_Full), it shows a GIF for what the finished version of the dashboard should look like. The point of all this was just to get you a bit exposed and excited about how web development works so hopefully something like 

### What you can do now & More Resources

If you made it this far, congratulations. No seriously, it's a big feat to just let yourself dive into something that you may have very little or no experience of whatsoever. 

If you want to learn more - and hopefully you're somewhat curious to do so now :), here are some great links for you to begin with. They'll bring you back to the very beginning again but this time, will  have even more interactive exercises and guides (and probably better ones too) for you to really get the hang of this. If it feels overwhelming and really intimidating, no need to stress, I've been in the exact same position and only feel comfortable now after lots of practice. I no doubt believe that you can do it too!

### Links to Resources

- [Codecademy](https://www.codecademy.com/) is my most recommended resource. Just go on here and select one of the free courses that look interesting, and begin! They teach through step by step interactive exercsies and have been the most helpful resource that I have personally found to learn programming concepts and languages with.
- [KhanAcademy](https://www.khanacademy.org/computing/computer-programming) is also pretty amazing. Interactive exercises, clear explanations, go for this if you get bored of Codecademy.
- [FreeCodeCamp](https://www.freecodecamp.org/) is really great as well. They'll bring you through everything you need to know about web development and more. AND you get to work on projects for non-profits. I do recommend that you first go through the links above before you try coming here. But definitely give this a shot once you think you have a good grasp of things.

And lastly, Google! Googling your errors and your issues is the trademark of any developer. Websites like StackOverflow tend to show up with answers and questions for pretty much any bug or issue you might come across.

Also, like I mentioned in the beginning, if you're ever having problems with anything mentioned in this guide, or just want to chat, my email is: conshou@gmail.com. Don't be afraid to say hi :D 

