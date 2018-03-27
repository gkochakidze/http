var retrieve = document.getElementById('retrieve');
var results = document.getElementById('results');

retrieve.addEventListener('click', function (event) {
    var req = new XMLHttpRequest();
    req.onload = function (event) {
        var xhr = event.target;
        if (xhr.responseType === 'json') {
            results.appendChild(document.createTextNode(xhr.response.message));
        } else {
            results.appendChild(document.createTextNode(JSON.parse(xhr.responseText).message));
        }
    };
    req.open('GET', 'http://localhost:3000', true);
    req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    req.setRequestHeader('Ajax-Request', '1.0');
    req.send();
});