const canada = {
    name: {
      common: "Canada",
      official: "Canada"
    },
    region: "Americas",
    subregion: "North America",
    languages: ["English", "French"],
    continents: ["North America"],
    flags: {
      png: "https://flagcdn.com/w320/ca.png"
    }
}

const { flags: {png}, name: {common}, captila = 'Ottawa', languages: [firstLang, secondLang],
currencies = 'CAD' } = canada

document.querySelector('img').src = `${png}`
document.querySelector('.info__conuntry').innerHTML += `${common}`
document.querySelector('.info__capital').innerHTML += `${captila}`
document.querySelector('.other-info__languages').innerHTML += `Languages: ${firstLang}, ${secondLang}`
document.querySelector('.other-info__currencies').innerHTML += `Currencies: ${currencies}`

