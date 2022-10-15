const form = document.forms.shelfLifeForm

const manufacturing = form.manufacturingDate
const shelf = form.shelfLife
const btn = form.submit

function getCalc(param1, param2) {
    return (Date.parse(param2) - Date.parse(param1)) / (1000 * 60 * 60 *24)
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const days = getCalc(manufacturing.value, shelf.value)
    document.body.innerHTML += `До конца срока: ${days}`
    form.reset()
})

