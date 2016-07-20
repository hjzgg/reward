$(function () {

	function changeWay(way){
		var content;
		if(way == "alipay") {
			$('#myRewards-code img').attr("src", window.reward_config.alipay);
			$('#myRewards-account').html('支付宝打赏');
		} else if(way == "webChat") {
			$('#myRewards-code img').attr("src", window.reward_config.webChat);
			$('#myRewards-account').html('微信打赏');
		}
	}

	//左右对齐方式两种
	var alignWay = window.reward_config.align == "left" ? true : false;
	//是否动态展示
	var animate = window.reward_config.animate;
	//距离浏览器上边距
	var top = window.reward_config.top;

	var content = !alignWay ? 
		$('<div id="myRewards">\
			<a id="btn-myRewards" href="javascript:;"><img src="' + (animate ? './img/tab_right.gif' : './img/tab_right.png') + '"></a>\
			<div id="myRewards-main">\
				<h1 id="myR-h">喜欢请打赏</h1>\
				<div id="myRewardsbox">\
					<div id="myRewards-list">\
						<ul id="not-full">\
							<li style="background-color:#fff;" way="alipay"><a href="javascript:;">支付宝<img src="./img/alipay.png" alt="支付宝"></a></li>\
							<li way="webChat"><a href="javascript:;">微信<img src="./img/weixin.png" alt="微信"></a></li>\
						</ul>\
					</div>\
					<div id="myRewards-detail">\
						<div id="myRewards-ubox">\
							<p id="myRewards-code-tit">扫描二维码打赏</p>\
							<div id="myRewards-code"><img src="' + window.reward_config.alipay + '"></div>\
							<p id="myRewards-account">支付宝打赏</p>\
						</div>\
					</div>\
				</div>\
				<p id="myR-bot"><a href="https://github.com/hjzgg/reward" target="_blank">了解更多</a></p>\
			</div>\
		</div>')
		:
		$('<div id="myRewards">\
			<a id="btn-myRewards" href="javascript:;"><img src="' + (animate ? './img/tab_left.gif' : './img/tab_left.png') + '"></a>\
			<div id="myRewards-main">\
				<h1 id="myR-h">喜欢请打赏</h1>\
				<div id="myRewardsbox">\
					<div id="myRewards-detail">\
						<div id="myRewards-ubox">\
							<p id="myRewards-code-tit">扫描二维码打赏</p>\
							<div id="myRewards-code"><img src="' + window.reward_config.alipay + '"></div>\
							<p id="myRewards-account">支付宝打赏</p>\
						</div>\
					</div>\
					<div id="myRewards-list">\
						<ul id="not-full">\
							<li style="background-color:#fff;" way="alipay"><a href="javascript:;">支付宝<img src="./img/alipay.png" alt="支付宝"></a></li>\
							<li way="webChat"><a href="javascript:;">微信<img src="./img/weixin.png" alt="微信"></a></li>\
						</ul>\
					</div>\
				</div>\
				<p id="myR-bot"><a href="https://github.com/hjzgg/reward" target="_blank">了解更多</a></p>\
			</div>\
		</div>');

	$('body').append(content);

	var myRewardsCss = {
	    "position": "fixed",
	    "top": top,
	    "z-index": "10000",
	    "width": "0px",
	    "overflow": "hidden",
	    "box-sizing": "content-box",
	};

	if(alignWay) { myRewardsCss["left"] = "0px"; myRewardsCss["padding-right"] = "34px"; }
	else { myRewardsCss["right"] = "0px"; myRewardsCss["padding-left"] = "34px"; }

	$('#myRewards').css(myRewardsCss);

	$('#myRewards').hover(function(){
		$('#myRewards-main').animate({"opacity": "1"});
		$(this).animate({"width": "240px"});
	}, function(){
		$('#myRewards-main').animate({"opacity": "0"});
		$(this).animate({"width": "0px"});
	});

	var btnMyRewardsCss = {
	    "position": "absolute",
	    "right": "0",
	    "top": "50%",
	    "margin-top": "-46px",
	    "width": "34px",
	    "height": "93px",
	};

	if(alignWay) btnMyRewardsCss["right"] = "0px";
	else btnMyRewardsCss["left"] = "0px";

	$('#btn-myRewards').css(btnMyRewardsCss);

	$('#myRewards-main').css({
	    "width": "240px",
	    "height": "332px",
	    "font": "12px/1.5 microsoft yahei,tahoma,arial,sans-serif",
	    "color": "#000",
	    "background-color": "#fff",
	    "border": "1px solid #dbdbdb",
	    "border-right": "none",
	    "opacity": "0",
	});

	$('#myR-h').css({
	    "padding": "0 10px",
	    "font-size": "14px",
	    "font-weight": "normal",
	    "background-image": "none",
	    "margin": "0",
	    "height": "26px",
	    "line-height": "26px",
	    "background-color": "#e7e7e7",
	    "text-align": alignWay ? "right" : "left"
	});

	$('#myRewardsbox').css({
	    "font-size": "0",
	    "background-color": "#eeeeee",
	    "width": "240px",
	});

	$('#myRewards-list').css({
		"display": "inline-block",
	    "vertical-align": "middle",
	    "width": "90px",
	    "font-size": "12px",
	});

	$('#myRewards-list a').css({
		"position": "relative",
	    "display": "block",
	    "padding-left": "40px",
	    "height": "55px",
	    "line-height": "55px",
	    "font-size": "12px",
	    "border-bottom": "1px solid #cccccc",
	    "color": "#000",
	    "text-decoration": "none",
	    "outline": "0 none",
	});

	$('#myRewards-list a img').css({
		"position": "absolute",
	    "left": "6px",
	    "top": "13px",
	    "width": "30px",
	    "height": "30px"
	});

	$('#not-full').css({
		"border-top": "1px solid #dfdfdf",
		"list-style": "none",
	});

	$('#not-full li').css({
		"display": "block",
	    "height": "56px",
	    "-webkit-transition": "background-color .2s linear",
	    "transition": "background-color .2s linear",
	    "margin-left": "-40px",
    	"padding": "0",
	    "list-style": "none",
	});

	$('#not-full li').mouseover(function() {
		changeWay($(this).attr("way"));
		$(this).css({"background-color": "#fff"}).siblings().css({"background-color": "rgb(238, 238, 238)"});
	});

	$('#myRewards-detail').css({
	    "display": "inline-block",
	    "vertical-align": "middle",
	    "width": "150px",
	    "height": "280px",
	    "font-size": "12px",
	    "background-color": "#fff",
	});

	$('#myRewards-ubox').css({"padding": "14px 0 0 10px"});

	$('#myRewards-code-tit').css({
	    "margin": "0 0 20px",
	    "width": "132px",
	    "height": "30px",
	    "line-height": "30px",
	    "font-size": "12px",
	    "text-align": "center",
	    "background": "url(./img/tab_pay.jpg) no-repeat",
	});

	$('#myRewards-code').css({
	    "margin": "0 0 20px",
	    "padding": "12px",
	    "width": "106px",
	    "height": "106px",
	    "background": "url(./img/border.jpg) no-repeat",
	    "box-sizing": "content-box",
	});

	$('#myRewards-code img').css({
		"width": "106px",
   		"height": "106px"
	});

	$('#myRewards-account').css({
		"font-size": "12px",
	    "word-break": "break-all",
	    "text-align": "center",
	});

	$('#myR-bot').css({
	 	"padding": "0 10px",
	    "font-size": "12px",
	    "text-align": "right",
        "margin": "0",
	    "height": "26px",
	    "line-height": "26px",
	    "background-color": "#e7e7e7",
	    "text-align": alignWay ? "left" : "right"
	});
});