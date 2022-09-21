const keyBlock = document.querySelector('.key')
const whichBlock = document.querySelector('.which')
const codeBlock = document.querySelector('.code')

document.addEventListener('keydown', (e) => {
    keyBlock.innerHTML += `<span>${e.key}; </span>`;
    document.key.append(keyBlock);
})

document.addEventListener('keydown', (e) => {
    whichBlock.innerHTML += `<span>${e.which}; </span>`;
    document.key.append(whichBlock);
})

document.addEventListener('keydown', (e) => {
    codeBlock.innerHTML += `<span>${e.code}; </span>`;
    document.key.append(codeBlock);
})



