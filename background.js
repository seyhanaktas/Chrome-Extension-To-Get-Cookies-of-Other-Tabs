let cookie ="";
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {	   
	if (message.command === 'GetCookies') {		
		chrome.cookies.getAll({domain:"gitlab.rosetta.ericssondevops.com"}, 
			function(cookies){ 
				var cookieList=[];
				for(var i=0;i< cookies.length; i++){
					if(cookies[i].name=="CF_Authorization" || cookies[i].name=="_gitlab_session" )
						cookieList.push(cookies[i].name+"="+cookies[i].value);
				}
				cookie= cookieList.join("; ");
			}
		); 	
		sendResponse({gitlabcookie: cookie});
    }
  }
);