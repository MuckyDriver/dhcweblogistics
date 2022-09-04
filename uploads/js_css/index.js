let file = new Image();
let searchPar = window.location.search.split('?')[1]
let newLinkForIco = document.createElement('link')
    
newLinkForIco.type = 'image/png'
newLinkForIco.rel = 'icon'
document.head.prepend(newLinkForIco)

// Link + File 
file.src = 'directories/' + searchPar

if (file) {
    newLinkForIco.href = file.src

    file.classList.add('dataImage')
    file.alt = 'Could not load image: ' + searchPar

    document.body.appendChild(file)
    document.title = searchPar
}