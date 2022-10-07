let = userName = 'Stanislau'

function makeReservation(name) {
    let ticketNum = 187
    return () => this.booking.push({ passenger: `${name}`, flightNumber: `${ticketNum++} ` })
}
    
   const airline1 = {
    airlineName: 'Belavia Airlines',
    booking: []
   }

const airlineCompany = makeReservation.bind(airline1, userName)()

airlineCompany()
airlineCompany()
airlineCompany()

console.log(airline1);
