window.onload = function () {
    //document.getElementsByClassName("T-I J-J5-Ji T-I-KE L3")[0].innerHTML="Compose";
    //iframe
    /*var cssLink = document.createElement("link");
    cssLink.href = "classic.css"; 
    cssLink.rel = "stylesheet"; 
    cssLink.type = "text/css";
    document.querySelectorAll("*[id^=wblh0]")[0].document.head.appendChild(cssLink);*/
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
    console.log('done');
}
loadCSS('classic');
function loadCSS(file) {
    console.log('loading');
    var link = document.createElement("link");
    link.href = chrome.extension.getURL(file + '.css');
    link.id = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("html")[0].appendChild(link);
}

function unloadCSS(file) {
    console.log('unloading');
    var cssNode = document.getElementById(file);
    cssNode && cssNode.parentNode.removeChild(cssNode);
}