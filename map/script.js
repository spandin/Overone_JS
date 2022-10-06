// 1. Создайте Map.
// 2. Добавьте туда 2 свойства. Для первого в качестве ключа должен выступать булевый тип данных, для второго - массив.
// 3. Получите значение второго свойства (ключом для которого выступает массив).
// 4. Удалите из Map первое свойство.

const map = new Map()

const keyArray = [22, 02]
map.set(true, 'first').set(keyArray, 'second')

console.log(map.get(keyArray));

map.delete(true)

console.log(map);
