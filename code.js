//CORS Ajax GET

function getCORS(url, success) {
    var xhr = new XMLHttpRequest();
    if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.send();
    return xhr;
}

// example
getCORS('http://foo.bar/?p1=1&p2=Hello+World', function(request){
    var response = request.currentTarget.response || request.target.responseText;
    console.log(response);
});





//Ajax GET

function getAjax(url, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

// example request
getAjax('http://foo.bar/?p1=1&p2=Hello+World', function(data){ console.log(data); });






//Ajax POST

function postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}

// example request
postAjax('http://foo.bar/', 'p1=1&p2=Hello+World', function(data){ console.log(data); });

// example request with data object
postAjax('http://foo.bar/', { p1: 1, p2: 'Hello World' }, function(data){ console.log(data); });
