// Handles completed POSTS, sends a response to completed forms.
let splitDivider = "?"
let windowData = window.location.href.split(splitDivider)[1];
let popupElement = document.getElementById('post-popup-element');
let popupElementClose = document.getElementById('post-dialog-close');

if (windowData) {
    let dataMessage = windowData.split('=')[0]

    if (dataMessage == 'success') {
        popupElement.classList.add('open');
    }
}

// Button Handling
function closePopup() {
    popupElement.classList.remove('open');

    setTimeout(() => {
        popupElement.style.display = 'none';
    }, 250)
}

popupElementClose.addEventListener('click', closePopup)
popupElementClose.addEventListener('keypress', (event) => {
    if (event.key == "Enter") { closePopup() }
})

// blah blah