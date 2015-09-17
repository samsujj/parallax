function has3d()
{
	var e=document.createElement("p"),t,n={transform:"transform"};
	document.body.insertBefore(e,null);
	for(var r in n){
		if(e.style[r]!==undefined){
			e.style[r]="translate3d(1px,1px,1px)";
			t=window.getComputedStyle(e).getPropertyValue(n[r]);
		}
	}
	document.body.removeChild(e);
	return t!==undefined&&t.length>0&&t!=="none"
}

HORILLAX.ANIM=function(){
	this.init()
};

HORILLAX.ANIM.prototype={
	maxWidth:0,
	maxHeight:0,
	currentScene:0,
	newScene:0,
	animateScreens:false,
	scenesAnimated:0,
	parallaxElements:[],
	init:function(){
		HORILLAX.ANIM.instance=this;
		this.maxWidth=jQuery(document).width();
		this.maxHeight=jQuery(document).height();
		this.createScenes();
		this.mouseMoveParallax();
		jQuery(window).resize(this.reposition)
	},
	createScenes:function(){
		
		if(responsive){
			var e=this.maxWidth/1920
		}else{
			var e=1
		}
		for(var t=0;t<items.length;t++){
			if(jQuery(items[t].name).length==0){
				jQuery("#parallax-container").append("<div id='"+items[t].name.substring(1,items[t].name.length)+"' class='parallaxItem'></div>")
			}
			if(items[t].image){
				var n=Math.round(items[t].sizes.w*e);
				var r=Math.round(items[t].sizes.h*e);
				jQuery(items[t].name).append("<img src='"+items[t].image+"' width='"+n+"' height='"+r+"' />")
			}
			if(items[t].tPos){
				jQuery(items[t].name).css("top",items[t].tPos*e)
				if(items[t].name == '#home-page' || items[t].name == '#slider1' || items[t].name == '#slider2' || items[t].name == '#slider3' || items[t].name == '#slide4' || items[t].name == '#slide5'){
					jQuery(items[t].name).css("top",items[t].tPos)
				}
			}
			
			if(items[t].name == '#home-page'){
				if(this.maxWidth > 764)
					var mheight = (this.maxHeight - (jQuery('header').height()+70));
				else
					var mheight = (this.maxHeight - (jQuery('header').height()+135));
				
				jQuery('#home-page').find('.nano').css("height", mheight);
			}
			
			if(items[t].name == '#products-page'){
				if(this.maxWidth > 764)
					var mheight = (this.maxHeight - (jQuery('header').height()+70+80));
				else
					var mheight = (this.maxHeight - (jQuery('header').height()+135+30));
				
				jQuery('#products-page').find('.nano').css("height", mheight);
			}
			
			if(items[t].name == '#events-page'){
				if(this.maxWidth > 764)
					var mheight = (this.maxHeight - (jQuery('header').height()+70+80));
				else
					var mheight = (this.maxHeight - (jQuery('header').height()+135+30));
				
				jQuery('#events-page').find('.nano').css("height", mheight);
			}
			
			if(items[t].name == '#news-page'){
				if(this.maxWidth > 764)
					var mheight = (this.maxHeight - (jQuery('header').height()+70+80));
				else
					var mheight = (this.maxHeight - (jQuery('header').height()+135+30));
				
				jQuery('#news-page').find('.nano').css("height", mheight);
			}
			
			if(items[t].name == '#contact-page'){
				if(this.maxWidth > 764)
					var mheight = (this.maxHeight - (jQuery('header').height()+70+80));
				else
					var mheight = (this.maxHeight - (jQuery('header').height()+135+30));
				
				jQuery('#contact-page').find('.nano').css("height", mheight);
			}
			
		}
		this.repositionClips()
	},
	reposition:function(){
		HORILLAX.ANIM.instance.repositionClips()
	},
	repositionClips:function(){
		this.maxWidth=jQuery(document).width();
		this.maxHeight=jQuery(document).height();
		if(responsive){
			var e=this.maxWidth/1920
		}else{
			var e=1
		}
		for(var t=0;t<items.length;t++){
			var n=jQuery(items[t].name);
			if(items[t].image){
				var r=Math.round(items[t].sizes.w*e);
				var i=Math.round(items[t].sizes.h*e);
				jQuery(items[t].name+" img").attr({width:r,height:i});
				if(items[t].parallaxScene){
					jQuery(items[t].name).attr("depth",Math.round(items[t].mouseSpeed*e));
					this.parallaxElements.push(jQuery(items[t].name))
				}
				if(items[t].bPos){
					jQuery(items[t].name).css({bottom:Math.round(items[t].bPos*e)})
				}else if(items[t].tPos){
					jQuery(items[t].name).css("top",Math.round(items[t].tPos*e)+50)
					if(items[t].name == '#home-page' || items[t].name == '#slider1' || items[t].name == '#slider2' || items[t].name == '#slider3' || items[t].name == '#slide4' || items[t].name == '#slide5'){
						jQuery(items[t].name).css("top",items[t].tPos)
					}

				}
			}
			if(items[t].screenPos[this.currentScene]=="center"){
				if(!items[t].tPos){
					n.css({top:(this.maxHeight+items[t].offsetV)/2-n.height()/2-50})
				}
				n.css({left:this.maxWidth/2-jQuery(n).width()/2,"z-index":items[t].stackOrder})
			}else{
				n.css({left:items[t].screenPos[this.currentScene],"z-index":items[t].stackOrder})
			}
			
			if(items[t].name == '#home-page'){
				if(this.maxWidth > 764)
					var mheight = (this.maxHeight - (jQuery('header').height()+70));
				else
					var mheight = (this.maxHeight - (jQuery('header').height()+135));
				
				jQuery('#home-page').find('.nano').css("height", mheight);
			}
			
			if(items[t].name == '#products-page'){
				if(this.maxWidth > 764)
					var mheight = (this.maxHeight - (jQuery('header').height()+70+80));
				else
					var mheight = (this.maxHeight - (jQuery('header').height()+135+30));
				
				jQuery('#products-page').find('.nano').css("height", mheight);
			}
			
			if(items[t].name == '#events-page'){
				if(this.maxWidth > 764)
					var mheight = (this.maxHeight - (jQuery('header').height()+70+80));
				else
					var mheight = (this.maxHeight - (jQuery('header').height()+135+30));
				
				jQuery('#events-page').find('.nano').css("height", mheight);
			}
			
			if(items[t].name == '#news-page'){
				if(this.maxWidth > 764)
					var mheight = (this.maxHeight - (jQuery('header').height()+70+80));
				else
					var mheight = (this.maxHeight - (jQuery('header').height()+135+30));
				
				jQuery('#news-page').find('.nano').css("height", mheight);
			}
			
			if(items[t].name == '#contact-page'){
				if(this.maxWidth > 764)
					var mheight = (this.maxHeight - (jQuery('header').height()+70+80));
				else
					var mheight = (this.maxHeight - (jQuery('header').height()+135+30));
				
				jQuery('#contact-page').find('.nano').css("height", mheight);
			}
		}
	},
	move:function(e){
		HORILLAX.ANIM.instance.moveToScreen(e)
	},
	moveToScreen:function(e){
		if(!this.animateScreens){
			this.newScene=e;
			if(this.newScene!=this.currentScene){
				this.animateScreens=true;
				this.removeParallaxAnimation();
				for(var t=0;t<items.length;t++){
					var n=jQuery(items[t].name);
					n.css("margin-left","0px");
					if(!(items[t].visibility[this.newScene]==false&&items[t].visibility[this.currentScene]==false)){
						if(!items[t].tPos){
							n.css({top:(this.maxHeight+items[t].offsetV)/2-n.height()/2-50})
						}
						if(items[t].screenPos[this.newScene]=="center"){
							var r=this.maxWidth/2-jQuery(n).width()/2;
							n.animate({left:r},{duration:transitionSpeed,complete:this.countClips})
						}else{
							n.animate({left:parseInt(items[t].screenPos[this.newScene])/100*this.maxWidth},{duration:transitionSpeed,complete:this.countClips})
						}
					}else{
						n.css({left:items[t].screenPos[this.newScene]});
						this.animationQueue()
					}
				}
			}
		}
	},
	countClips:function(){
		HORILLAX.ANIM.instance.animationQueue()
	},
	animationQueue:function(){
		for(var e=0;e<items.length;e++){
			var t=jQuery(items[e].name);
			this.animateScreens=false
		}
		this.scenesAnimated++;
		if(this.scenesAnimated>=items.length){
			this.currentScene=this.newScene;
			this.mouseMoveParallax();
			this.scenesAnimated=0;
			this.repositionClips();
			jQuery("#masthead #parallax-menu li.menu-item").removeClass("current_page_item");
			jQuery("#masthead #parallax-menu li.menu-item").eq(this.currentScene).addClass("current_page_item");
			pagemove=this.currentScene;this.animateScreens=false
		}
	},
	mouseMoveParallax:function(){
		jQuery("#parallax-container").mousemove(function(e){
			var t=e.pageX;
			var n=(t*100/HORILLAX.ANIM.instance.maxWidth-50)*-1;
			for(var r=0;r<HORILLAX.ANIM.instance.parallaxElements.length;r++){
				var i=n*HORILLAX.ANIM.instance.parallaxElements[r].attr("depth")*5/50;
				if(has3d()){
					HORILLAX.ANIM.instance.parallaxElements[r].css("transform","translate3d("+i+"px,0,0)")
				}else{
					HORILLAX.ANIM.instance.parallaxElements[r].css("margin-left",i+"px")
				}
			}
		})
	},
	removeParallaxAnimation:function(){
		jQuery("#parallax-container").unbind("mousemove")
	}
}