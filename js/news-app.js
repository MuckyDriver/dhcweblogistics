const button = document.getElementById('news-page');
button.onclick = function() { window.open("latest-news-article.html", "_blank", 'height=500, width=500, maxWidth=500'); }

document.getElementById('policy-help').onclick = function() { 
    window.location.replace("?" + (Math.random() + 1).toString(36).substring(2)) 
}

document.getElementById('policy-close').onclick = function() { 
    const policy1 = document.getElementById('policy-1');

    policy1.style.transition = 'ease-in-out .5s opacity, ease-in .5s transform'; policy1.style.opacity = 0; policy1.style.transform = 'scale(0.9)'
    setTimeout(function(){ policy1.style.display = 'none'; }, 500);
}