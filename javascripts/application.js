var jsonTwitterFeed = "http://twitter.com/statuses/user_timeline/radioesperanzah.json?count=5";

$.ajax({
        url: jsonTwitterFeed,
        data: {},
        dataType: "jsonp",
        callbackParameter: "jsoncallback",
        timeout: 5000,
        success: function(data){
            $(data).each(function(index, tweet) {
                $("ul.tweets").append('<li>' + tweet_to_html(tweet.text) + "</li>");                
            });            

        },
        error: function(XHR, textStatus, errorThrown){
            console.log(textStatus + " " + errorThrown);
        }
    });

function tweet_to_html(str) {
	str=' '+str;
	str = str.replace(/((ftp|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?)/gm,'<a href="$1" target="_blank">$1</a>');
	str = str.replace(/([^\w])\@([\w\-]+)/gm,'$1@<a href="http://twitter.com/$2" target="_blank">$2</a>');
	str = str.replace(/([^\w])\#([\w\-]+)/gm,'$1<a href="http://twitter.com/search?q=%23$2" target="_blank">#$2</a>');
	return str;
}
