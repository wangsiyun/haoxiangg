//直播切换
	var zhibo = $(".banner_right_top .zhibo");
	var zhili = $(".banner_right_top_1>ul>li");
	zhibo.hide().first().show();
	zhili.hover(function() {
		var index = $(this).index();
		zhibo.hide().eq(index).show();
		$(this).css("border-bottom","1px solid #B70841");
	},function(){
		$(this).css("border-bottom","1px solid #252726");
	});