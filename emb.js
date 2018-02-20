function Abrir(mypage, myname, w, h, scroll) {
var winl = (screen.width - w) / 2;
var wint = (screen.height - h) / 2;
winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable'
win = window.open(mypage, myname, winprops)
if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}
function MM_effectHighlight(targetElement, duration, startColor, endColor, restoreColor, toggle)
{
	Spry.Effect.DoHighlight(targetElement, {duration: duration, from: startColor, to: endColor, restoreColor: restoreColor, toggle: toggle});
}
var segundos = 7;
function contador() {
document.getElementById('tempo').innerHTML=segundos;
if(segundos == 0) {
document.getElementById('link0').style.display="none";
document.getElementById('link').style.display="block";
document.getElementById('msg').style.display="none";
}
if (segundos != 0){
segundos = segundos-1;
setTimeout("contador()", 1000);
}
}
function createCookie(name, value, domainName, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*52*52*52*52));
		var expires = "; expires=" + date.toGMTString();
		var domain = "; domain=" + domainName;
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + domain + "; path=/";
}