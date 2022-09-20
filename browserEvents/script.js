// 2. Добавьте для данной кнопки еще одно событие onclick. Посмотрите, какое из них отработает. 
// Подумайте, почему так происходит?
// 3. Создайте ещё одну кнопку. Добавьте на неё два события с помощью addEventListener. 
// Посмотрите, как они отработают. Почему так происходит?

const button = document.querySelector('.btn')
const button2 = document.querySelector('.btn-2')

function changeClr() {
    this.style.fontSize = '48px'
}


1.
button.addEventListener('click', () => console.log('Event'))

2.
button.addEventListener('click', changeClr)

3.
button2.addEventListener('click', () => console.log('First event'))
button2.addEventListener('click', changeClr)
