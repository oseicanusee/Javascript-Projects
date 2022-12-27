let baseUrl = "https://www.superheroapi.com/api.php/10223569763528853/";
const superbutton = document.getElementById("getHero")
const heroDiv = document.getElementById("heroImage")
const heroSearchButton = document.getElementById("heroSearchButton")

const getSuperHero = () => {
  console.log("clicked")
  let randomSuperHero = Math.floor(Math.random() * 731);
  let url = `${baseUrl}${randomSuperHero + 1}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let stats = data.powerstats
    let powerstats = construct(stats)
    let name = `<2>${data.name}</h2>`
    heroDiv.innerHTML = `${name}<img src= "${data.image.url}" width=300px height=300px/>${powerstats}`
  })
}


const getSuperBySearch = () => {
  let name = document.getElementById("heroSearchText").value;
  console.log(name)
  
  let url = `${baseUrl}search/${name}`
  console.log(url)
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    let img = (data.results[0].image.url)
    let name = `<h2>${data.results[0].name}</h2>`
    let stats = (data.results[0].powerstats)
    let powerstats = construct(stats)
    heroDiv.innerHTML = `${name}<img src= "${img}" width=300px height=300px/> ${powerstats}`
  })
}


const construct = (powerstats) => {
  // another way of doing things 
  // let stats = Object.keys(powerstats).map(key => `<p>${key}:${powerstats[key]}</p>`)
  
  let info = []
  for(const stat in powerstats){
     info.push(`<p>${stat.toUpperCase()}: ${powerstats[stat]}</p>`)
  }
  return info.join('');
}

superbutton.onclick = () => getSuperHero();
heroSearchButton.onclick = () => getSuperBySearch();



