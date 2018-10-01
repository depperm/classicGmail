let num_options=4;
$(function() {
	//simply checks the checkboxes appropriately
	function check_checkboxes(){
		console.log('here2');
		if($(this).attr('id')=='everything' && $(this).is(':checked')){
			$('.specific').prop('checked',true);
		}else if($(this).attr('id')=='everything' && !$(this).is(':checked')){
			$('.specific').prop('checked',false);
		}else if($(this).attr('id')!='everything' && !$(this).is(':checked')){
			$('#everything').prop('checked',false)
		}else if($(this).attr('id')!='everything' && $(this).is(':checked')){
			if($('.specific:checked').length==num_options){
				$('#everything').prop('checked',true)
			}
		}
	}
	$('.classic-gmail-checkbox').on('click',check_checkboxes);
    $('#advbtn').on('click',function(){
        $('#advancedparameters').toggle();
        if($('#advancedparameters').is(':visible'))
            $('#advbtn').val("Hide Advanced Parameters");
        else
            $('#advbtn').val("Show Advanced Parameters");
    });
    
    var colorpicker=false;
    $('#composecolor').on('click',function(){
        console.log('clicked');
        if(!colorpicker){
            var t=$('#composecolor').css('background-color');
            t=t.slice(4,t.length-1);
            t=t.split(',');
            console.log(rgbToHex(parseInt(t[0]),parseInt(t[1]),parseInt(t[2])).slice(1));
            //document.getElementById('color-picker').value=rgbToHex(parseInt(t[0]),parseInt(t[1]),parseInt(t[2])).slice(1);
            //$('#color-picker').val(rgbToHex(parseInt(t[0]),parseInt(t[1]),parseInt(t[2])).slice(1));
            $('#color-picker').attr('value',rgbToHex(parseInt(t[0]),parseInt(t[1]),parseInt(t[2])).slice(1));
            //$('#color-picker').css('background-color',$('#composecolor').css('background-color'));
            document.getElementById('color-picker').jscolor.show();
        }else{
            document.getElementById('color-picker').jscolor.hide();
            $('#color-picker').toggleClass('jscolor');
        }
        colorpicker=!colorpicker;
        //onclick="document.getElementById('color-picker').jscolor.show()"
    });
    $('#color-picker').on('change',function(){
        $('#composecolor').css('background-color','#'+$(this).val());
        $('#composecolor').css('color',$(this).css('color'));
    });
    $('#composedefault').on('click',function(){
        $('#color-picker').attr('value','d14836');
        $('#composecolor').css('background-color','#d14836');
        $('#composecolor').css('color','white');
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
    
    var composeBGColor = $('#color-picker').val();
    var composeColor = $('#color-picker').css('color');
	
    chrome.storage.sync.set({
		everything: everything,
		compose: compose,
		buttons:buttons,
		shadow:shadow,
		lefticons:lefticons,
        tabs:tabs,
        composeBGColor:composeBGColor,
        composeColor:composeColor
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
        composeBGColor:'d14836',
        composeColor:'rgb(255,255,255)'
    }, function(items) {
		document.getElementById('everything').checked = items.everything;
		document.getElementById('compose').checked = items.compose;
		document.getElementById('buttons').checked = items.buttons;
		document.getElementById('shadow').checked = items.shadow;
		document.getElementById('lefticons').checked = items.lefticons;
		document.getElementById('tabs').checked = items.tabs;
        
        document.getElementById('composecolor').value = items.composeBGColor;
        $('#composecolor').css('background-color','#'+items.composeBGColor);
        $('#composecolor').css('color',items.composeColor);
        //document.getElementById('composecolor').style.backgroundColor = items.composeBGColor;
        //document.getElementById('composecolor').style.color = items.composeColor;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);