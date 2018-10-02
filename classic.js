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
        composeBGColor:'rgb(209, 72, 54)',
        composeColor:'rgb(255,255,255)',
		buttonColorSelection:'buttonsdefault',
		buttonsBGColor:'rgb(245, 245, 245)',
		buttonsColor:'rgb(0,0,0)',
        iconcolor:'black'
    }, function(items) {
        //console.log(items.buttonColorSelection);
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
		if(items.composeBGColor!='rgb(209, 72, 54)' && items.compose){
			//compose button color
			advcss.push('.T-I.J-J5-Ji.T-I-KE.L3{ color:'+items.composeColor+' !important;background-color:'+items.composeBGColor+' !important;}');
			if(items.lefticons){
				//add side border to active folder
				advcss.push('.aim{ border-left-color:'+items.composeBGColor+' !important;}');
				//color selected folder text
				advcss.push('.ain a{ color:'+items.composeBGColor+' !important;}');
			}
		}else if(!items.compose && items.lefticons){
            var color=$('.z0>.L3').css('background-color');
            //add side border to active folder
            advcss.push('.aim{ border-left-color:'+color+' !important;}');
            //color selected folder text
            advcss.push('.ain a{ color:'+color+' !important;}');
        }
		//console.log(items.buttonColorSelection);
		if(items.buttonColorSelection!="buttonsdefault"){
			//some buttons
			advcss.push('.T-I.J-J5-Ji.T-I-ax7,.T-I.J-J5-Ji.T-I-ax7:hover,.T-I.J-J5-Ji.T-I-ax7:active{ color:'+items.buttonsColor+' !important;background-color:'+items.buttonsBGColor+' !important;}');
			//chevrons
			advcss.push('.T-I.J-J5-Ji.adg.T-I-awG.T-I-ax7.T-I-Js-IF.L3,.T-I.J-J5-Ji.adg.T-I-awG.T-I-ax7.T-I-Js-Gs.L3{color:'+items.buttonsColor+' !important;background-color:'+items.buttonsBGColor+' !important;}');
			//keyboard
			advcss.push('.d-Na-M8-JF{color:'+items.buttonsColor+' !important;background-color:'+items.buttonsBGColor+' !important;}');
            if(items.iconcolor!='black'){
                //more text color
                advcss.push(".asa.bjy{color:white !important;}");
                //page text color
                advcss.push(".Dj{color:rgb(255, 255, 255) !important;text-shadow:"+items.buttonsBGColor+" !important;}");
                //icons
                advcss.push(".adj,.amI{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/chevron_left_white_20dp.png') !important;}");
                advcss.push(".adk, .amJ{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/chevron_right_white_20dp.png') !important;}");
                advcss.push(".G-tF .T-Jo{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/check_box_outline_blank_white_20dp.png') !important;}");
                advcss.push(".bjy::after{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/more_vert_white_20dp.png') !important;}");
                advcss.push(".aos{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/settings_white_20dp.png') !important;}");
                advcss.push(".asf{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/refresh_white_20dp.png') !important;}");
                advcss.push(".G-tF .T-Jo-Jp{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/check_box_white_20dp.png') !important;}");
                advcss.push(".G-asx, .d-Na-J3.d-Na-JX-ax3.d-Na-hFsbo{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_white_20dp.png') !important;}");
                advcss.push(".ar8{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/archive_white_20dp.png') !important;}");
                advcss.push(".asl{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/report_white_20dp.png') !important;}");
                advcss.push(".ar9{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/delete_white_20dp.png') !important;}");
                advcss.push(".bAP{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_white_20dp.png') !important;}");
                advcss.push(".bAO{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/drafts_white_20dp.png') !important;}");
                advcss.push(".brW{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/watch_later_white_20dp.png') !important;}");
                advcss.push(".ase{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/drive_file_move_white_20dp.png') !important;}");
                //labels
                advcss.push(".asb{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/label_white_20dp.png') !important;}");
                //drafts
                advcss.push(".baO{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/drafts_white_20dp.png') !important;}");
                //back arrow
                advcss.push(".ar6{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/arrow_back_white_20dp.png') !important;}");
                //...
                //advcss.push(".hA{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/more_vert_white_20dp.png') !important;}");
                //reply arrow
                //advcss.push(".hB, .mL{background-image:url('https://www.gstatic.com/images/icons/material/system/1x/reply_white_20dp.png') !important;}");
                /*save to my drive*/
                advcss.push(".aQu{background: no-repeat url(https://ssl.gstatic.com/mail/sprites/newattachmentcards-ff2ce2bea04dec2bf32f2ebbfa0834ff.png) -41px -47px;}");
                /*download attachment*/
                advcss.push(".aSK{no-repeat url(https://ssl.gstatic.com/mail/sprites/newattachmentcards-ff2ce2bea04dec2bf32f2ebbfa0834ff.png) -219px -129px;}");
            }
		}
		if(advcss.length>0){
			loadAdvCSS(advcss);
		}
    });
    console.log('done');
}

function loadCSS(file) {
    //console.log('loading:'+file);
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