const country = ['Peru', 'Portugal', 'Sweden', 'Austria']

const newCountry = [...country]
console.log(newCountry);

const str = 'React'

const arrStr = [...str]
console.log(arrStr);

// 3. Напишите функцию orderFood, которая в качестве параметров ожидает адрес, время, имя получателя и заказ. 
// При вызове функции необходимо передавать массив с данными значениями. 
// Сделайте так, чтобы при получении параметров данный массив был развёрнут.

const order = ['Минск ул.Ленина д.54', '12:23', 'Stanislau', 'Pizza']

function orderFood(ind1, ind2, ind3, ind4) {
  document.body.innerHTML += `Адрес: ${ind1}, Время: ${ind2}, Заказчик: ${ind3}, Заказ: ${ind4}. `;
}

orderFood(...order)