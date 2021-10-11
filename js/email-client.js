// 0: Allows outside pages to access the quick-order-service page!
const btn_openUp = document.getElementById('quickorder-btn');
if (btn_openUp) {
    btn_openUp.onclick = function() { window.location.replace('quick-order-service.html') }
}

const href = window.location.pathname
var split = href.split('/'); var amount = (split.length - 1); var PageName = split[amount]

if (PageName == 'quick-order-service.html') {
// 1: Warning of quiting the order process!
const warningClose = document.getElementById("warning-close");
const button_yes = document.getElementById('warning-close=btn-yes');
const button_no = document.getElementById('warning-close=btn-no');
const buttonCancel = document.getElementById("order-cancel");

buttonCancel.onclick = function() { warningClose.style.display = 'block'; }
button_no.onclick = function() { warningClose.style.display = 'none'; }
button_yes.onclick = function() { 
    window.location.replace('index.html') 
}

// 2: Configuration of the plan chosen takes effect on their choices!
const ConfigPlan = document.getElementById('config-plan');
const Pages = document.getElementById('page-count');

ConfigPlan.onchange = function() {
    if (ConfigPlan.value == 1 || ConfigPlan.value == 2) {
        Pages.setAttribute('disabled',""); Pages.value = '';
    } else { Pages.removeAttribute('disabled'); Pages.value = 1; }
}

// 3a: Emailing
const e_destination = 'onsite@fromsite.com'; // must provide my email address
var e_fromMail = '...';

// 3b: Getting the Email From Mail Address!
const EmailBox = document.getElementById('email-box-input');
EmailBox.onchange = function() { e_fromMail = EmailBox.value; }

// 3c: Listening out for a successfull submit
const form = document.getElementById('DHCWeblogistics')

//function Start() { form.submit(); }
form.addEventListener('submit', event => {
    event.preventDefault();
    document.getElementById('loader').style.display = 'block';
    document.getElementById('page').setAttribute('page', "disabled");
    //setTimeout(function(){ Start(); }, 2000);
})

}
