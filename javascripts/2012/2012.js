(function(){var e;e=function(){return""===document.mform.name.value?(alert("\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),!1):""!==document.mform.from.value||(alert("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),!1)}}).call(this),new function(){function e(){this.className="heightLine",this.parentClassName="heightLineParent",reg=new RegExp(this.className+"-([a-zA-Z0-9-_]+)","i"),objCN=new Array;for(var e=document.getElementsByTagName?document.getElementsByTagName("*"):document.all,t=0;t<e.length;t++)for(var o=e[t].className.split(/\s+/),r=0;r<o.length;r++){if(o[r]==this.className){objCN["main CN"]||(objCN["main CN"]=new Array),objCN["main CN"].push(e[t]);break}if(o[r]==this.parentClassName){objCN["parent CN"]||(objCN["parent CN"]=new Array),objCN["parent CN"].push(e[t]);break}if(o[r].match(reg)){var a=o[r].match(reg);objCN[a]||(objCN[a]=new Array),objCN[a].push(e[t]);break}}var i=document.createElement("div"),n=document.createTextNode("S");i.appendChild(n),i.style.visibility="hidden",i.style.position="absolute",i.style.top="0",document.body.appendChild(i);var d=i.offsetHeight;changeBoxSize=function(){for(var e in objCN)if(objCN.hasOwnProperty(e))if("parent CN"==e)for(var t=0;t<objCN[e].length;t++){for(var o=0,r=objCN[e][t].childNodes,a=0;a<r.length;a++)r[a]&&1==r[a].nodeType&&(r[a].style.height="auto",o=o>r[a].offsetHeight?o:r[a].offsetHeight);for(var a=0;a<r.length;a++)if(r[a].style){var i=r[a].currentStyle||document.defaultView.getComputedStyle(r[a],""),n=o;i.paddingTop&&(n-=i.paddingTop.replace("px","")),i.paddingBottom&&(n-=i.paddingBottom.replace("px","")),i.borderTopWidth&&"medium"!=i.borderTopWidth&&(n-=i.borderTopWidth.replace("px","")),i.borderBottomWidth&&"medium"!=i.borderBottomWidth&&(n-=i.borderBottomWidth.replace("px","")),r[a].style.height=n+"px"}}else{for(var o=0,t=0;t<objCN[e].length;t++)objCN[e][t].style.height="auto",o=o>objCN[e][t].offsetHeight?o:objCN[e][t].offsetHeight;for(var t=0;t<objCN[e].length;t++)if(objCN[e][t].style){var i=objCN[e][t].currentStyle||document.defaultView.getComputedStyle(objCN[e][t],""),n=o;i.paddingTop&&(n-=i.paddingTop.replace("px","")),i.paddingBottom&&(n-=i.paddingBottom.replace("px","")),i.borderTopWidth&&"medium"!=i.borderTopWidth&&(n-=i.borderTopWidth.replace("px","")),i.borderBottomWidth&&"medium"!=i.borderBottomWidth&&(n-=i.borderBottomWidth.replace("px","")),objCN[e][t].style.height=n+"px"}}},checkBoxSize=function(){d!=i.offsetHeight&&(changeBoxSize(),d=i.offsetHeight)},changeBoxSize(),setInterval(checkBoxSize,1e3),window.onresize=changeBoxSize}function t(e,t,o){try{e.addEventListener(t,o,!1)}catch(r){e.attachEvent("on"+t,o)}}t(window,"load",e)};