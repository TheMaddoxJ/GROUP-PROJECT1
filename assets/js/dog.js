var dogBox = document.getElementById("dogBox");
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
  //  added local storage
   localStorage.setItem("dog image", dogData.url)
   localStorage.getItem("dog image", dogData.url)
    }
) 
.catch(function(error) {
  console.log(error);
});
 }

 button.addEventListener("click", getDog);

 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  // document.textContent = instances
  
});
