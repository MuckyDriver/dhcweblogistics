let file = new Image();
let searchPar = window.location.search.split('?')[1]
let newLinkForIco = document.createElement('link')
    
newLinkForIco.type = 'image/png'
newLinkForIco.rel = 'icon'
document.head.prepend(newLinkForIco)

// Link + File 
file.src = 'directories/' + searchPar

if (file.src) {
    newLinkForIco.href = file.src

    file.style.maxHeight = '100vh';
    file.style.maxWidth = '100%';
    file.style.transform = 'translateY(-50%) translateX(-50%)';
    file.style.position = 'fixed'
    file.style.top = '50%';
    file.style.left = '50%';
    file.alt = searchPar

    document.body.appendChild(file)
    document.title = searchPar
}