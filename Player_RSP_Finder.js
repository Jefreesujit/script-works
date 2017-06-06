// ==UserScript==
// @name         Player RSP Finder
// @version      1.1
// @description  Find all of your players' RSP at one place!
// @author       Jefreesujit
// @match        http://hitwicket.com/discussionForum/131940*
// @grant        none
// @copyright    Jefreesujit,2016+
// ==/UserScript==

'use strict';

$(".thread_content").html("");
$(".thread_content").append('<meta property="article:tag" content="apps" />'+
'<meta property="article:tag" content="games" /><meta property="article:tag" content="sports" />'+
'<meta name="keywords"	content="cricket,hitwicket,rsp finder,rsp ,player rsp,'+
'hitwicket player,player rsp finder, hitwicket jefreesujit, jefreesujit " />'+

'<div style="padding-left:0em;"><h3>PLAYER RSP FINDER v 1.0</h3></div><br>'+                            
"<div> Ever felt that finding all your players' RSP is a long process? No worries, finding your players' RSP has now become more easier! "+
"All you need to do is just a single button click! This script will do the rest for you! Enjoy! <br><br> "+ 
"<b>NOTE : </b> Players' who are currently listed in auction are not tracked by this script. <br><br> </div>"  +
"<div id='jefree' style='text-align: center;' >" +
"<div style=' display: inline-block; text-align: center; '><button id='rspbtn'>List Players RSP</button></div>" + 
"<div class='loader' style='display:none; text-align:center; width:100%'><br><br><img src='/images/ajax-loader.gif' style='float:none'></div>" +
"<br><div id='playerinfo' style='width:50%; margin:auto; display:none '>"+
"<div id='name' style='display: inline-block; text-align: left; width:200px; color:coral'><h4><b>Player Name</b></h4></div>"+
"<div id='rsp' style='display: inline-block; text-align: right; width:100px; color:blue'><h4><b>Player RSP</b></h4></div></div></div><br><br>"); 

var Url1="http://hitwicket.com/player/sell/";
var Url2="http://hitwicket.com/players/index/";
var sum = 0;
$(".thread_content").css("max-height","none");

$(document).on('click', '#rspbtn', function(){
    $("#rspbtn").prop('disabled' , true);
    $(".loader").show();
    $.get(Url2,function( html ) { 
          var val = $(html).find("[href^='/player/show/']");
          var count = val.length;
          console.log(count);
          $(".loader").hide();
          $("#playerinfo").show();
          $("#rspbtn").hide();
          $(val).each(function() {
             var playerid = $(this).attr("href").replace( /[^\d.]/g, '' );
             var playername = $(this).text().replace(/\s\s+/g, ' ');  
             $.get(Url1+playerid, function(html) {
                var pname  = playername;
                var rsp = $(html).find(".m30.help-block").text().replace ( /[^\d.]/g, '' );
                if(rsp !== "" && rsp !== null && rsp !== undefined ) {
                    sum = sum + parseInt(rsp);
                    $("#name").append("<div>" + pname + "</div>");
                    $("#rsp").append("<div>"+ rsp +".00" + "</div>");  }
                count -=1;
                if( count === 0 ) {     
                 $("#name").append("<h4><b>TOTAL</b></h4>");
                 $("#rsp").append("<h4><b>"+ sum +".00 </b></h4>");  }
             });
         });
    });          
});