const button = document.querySelector('.btn')
const button2 = document.querySelector('.btn-2')
const button3 = document.querySelector('.btn-3')

let count = 16

const option = {
    once:true
}

function changeSize() {
    this.count += 2
    this.style.fontSize = `${count}px`
}

function changeColor() {
    this.style.color = `#a2f513`
}


1.
button.addEventListener('click', () => console.log('Event'))

2.
button.addEventListener('click', changeSize)

3.
button2.addEventListener('click', () => console.log('First event'))
button2.addEventListener('click', changeSize)

4.
button3.addEventListener('click', () => console.log('Third event'))
button3.addEventListener('click', changeSize, option)

