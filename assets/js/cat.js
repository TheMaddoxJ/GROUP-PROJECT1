var button = document.getElementById("cat-btn");
var catBox = document.getElementById("catBox");
var baseURL = "https://cataas.com/cat/";

function getCat() {
  fetch("https://cataas.com/api/cats?limit=50&skip=0")
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data)
      var catData = data;
      //replace old picture with new picture
      if (catBox.hasChildNodes()) {
        catBox.removeChild(catBox.lastChild);
      }
      //make an img element to hold the cat image
      var image = document.createElement("img");
      //set index of the cat in the json to a random number every time the function is called
      i = Math.floor(Math.random() * catData.length)
      //use the URL of the image bank instead of the api to find the image
      image.src = baseURL + catData[i]._id;
      catBox.appendChild(image);
      // added local storage
      localStorage.setItem("cats", baseURL)
      localStorage.getItem("cats", baseURL)
    })
    .catch(function (error) {
      console.log(error);
    });
}

button.addEventListener("click", getCat);
