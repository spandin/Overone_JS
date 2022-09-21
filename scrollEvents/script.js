const btnMore = document.createElement('div')
btnMore.classList.add('see-more')

document.addEventListener('scroll', (e) => {
    if (window.scrollY >= window.scrollY - 1) {
        btnMore.innerHTML = `<button>Показать</button>`
        document.body.append(btnMore)
    }
})


btnMore.addEventListener('click', (e) => {
    const content = document.createElement('div')
    content.style.cssText = 'background-color: #000; height: 100vh;'
    document.body.append(content)
})

