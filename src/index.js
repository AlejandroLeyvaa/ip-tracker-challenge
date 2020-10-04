import './styles/styles.css';

const map = () => {
  const accessKey = process.env.MAPBOX_API_KEY;

  const text = document.getElementById('data')
    .addEventListener('submit', async (e) => {
      let address = document.getElementById('address');
      let location = document.getElementById('location');
      let timezone = document.getElementById('timezone');
      let isp = document.getElementById('isp');

      const data = e.target.text.value;

      address.innerText = data;
      location.innerText = data;
      timezone.innerText = data;
      isp.innerText = data;

      console.log(data);
      console.log(e);
      e.preventDefault();
  });

  let map = L.map('mapid').setView([24.8042,  -107.431], 13);
  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessKey}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    access_token: accessKey,
  }).addTo(map);
};

map();




