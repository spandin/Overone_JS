const link = document.querySelector('.link')

const msgLink = document.createElement('span')
msgLink.innerHTML = 'Переход на новую страницу был отменён'

link.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.append(msgLink)
})

document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    console.log(e.type);
})