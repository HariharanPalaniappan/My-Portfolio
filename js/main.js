var menu = document.getElementById("menu");
var menu_bar = document.getElementById("menu-bar");
var close = document.getElementById("close");

var all = document.getElementById("all");
var brand = document.getElementById("brand");
var design = document.getElementById("design");
var graphic = document.getElementById("graphic");
// menu bar slide in function
menu.addEventListener("click",function(){
	menu_bar.classList.add("slide_in");
	menu_bar.classList.remove("slide_out");
});
// menu bar slide out function
close.addEventListener("click",function(){
	// console.log(close);
	menu_bar.classList.add("slide_out");
	menu_bar.classList.remove("slide_in");
	setTimeout(remove,500);

});
var menu_list = document.querySelectorAll(".menu_link");

for( var i = 0; i < menu_list.length; i++){
	menu_list[i].addEventListener("click",function(){
		// console.log('sdfsdf')
		menu_bar.classList.add("slide_out");
		menu_bar.classList.remove("slide_in");
		setTimeout(remove,500);
	});
}
// remove function
function remove(){
	menu_bar.classList.remove("slide_out");
}
// scroll effect
var sc = document.getElementById('sec_nav');
if (document.body.scrollTop >500) {
	sc.classList.add("scroll-nav");
	console.log(sc);
}
window.addEventListener('scroll',()=>{
	console.log(sc);		
	if (window.scrollY > 300) {
		sc.classList.add("scroll-nav");
	}
	else{
		sc.classList.remove("scroll-nav");
	}
})
