/* Copyright Section Creation */
const copyrightElement = document.createElement('div');
copyrightElement.classList.add('copyright', 'opaque');

const copySymbolDiv = document.createElement('div');
copySymbolDiv.innerHTML = "<span>© </span>" + (new Date().getFullYear());

const copyInfoDiv = document.createElement('div');
copyInfoDiv.classList = "info hidden";
copyInfoDiv.innerHTML = "Webpage copyright under dhcweblogistics.net domain.";

copyrightElement.appendChild(copySymbolDiv);
copyrightElement.appendChild(copyInfoDiv);
document.body.appendChild(copyrightElement);

/* Copyright Toggle Information */
let copyrightEnabled = false

copyrightElement.onclick = function() {
    if (copyrightEnabled) { copyInfoDiv.classList.add('hidden')
    } else { copyInfoDiv.classList.remove('hidden') }

    copyrightEnabled = !copyrightEnabled
}

/* Hitbox for checking if mouse is in the same area as the copyright button by a certain amount */
const newHitbox = document.createElement('div');
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