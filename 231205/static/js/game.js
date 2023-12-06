
let gameImg = ["scissors.png", "rock.png", "paper.png"]
const path = "./static/images/";
let com = 0; //컴퓨터 이미지 setInterval 값 저장변수
let comIdx = 0;
$(function(){
    $("#comImg").attr("src" , path+gameImg[0])
    $("#start").on("click" , start);
    $(".user").on("click" , result);
});

function result(){
    var div = $(this);
    if( $("#start").prop("disabled")){
        div.css("background" , "black");
        var my = clickImg(div);
        clearInterval(com); // setInterval 중단
        var ment = gameResult(my);
        $(".res").text(ment);
        $("#start").attr("disabled" , false);
        $("#start").text("시작");
    }
}
function gameResult(my){
    var cu = my - comIdx;
    switch(cu){
        case 0:
            return "무";
        case 1: case-2:
            return "승";
        default:
            return "패"
    }
}


function start(){
    com = setInterval(imgRoate , 100)
    $("#start").text("진행");
    $("#start").attr("disabled", true);
    $(".user").css("background" , "white")
};
function imgRoate(){
    if(comIdx==2) comIdx = -1;
    $("#comImg").attr("src", path + gameImg[++comIdx]);
};

function clickImg(div){
    if( div.hasClass("scissors"))
        return 0;
    if( div.hasClass("rock"))
        return 1;
    if( div.hasClass("paper"))
        return 2;
};