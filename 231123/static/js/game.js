let board = new Array();
let score = new Array();
//중복없이 25개 숫자 저장하기
for( var i = 1; i <= 25; i++){
    var tmp = Math.floor(Math.random() * 100) + 1;
    if( board.indexOf(tmp) == -1){
        board.push(tmp);
    }else i--;
}
function save(){
    
};
$(function(){
    $.each( board , function(i,v){ // i-인덱스, v- 배열값
        $(".numBox").eq(i).text(v);
    });

    $(".numBox").on("click",function(){
        $(this).css("background","black")
        $(this).css("color","white")
        var idx = $(".numBox").index(this)
        score.push(board.indexOf(board[idx]))
        board[idx] = 0;
        endgame();
    })

});
function endgame(){
    let line = 0;
    if(score.length >= 1){
        var count = 0;
        if(score.includes(0) === true) count++
        if(score.includes(1) === true) count++
        if(score.includes(2) === true) count++
        if(score.includes(3) === true) count++
        if(score.includes(4) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(5) === true) count++
        if(score.includes(6) === true) count++
        if(score.includes(7) === true) count++
        if(score.includes(8) === true) count++
        if(score.includes(9) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(10) === true) count++
        if(score.includes(11) === true) count++
        if(score.includes(12) === true) count++
        if(score.includes(13) === true) count++
        if(score.includes(14) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(15) === true) count++
        if(score.includes(16) === true) count++
        if(score.includes(17) === true) count++
        if(score.includes(18) === true) count++
        if(score.includes(19) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(20) === true) count++
        if(score.includes(21) === true) count++
        if(score.includes(22) === true) count++
        if(score.includes(23) === true) count++
        if(score.includes(24) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(0) === true) count++
        if(score.includes(5) === true) count++
        if(score.includes(10) === true) count++
        if(score.includes(15) === true) count++
        if(score.includes(20) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(1) === true) count++
        if(score.includes(6) === true) count++
        if(score.includes(11) === true) count++
        if(score.includes(16) === true) count++
        if(score.includes(21) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(2) === true) count++
        if(score.includes(7) === true) count++
        if(score.includes(12) === true) count++
        if(score.includes(17) === true) count++
        if(score.includes(22) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(3) === true) count++
        if(score.includes(8) === true) count++
        if(score.includes(13) === true) count++
        if(score.includes(18) === true) count++
        if(score.includes(23) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(4) === true) count++
        if(score.includes(9) === true) count++
        if(score.includes(14) === true) count++
        if(score.includes(19) === true) count++
        if(score.includes(22) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(0) === true) count++
        if(score.includes(6) === true) count++
        if(score.includes(12) === true) count++
        if(score.includes(18) === true) count++
        if(score.includes(24) === true) count++
        if(count == 5) line++
    }
    if(score.length >= 1){
        var count = 0;
        if(score.includes(4) === true) count++
        if(score.includes(8) === true) count++
        if(score.includes(12) === true) count++
        if(score.includes(16) === true) count++
        if(score.includes(20) === true) count++
        if(count == 5) line++
    }
    console.log(line)
}

//누른숫자를 저장하는 배열을 만들어야 한다. 클리어
//[0,1,2,3,4] [5,6,7,8,9] [10,11,12,13,14] [15,16,17,18,19] ,[20,21,22,23,24] 가로
//[0,5,10,15,20][1,6,11,16,21][2,7,12,17,22][3,8,13,18,23][4,9,14,19,24]
//[0,6,12,18,24] [4,8,12,16,20]


//엔드게임을 돌리면 배열을 검출한다
//검출된 배열의 종류가 5개 넘으면 게임을 종료한다.
//그럼 엔드게임 안에는 반복문을 써서 검출해야 되는가?
//온클릭에서 자동으로 반복이 되니까
//엔드게임에는 반복기능이 필요가 없다.

