function bookingFlight(number, from, to, name) {
    console.log(`You have booked a flight from ${from} to ${to}. Flight ${number} of the airline ${this.airlineName}`);
    this.booking.push({ passenger: `${name}`, flightNumber: `${number}` })
   }
    
   const airline1 = {
    airlineName: 'Southwest Airlines',
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

   bookingFlight.bind(airline1, 213123, 'USA', 'Belarus', 'Stanislau')()
   console.log(airline1);

   const booking = bookingFlight.bind(airline2, 094321, 'Deuthland', 'Belarus')
   booking('Stanislau')
   console.log(airline2);
   

   const myBooking = bookingFlight.bind(airline3, 312362, 'China', 'Belarus', 'Stanislau')()
   console.log(airline3);


function getNumber() {
    let {booking: [obj]} = this
    console.log(obj.flightNumber ?? 'Не имеет номера');
}
getNumber.bind(airline1)()

