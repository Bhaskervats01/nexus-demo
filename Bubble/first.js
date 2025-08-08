const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Event Bubbling And Event Capturing(event capturing have three event{addEventListener(first_event, callback, capture)})

// 1.If Event Bubbling is False our result is child, parent, grandparent:

// child.addEventListener('click',()=>{
// console.log("child Clicked");
// },false)

// parent.addEventListener('click',()=>{
// console.log("parent Clicked");
// },false)

// grandParent.addEventListener('click',()=>{
// console.log("grandParent Clicked");
// },false)

// 2. If Event Bubbling is True Result is alternate:

child.addEventListener('click',()=>{
console.log("child Clicked");
},true)

parent.addEventListener('click',()=>{
console.log("parent Clicked");
},true)

grandParent.addEventListener('click',(event)=>{
console.log("grandParent Clicked");
// console.log(event.currentTarget);
// console.log(event.target);
},true)
