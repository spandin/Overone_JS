// 1. Добавьте на страницу div и установите ему data-атрибут.
// 2. Стилизуйте данный div, обращаясь к нему через data-атрибут.
// 3. Получите данный элемент, используя data-атрибут, выведите его консоль.
// 4. Получите значение data-атрибута и выведите его в консоль.

const block = document.querySelector('[data-css="non-style"]')

block.dataset.css = 'style'

console.log(document.querySelector('[data-css="style"]'));

console.log(block.dataset.css);
