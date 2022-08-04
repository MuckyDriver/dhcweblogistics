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

/* Mobile Sidebar Button */
const MobileSidebarButton = document.getElementById('mobile-sidebar-btn')
const Sidebar = document.getElementById('sidebar')

let SidebarToggle = false

MobileSidebarButton.onclick = function() {
    if (SidebarToggle == false) {
        SidebarToggle = true
        Sidebar.style.display = 'grid'
    } else {
        SidebarToggle = false
        Sidebar.style.display = 'none'
    }
}

/* Mobile Sidebar Check */
window.onresize = function() { 
    if (window.innerWidth > 800 && SidebarToggle == false) {
        Sidebar.style.display = 'grid'
    } else if (window.innerWidth < 800 && SidebarToggle == false) {
        Sidebar.style.display = 'none'
    }
}