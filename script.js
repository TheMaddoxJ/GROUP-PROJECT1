//var requestUrl = 'https://api.seatgeek.com/2/events?client_id=&appid=MzI3NDA1MDJ8MTY4MDIxOTA5Ni41MTQxMzg3';
// var requestUrl = 'https://api.seatgeek.com/2/events?client_id=' + ApiKey;
var ApiKey = "MzI3NDA1MDJ8MTY4MDIxOTA5Ni41MTQxMzg3"
var requestUrl = 'https://api.seatgeek.com/2/events?venue.state=FL' + ApiKey;
var search =  document.getElementById('searchBtn')

function fetch(searchInput) {
fetch(requestUrl)
  .then(function (response) {

    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
});
}

  function getSeatgeek(event) {
    event.preventDefault();
  var searchInput = document.querySelector('.search-bar').value
  }
  //document.getElementById('searchBtn').
  search.addEventListener('click', getSeatgeek);