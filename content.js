function getGitCookie(iteration){
	if(iteration>10)
		return;
	
	chrome.runtime.sendMessage({ command: "GetCookies"}, function(response) {
		if(response.gitlabcookie==""){
			getGitCookie(iteration+1);
		}else{
			console.log(response);
			const script = document.createElement("div");
			script.id="gitlabcookie";
			script.innerText=response.gitlabcookie;
			document.documentElement.appendChild(script);			
		}
	});
}

getGitCookie(0);