// let num = new Array();
// for(var i = 1; i <= 10; i++){
//     num.push(Math.floor(Math.random() * 50)+ 1 );
// }
// document.write(num + "<br>");

// for( var i = 0; i < num.length; i++){
//     if(num[i] % 2 == 1){
//         num[i] = num[i] + 1;
//     }
// }
// document.write(num + "<br>")

// let num5 = new Array();
// for( var i = 0; i <= num.length; i++){
//     if(num[i] % 5 == 0){
//         document.write(num[i] + " ")
//     }
// }

// let temp = new Array();
// for(var i = 0; i < num.length; i++){
//     if(num[i] % 5 == 0)temp.push(num[i]);
// }
// document.write(temp + "<br>")

//const subject = ["국어","수학","영어","과학"];

// for( var i = 0; i < subject.length; i++){
//     var score = prompt(subject[i] + "점수 입력")
// }

const subject = ["국어","수학","영어","과학"];
let idx = 0; //subject 배열의 인덱스 표현 변수
let score = new Array();
$(function(){
    $("#subject").text( subject[idx] );
})

function save(){
    score.push( Number( $("#score").val()));
    if( idx == subject.length - 1 ){
        // var total = 0;
        // for(var i = 0; i < subject.length; i++){
        //     total += score[i];
        // }
        var total = score[0] + score[1] + score[2] + score[3]
        var avg = total / score.length;
        var out = "<ul>";
        for(var i = 0; i < subject.length; i++){
            out += "<li>"+ subject[i] + ":" + score[i] + "</li>";
        }
        out += "</ul>"
        out += "총점 : " + total + "점 평균 : " + avg + "점";
        $("#result").html(out)
    }
    $("#subject").text( subject[++idx] );
    $("#score").val(""); //input 태그의 value비우기
    $("#score").focus(); //input 태그의 커서표시
}
