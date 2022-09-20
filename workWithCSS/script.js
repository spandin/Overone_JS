// 1.
let tittle = document.createElement('h1')
tittle.innerHTML = 'Tittle text'
tittle.style.cssText = 'font-size: 34px; font-weight: 500; color: #c3fdfa; font-family: Lucida Console;'
document.body.prepend(tittle)

// 2.
let circle = document.createElement('div')
circle.innerHTML = ''
circle.style.cssText = 'width:50px; height:50px; background-color: #a5a; margin: 0 auto; border-radius: 50px;'
tittle.after(circle)

// 3.
let circle2 = document.createElement('div')
circle2.innerHTML = ''
circle2.classList.add('css-box')
circle.after(circle2)

// 4.
console.log(getComputedStyle(circle2));

