const header = document.getElementById('header');
const mobile_Menu = document.getElementById('mobile-menu');
const expanded_nav = document.getElementById('expanded-nav');

let index = {
    ScrollEffect_Header: 0,
    Responsive_Web_Scale: 690
}

// Header changes after scrolling down
if (header) {
    window.onscroll = function() {
        if (window.scrollY > index.ScrollEffect_Header) {
            header.classList.add('scroll');
            expanded_nav.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
            expanded_nav.classList.remove('scroll');
        }
    }
}

// Mobile Menu Controls: Open/Close, ...
if (mobile_Menu && header) {
    let image_list = {
        hamburger: 'img/icons/hamburger.png',
        closed: 'img/icons/close.png'
    }

    const button = document.getElementById('mobile-menu-toggle');
    var open_menu = false;

    function Close() {
        open_menu = false;
        button.src = image_list.hamburger
        mobile_Menu.classList.remove('open')
    }

    button.onclick = function() {
        if (open_menu == false) {
            open_menu = true;
            button.src = image_list.closed
            mobile_Menu.classList.add('open')
        } else { Close() }
    }
}

// Expanded Navigation Controls: Open/Close
if (header && expanded_nav) {
    const btn = document.getElementById('expand-nav');
    var open_nav = false;

    function Close_Nav() {
        btn.style.transform = "scaleY(1)";
        expanded_nav.style.display = 'none';
        if (window.scrollY > index.ScrollEffect_Header) {
            header.classList.add('scroll')
        }
        open_nav = false
    }

    btn.onclick = function() {
        if (open_nav == false) {
            btn.style.transform = "scaleY(-1)";
            expanded_nav.style.display = 'block';
            expanded_nav.classList.remove('scroll');
            header.classList.remove('scroll');
            open_nav = true 
        } else { Close_Nav() }
    }
}

// Window Resizing Function
window.onresize = function() {
    if (window.innerWidth > index.Responsive_Web_Scale) { Close() }
    if (window.innerWidth < index.Responsive_Web_Scale) { Close_Nav() }
}
