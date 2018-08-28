function getParam(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function ValidateEmail(email)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}

(function() {

    "use strict";

    // Methods/polyfills.

    // classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
    !function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

    // canUse
    window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

    // window.addEventListener
    (function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

    // Vars.
    var	$body = document.querySelector('body');

    // Disable animations/transitions until everything's loaded.
    $body.classList.add('is-loading');

    window.addEventListener('load', function() {
	window.setTimeout(function() {
	    $body.classList.remove('is-loading');
	}, 100);
    });

    // Slideshow Background.
    (function() {

	// Settings.
	var settings = {

	    // Images
	    images: {
        'http://i.imgur.com/a9PIaOP.jpg': 'center',
        'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2014/12/17/2/Neumann-Mendro-Andrulaitis-Architects_Kurth_Pool-5.jpg.rend.hgtvcom.1280.853.suffix/1418847538859.jpeg': 'center',
        'http://cdn.sheamediaservices.com/MyHD/u_282/vista-dorado-images/Plan6CCropped.jpg':'center',
        'http://northcountynewhomes.com/wp-content/uploads/2018/03/S.L.Rey-Bonsall-New-Homes-Plan-2.jpg':'center',
        'http://media.metrolist.net/metrolist/listingpics/bigphoto/046/18021946_28.jpg?tsp=20180411185600':'center'
	    },

	    // Delay.
	    delay: 10000

	};

	// Vars.
	var	pos = 0, lastPos = 0,
	    $wrapper, $bgs = [], $bg,
	    k, v;

	// Create BG wrapper, BGs.
	$wrapper = document.createElement('div');
	$wrapper.id = 'bg';
	$body.appendChild($wrapper);

	for (k in settings.images) {

	    // Create BG.
	    $bg = document.createElement('div');
	    $bg.style.backgroundImage = 'url("' + k + '")';
	    $bg.style.backgroundPosition = settings.images[k];
	    $wrapper.appendChild($bg);

	    // Add it to array.
	    $bgs.push($bg);

	}

	// Main loop.
	$bgs[pos].classList.add('visible');
	$bgs[pos].classList.add('top');

	// Bail if we only have a single BG or the client doesn't support transitions.
	if ($bgs.length == 1
	    ||	!canUse('transition'))
	    return;

	window.setInterval(function() {

	    lastPos = pos;
	    pos++;

	    // Wrap to beginning if necessary.
	    if (pos >= $bgs.length)
		pos = 0;

	    // Swap top images.
	    $bgs[lastPos].classList.remove('top');
	    $bgs[pos].classList.add('visible');
	    $bgs[pos].classList.add('top');

	    // Hide last image after a short delay.
	    window.setTimeout(function() {
		$bgs[lastPos].classList.remove('visible');
	    }, settings.delay / 2);

	}, settings.delay);

    })();

    // Signup Form.
    (function() {

	// Vars.
	var $form = document.querySelectorAll('#signup-form')[0],
	    $submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
	    $message;

	// Bail if addEventListener isn't supported.
	if (!('addEventListener' in $form))
	    return;

	// Message.
	$message = document.createElement('span');
	$message.classList.add('message');
	$form.appendChild($message);

	$message._show = function(type, text) {

	    $message.innerHTML = text;
	    $message.classList.add(type);
	    $message.classList.add('visible');

	    window.setTimeout(function() {
		$message._hide();
	    }, 3000);

	};

	$message._hide = function() {
	    $message.classList.remove('visible');
	};

	// Events.
	// Note: If you're *not* using AJAX, get rid of this event listener.
	$form.addEventListener('submit', function(event) {
	    event.stopPropagation();
	    event.preventDefault();


	    if($('#email')[0].value.length == 0) {
			return false;
	    }

	    if(ValidateEmail($('#email')[0].value) == false) {
	    	console.log("fsajkdsjflkjs")
	    	$message._show('failure', 'Sorry! Please enter a valid email address.');
	    	return false;
	    }


	    // Hide message.
	    $message._hide();

	    // Disable submit.
	    $submit.disabled = true;

	    // Reset form.
//	    $form.reset();

	    // Enable submit.
	    $submit.disabled = false;

	    // Make request
	    $.ajax({type : "POST",
		    url  : "http://yellowstone-1.api.topfive.rocks/choppr/create/",
		    data : {email : $('#email')[0].value,
			    code   : getParam('ref') ? getParam('ref') : null
			   },
		    success : function(resp) {
			window.location.href = "share.html?code="+resp.code;
		    },

		    error : function(resp) {
			if(resp.status == 400) {
			    $message._show('failure', 'Sorry! This email has already been used.');
			} else {
			    $message._show('failure', 'Sorry! Something went wrong. Please try again.');
			}

		    }
		   });

	    return false;
	});
    })();

})();
