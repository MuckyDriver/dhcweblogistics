const cattoBtn = document.getElementById('catties');
const doggoBtn = document.getElementById('doggos')

// Constants and Variables
let suffix = ".JPG";
let max = { ["cattoes"]: 113, ["doggos"]: 10 }

// Titles
let titles = { ["cattoes"]: "🐱 The Ultimate Catto Gallery 🐱", ["doggos"]: "🐶 The Ultimate Doggo Gallery 🐶" }
let docTitles = { ["cattoes"]: "🐱 Catto", ["doggos"]: "🐶 Doggo" }

// Functions
function getImage(index, folder) {
    let prefix = { ["cattoes"]: "catto", ["doggos"]: "doggo" }
    index += 1

    let fileName = prefix[folder] + ( (index != 0) && "" || index )
    const newImage = document.createElement("img")
    const downloadImage = document.createElement('img')
    const aTag = document.createElement("a")

    // Image
    newImage.alt = "auto generated image" + index
    newImage.id = (prefix[folder] + index)
    newImage.src = folder + "/" + fileName + suffix
    newImage.classList.add('catto');

    // Download Image
    downloadImage.src = "../images/download.png"
    downloadImage.classList.add('download')
    aTag.appendChild(downloadImage)

    // Linked A Tag
    aTag.classList.add('cat')
    aTag.download = prefix[folder] + index;
    aTag.href = (folder + "/" + fileName + suffix)
    aTag.appendChild(newImage)

    // Return objects
    return (aTag)
}

function loadImagery(type) {
    const cattoBox = document.getElementById("cattoes");
    const head = document.getElementById("head")
    
    cattoBox.innerHTML = "";
    head.innerHTML = titles[type];
    document.title = docTitles[type]

    for (let i = 0; i < max[type]; i++) {
        let image = getImage(i, type);
    
        if (image) {
            cattoBox.appendChild(image)
        } else {
            continue
        }
    }
}

// Event Handlers
loadImagery("cattoes")

cattoBtn.addEventListener('click', () => {
    loadImagery("cattoes")
})

doggoBtn.addEventListener('click', () => {
    loadImagery("doggos")
})