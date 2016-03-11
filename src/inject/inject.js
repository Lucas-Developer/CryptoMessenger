/*chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // ----------------------------------------------------------
            // This part of the script triggers when page is done loading
            console.log("Hello. This message was sent from scripts/inject.js");
            // ----------------------------------------------------------
        }

    }, 10);
});*/



$(function () {
    /*$('#ChatTabsPagelet').bind("DOMNodeInserted",function(){
        console.log("child is appended");
    });*/
    // select the target node
    var target = document.querySelector('div.fbNubGroup.clearfix._56oy._20fw');
    
    // create an observer instance
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            //console.log("Theres a mutation: " + mutation.type);
            if (mutation.type == "childList") {
                for (var i = 0; i < mutations.length; ++i) {
                    // look through all added nodes of this mutation
                    for (var j = 0; j < mutations[i].addedNodes.length; ++j) {
                        try
                        {
                            if (mutations[i].addedNodes[j].className.toString().indexOf("fbNub _50-v _50mz _50m_ _5238") > -1) {
                                if (!$(mutations[i].addedNodes[j]).find('span#crypto').length){
                                    $(mutations[i].addedNodes[j]).find('div._552n').append("<span class=\"_6gd _5ep3\" id=\"crypto\" style=\"background:url(https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/102-16.png) no-repeat 30% 30%;\">&nbsp;</span>");
                                }
                            }
                        }catch(ex){
                            console.log("Exception:" + ex);
                        }
                    }
                }
            }
        });
    });
    
    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true, subtree: true };
    
    // pass in the target node, as well as the observer options
    observer.observe(target, config);
});