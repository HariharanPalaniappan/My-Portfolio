// Global variable
var ua = navigator.userAgent;
// Browser Name
var browser = ["Chrome","Safari","Firefox","Opera","MSIE","Trident","Edge"];
var b;
for(var i=0;i<browser.length;i++){
	if(ua.indexOf(browser[i])>-1){
		b = browser[i];
		break;
	}
}
if(b == "MSIE" || b == "Trident" || b == "Edge"){
	b = "Internet Explorer";
}
// Operating System Name
var os;
var os_list = ["Windows NT 10.0","Windows NT 6.2","Windows NT 6.1","Windows NT 6.0","Windows NT 5.1","Windows NT 5.0","Mac","Linux"];
for(var i=0;i<os_list.length;i++){
	if (ua.indexOf(os_list[i]) != -1) {
		os = os_list[i];
		break;
	}
	
}
 // Cookie enabled
 var cook_val;
 var cook = navigator.cookieEnabled;
 if (cook === true){
 	cook_val = "Cookies Enabled";
 }
 else{
 	cook_val = "Cookies Disabled";
 }
// java enabled 
var java_val;
var java = navigator.javaEnabled();
if(java == true){
	java_val = "Java Enabled"
}
else{
	java_val = "Java Disabled"
}
// browser resolution
var resolution=window.innerWidth +" x " +window.innerHeight;
console.log(b +" "+ os +" "+ cook_val+" "+ java_val+" "+ resolution);
// screen resolution
var screen_resolution=screen.width +" x " +screen.height;
// app version
var app = navigator.appVersion;
// platform
var platform = navigator.platform;
// location
// var location =  window.location.href;



// table view dom
var table_div =document.getElementById("table_div"); 
var table = document.createElement("table");
document.body.appendChild(table);
table.setAttribute("id","table_view");
table.setAttribute("class","table_view");
var tr1 = document.createElement("tr");
table.appendChild(tr1);
var th1 = document.createElement("th");
tr1.appendChild(th1);
th1.innerHTML="Name";
var th2 = document.createElement("th");
tr1.appendChild(th2); 
th2.innerHTML="Value";
// browser
var tr2 = document.createElement("tr");
table.appendChild(tr2);
var td1 = document.createElement("td");
tr2.appendChild(td1);
td1.innerHTML="Browser";
var td2 = document.createElement("td");
tr2.appendChild(td2); 
td2.innerHTML=b;
// os
var tr3 = document.createElement("tr");
table.appendChild(tr3);
var td3 = document.createElement("td");
tr3.appendChild(td3);
td3.innerHTML="Operating System";
var td4 = document.createElement("td");
tr3.appendChild(td4); 
td4.innerHTML=os;
// cookie enabled
var tr4 = document.createElement("tr");
table.appendChild(tr4);
var td5 = document.createElement("td");
tr4.appendChild(td5);
td5.innerHTML="Cookies";
var td6 = document.createElement("td");
tr4.appendChild(td6); 
td6.innerHTML=cook_val;
// java enabled
var tr5 = document.createElement("tr");
table.appendChild(tr5);
var td7 = document.createElement("td");
tr5.appendChild(td7);
td7.innerHTML="Java";
var td8 = document.createElement("td");
tr5.appendChild(td8); 
td8.innerHTML=java_val;
// browser resolution
var tr6 = document.createElement("tr");
table.appendChild(tr6);
var td9 = document.createElement("td");
tr6.appendChild(td9);
td9.innerHTML="Browser Resolution";
var td10 = document.createElement("td");
tr6.appendChild(td10); 
td10.innerHTML=resolution;
// screen resolution
var tr7 = document.createElement("tr");
table.appendChild(tr7);
var td11 = document.createElement("td");
tr7.appendChild(td11);
td11.innerHTML="Screen Resolution";
var td12 = document.createElement("td");
tr7.appendChild(td12); 
td12.innerHTML=screen_resolution;
// app version
var tr8 = document.createElement("tr");
table.appendChild(tr8);
var td13 = document.createElement("td");
tr8.appendChild(td13);
td13.innerHTML="App Version";
var td14 = document.createElement("td");
tr8.appendChild(td14); 
td14.innerHTML=app;
// platform
var tr9 = document.createElement("tr");
table.appendChild(tr9);
var td15 = document.createElement("td");
tr9.appendChild(td15);
td15.innerHTML="Platform";
var td16 = document.createElement("td");
tr9.appendChild(td16); 
td16.innerHTML=platform;
// location
var tr10 = document.createElement("tr");
table.appendChild(tr10);
var td17 = document.createElement("td");
tr10.appendChild(td17);
td17.innerHTML="Location";
var td18 = document.createElement("td");
tr10.appendChild(td18); 
td18.innerHTML=window.location.href;
// time
var tr11 = document.createElement("tr");
table.appendChild(tr11);
var td19 = document.createElement("td");
tr11.appendChild(td19);
td19.innerHTML="Current Time";
var td20 = document.createElement("td");
tr11.appendChild(td20);
td20.setAttribute("id","time") 
// get time
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}
      
function startTime() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
t = setTimeout(function() {
    startTime()
    }, 500);
}
startTime();











