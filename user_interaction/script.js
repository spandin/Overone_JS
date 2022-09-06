let userName = prompt('Ваше имя?')
let userAge = prompt('Ваш возраст?')
let learning = confirm('Вы изучаете JS?')

console.log(userName);
console.log(userAge);

if (learning == true) {
    console.log('да');
} else {
    console.log('нет');
}