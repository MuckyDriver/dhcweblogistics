const redirect = "/docs/"

document.readyState = function() {
    this.location.replace(redirect)
}