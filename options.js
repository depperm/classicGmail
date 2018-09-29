let num_options=4;
$(function() {
	//hi();
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
});

// Saves options to chrome.storage
function save_options() {
    var everything = document.getElementById('everything').checked;
    var compose = document.getElementById('compose').checked;
    var buttons = document.getElementById('buttons').checked;
    var shadow = document.getElementById('shadow').checked;
    var lefticon = document.getElementById('lefticons').checked;
	
    chrome.storage.sync.set({
		everything: everything,
		compose: compose,
		buttons:buttons,
		shadow:shadow,
		lefticons:lefticons
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
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
		everything: true,
		compose: true,
		buttons:true,
		shadow:true,
		lefticons:true
    }, function(items) {
		document.getElementById('everything').checked = items.everything;
		document.getElementById('compose').checked = items.compose;
		document.getElementById('buttons').checked = items.buttons;
		document.getElementById('shadow').checked = items.shadow;
		document.getElementById('lefticons').checked = items.lefticons;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);