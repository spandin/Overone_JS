const country = [ 'Cuba','Peru', 'Latvia', 'Portugal', 'Belgium', 'Sweden', 'Austria']

1.
const [country1, country2, ...other] = country
console.log(other);

2.
function sum(...a) {
return a.reduce((a, b) => a + b )
}

console.log(sum(25, 25));
console.log(sum(0, 11, 56));
console.log(sum(23, 967, 23, 2));