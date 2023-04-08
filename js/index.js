// Mobile Menu Controls
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuCloseBtn = document.getElementById('close-mobile-menu');
let open = false;

mobileMenuBtn.onclick = function() {
    if (open == false) {
        mobileMenu.classList.remove('closed'); // Removing 'closed' class will transition show the mobile menu.
        open = true;
    }
}

mobileMenuCloseBtn.onclick = function() {
    if (open == true) {
        mobileMenu.classList.add('closed'); // Adding 'closed' class will transition hide the mobile menu.
        open = false;
    }
}