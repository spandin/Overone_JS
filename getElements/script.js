// 1.
const child = document.childNodes
console.log(child);

// 2.
const paragraph = document.getElementsByTagName('p')
console.log(paragraph);

// 3.
const tittle = document.getElementsByClassName('tittle')
console.log(tittle);

// 4.
const ulList = document.querySelectorAll('ul > li')
console.log(ulList);

// 5.
const getBoxes = document.getElementsByClassName('box')
console.log(getBoxes);

const queryBoxes = document.querySelectorAll('.box')
console.log(queryBoxes);

// 6.
const queryFirstBoxes = document.querySelector('.box')
console.log(queryFirstBoxes);



