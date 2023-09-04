let prefix = "catto";
let suffix = ".JPG";
let max = 92

function getImage(index) {
    index += 1

    let fileName = prefix + ( (index != 0) && "" || index )
    const newImage = document.createElement("img")
    const downloadImage = document.createElement('img')
    const aTag = document.createElement("a")

    // Image
    newImage.id = (prefix + index)
    newImage.src = "cattoes/" + fileName + suffix
    newImage.classList.add('catto');

    // Download Image
    downloadImage.src = "download.png"
    downloadImage.classList.add('download')
    aTag.appendChild(downloadImage)

    // Linked A Tag
    aTag.download = prefix + index;
    aTag.href = ("cattoes/" + fileName + suffix)
    aTag.appendChild(newImage)
    return (aTag)
}

for (let i = 0; i < max; i++) {
    let image = getImage(i);

    if (image) {
        const cattoBox = document.getElementById("cattoes");
        cattoBox.appendChild(image)
    }
}