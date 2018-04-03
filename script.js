var bgbody = document.getElementsByTagName('body')[0];
var weather = document.getElementById('weather');
var city = document.getElementById('city');
var temp = document.getElementById('temp');
var imgUrl = document.getElementById('image');

var place = 'Minsk';
var apiKey = '1a4d107add333cd1ac0a63b5119e18a2';
var url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}`;

function getCityName(cityName) {
  var req = new XMLHttpRequest();
  req.onload = function() {
    var response = req.response;
    city.textContent = response.name + ', ' + response.sys.country;
  };
  req.open('GET', cityName, true);
  req.responseType = 'json';
  req.send();
}
getCityName(url);

function getTemp(tempUrl) {
  var req = new XMLHttpRequest();
  req.onload = function() {
    var response = req.response;
    temp.textContent = Math.round((response.main.temp - 273)) + ' ' + '°C' + ' ' + response.weather[0].main;
    // console.log(response);
  };
  req.open('GET', tempUrl, true);
  req.responseType = 'json';
  req.send();
}
getTemp(url);

function getImg(getIco) {
  var req = new XMLHttpRequest();
  req.onload = function() {
    var response = req.response;
    var iconCode = response.weather[0].icon;
		imgUrl.setAttribute('src', 'https://openweathermap.org/img/w/' + iconCode + '.png');
  };
  req.open('GET', getIco, true);
  req.responseType = 'json';
  req.send();
}
getImg(url);

function changeBg(getColor) {
  var req = new XMLHttpRequest();
  req.onload = function() {
    var response = req.response;
    var sky = response.weather[0].description;
    if(sky == "clear sky") {
      bgbody.style.backgroundColor = '#FFF7A0';
    } else if(sky == "rain") {
      bgbody.style.backgroundColor = '#ACACAC';
    } else if(sky == "snow") {
      bgbody.style.backgroundColor = '#606971';
    }
  };
  req.open('GET', getColor, true);
  req.responseType = 'json';
  req.send();
}
changeBg(url);