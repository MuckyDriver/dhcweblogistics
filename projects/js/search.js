/* 
    Search.js uses a input search box and button using keywords as identifiers.
    Matching elements with the keyword as their id will scroll down to the target!
*/

const input = document.getElementById('search')
const btn = document.getElementById('search_btn')

btn.onclick = function() {
    let anchor = document.getElementById(input.value.toLowerCase())
    if (anchor) {
        window.scrollTo(0, anchor.offsetTop - 40)
    }
}