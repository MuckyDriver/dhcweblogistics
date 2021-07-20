// MENU DROPDOWN - SOCIAL LINKS \\
const dropDown = document.getElementById('menuDropDown')
const btn = document.getElementById('menudropdownbtn')
var open = false

function ToggleDropDown() {
    if (open == false) {
        dropDown.style.opacity = 1;
        dropDown.style.maxHeight = "200px";
        btn.style.transform = "rotate(-180deg)";
        open = true
    } else {
        dropDown.style.opacity = 0;
        dropDown.style.maxHeight = "0px";
        btn.style.transform = "rotate(0deg)";
        open = false
    }
}

// SHOW MORE - WEBSITE LIST \\
const showMoreList = document.getElementById('more-website-list')
const btn2 = document.getElementById('list-more-btn')
var more_open = false

function ShowMoreWebsiteList() {
    if (more_open == false) {
        showMoreList.style.display = 'block'; btn2.innerText = 'Show Less'; more_open = true
    } else {
        showMoreList.style.display = 'none'; btn2.innerText = 'Show More'; more_open = false
    }
}

// SHOW MORE - PRICING \\
const showMorePricing = document.getElementById('view-more-pricing')
const btn3 = document.getElementById('pricing-more-btn')
var more_open_2 = false

function ViewMorePricing() {
    if (more_open_2 == false) {
        showMorePricing.style.display = 'block'; btn3.innerText = 'Less Info'; more_open_2 = true
    } else {
        showMorePricing.style.display = 'none'; btn3.innerText = 'More Info'; more_open_2 = false
    }
}