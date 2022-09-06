let file = new Image();
let searchPar = window.location.search.split('?')[1]
let isLink = searchPar.split('&')[0]
let newLinkForIco = document.createElement('link')
    
newLinkForIco.type = 'image/png'
newLinkForIco.rel = 'icon'
document.head.prepend(newLinkForIco)

// Link + File 
if (file && isLink != 'link') {
    file.src = 'directories/' + searchPar
    document.title = searchPar
    newLinkForIco.href = file.src
} else {
    file.src = searchPar.split('&')[1]
    document.title = 'Linked Image'
    newLinkForIco.href = file.src
}

file.classList.add('dataImage')
file.alt = 'Could not load image: ' + searchPar
document.body.appendChild(file)