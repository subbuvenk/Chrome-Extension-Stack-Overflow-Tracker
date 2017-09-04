var sendPost = function(request) {
	$.post('http://127.0.0.1:8080/userLog', request);
}

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if ("clickActivity" in request){
			console.log('worked');
			sendPost(request);
			sendResponse( {ack: 'Activity noted'} );
		}
		else {
			console.log('worked');
			sendResponse( {ack: 'Empty activity discarded'});
		}
	}
);
