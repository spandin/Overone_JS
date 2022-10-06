const food = ['cherry', 'melon', 'pear', 'apple', 'kiwi', 'raspberry', 'grapes', 'kiwi', 'cherry',  'pear', 'apple']

1.
const set = new Set([...food])

2.
set.add('lime')

3.
set.forEach((i) => {
    console.log(i);
}) 

4.
const newFood = [...set]
console.log(newFood);