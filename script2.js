var button = document.getElementById("nextBtn");
var catBox = document.getElementById("display2");
var baseURL = "https://cataas.com/cat/";

function getCat() {
  fetch("https://cataas.com/api/cats")
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data)
      var catData = data;
      var image = document.createElement("img");
      //set index of the cat in the json to a random number every time the function is called
      i = Math.floor(Math.random() * 10)
      //use the URL of the image bank instead of the api to find the image
      image.src = baseURL + catData[i]._id;
      catBox.appendChild(image);
    })
    .catch(function (error) {
      console.log(error);
    });
}

button.addEventListener("click", getCat);
