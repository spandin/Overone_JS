// Создайте на странице 3 блока: event.key, event.which, event.code. 
// Добавьте слушатель события, который будет отслеживать нажатие клавиши и помещать 
// в созданные блоки информацию из объекта event.
const keyBlock = document.querySelector('.key')
const whichBlock = document.querySelector('.which')
const codeBlock = document.querySelector('.code')

document.addEventListener('keydown', (e) => {
    keyBlock.innerHTML += `<span>${e.key}; </span>`;
    document.key.append(keyBlock);
    console.log(e);
})

document.addEventListener('keydown', (e) => {
    whichBlock.innerHTML += `<span>${e.which}; </span>`;
    document.key.append(whichBlock);
    console.log(e);
})

document.addEventListener('keydown', (e) => {
    codeBlock.innerHTML += `<span>${e.code}; </span>`;
    document.key.append(codeBlock);
    console.log(e);
})



