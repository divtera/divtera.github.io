(function() {
    function getParam(name) {
	url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    $(document).ready(function() {

	code = getParam('code');
	if(!code) {
	    window.location.href = "/";
	} else {
	    $.ajax({type : "GET",
		    url  : "http://yellowstone-1.api.topfive.rocks/choppr/?code="+code,
		    success : function(resp) {
			position = resp.position;
			code = resp.code;
			$("#waitlist-position").html(numberWithCommas(position));

			socialList = ['.fb-share', '.tw-share', '.email-share', '.ln-share'];

			socialList.forEach(function(social) {
			    URL = $(social).attr("href").replace("REPLACEME", code);
			    $(social).attr("href", URL);
			});

			URL = $(".url-share").text().replace("REPLACEME", code);
			$('.url-share').html(URL); 
			$('.url-share').show();
		    },

		    error : function(resp) {
			window.location.href = "/";
		    }
		   });
	}
    });
})();
