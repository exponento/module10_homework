const sendMessage = document.getElementById('sendMessage');
const geoloc = document.getElementById('geoloc');
const input = document.getElementById('input');
const output = document.getElementById('output');
const myUrl = "wss://echo-ws-service.herokuapp.com";
let latitude;
let longitude;
let websocked;
function connect(){
websocked = new WebSocket(myUrl);
websocked.onopen = function(evt){
    console.log('connect');
websocked.onmessage = function(evt){
    if (evt.data != `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`){
    output.insertAdjacentHTML('beforeend', `<div class = "our message">${evt.data}</div>`)
    } else{
        output.insertAdjacentHTML('beforeend', `<div class = "our message">Запрет на вывод Гео-локации</div>`)
    }
};
};
};
function message (){
    let myMessage = input.value;
    output.insertAdjacentHTML('beforeend', `<div class = "my message">${myMessage}</div>`)
    websocked.send(myMessage);
    input.value = '';
};
function success(position){
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    let myGeoloc = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    output.insertAdjacentHTML('beforeend', `<div class = "my message"><a href = "${myGeoloc}">Гео-локация</a></div>`);
    websocked.send(myGeoloc);
};
function error(){
    output.insertAdjacentHTML('beforeend', '<div>Позиция не определена</div>')
};
function geolocFanc(){
    navigator.geolocation.getCurrentPosition(success, error)
};
connect();
sendMessage.addEventListener('click', message);
geoloc.addEventListener('click', geolocFanc);
