var requestUrl = 'https://api.seatgeek.com/2/events?client_id=MzI3NDA1MDJ8MTY4MDIxOTA5Ni41MTQxMzg3';

fetch(requestUrl)
  .then(function (response) {

    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });