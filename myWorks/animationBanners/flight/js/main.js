var ani1 = document.getElementById("ani1");
var ani2 = document.getElementById("ani2");
var ani3 = document.getElementById("ani3");
var ani4 = document.getElementById("ani4");
var slide = document.getElementById("slide-ani-1");
var head = document.getElementById("s2-head-1");
var ani5_1 = document.getElementById("ani5-1");
var ani6_1 = document.getElementById("ani6-1");
var ani7_1 = document.getElementById("ani7-1");
var ani8_1 = document.getElementById("ani8-1");
var ani9_1 = document.getElementById("ani9-1");
var butt_ani_1 = document.getElementById("butt-ani-1");
function animation(){
	setTimeout(function(){
		ani1.classList.add("ani1");	

	},100);
	setTimeout(function(){
		ani2.classList.add("ani2");
		
	},100);
	setTimeout(function(){
		ani3.classList.add("ani3");
		
	},100);
	setTimeout(function(){
		ani4.classList.add("ani4");
		
	},100);

	setTimeout(function(){
		slide.classList.add("slide-ani");
	},5000);

	setTimeout(function(){
		head.classList.add("s2-head");
	},5300);
	setTimeout(function(){
		ani5_1.classList.add("ani5");
	},5600);
	setTimeout(function(){
		ani6_1.classList.add("ani6");
	},5600);
	setTimeout(function(){
		ani7_1.classList.add("ani7");
	},5900);
	setTimeout(function(){
		ani8_1.classList.add("ani8");
	},6200);
	setTimeout(function(){
		ani9_1.classList.add("ani9");
	},6200);
	setTimeout(function(){
		butt_ani_1.classList.add("butt-ani");
	},6500);


	setTimeout(function(){
		butt_ani_1.classList.add("butt-ani-1");
	},8500);
	setTimeout(function(){
		ani9_1.classList.add("ani9-1");
	},8800);
	setTimeout(function(){
		ani8_1.classList.add("ani8-1");
	},9100);
	setTimeout(function(){
		ani7_1.classList.add("ani7-1");
	},9400);
	setTimeout(function(){
		ani6_1.classList.add("ani6-1");
	},9700);
	setTimeout(function(){
		ani5_1.classList.add("ani5-1");
	},10000);
	setTimeout(function(){
		head.classList.add("s2-head-1");
	},10300);
	setTimeout(function(){
		slide.classList.add("slide-ani-1");
	},10600);
	setTimeout(remove,11000)
}
animation();
function remove(){
	ani1.classList.remove("ani1");
	ani2.classList.remove("ani2");
	ani3.classList.remove("ani3");
	ani4.classList.remove("ani4");
	slide.classList.remove("slide-ani");
	head.classList.remove("s2-head");
	ani5_1.classList.remove("ani5");
	ani6_1.classList.remove("ani6");
	ani7_1.classList.remove("ani7");
	ani8_1.classList.remove("ani8");
	ani9_1.classList.remove("ani9");
	butt_ani_1.classList.remove("butt-ani");
	butt_ani_1.classList.remove("butt-ani-1");
	ani9_1.classList.remove("ani9-1");
	ani8_1.classList.remove("ani8-1");
	ani7_1.classList.remove("ani7-1");
	ani6_1.classList.remove("ani6-1");
	ani5_1.classList.remove("ani5-1");
	head.classList.remove("s2-head-1");
	slide.classList.remove("slide-ani-1");
	animation();

}