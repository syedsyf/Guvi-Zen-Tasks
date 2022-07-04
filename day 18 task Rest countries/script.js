


async function renderCountries(){
  document.getElementById("container").innerHTML =`<h2 class="text-center">Loading..Countries Data</h2>`
  try{
    let response = await fetch("https://restcountries.com/v3.1/all")
    let data = await response.json()
    document.getElementById("container").innerHTML =``
    data.forEach((country,key) => {
      document.getElementById("container").innerHTML +=`
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 pt-5">
          <div class="card h-100">
            <div class="card-header text-center">
              ${country.name.common}
            </div>
            <img class="card-img-top" src="${country.flags.svg}">
            <div class="card-body text-center">
              <div class="card-text">
                <p>Capital:${country.capital}</p>
                <p>Region:${country.region}</p>
                <p>Country Code:${country.altSpellings[0]}</p>
            </div>
            <div id="${key}"></div>
            <button class="btn btn-primary" onClick="getWeather(${country.latlng[0]},${country.latlng[0]},${key})" >Click for Weather</button>
          </div>`
    });
  }
  catch(e){
    alert("Failed to fetch countries")
    console.log(e);
  }
 
}
async function getWeather(lat,long,id){
  document.getElementById(id).innerHTML = "Loading weather...";
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=30b26d08a25a7d0af5c13e9a40c5bb46&units=metric`)
  let data = await response.json();
  document.getElementById(id).innerHTML = "";
  document.getElementById(id).innerHTML = `
      <p>Weather:${data.weather[0].main}</p>
      <p>Temprature:${data.main.temp}</p>
      `;

}


renderCountries();