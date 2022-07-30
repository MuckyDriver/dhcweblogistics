const docsArea = document.getElementById('docs')
const anchor = document.getElementById('anchor')

let buttons = anchor.getElementsByTagName('a')

for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i]

    btn.onclick = function() {
        let section = docsArea.getElementsByClassName("js-" + btn.id)[0]

        if (section) {
            window.scrollTo(0, section.parentElement.offsetTop - 20)
        }
    }
}