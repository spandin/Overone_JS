const person = {
    name: 'Elena',
    birthYear: 1995,
    getAge: function () {
      return 2022 - this.getAge
    },
    isMarried: true
}

Object.defineProperties(person, {
    name: {
        configurable: false
    },
    birthYear: {
        writable: false
    },
    getAge: {
        enumerable: false
    }
})

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(Object.getOwnPropertyDescriptor(person, 'birthYear'));
console.log(Object.getOwnPropertyDescriptor(person, 'getAge'));

for (let i in person) {
    console.log(i);
}