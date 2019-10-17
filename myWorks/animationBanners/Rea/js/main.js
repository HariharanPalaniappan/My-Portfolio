var rea = document.getElementById("rea");
var cont = document.getElementById("cont");
var butt = document.getElementById("butt");
var cloud1 = document.getElementById("cloud1");
var cloud2 = document.getElementById("cloud2");
animation();
function animation(){
	setTimeout(function(){
		rea.classList.add("rea_1");
	},100);
	setTimeout(function(){
		cont.classList.add("cont_1");
	},500);
	setTimeout(function(){
		butt.classList.add("butt_1");
	},1000);


	setTimeout(function(){
		rea.classList.add("rea_2");
	},2000);
	setTimeout(function(){
		cont.classList.add("cont_2");
	},2500);
	setTimeout(function(){
		cloud1.classList.add("cloud_1");
	},3500);
	setTimeout(function(){
		cloud2.classList.add("cloud_2");
	},4000);
	setTimeout(remove,6000);
}
function remove(){
	rea.classList.remove("rea_1");
	cont.classList.remove("cont_1");
	butt.classList.remove("butt_1");
	rea.classList.remove("rea_2");
	cont.classList.remove("cont_2");
	cloud1.classList.remove("cloud_1");
	cloud2.classList.remove("cloud_2");
	animation();
}