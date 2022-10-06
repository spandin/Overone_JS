"use strict"

1.
const car = {
    color: 'orange',
    engine: '3.6L V6',
    model: 'AL3'
}

Object.seal(car)
car.price = 2000
console.log(car);

2.
const user = {
  
    name: "Tom",
    age: 26,
    display: function(){
      
        console.log(this.name);
        console.log(this.age);
    }
};

Object.freeze(user)
user.name = 'Alex'
console.log(user);

3.
console.log(Object.keys(user).length);