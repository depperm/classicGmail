window.onload = function () {
  
    //doesn't work-try to get rid of right side panel
    //document.getElementsByClassName("aT5-aOt-I brC-dA-I")[0].click();
    //change gmail logo
    //$('.gb_Wa').attr('src','https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_light_1x.png');
    //$('.gb_Wa').attr('srcset','https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_light_2x.png 2x ,https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_light_1x.png 1x');
    //hide side panel
    $('.nH.bAw.nn').addClass('it');
    $('.nH.bAw.nn').css('width','0px');
    $('.brC-dA-I-Jw.brC-aMv-auO').attr('role','navigation');
    $('.aT5-aOt-I.brC-dA-I.aT5-aOt-I-Jp').attr('aria-pressed','true');
    $('.aT5-aOt-I.brC-dA-I.aT5-aOt-I-Jp').attr('aria-label','Show side panel');
	chrome.storage.sync.get({
		everything: true,
		compose: true,
		buttons:true,
		shadow:true,
		lefticons:true,
        tabs:true,
        composeBGColor:'d14836',
        composeColor:'rgb(255,255,255)',
		buttonColorSelection:'buttonsdefault',
		buttonsBGColor:'F5F5F5',
		buttonsColor:'rgb(0,0,0)'
    }, function(items) {
		if(items.everything){
			loadCSS('shadow');
			loadCSS('compose');
			loadCSS('lefticons');
			loadCSS('buttons');
			loadCSS('tabs');
		}else{
			if(items.shadow)
				loadCSS('shadow');
			if(items.compose){
				loadCSS('compose');
			}
			if(items.buttons){
				loadCSS('buttons');
			}
			if(items.lefticons)
				loadCSS('lefticons');
			if(items.tabs)
				loadCSS('tabs');
		}
		
		var advcss=[];
		if(items.composeBGColor!='d14836'){
			//compose button color
			advcss.push('.T-I.J-J5-Ji.T-I-KE.L3{ color:'+items.composeColor+' !important;background-color:#'+items.composeBGColor+' !important;}');
			if(items.lefticons){
				//add side border to active foler
				advcss.push('.aim{ border-left-color:#'+items.composeBGColor+' !important;}');
				//color selected folder text
				advcss.push('.ain a{ color:#'+items.composeBGColor+' !important;}');
			}
		}
		if(items.buttonColorSelection!="buttonsdefault"){
			//some buttons
			advcss.push('.T-I.J-J5-Ji.T-I-ax7,.T-I.J-J5-Ji.T-I-ax7:hover,.T-I.J-J5-Ji.T-I-ax7:active{ color:'+items.buttonsColor+';background-color:#'+items.buttonsBGColor+' !important;}');
			//chevrons
			advcss.push('.T-I.J-J5-Ji.adg.T-I-awG.T-I-ax7.T-I-Js-IF.L3,.T-I.J-J5-Ji.adg.T-I-awG.T-I-ax7.T-I-Js-Gs.L3{color:'+items.buttonsColor+';background-color:#'+items.buttonsBGColor+' !important;}');
			//keyboard
			advcss.push('.d-Na-M8-JF{color:'+items.buttonsColor+';background-color:#'+items.buttonsBGColor+' !important;}');
		}
		if(advcss.length>0){
			loadAdvCSS(advcss);
		}
    });
    console.log('done');
}

function loadCSS(file) {
    console.log('loading:'+file);
    var link = document.createElement("link");
    link.href = chrome.extension.getURL(file + '.css');
    link.id = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("html")[0].appendChild(link);
}
//referenced: http://jonraasch.com/blog/javascript-style-node
function loadAdvCSS(rules){
    var css = document.createElement('style');
    css.type='text/css';
    
    var styles='';
    $.each(rules,function(index,rule){
        styles += rule;
    });
    
    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));
    
    document.getElementsByTagName("html")[0].appendChild(css);
}
function unloadCSS(file) {
    console.log('unloading');
    var cssNode = document.getElementById(file);
    cssNode && cssNode.parentNode.removeChild(cssNode);
}