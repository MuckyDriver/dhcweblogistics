const confirmed = confirm('Error 404: Page not found, the url does not exist on this domain. Close this tab or click OK to return to the domains main page.')
    
if (confirmed) {
    window.location.replace('/'); 
}

document.body.style.backgroundColor = 'black';