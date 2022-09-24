const btn = document.querySelector('.btn');
const container = document.querySelector('.container')

const description = document.createElement('p')
description.innerHTML = 'Начинается композиция с насыщенных пряных нот розового перца. В сердце духов доминирует теплый и притягательный аромат кофе, он бодрит и пробуждает, усиливает атмосферу роскоши и соблазна. Шлейф парфюма теплый и сладкий, с древесно-мускусными нюансами — так раскрывается нота зеленого листа пачули'

btn.addEventListener('click', (e) => {
  e.stopPropagation()
  container.appendChild(description)
})

container.addEventListener('click', () => {
  container.style.borderColor = 'violet'
})

