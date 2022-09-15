/* Game Grid Load Data */
function loadInfo(item, id, content) {
    (async function() {
        let url = 'games/' + id + '.json';
        let gameData = await (await fetch(url)).json();
        item.innerText = gameData[content];
    })()
}

function loadImg(item, id, content) {
    (async function() {
        let url = 'games/' + id + '.json';
        let gameData = await (await fetch(url)).json();
        item.src = gameData[content];
    })()
}