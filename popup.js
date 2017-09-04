var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status === 200 || request.status === 404) {
        	console.log(request.responseText, request.status);
            document.getElementById("para").innerHTML = request.responseText;
        } else {
            document.getElementById("para").innerHTML = "Server Error";
        }
    }
};
request.open("GET", 'http://localhost:8080/loggedIn' , true);
request.send(null);
// $.get('http://localhost:8080/loggedIn', function(data, status) {
// 	console.log(data, status);
// 	if (status === "success")
//         document.getElementById("para").innerHTML = data;
// 	else
//         document.getElementById("para").innerHTML = "Server Error";
// });