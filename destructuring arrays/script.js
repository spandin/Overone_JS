1.

const food = ['cherry', 'melon', 'pear', 'apple', 'kiwi', 'raspberry', 'grapes']

const [a, b, , c, d] = food

console.log(a);

console.log(b);

console.log(c);

console.log(d);

2.

const years = [2000, 2004, 2006]

const [a, b, c] = years

console.log(a);

console.log(b);

console.log(c);

3.

const country = ['Belgium', 'Cuba', ['Latvia', 'Peru', 'Portugal']]

const [ , , [a, b, c]] = country

console.log(a);

console.log(b);

console.log(c);