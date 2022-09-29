const form = document.forms.getInfo

const firstName = form.firstName

const SecondName = form.SecondName

const abountyou = form.abountyou

const select = form.marital

const radio = form.drags

const checkbox = form.confirmation

const button = form.submit

checkbox.addEventListener('change', (e) => {
    if (checkbox.checked == true) {
        button.style.display = 'block'
    } else {
        button.style.display = 'none'
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let userInfo = document.createElement('div')
    userInfo.className = 'user-info'
    userInfo.innerHTML += `<h1>Ваши данные</h1>`
    userInfo.innerHTML += `<p>Имя: ${firstName.value}</p>`
    userInfo.innerHTML += `<p>Фамилия: ${SecondName.value}</p>`
    userInfo.innerHTML += `<p>О себе: ${abountyou.value}</p>`
    userInfo.innerHTML += `<p>Семейное положение: ${select.value}</p>`
    userInfo.innerHTML += `<p>Употребляли наркотики: ${radio.value}</p>`

    document.body.append(userInfo)
})
