document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var result = new Object();
    var text;
    if (target.textContent || text.innerText)
    	text = target.textContent || text.innerText;
	var now = (new Date()).toJSON();
	result.date = now;

    if (target.className === "vote-up-off")
    	result.clickActivity = "Upvote";
    else if (target.className === "vote-down-off")
    	result.clickActivity = "Downvote";
    else if (target.className === "vote-count-post")
    	result.clickActivity = "Vote Count";
    else if (target.className === "suggest-edit-post")
    	result.clickActivity = "Suggest edit";
    else if (target.className === "reputation-score")
    	result.clickActivity = "User reputation clicks";
    else if (target.className === "coment-copy")
    	result.clickActivity = "Comment click";
    else if (target.className === "default prettyprint prettyprinted")
    	result.clickActivity = "Code click";
    // else if (target.className === "post-tag")
    // 	result.clickActivity = "Post tags";
    else if(target.className.match(/^post-tag.*$/))
    	result.clickActivity = "Post tag clicks";
    else if (target.className === "question-hyperlink")
    	result.clickActivity = "Question link"
 	else if (target.className === "page-numbers")
    	result.clickActivity = "Change page"
       
    chrome.runtime.sendMessage(result, function(response) {
    	console.log(response.ack);
    });

    // $.post('http://127.0.0.1:8080/userLog', result);

}, false);


