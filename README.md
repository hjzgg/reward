# reward
打赏标签（jquery+css）

引用方式
  ```js代码
  <script type="text/javascript" src="jquery-3.0.0.min.js"></script>
  
  <script type="text/javascript">
  
  	  window.reward_config={align: "right", top: "10%", animate: true, alipay: "./img/alipay.jpg", webChat: "./img/webChat.png"};
  	
  	  with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='./reward.js'];
  	
  </script>
  ```
  1.指定jquery文件的url
  
  2.指定reward.js文件的url
  
  3.参数指定：
  
    align： "left" or "right", 对齐方式
    
    top: 百分比或者像素，距离浏览器上边距
    
    animate: ture or false, 是否动态展示
    
    alipay: 支付宝支付二维码url
    
    webChat: 微信支付二维码url

可能出现的问题

  如果在引用的时候（例如放到博客中时）出现位置错乱，请将reward.js中的 "margin-left": "-40px" 去掉，如下。
  
  ```
  $('#not-full li').css({
		"display": "block",
	    "height": "56px",
	    "-webkit-transition": "background-color .2s linear",
	    "transition": "background-color .2s linear",
	    "margin-left": "-40px",  引用时位置出现错乱，这一行可以去掉
    	"padding": "0",
	    "list-style": "none",
	});
  ```
