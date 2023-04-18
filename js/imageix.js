// Load 1000 different images from search criteria
const input = document.getElementById('input-imgx');
const button = document.getElementById('button-imgx');
const buttonR = document.getElementById('button-reload');
const contentArea = document.getElementById('imgx');

let startQuery = 'https://source.unsplash.com/random/1920x1080/?';
let currentCriteria = "random";

function clearContent() {
    contentArea.innerHTML = "";
}

function loadNewContent() {
    let newUrl = startQuery + input.value 

    const newImage = document.createElement('img');
    newImage.alt = "image";
    newImage.src = newUrl;

    contentArea.appendChild(newImage);
}

button.onclick = function() {
    clearContent(); loadNewContent()
}

buttonR.onclick = function() {
    window.location.reload();
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        clearContent(); loadNewContent()
    }
  }); 

loadNewContent()