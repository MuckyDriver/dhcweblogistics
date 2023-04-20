const copyrightElement = document.createElement('div');
const copySymbolDiv = document.createElement('div');
const copyInfoDiv = document.createElement('div');
const newHitbox = document.createElement('div');
let copyrightEnabled = false;

function buildCopyright() {
    /* Copyright Section Creation */
    copyrightElement.classList.add('copyright', 'opaque');

    /* Copyright Symbol Section */
    copySymbolDiv.innerHTML = "<span>© </span>" + (new Date().getFullYear());

    /* The info of the copyright disclaimer */
    copyInfoDiv.classList = "info hidden";
    copyInfoDiv.innerHTML = "Webpage copyright under dhcweblogistics.net domain.";

    /* Appending the objects/elements */
    copyrightElement.appendChild(copySymbolDiv);
    copyrightElement.appendChild(copyInfoDiv);
    document.body.appendChild(copyrightElement);
}

function handleButtonEvent() {
    /* Copyright Toggle Information */
    copyrightElement.onclick = function() {
        if (copyrightEnabled) { copyInfoDiv.classList.add('hidden')
        } else { copyInfoDiv.classList.remove('hidden') }

        copyrightEnabled = !copyrightEnabled
    }
}

function handleNewHitbox() {
        /* Hitbox for checking if mouse is in the same area as the copyright button by a certain amount */
        newHitbox.classList.add("hitbox-copy");
        newHitbox.style.top = copyrightElement.offsetTop + "px";
        newHitbox.style.left = copyrightElement.offsetLeft + "px";
    
        document.body.appendChild(newHitbox);
    
        // Actual event checking whether something like a mouse hovers over.
        newHitbox.onmouseenter = function() {
            copyrightElement.classList.remove('opaque');
        }
    
        newHitbox.onmouseleave = function() {
            copyrightElement.classList.add('opaque')
        }
}

window.addEventListener("DOMContentLoaded", (event) => {
    buildCopyright(); // Builds the copyright container
    handleButtonEvent(); // Handles the click event when user clicks on the copyright container.
    handleNewHitbox(); // Hitbox used to check whether mouse is close to the copyrighr container.
})