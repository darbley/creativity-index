export function isDesktop(){
    var viewWidth = function() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    return viewWidth() > 768;
}

export function getLang(){
    // Default to en
    var language = 'en';
	// Load the language from the document location..
	var m = null;
	if ((m = /^\/([a-z]{2})[\/.*]?/.exec(document.location.pathname)) !== null) {
        language = m[1];
        // If is not EN or FR, hardcode to EN to ensure some text displays. 
        if (language !== 'fr'){
            language = 'en'
        }
	}
    return language;
}
  