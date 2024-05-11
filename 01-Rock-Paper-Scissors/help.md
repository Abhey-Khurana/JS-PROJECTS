***
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
This @import rule in CSS is used to import an external style sheet into another style sheet

***
* means universal selector
* {} in your CSS rules, it means you are applying styles to every single element within the document

by default margin is of 8px

*****

box-sizing :border-box means total width and height of element including padding boder
box-sizing :content-box means it will affect the actual content width excluding padding and border

******
<section> is a semantic HTML5 element that helps in describing the purpose or theme of the content within it.
<section> for structuring content into meaningful sections
Semantics tags describe different purposes and also helps in SEO

div is a generic tag to group elements and is block element that it adds line
break after one element

span is a inline element and doesn't adds a line break
<span> is often used to apply CSS styles, such as color, font size, or text formatting, to individual words or phrases within paragraphs or headings.


********
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f6f7fb;
}

100vh means body will take full height of the viewport

justify conent means x axis
align-items means y axis

Flexbox is a powerful layout system designed to make it easier to design complex and responsive layouts in a more efficient way compared to traditional CSS techniques.

Simplifies complex layouts that were previously difficult to achieve with CSS.
Provides more control over spacing, alignment, and distribution of elements.
Makes it easier to create responsive designs without relying heavily on media queries.
Reduces the need for floats and positioning hacks, leading to cleaner and more maintainable code.

********
box-shadow :0px 5px 10px rgba(1,2,3,.1)
horizontally kinna bahr krna
vertically kinna upar krna
blur kinna krna background

last is color and transparency of shadow
7rem (7 times the size of the root font)


***
transform :rotate(90) clockwise rotate
rotateY(180deg) rotate photo wrt y axis

****
pointer-events:none
disables the click events

**********
opacity is transparency level 0-1 1(default)
*******
transition
It defines how a CSS property should change from one state to another.

write script tag at the end of the body

defer in script tag is an attribute that tells that run the JS when 
full HTML code is rendered

***********

let a=[A,B,C][1]==> B works like array[1]

********
e.target.querySelector("img").src;
applying query selector inside the selected element

***********
const userImage=document.querySelector(".user_result img");
get image by selecting inside user_result

*******
Animation

Selector .container.start .user_result:

This selector targets elements with the class .user_result that are descendants of an element with both classes .container and .start.
It's important to note that this selector requires that the element with the class .user_result is a descendant of another element with both .container and .start.

50% { transform: rotate(10deg); }:

This part of the @keyframes rule specifies the CSS properties at the 50% point of the animation.
When the animation reaches the 50% point (halfway through its duration), it applies a transform of rotate(10deg) to the elements.
