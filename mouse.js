
//获取所有的地鼠
var mouses = $('img');
//设置分数
var score = 0; 

//随机出现一个地鼠
function show()
{
	//Math.random() 随机数  0  ~  1   0~15.XXXX
	var index = Math.random() * 16;
	
//	去掉小数点 Math.floor获取不大于该数值的最大整数
	index = Math.floor(index);	
//	获取mouses集合里面随机的一个地鼠
	var mouse = mouses.get(index);
	//地鼠出现
	
	//给被选中的地鼠 增加一个上升动画  移除一个下降动画
	$(mouse).addClass('mouseUp').removeClass('mouseDown');
	//设置延迟 指定时间以后 会调用{}里面的内容
	setTimeout(function(){
		$(mouse).addClass('mouseDown').removeClass('mouseUp');
	} , 2500);
}
function play()
{
	setTimeout(show , 300);
    setTimeout(show , 600);
    setTimeout(show , 900);
    setTimeout(show , 1200);
    setTimeout(show , 1500);
    setTimeout(show , 1800);
}
//每隔多长时间后 调用一次这个方法
setInterval(play , 2100);

$('body').mouseup(function(){
	$('body').css('cursor','url(image/cursor.png), auto');
}).mousedown(function(){
	$('body').css('cursor','url(image/cursor-down.png),auto');
});


//img 显示的全是地鼠
$('img').click(function()
{
	//score = score + 10 ；
	score += 10;
	//打中地鼠 加分
	$('#score').text('得分:' + score);
	
	//打中地鼠   下去
	$(this).addClass('mouseDown').removeClass('mouseUp');

	
	//打中地鼠 播放声音 获取所选中标签的第一个属性 
	$('#dazhong').attr('src','audio/dazhong.wav').get(0).play();
})