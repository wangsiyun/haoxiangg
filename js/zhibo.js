var p1 = $(".program_left_title");
var p2 = $(".program_left_title_name");
var p3 = $(".program_left_con");
var p4 = $(".con_img");
var p5 = $(".left_arr");
$(".program_left").eq(0).hover(function() {
	p1.eq(0).css("border-color", "#C20B47");
	p2.eq(0).css("border-color", "#C20B47");
	p3.eq(0).css("border-color", "#C20B47");
	p4.eq(0).css("border-color", "#C20B47");
	p5.eq(0).css({
		"background": "url(img/sanjiao.png) no-repeat center",
		"background-size": "100% 100%",
		"width": "13px",
		"height": "26px"
	});
}, function() {
	p1.eq(0).css("border-color", "gainsboro");
	p2.eq(0).css("border-color", "gainsboro");
	p3.eq(0).css("border-color", "gainsboro");
	p4.eq(0).css("border-color", "gainsboro");
	p5.eq(0).css({
		"background": ""
	});
});

$(".program_left").eq(1).hover(function() {
	p1.eq(1).css("border-color", "#C20B47");
	p2.eq(1).css("border-color", "#C20B47");
	p3.eq(1).css("border-color", "#C20B47");
	p4.eq(1).css("border-color", "#C20B47");
	p5.eq(1).css({
		"background": "url(img/sanjiao.png) no-repeat center",
		"background-size": "100% 100%",
		"width": "13px",
		"height": "26px"
	});
}, function() {
	p1.eq(1).css("border-color", "gainsboro");
	p2.eq(1).css("border-color", "gainsboro");
	p3.eq(1).css("border-color", "gainsboro");
	p4.eq(1).css("border-color", "gainsboro");
	p5.eq(1).css({
		"background": ""
	});
});