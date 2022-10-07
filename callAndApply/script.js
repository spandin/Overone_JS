function bookingFlight(number, from, to, name) {
    console.log(`You have booked a flight from ${from} to ${to}. Flight ${number} of the airline ${this.airlineName}`);
    this.booking.push({ passenger: `${name}`, flightNumber: `${number}` })
}
   
const airline1 = {
    airlineName: 'Belavia',
    booking: []
}
   
const airline2 = {
    airlineName: 'Lufthansa',
    booking: []
}
   
const airline3 = {
    airlineName: 'WestJet',
    booking: []
}

bookingFlight.call(airline1, '12312512', 'Moscow', 'Minsk', 'Stanislau')
console.log(airline1);

bookingFlight.apply(airline2, ['563212', 'Moscow', 'Minsk', 'Stanislau'])
console.log(airline2);