var dogBox = document.getElementById("container");
// var catBox = document.getElementById("display2");

 var image = [0];
// var slideshow = document.getElementById("carousel");
// var dogApi = "https://api.thedogapi.com/v1/images/search?api_key=live_sjFbesElsFGatTKcDjDAY6CEI93sVnZQl3C3wjNKn3RqX318fHNomIa1wzaJj8PW"


// DOG API FETCH //
 function getDog(){
fetch('https://api.thedogapi.com/v1/images/search?api_key=live_sjFbesElsFGatTKcDjDAY6CEI93sVnZQl3C3wjNKn3RqX318fHNomIa1wzaJj8PW')
.then((response) => {
  return response.json();
})
.then((data) => {
  var dogData= data[0];
   var image = document.createElement('img');
   image.src = dogData.url;
   dogBox.appendChild(image);
    }
) 
.catch(function(error) {
  console.log(error);
});
 }

 // PAGINATION FOR 12345 BUTTONS TO DISPLAY DOG PHOTOS FROM API //
 var pag1 = document.getElementById("pag1");
 var pag2 = document.getElementById("pag2");
 var pag3 = document.getElementById("pag3");
 var pag4 = document.getElementById("pag4");
 var pag5 = document.getElementById("pag5");

 pag1.addEventListener("click", getDog);
 pag2.addEventListener("click", getDog);
 pag3.addEventListener("click", getDog);
 pag4.addEventListener("click", getDog);
 pag5.addEventListener("click", getDog);
























 // FROM ROLAND - TO REPLACE PHOTOS //
//  const downloadImage = async url => {
//   const imageBlob = await fetchImage(url)
//   const imageBase64 = URL.createObjectURL(imageBlob)

//   console.log({imageBase64})
  
//   const a = document.createElement('img')
//   a.style.setProperty('display', 'none')
//   document.body.appendChild(a)
//   a.download = url.replace(/^.*[\\\/]/, '')
//   a.href = imageBase64
//   a.click()
//   a.remove()
//  }




//  // CAT API FETCH //
//  function getCat(){
//   fetch('https://api.thedogapi.com/v1/images/searchlimit=5?api_key=live_sjFbesElsFGatTKcDjDAY6CEI93sVnZQl3C3wjNKn3RqX318fHNomIa1wzaJj8PW')
//   .then((response) => {
//     return response.json();

//   })
//   .then((data) => {
//     var catData= data[0]; 
//      var image = document.createElement('img');
//      image.src = dogData.url;
//      dogBox.appendChild(image);
//       }
//   ) 
//   .catch(function(error) {
//     console.log(error);
//   });
//    }
  
//    button.addEventListener('click' , getCat);
