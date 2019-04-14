chrome.storage.local.set({'logged': 'false'});
chrome.storage.local.set({'items': 'false'});
chrome.storage.local.set({'amount': 0});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if (request.todo == "showPageAction"){
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.pageAction.show(tabs[0].id);
			createNotification();
		});
	}
});

function createNotification(){
	var opt = {type: "basic",title: "Personal Loan Options",message: "Click on extension to view loans",iconUrl: "icon.png"}
	chrome.notifications.create("loanAlert", opt, function(){});
	setTimeout(function(){chrome.notifications.clear("loanAlert", function(){});}, 5000);
}