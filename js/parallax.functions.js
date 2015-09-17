(function(e){"use strict";function f(){if(responsive){if(e(window).width()>480&&e(window).height()>480){if(e(".team").length){o.reloadSlider()}if(e(".events").length){o.reloadSlider()}if(e(".blogpage").length){u.reloadSlider()}if(e(".parallax-portfolio .slider").length){a.reloadSlider()}if(e(".parallax-products .slider").length){a.reloadSlider()}}else{if(e(".team").length){o.destroySlider()}if(e(".events").length){o.destroySlider()}if(e(".blogpage").length){u.destroySlider()}if(e(".parallax-portfolio .slider").length){a.destroySlider()}if(e(".parallax-products .slider").length){a.destroySlider()}e(".page-contents").css({height:e(window).height()-210+"px"})}}e(".bx-next, .bx-prev").addClass("btn btn-default");e(".bx-controls-direction").addClass("btn-group");e(".parallax-blog .bx-controls-direction, .parallax-products .bx-controls-direction").addClass("btn-group-expand")}

var t=e("#main-navbar");
t.on("click","a",null,function(){if(t.hasClass("in")){t.collapse("hide")}});
e(document).keydown(function(e){if(e.keyCode==9){e.preventDefault()}});
var n=e("input, textarea, select, button"),r;
n.on("keydown",function(e){if(e.keyCode==9||e.which==9){e.preventDefault();if(e.shiftKey){r=n.get(n.index(this)-1)}else{r=n.get(n.index(this)+1)}if(r){r.focus()}else{n[0].focus()}}});
e("#main-navbar .menu-item > a").on("click",function(e){e.preventDefault()});
e("#parallax-menu .menu-item > a").attr("id",function(e){return"sec"+(e+1)});
e("#parallax-menu .menu-item > a").attr("onclick",function(e){return"HORILLAX.ANIM.instance.move("+e+");"});
var i='<i class="fa fa-chevron-right"></i>';
var s='<i class="fa fa-chevron-left"></i>';
var i='<img src="images/new/arrowright.png" />';
var s='<img src="images/new/arrowleft.png" />';
var o=e(".team").bxSlider({slideWidth:240,minSlides:1,maxSlides:5,slideMargin:16,infiniteLoop:false,pager:false,nextText:i,prevText:s,hideControlOnEnd:true});
var o=e(".events").bxSlider({slideWidth:240,minSlides:1,maxSlides:5,slideMargin:16,infiniteLoop:false,pager:false,nextText:i,prevText:s,hideControlOnEnd:true});
var u=e(".blogpage").bxSlider({slideWidth:492,slideMargin:16,minSlides:1,maxSlides:5,infiniteLoop:false,pager:false,nextText:i,prevText:s,hideControlOnEnd:true});
var a=e(".parallax-portfolio .slider").bxSlider({pagerCustom:"#pager",nextText:i,prevText:s,mode:"fade"});
var a=e(".parallax-products .slider").bxSlider({pagerCustom:"#pager",nextText:i,prevText:s,mode:"fade"});
f();e(window).resize(f);e(".link").tooltip()})(jQuery);jQuery(window).load(function(){jQuery("div.loading-page").fadeOut("slow");jQuery(".image-height").equalHeightColumns()})