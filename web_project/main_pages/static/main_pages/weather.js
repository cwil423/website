

window.addEventListener('load', () => {
  let lat;
  let long;
  const weatherTemp = document.querySelector('.temperature')
  const weatherSummary = document.querySelector('.summary')

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/92a802ded7149746069a02887c2bf3e0/${lat},${long}`;

      fetch(api)
        .then(response => response.json())
        .then(data => {
          const {temperature, summary} = data.currently;
          weatherTemp.textContent = temperature + ' °F';
          weatherSummary.textContent = summary;
          console.log(data)
          
        });

    })
  }
}) 
