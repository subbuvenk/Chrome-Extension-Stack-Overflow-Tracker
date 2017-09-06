var sendPost = function(request) {
	$.post('http://localhost:8080/userLog', request);
}

function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            callback(cookie.value);
        }
    });
}

//MESSAGE LISTENER FOR MESSAGES FROM CONTENT SCRIPT
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		// getCookies("http://localhost:8080/", "connect.sid", function(id) {
		//     console.log(id);
		// });
		if (request.activity) {
			sendPost(request);
			sendResponse( {ack: 'Activity noted'} );
		}
		else {
			sendResponse( {ack: 'Empty activity discarded'});
		}
	}
);