$(document).ready(function(){
	var url = "https://hn.algolia.com/api/v1/search?query=Technology";
	$.getJSON(url,function(data){
		var current = "";
		var quotes = data.hits;
		$(".more").on('click',function(){
			current = quotes[Math.floor(Math.random() * quotes.length)];
			$(".initialHeading").hide();
			$(".newsTitle").html(current.title);
			$(".newsTitle").attr('href', current.url);
            $(".newsTitle").attr('target', '_blank');
			$(".newsAuthor").html("- " + current.author);
			$(".more").html("Cool, Show me more !!!");
			$('.tweet').attr(
                    'href',
                    'https://twitter.com/intent/tweet?text= ' + current.title + ' - Posted by ' + current.author
                );
            $('.tweet').attr('target', '_blank');
            $('.tweetBtn').attr('disabled', false);
		})
	});
});