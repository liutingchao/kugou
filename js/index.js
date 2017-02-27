window.onload=function() {
	// 导航栏登录功能

	$('.header-menu').children().eq(1).click(function(){
		lock($('.mask'),$('.login'));
		$('.login').children().eq(0).click(function(){
			unlock($('.mask'),$('.login'));
		})
	})
	$('.login').drag();

	var more=$('#more').get(0);
	var menuMore=$('#menu-more').get(0);
	var timeoutId=0;
	addEvent(more,'mouseover',function(evt){
		clearTimeout(timeoutId);
		menuMore.style.display='block';
	})
	addEvent(more,'mouseout',function(evt){
		timeoutId=setTimeout(function(){
			menuMore.style.display='none';
		},500);		
	})
	addEvent(menuMore,'mouseover',function(evt){
		clearTimeout(timeoutId);
		menuMore.style.display='block';
	})
	addEvent(menuMore,'mouseout',function(evt){
		timeoutId=setTimeout(function(){
			menuMore.style.display='none';
		},500);		
	})

	var picture=$('#picture').get(0);
	var interId=setInterval(function(){num==5?num=1:num++;setTimeout(changeOpa,50);},3000);
	var num=1;
	var opa=100;
	var dots=children($('.picture-dot-content').get(0));
	var leftArrow=$('.picture-arrow-left').get(0);
	var rightArrow=$('.picture-arrow-right').get(0);
	addEvent(leftArrow,'click',function(evt){
		clearInterval(interId);
		num==1?num=5:num--;
		setTimeout(changeOpa,50);
		// picture.style.background='url(images/banner-bg'+num+'.jpg) no-repeat center center';
		for (var i = 0; i < dots.length; i++) {
			if(i+1==num){
				dots[i].className='dot-active';
			}else{
				dots[i].className='';
			}
		}
		interId=setInterval(function(){num==5?num=1:num++;setTimeout(changeOpa,50);},3000);
	})
	addEvent(rightArrow,'click',function(evt){
		clearInterval(interId);
		num==5?num=1:num++;
		setTimeout(changeOpa,50);
		// picture.style.background='url(images/banner-bg'+num+'.jpg) no-repeat center center';
		for (var i = 0; i < dots.length; i++) {
			if(i+1==num){
				dots[i].className='dot-active';
			}else{
				dots[i].className='';
			}
		}
		interId=setInterval(function(){num==5?num=1:num++;setTimeout(changeOpa,50);},3000);
	})
	for (var i = 0; i < dots.length; i++) {
		addEvent(dots[i],'mouseover',function(evt){
			var target=getTarget(evt);
			clearInterval(interId);
			for (var j = 0; j < dots.length; j++) {
				if(dots[j]==target){
					num=j+1;
					// picture.style.background='url(images/banner-bg'+num+'.jpg) no-repeat center center';
					setTimeout(changeOpa,50);
					dots[j].className='dot-active';
				}else{
					dots[j].className='';
				}
			}
			interId=setInterval(function(){num==5?num=1:num++;setTimeout(changeOpa,50);},3000);
		})
	}
	function changeOpa(){				
		opa<=0?opa=0:opa-=20;
		picture.style.opacity=opa/100;
		if(opa>0){
			setTimeout(changeOpa,50);
		}else{
			picture.style.background='url(images/banner-bg'+num+'.jpg) no-repeat center center';
			for (var i = 0; i < dots.length; i++) {
				if(i+1==num){
					dots[i].className='dot-active';
				}else{
					dots[i].className='';
				}
			}
			setTimeout(changeOpa2,50);
		}
	}
	function changeOpa2(){		
		opa>=100?opa=100:opa+=20;
		picture.style.opacity=opa/100;
		if(opa<100){
			setTimeout(changeOpa2,50);
		}
	}
}

function children(obj){
	var nodes=obj.childNodes;
	var arr=[];
	for (var i = 0; i < nodes.length; i++) {
		if(!(nodes[i].nodeType==3&&/^\s+$/.test(nodes[i].nodeValue))){
			arr.push(nodes[i]);
		}
	}
	return arr;
}

addEvent($('form').children().eq(0).children())
	if($(this).val=='用户名'){
		$(this).val('');
	}
	addEvent(this,'blur',function(){
		if($(this).val()==''){
			$(this).val('用户名');
		}
	})