var user = $(".user>input");
var pwd = $(".pwd>input");
var user_i = $(".user>i");
var pwd_i = $(".pwd>i");
var but = $(".but>button")
var b = but[0]

//获取焦点显示下面内容
user.focus(function() {
	//	console.log(user.val())
	$(".X_user_2").css("display", "block");
	user.keyup(function() {
		console.log(user.val())
		if (user.val() != "") {
			$(".user>i").css("display", "block");
		}
	});
});
pwd.focus(function() {
	$(".X_pwd_2").css("display", "block");
	pwd.keyup(function() {
		if (pwd.val() != "") {
			$(".pwd>i").css("display", "block");
			but.attr("disabled");
		}
	});
});
//失去焦点隐藏下面内容
user.blur(function() {
	$(".X_user_2").css("display", "none")
});
pwd.blur(function() {
	$(".X_pwd_2").css("display", "none")
});
//点击清除value值
user_i.click(function() {
	user.val("");
	$(".user>i").css("display", "none");
});
pwd_i.click(function() {
	pwd.val("");
	$(".pwd>i").css("display", "none");
});

but.click(function() {
	alert("Hi!!")
});
//console.log(b)
if (user.val() == "" || pwd.val() == "") {
	but.attr("disabled", "true");
	but.css({
		"background": "#EFEFEF",
		"cursor": "no-drop",
	});
} else {
	but.removeAttr("disabled");
	but.css({
		"background": "#fa7117",
		"cursor": "pointer"
	});
}