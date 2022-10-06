const country = ['Peru', 'Portugal', 'Sweden', 'Austria']

const newCountry = [...country]
console.log(newCountry);

const str = 'React'

const arrStr = [...str]
console.log(arrStr);

const order = ['Минск ул.Ленина д.54', '12:23', 'Stanislau', 'Pizza']

function orderFood(ind1, ind2, ind3, ind4) {
  document.body.innerHTML += `Адрес: ${ind1}, Время: ${ind2}, Заказчик: ${ind3}, Заказ: ${ind4}. `;
}

orderFood(...order)
