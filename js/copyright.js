/* Copyright Toggle Information */
const copyright_element = document.getElementById('$copy')
const copyrightInfo_element = document.getElementById('$copy-info')
let copyright_enabled = false

copyright_element.onclick = function() {
    if (copyright_enabled) { copyrightInfo_element.classList.add('hidden')
    } else { copyrightInfo_element.classList.remove('hidden') }

    copyright_enabled = !copyright_enabled
}