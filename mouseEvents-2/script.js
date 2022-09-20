const box = document.querySelector('.box')
let width = parseInt(getComputedStyle(box).width) 
let height = parseInt(getComputedStyle(box).height) 

box.addEventListener('mousemove', (e) => {
    if (e.target.style.width && e.target.style.height) {
        let newWidth = parseInt(e.target.style.width) + 5
        let newHeight = parseInt(e.target.style.height) + 5
        e.target.style.width = newWidth + 'px'
        e.target.style.height = newHeight + 'px'
    } else {
        e.target.style.width = width + 5 + 'px'
        e.target.style.height = height + 5 + 'px'
    }
})

box.addEventListener('dblclick', (e) => {
    e.target.style.width = width + 'px'
    e.target.style.height = height + 'px'
})