var sli = document.getElementById("slide_1");
var shoe_1 = document.getElementById("shoe_1");
var lux = document.getElementById("lux");
var qul = document.getElementById("qul");
var sho = document.getElementById("sho");
var f_m = document.getElementById("f_m");
var con1 =document.getElementById("con1");
var slide_2 = document.getElementById("slide_2");
var shoe_2 = document.getElementById("shoe_2");
var per = document.getElementById("per");
var dis = document.getElementById("dis");
var btt = document.getElementById("btt");
animation();
function animation(){
	setTimeout(function(){
		sli.classList.add("slide_1");
	},100);
	setTimeout(function(){
		shoe_1.classList.add("shoe_1");
	},100);
	setTimeout(function(){
		lux.classList.add("lux_1");
	},1000);
	setTimeout(function(){
		qul.classList.add("qul_1");
		
	},1200);
	setTimeout(function(){
		sho.classList.add("sho_1");
		
	},1400);
	setTimeout(function(){
		f_m.classList.add("f_m_1");
	},1600);
	setTimeout(function(){
		con1.classList.add("con_ani");
	},2000);
	setTimeout(function(){
		slide_2.classList.add("sli_2");
	},4000);
	setTimeout(function(){
		shoe_2.classList.add("shoe_2");
	},5000);
	setTimeout(function(){
		per.classList.add("per_1");
	},5500);
	setTimeout(function(){
		dis.classList.add("dis_1");
	},5800);
		setTimeout(function(){
		btt.classList.add("btt_1");
	},6100);
		setTimeout(function(){
		shoe_2.classList.add("shoe_2_1");
		per.classList.add("per_1_1");
	},8500);
	setTimeout(function(){
		dis.classList.add("dis_1_1");
	},8800);
		setTimeout(function(){
		btt.classList.add("btt_1_1");
	},9100);
	setTimeout(remove,10600);
}
function remove(){
	sli.classList.remove("slide_1");
	shoe_1.classList.remove("shoe_1");
	lux.classList.remove("lux_1");
	qul.classList.remove("qul_1");
	sho.classList.remove("sho_1");
	f_m.classList.remove("f_m_1");
	con1.classList.remove("con_ani");
	slide_2.classList.remove("sli_2");
	shoe_2.classList.remove("shoe_2");
	per.classList.remove("per_1");
	dis.classList.remove("dis_1");
	btt.classList.remove("btt_1");
	shoe_2.classList.remove("shoe_2_1");
	per.classList.remove("per_1_1");
	dis.classList.remove("dis_1_1");
	btt.classList.remove("btt_1_1");
	animation();
}