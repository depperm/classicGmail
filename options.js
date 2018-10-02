let num_options=5;
$(function() {
	//simply checks the checkboxes appropriately
	function check_checkboxes(){
		//console.log('here2');
		if($(this).attr('id')=='everything' && $(this).is(':checked')){
			$('.specific').prop('checked',true);
            $('#composeadvmsg').hide();
            $('#composeadv').show();
            $('#buttonadvmsg').hide();
            $('#buttonadv').show();
		}else if($(this).attr('id')=='everything' && !$(this).is(':checked')){
			$('.specific').prop('checked',false);
            $('#composeadvmsg').show();
            $('#composeadv').hide();
            $('#buttonadvmsg').show();
            $('#buttonadv').hide();
		}else if($(this).attr('id')!='everything' && !$(this).is(':checked')){
			$('#everything').prop('checked',false)
		}else if($(this).attr('id')!='everything' && $(this).is(':checked')){
			if($('.specific:checked').length==num_options){
				$('#everything').prop('checked',true)
			}
		}
        if($('#compose').is(':checked')){
            $('#composeadvmsg').hide();
            $('#composeadv').show();
            if($('#buttons').is(':checked')){
                $('#buttonadvmsg').hide();
                $('#buttonadv').show();
            }else{
                $('#buttonadvmsg').show();
                $('#buttonadv').hide();
            }
        }else{
            $('#composeadvmsg').show();
            $('#composeadv').hide();
            $('#buttonadvmsg').show();
            $('#buttonadv').hide();
        }
	}
	$('.classic-gmail-checkbox').on('click',check_checkboxes);
	// toggles adv param
    $('#advbtn').on('click',function(){
        $('#advancedparameters').toggle();
        if($('#advancedparameters').is(':visible'))
            $('#advbtn').val("Hide Advanced Parameters");
        else
            $('#advbtn').val("Show Advanced Parameters");
    });
    //compose color picker
    var colorpicker=false;
    $('#composecolor').on('click',function(){
        console.log('clicked');
        if(!colorpicker){
            /*var t=$('#composecolor').css('background-color');
            t=t.slice(4,t.length-1);
            t=t.split(',');
            $('#color-picker').attr('value',rgbToHex(parseInt(t[0]),parseInt(t[1]),parseInt(t[2])).slice(1));*/
            document.getElementById('color-picker').jscolor.show();
			$('body > div:last-child').css('margin','150px 0 0 100px');
        }else{
            document.getElementById('color-picker').jscolor.hide();
        }
        colorpicker=!colorpicker;
    });
	//button color picker
	var buttoncolorpicker=false;
    $('#buttoncolors').on('click',function(){
		if($('#buttonscustom').is(':checked')){
			if(!buttoncolorpicker){
				/*var t=$('#buttoncolors').css('background-color');
				t=t.slice(4,t.length-1);
				t=t.split(',');
				$('#button-color-picker').attr('value',rgbToHex(parseInt(t[0]),parseInt(t[1]),parseInt(t[2])).slice(1));*/
				document.getElementById('button-color-picker').jscolor.show();
				$('body > div:last-child').css('margin','300px 0 0 100px');
			}else{
				document.getElementById('button-color-picker').jscolor.hide();
			}
			buttoncolorpicker=!buttoncolorpicker;
		}
    });
	//change compose btn color
    $('#color-picker').on('change',function(){
        $('#composecolor').css('background-color',$(this).css('background-color'));
        $('#composecolor').css('color',$(this).css('color'));
        if($('input[name=buttoncolor]:checked').attr('id')=='buttonscompose'){
            $('#buttoncolors').css('color',$(this).css('color'));
            $('#buttoncolors').css('background-color',$(this).css('background-color'));
        }
    });
	//reset compose btn color
    $('#composedefault').on('click',function(){
        //$('#color-picker').attr('value','d14836');
        $('#composecolor').css('background-color','rgb(209, 72, 54)');
        $('#composecolor').css('color','rgb(255, 255, 255)');
        if($('input[name=buttoncolor]:checked').attr('id')=='buttonscompose'){
            $('#buttoncolors').css('color','rgb(255, 255, 255)');
            $('#buttoncolors').css('background-color','rgb(209, 72, 54)');
            var iconcolor= $('#buttoncolors').css('color')==='rgb(0, 0, 0)' ? 'black':'white';
            console.log('icon should be:'+iconcolor);
            if(iconcolor=='white'){
                $('#icon').css('background-image',"url('https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_white_20dp.png')");
            }else{
                $('#icon').css('background-image',"url('https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_black_20dp.png')");
            }
        }
    });
	//change read btn color
	$('#button-color-picker').on('change',function(){
		$('#buttoncolors').css('background-color',$(this).css('background-color'));
        $('#buttoncolors').css('color',$(this).css('color'));
        var iconcolor= $(this).css('color')==='rgb(0, 0, 0)' ? 'black':'white';
        console.log('icon should be:'+iconcolor);
        if(iconcolor=='white'){
            $('#icon').css('background-image',"url('https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_white_20dp.png')");
        }else{
            $('#icon').css('background-image',"url('https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_black_20dp.png')");
        }
	});
	$('input[name=buttoncolor]').on('click',function(){
		if($(this).attr('id')=='buttonsdefault'){
			$('#buttoncolors').css('background-color','rgb(245, 245, 245)');
			$('#buttoncolors').css('color','black');
            $('#icon').css('background-image',"url('https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_black_20dp.png')");
		}else if($(this).attr('id')=='buttonscompose'){
			$('#buttoncolors').css('background-color',$('#composecolor').css('background-color'));
			$('#buttoncolors').css('color',$('#composecolor').css('color'));
            var iconcolor= $('#buttoncolors').css('color')==='rgb(0, 0, 0)' ? 'black':'white';
            console.log('icon should be:'+iconcolor);
            if(iconcolor=='white'){
                $('#icon').css('background-image',"url('https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_white_20dp.png')");
            }else{
                $('#icon').css('background-image',"url('https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_black_20dp.png')");
            }
		}
	});
});
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
// Saves options to chrome.storage
function save_options() {
    var everything = document.getElementById('everything').checked;
    var compose = document.getElementById('compose').checked;
    var buttons = document.getElementById('buttons').checked;
    var shadow = document.getElementById('shadow').checked;
    var lefticons = document.getElementById('lefticons').checked;
    var tabs = document.getElementById('tabs').checked;
    
    var composeBGColor = $('#composecolor').css('background-color');
    var composeColor = $('#composecolor').css('color');
	console.log(composeBGColor);
	console.log(composeColor);
	
	var buttonColorSelection=$('input[name=buttoncolor]:checked').attr('id');
	var buttonsBGColor = $('#buttoncolors').css('background-color');
	var buttonsColor = $('#buttoncolors').css('color');
	console.log(buttonsBGColor);
	console.log(buttonsColor);
    /*icon color*/
    /*var t=buttonsBGColor;
    t=t.slice(4,t.length-1);
    t=t.split(',');
    var calccolor=iconcolor=(parseInt(t[0])*0.299 + parseInt(t[1])*0.587 + parseInt(t[2])*0.114) > 186 ? 'black' :  'white';*/
    var iconcolor= buttonsColor==='rgb(0, 0, 0)' ? 'black' :  'white';
    console.log(iconcolor);
    //console.log(calccolor);
	
    chrome.storage.sync.set({
		everything: everything,
		compose: compose,
		buttons:buttons,
		shadow:shadow,
		lefticons:lefticons,
        tabs:tabs,
        composeBGColor:composeBGColor,
        composeColor:composeColor,
		buttonColorSelection:buttonColorSelection,
		buttonsBGColor:buttonsBGColor,
		buttonsColor:buttonsColor,
        iconcolor:iconcolor
    }, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.innerHTML = '<hr>Options saved. <b>You will need to refresh(F5) gmail to see the changes.</b>';
		setTimeout(function() {
		    status.textContent = '';
		}, 5000);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
		everything: true,
		compose: true,
		buttons:true,
		shadow:true,
		lefticons:true,
        tabs:true,
        composeBGColor:'rgb(209, 72, 54)',
        composeColor:'rgb(255, 255, 255)',
		buttonColorSelection:'buttonsdefault',
		buttonsBGColor:'rgb(245, 245, 245)',
		buttonsColor:'rgb(0, 0, 0)',
        iconcolor:'black'
    }, function(items) {
		console.log(items.buttonColorSelection);
		document.getElementById('everything').checked = items.everything;
		document.getElementById('compose').checked = items.compose;
		document.getElementById('buttons').checked = items.buttons;
		document.getElementById('shadow').checked = items.shadow;
		document.getElementById('lefticons').checked = items.lefticons;
		document.getElementById('tabs').checked = items.tabs;
        
        document.getElementById('composecolor').value = items.composeBGColor;
        $('#composecolor').css('background-color',items.composeBGColor);
        $('#composecolor').css('color',items.composeColor);
		
		document.getElementById('buttoncolors').value = items.buttonsBGColor;
        $('#buttoncolors').css('background-color',items.buttonsBGColor);
        $('#buttoncolors').css('color',items.buttonsColor);
		$('#'+items.buttonColorSelection).prop('checked',true);
        if(items.iconcolor!='black'){
            $('#icon').css('background-image',"url('https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_white_20dp.png')");
        }
        
        if(items.everything || items.compose){
            $('#composeadvmsg').hide();
            $('#composeadv').show();
        }
        if(items.everything ||(items.compose && items.buttons)){
            $('#buttonadvmsg').hide();
            $('#buttonadv').show();
        }
		//document.getElementById('buttonsequalcompose').checked = items.buttonsequalcompose;
        //document.getElementById('composecolor').style.backgroundColor = items.composeBGColor;
        //document.getElementById('composecolor').style.color = items.composeColor;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);