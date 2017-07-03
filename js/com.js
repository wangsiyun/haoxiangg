//首页动态图效果
//获取俩li集合对象
var dong1 = document.getElementsByClassName("dong1");
var lis = document.getElementsByClassName("lis");
//定义一个可以变的索引
var cont=0,index=0;
//定义一个标示
var fiag;
window.onload=show;
//定义一个变量来存储定时器
var _shi=setInterval(show,2000);

function show(){
	fiag = true;
	//调用dong方法
	dong();
	//把dong1集合里的图片通过改变透明度来显示
	dong1[cont].style.opacity="1";//通过透明来显示
	lis[cont].style.background="#ED145B";
	cont++;
	if(cont>lis.length-1){
		cont=0;
	}
}
function dong(){
	for(var i=0;i<dong1.length;i++){
		//把dong1集合通过透明来隐藏
		dong1[i].style.opacity= "0";//通过透明度来隐藏
	}
	for(var i=0;i<lis.length;i++){
		//把lis集合变成半透明
		lis[i].style.background = "rgba(0,0,0,.5)";
	}
}
function anNiu(index){
	//清除定时器
	clearInterval(_shi);
	//调用dong函数
	dong();
	//把dong1集合里的图片通过改变透明度来显示
	dong1[index].style.opacity="1";//通过透明来显示
	//把lis集合的背景变成#ED145B
	lis[index].style.background="#ED145B";
	//把点击得到的索引(index)赋值给 cont
	cont=index;
	//启动定时器
	_shi=setInterval(show,2000);
}
//点击上一个跳转
function onUp(){
	if(fiag){//判断定时器在运行的时候
		--cont;//让它回到它的本身
		fiag = false;//变化一下标示
	}
	--cont;
	//判断cont的值 当它小于0时 就把等于当前所显示的最大值
	if(cont < 0){
		cont = 13;
	}
	_com();
	_shi=setInterval(show,2000);
	
}
//点击下一个跳转
function onDonw(){
	//判断cont的值 当它大于3时 就把它初始化
//	if(fiag){//判断定时器在运行的时候
//		cont++;//让它回到它的本身
//		fiag = false;//变化一下标示
//	}
//	if(cont == 2){//处理第四章点上一个回来时点两下的特殊情况
//		cont = 1;
//	}
	cont++;
	if(cont > 13){
		cont = 0;
	}
console.log(cont);
	_com();
	_shi=setInterval(show,2000);
	
}
//公共的部分代码
function _com(){
	//清除定时器
	clearInterval(_shi);
	//调用dong方法
	dong();
	//把dong1集合里的图片通过改变透明度来显示
	dong1[cont].style.opacity="1";//通过透明来显示
	//把lis集合的背景变成#ED145B
	lis[cont].style.background="#ED145B";
}
