const conteiner = document.querySelector('.conteiner')

function randomClr() {
    return Math.floor(Math.random() * 255)
}

conteiner.addEventListener('click', (e) => {
    console.log(e.target);
})

conteiner.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = `rgb(${randomClr()}, ${randomClr()}, ${randomClr()})`
})
