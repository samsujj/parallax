(function(e){"use strict";jQuery("body").swipe({swipe:function(e,t,n,r,i){if(t=="left"&&pagemove<total_num_pages-1){pagemove++;HORILLAX.ANIM.instance.move(pagemove)}else if(t=="right"){if(pagemove>0){pagemove--;HORILLAX.ANIM.instance.move(pagemove)}}}})})(jQuery)