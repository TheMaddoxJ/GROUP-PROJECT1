var dogBox = document.getElementById("container");
var button = document.getElementById("dog-btn");

 function getDog(){
fetch('https://api.thedogapi.com/v1/images/search?api_key=live_sjFbesElsFGatTKcDjDAY6CEI93sVnZQl3C3wjNKn3RqX318fHNomIa1wzaJj8PW')
.then((response) => {
  return response.json();
})
.then((data) => {
  var dogData= data[0]; 
  if (dogBox.hasChildNodes()) {
    dogBox.removeChild(dogBox.lastChild);
  }
   var image = document.createElement('img');
   image.src = dogData.url;
   dogBox.appendChild(image);
    }
) 
.catch(function(error) {
  console.log(error);
});
 }

 button.addEventListener("click", getDog);
