const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const text = document.querySelector('.text')


container.addEventListener('click', (e) => {
    if (e.target.closest('.btn')) {
        if (text.classList == 'text') {
            btn.innerHTML = 'Скрыть описание'
            text.className = 'text-visible'
        } else if (text.classList == 'text-visible') {
            btn.innerHTML = 'Показать описание'
            text.className = 'text'
        }
    }
})