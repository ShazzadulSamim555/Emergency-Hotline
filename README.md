🔗 [Live Website](https://shazzadulsamim555.github.io/Emergency-Hotline/)


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 ANS:- getElementById()- it's select only One specific Id and it's return only one element value
       getElementsByClassName()- It's select all specific class name and return HTMLcollection or array-like object
       getElementsByClassName()- it's select all specific class or Id element and return nodeList
       querySelector()- it's select only one element or first element and return this specific element

2. How do you create and insert a new element into the DOM?
       Firstly we create a new element then append this in the parent element
       first- create element- let new= document.createElement('div');
       second- then push it in parent element- parentElement.appendChild(new);

3.What is Event Bubbling and how does it work?
Ans:-  Event Bubbling is necessary for find the any element of this code. We can access any element of their child element or parent element or
       grandParent element.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:-  By Using Event Delegation we can event handle any child by their parent element

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:-  preventDefault()- it is prevent the browser default action
       stopPropagation()- It is stop the event Bubbling up