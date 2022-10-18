const container = document.querySelector('.container')
let width = parseInt(getComputedStyle(container).width) 

function scalingEl() {

    if (width < 1000) {
        width += 5
        container.style.width = width + 'px'
        console.log(width);
    } else {
        clearInterval(id)
    }
}

const id = setInterval(scalingEl, 100);
