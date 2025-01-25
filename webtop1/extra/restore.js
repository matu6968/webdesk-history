function restoresession() {
    // Get the URL
var url = window.location.href;

// Get the query string from the URL
var queryString = url.split('?')[1];

// Split the query string into individual parameters
var params = queryString.split('&');

// Loop through the parameters to find the one with the name "name"
for (var i = 0; i < params.length; i++) {
    var param = params[i].split('=');
    if (param[0] == 'name') {
        // Set the JS variable "name" to the URL variable value
        var name = param[1];
    }
}
}