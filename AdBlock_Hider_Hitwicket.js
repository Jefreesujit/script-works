// ==UserScript==
// @name         Disable Adblock Hider
// @namespace    Jefreesujit
// @version      0.1
// @description  Removes the notification reminder to disable the adblocker plugin
// @author       Jefreesujit
// @match        http://hitwicket.com/* 
// @match        http://hitwicket.com
// @grant        none
// ==/UserScript==


$(document).ready(function() {
    setTimeout(function() { 
        if($('#advertisement_top_banner_div').height() == 0)
            $('#advertisement_top_banner_div').load(" ");
    } , 1500);
});
