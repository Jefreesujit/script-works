// ==UserScript==
// @name         Player Term Period Calculator
// @namespace    Jefreesujit
// @version      1.0
// @description  A simple script to calculate a player's term period in a team and a player's age when transferred or scouted into the team.
// @author       Jefreesujit
// @match        http://hitwicket.com/discussionForum/127059*
// @copyright    Jefreesujit,2016+
// ==/UserScript==

'use strict';

// Your code here...


$(".thread_content").html("");

$(".thread_content").attr('style','max-height: none; overflow:hidden;');

$(".thread_content").append( '<meta property="article:tag" content="apps" />'+
'<meta property="article:tag" content="games" />'+
'<meta property="article:tag" content="sports" />'+
'<meta name="keywords" content="cricket , u20 , hitwicket , u20 cup, u20 eligibilty, u20 eligibility calculator, u20 eligibility indicator, u20 eligibility script, u20 eligibility finder, u20 player, hitwicket jefreesujit, jefreesujit " />'+

                            
'<div id="jefree" style="float: center;">'+

'<div style="padding-left:0em;"><b>PLAYER TERM PERIOD SCRIPT</b></div></br>'+
                            
'Choose your players current age and his date of Transfer/ Recruitment into your team :' + '<br><br>' +
                           
 'Years : '+
'<div style=" display: inline-block; float: center; text-align: center;" >'+
                                                      
 '<select id="x">'+
'<option value="17">17 yrs</option>'+
'<option value="18">18 yrs</option>'+
'<option value="19">19 yrs</option>'+
'<option value="20">20 yrs</option>'+
'<option value="21">21 yrs</option>'+
'<option value="22">22 yrs</option>'+
'<option value="23">23 yrs</option>'+
'<option value="24">24 yrs</option>'+
'<option value="25">25 yrs</option>'+
'<option value="26">26 yrs</option>'+
'<option value="27">27 yrs</option>'+
'<option value="28">28 yrs</option>'+
'<option value="29">29 yrs</option>'+
'<option value="30">30 yrs</option>'+
'<option value="31">31 yrs</option>'+
'<option value="32">32 yrs</option>'+
'<option value="33">33 yrs</option>'+
'<option value="34">34 yrs</option>'+
'<option value="35">35 yrs</option>'+
'</select>'+
'</div>' +
                            

'<div style=" display: inline-block; float: center; text-align: center; padding-left:2em" >'+
 'Days : '+

'<select id="y">'+
'<option value="0">0</option>'+
'<option value="1">1</option>'+
'<option value="2">2</option>'+
'<option value="3">3</option>'+
'<option value="4">4</option>'+
'<option value="5">5</option>'+
'<option value="6">6</option>'+
'<option value="7">7</option>'+
'<option value="8">8</option>'+
'<option value="9">9</option>'+
'<option value="10">10</option>'+
'<option value="11">11</option>'+
'<option value="12">12</option>'+
'<option value="13">13</option>'+
'<option value="14">14</option>'+
'<option value="15">15</option>'+
'<option value="16">16</option>'+
'<option value="17">17</option>'+
'<option value="18">18</option>'+
'<option value="19">19</option>'+
'<option value="20">20</option>'+
'<option value="21">21</option>'+
'<option value="22">22</option>'+
'<option value="23">23</option>'+
'<option value="24">24</option>'+
'<option value="25">25</option>'+
'<option value="26">26</option>'+
'<option value="27">27</option>'+
'<option value="28">28</option>'+
'<option value="29">29</option>'+
'<option value="30">30</option>'+
'<option value="31">31</option>'+
'<option value="32">32</option>'+
'<option value="33">33</option>'+
'<option value="34">34</option>'+
'<option value="35">35</option>'+
'<option value="36">36</option>'+
'<option value="37">37</option>'+
'<option value="38">38</option>'+
'<option value="39">39</option>'+
'<option value="40">40</option>'+
'<option value="41">41</option>'+
'<option value="42">42</option>'+
'<option value="43">43</option>'+
'<option value="44">44</option>'+
'<option value="45">45</option>'+
'<option value="46">46</option>'+
'<option value="47">47</option>'+
'<option value="48">48</option>'+
'<option value="49">49</option>'+
'<option value="50">50</option>'+
'<option value="51">51</option>'+
'<option value="52">52</option>'+
'<option value="53">53</option>'+
'<option value="54">54</option>'+
'<option value="55">55</option>'+
'<option value="56">56</option>'+
'<option value="57">57</option>'+
'<option value="58">58</option>'+
'<option value="59">59</option>'+
'<option value="60">60</option>'+
'<option value="61">61</option>'+
'<option value="62">62</option>'+
'<option value="63">63</option>'+
'<option value="64">64</option>'+
'<option value="65">65</option>'+
'<option value="66">66</option>'+
'<option value="67">67</option>'+
'<option value="68">68</option>'+
'<option value="69">69</option>'+
'<br>'+
'</select>'+
'<br>'+
'</div>'+
                            
'<div style=" display: inline-block; float: right; text-align: center; padding-right :3em" >'+
'<input type = "button" id = "calc" value= "CALCULATE" class="btn btn-success" />'+
'</br>'+
'</div>'+ 

'<div style=" display: inline-block; float: right; text-align: center; padding-right:3em;" class="league_switcher_input" >'+
'<form action="#" method="get">'+ ' Date : ' +
    '<input type="date" id="pdate" max="" />'+
                '</form>'+
'</br>'+
'</div>'+                             
                            
'<br><br><br>'+
    'Your player was  '+  '<input type = "text" id = "w" size="1" readonly />'+  '  Years and  ' + '<input type = "text" id = "z" size="1" readonly />' + '  Days at the date of Transfer/Recruitment into your team .'+

'</br>'+
'<br><br>' +
'Term period of your player in your Team : '+ '<input type = "text" id = "res" size="10" readonly />' + '<br><br>' +
 
                            
'<b>Note</b> : <br> Transfer date of a player can be found in his respective profile page under "History" tab' + '<br>' +
' Scout/Recruitment date of a player can be found in his respective profile page under "Achievements" section'+ '<br><br>'  );



function termPeriod() {
    
    
    var dt = $("#pdate").val();
    var inputDate = new Date(dt);

    var curDate = new Date();
    
    if ( curDate >= inputDate ) {
    
        var cday = Math.round(( curDate - inputDate )/(1000*60*60*24)); 
        var hyr = parseInt(cday/70);
        var hdy = parseInt(cday%70);       
        var a,b;
        var n1,n2;
        n1=$("#x").val();
        n2=$("#y").val();
        a=parseInt(n1);
        b=parseInt(n2);

        var yr1 = a-hyr;
        var dy1 = b-hdy;
        if (dy1 < 0 )
        {   
            dy1=dy1+70;
            yr1=yr1-1;
        }
        
        if ( yr1 < 17 )
        {
            alert(" Please check the player's current age " );
        }
        else
        {   
            $("#res").val(" "+ cday + "  day(s)" );   
            $("#w").val(" "+ yr1);
            $("#z").val(" "+ dy1);
        }        
        
    }
    
    else {
        
        alert(" Enter the valid date. Entered date should be before the current date ");      
    }    
    
}


$(document).on('click', '#calc', function(){
        termPeriod();
    }
);

$(document).ready( function() {
    
var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);

var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

$("#pdate").val(today);
    
$("#pdate").attr('max',today );
    
});