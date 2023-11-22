//5명 평균키
//member = ["김유신","김민숙","송재열","남기전","서종순"]
const member = ["김유신","김민숙","송재열","남기전","서종순"]
let idx = 0;
let tall = new Array();
$(function(){
    $("#member").text( member[idx]);
})

function save(){
    tall.push( Number( $("#tall").val()));
    if( idx == member.length - 1){
        var total = 0;
        for( var i = 0; i <= member.length -1; i++){
            total += tall[i];
        }
        var avg = total / member.length;
        $("#result").html(avg)
    }
    $("#member").text( member[++idx]);
    $("#tall").val("");
}