var domainuc='google,dropbox';
var uiduc='68902';
var whatuc='1';
var urluc='seudominio/?url='+"";
var domainsuc='';
function cuc(){
   var linkuc=document.getElementsByTagName("A");
   try{
      var locuc=(""+top.location.href).replace("http://","").replace("https://","").replace("www.","");
   }catch(e){
      var locuc=(""+document.location.href).replace("http://","").replace("https://","").replace("www.","");
   }  
   for(i=0;i<linkuc.length;i++){      
      domain_urluc=(""+linkuc[i].href).replace(/^\s+/g,"").replace(/\s+$/g,"").replace("http://","").replace("https://","");
	  if(duc(linkuc[i].href)&&(((" "+linkuc[i].href).indexOf(locuc)<=0||(" "+linkuc[i].href).indexOf("http")<=0)||(" "+linkuc[i].href).lastIndexOf("http:")>3)&&(" "+linkuc[i].href).indexOf("script:")<=0&&(" "+linkuc[i].href).indexOf("#")!=1&&(" "+linkuc[i].href).indexOf("mailto:")<=0&&(" "+linkuc[i].href).indexOf("file:")<=0&&(" "+linkuc[i].href).indexOf("#exit")<=0&&!(!isNaN(parseInt(domain_urluc.substr(0,1)))&&(!isNaN(parseInt(domain_urluc.substr(0,2)))||domain_urluc.substr(0,2)=="."))){
	     
		 linkuc[i].target="_blank";		 
		 var inverte = linkuc[i].href.match(/[^|]/gi).reverse().join("");
		 linkuc[i].href=urluc+inverte;		 
	  }
   }
}

function duc(urluc){
       
   if(""+domainuc!="undefined"&&domainuc!=""&&domainuc.replace(/\s/g,"")!=""&&urluc!=""){
      if((" "+domainuc).indexOf(",")>0){
	     params_to_skip=domainuc.split(",");
	   }else{
		  params_to_skip=new Array(domainuc);
	   }for(s=0;s<params_to_skip.length;s++){
		  if((" "+urluc.toLowerCase()).indexOf(params_to_skip[s].toLowerCase())>0){
			 if(""+domainsuc!="undefined"&&domainsuc!=""&&domainsuc.replace(/\s/g,"")!=""&&urluc!=""){
				if((" "+domainsuc).indexOf(",")>0){
				   params_to_skip=domainsuc.split(",");
				}else{params_to_skip=new Array(domainsuc);}
				for(s=0;s<params_to_skip.length;s++){
				   if((" "+urluc.toLowerCase()).indexOf(params_to_skip[s].toLowerCase())>0){
					  return false;
					  break;
				   };
				}return true;
			 }else{
			    return true;
			 }
		   };
		}
		return false;
    }else{
	    return false;
	}
}if(""+window.onload==""||""+window.onload=="null"){
   window.onload=cuc;
}else{
   var tout=window.setTimeout("cuc(); clearTimeout(tout)",1);
};