let file = new Image();
let searchPar = window.location.search.split('?')[1]

file.src = 'directories/' + searchPar

if (file.src) {
    let metaTagEmbed = document.getElementsByTagName('head')[0].getElementsByTagName('meta')[0]
    if (metaTagEmbed) { metaTagEmbed.content = file.src + "#a" }

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