# reward
打赏标签（jquery+css）

引用方式
  <script type="text/javascript" src="jquery-3.0.0.min.js"></script>
  <script type="text/javascript">
  	window.reward_config={align: "right", top: "10%", animate: true, alipay: "./img/alipay.jpg", webChat: "./img/webChat.png"};
  	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='./reward.js'];
  </script>
  
  1.指定jquery文件的url
  2.指定reward.js文件的url
  3.参数指定：
    align： "left" or "right", 对齐方式
    top: 百分比或者像素，距离浏览器上边距
    animate: ture or false, 是否动态展示
    alipay: 支付宝支付二维码url
    webChat: 微信支付二维码url
