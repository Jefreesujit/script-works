// ==UserScript==
// @name         Player RSP Finder 2.0
// @version      2.0
// @description  Find all of your players' RSP now in your players' cards!
// @author       Jefreesujit
// @match        http://hitwicket.com/players/index*
// @match        http://hitwicket.com/players/premium/index*
// @grant        none
// @copyright    Jefreesujit, 2017+
// ==/UserScript==

var card = $.find(".new_player_card");
$(card).each(function() {
    var self = this, rsp,
        playerid = $(self).find("[href^='/player/show/']").attr("href").replace( /[^\d.]/g, '' );
    $.get("http://hitwicket.com/player/sell/"+playerid, function(html) {
        rsp = $(html).find(".m30.help-block").text().replace ( /[^\d.]/g, '' );
    }).done(function() {
        if(rsp !== "" && rsp !== null && rsp !== undefined ) {
            $(self).find(".flag_name + .skill_bar_wrap").prepend(renderRspSkillBar(rsp));
        }
    });
});

function renderRspSkillBar(rsp) {
    let count = 1, value = 1, string = '',
        modRsp = parseInt(rsp, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    while(rsp/10000 >= value) {
        value*=2;
        count+=1;  }
    for (let i = 0; i < count; i++)
        string+='<span class="one_bar"></span>';
    return '<div class="skill_bar_wrap"><div class="clearfix"><span class="value_wrap_skill">Recommended Selling Price</span>'+
           '<span class="extra_skill_value show_popover skill_b'+count+'"><i class="fa fa-inr rupee_symbol_visibility"></i> '+
           modRsp+'</span></div><div class="bar_wrap">'+string+'</div></div>';
}