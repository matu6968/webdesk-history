// DeskUI scripts, they're here to make DeskUtility app development easier on everyone.
// I know they suck, open the About menu in DeskUtility and click "View Code" to submit
// bug patches, and code optimizations. Make sure they are incredibly detailed!
loaded = false; // The variable used by apps/functions to check if the site is loaded yet, 
// mainly useful for making sure no one can use keyboard shortcuts until loaded.
navsounds = false;
checkcookies();
window.addEventListener('load', function () {
    setTimeout(load, 700)
})
function load() {
}
function checkcookies() {
    console.log("checkcookies JS function: Placeholder because yeah")
}
function hide(elementID) {
    var element = document.getElementById(elementID);
    if (element) {
        element.style.display = "none";
    }
}
function show(elementID) {
    var element = document.getElementById(elementID);
    if (element) {
        element.style.display = "block"
    }
}