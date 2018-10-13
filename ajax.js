if (window.XMLHttpRequest){
	var req=new XMLHttpRequest();
}
else{
	var req=new ActiveXObject("Microsofit.XMLHTTP");
}

req.open("GET","regs.php?fn=dd",true);
req.send();


