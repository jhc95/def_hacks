chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
            $('#status').html('changed data in page');
            console.log('success');
        });
    });
});
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("something happening from the extension");
    var data = request.data || {};
    var linksList = document.querySelectorAll('a');
    [].forEach.call(linksList, function(header) {
        header.innerHTML = request.data;
    });
    sendResponse({data: data, success: true});
});