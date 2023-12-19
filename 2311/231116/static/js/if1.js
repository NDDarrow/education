//if 문 - 조건식의 참, 거짓에의해 내용을 실행 시킨다.
/*
if(조건식){
    참일 경우 실행할 내용
}
if뒤에 작은괄호를 열어서 조건식을 작성, 조건식 뒤에 중괄호를
열어 참일 경우 실행할 내용을 작성한다.
거짓일 경우 하위 명령문을 실행한다.
if(){

}else{
    거짓일 경우 실행할 내용
}
조건식이 거짓이라면 첫번째 중괄호는 건너뛰고( jump라는 개념)
하위 명령문을 실행시킨다.
if문에서 조건식을 작성할 수 있는 곳은 오직 if 뒤에만 가능하다.(else if도 if가 들어있음)
else뒤에는 조건식을 넣을 수 없다.
if(조건식){
    실행문
}else if(조건식){
    실행문
}else{
    실행문
}

*/

// var num = 20;

// (num>0) ? console.log("양수") : console.log("음수")

// if(num >0 ){
//     console.log("양수")
// }else{
//     console.log("음수")
// }

// var birth = parseInt(prompt("생년월일(8자리) 입력"));

// if(birth <= 20041231){
//     console.log("성인")
// }else if(birth <= 20081231){
//     console.log("잼민이")
// }else{
//     console.log("응애")
// }

//국 영 수 3과목 점수 입력받기
// 3과목의 평균점수가 65점 이상이면 통과
// 미만이면 낙제

// var kor = parseInt(prompt("국어점수 입력"))
// var eng = parseInt(prompt("영어점수 입력"))
// var mat = parseInt(prompt("수학점수 입력"))

// var avr = (kor + eng + mat)/3

// if(avr >= 65){
//     document.write("통과")
// }else if(avr > 40) { 
//     document.write("낙제")
// }else{
//     document.write("병신")
// }

//브라우저에 html 태그가 모두 로딩되면 자바스크립트를 작동시키는 방법

// window.onload=function(){
//     var coin = Math.floor(Math.random()*2) + 1;
//     var front = document.getElementById("front");
//     var back = document.getElementById("back");

//     front.addEventListener("click", function(){
//         alert("앞면 선택") //alert 알림창을 지칭하는 함수
//         if( coin == 1){
//             alert("정답!");
//         }else{
//             alert("땡!")
//         }
//     });
//     back.addEventListener("click", function(){
//         alert("뒷면 선택")
//         if( coin == 2){
//             alert("정답!");
//         }else{
//             alert("땡!")
//         }
        
//     });
//}



//css 에서는 선택자 id =#, class = .이다
//javascript에서 html태그 선택 방법
//document(바디태그에 있기때문에 사용).get(태그를 얻어온다)Element(js에서 태그를 지칭, 복수가 가능한 태그의 경우 s추가)By**
// document.getElementById("front");
// document.getElementById("back");
// 위의 내용이 너무 길기 때문에 이를 변수에 저장하여 사용할 수 있음
// var front = document.getElementById("front");

//코딩을 할 시 모든 경우에 '순서'를 신경써야함
//css는 어디 위치에 존재하던 가장 마지막에 적용되기 때문에 작성 위치와 관계없이 항상 적용된다.
//하지만 js는 순서가 중요시되고 대부분  head에 작성되기 떄문에 일반적인 경우
//js가 body보다 먼저 작용하기 때문에 후에 body에 작성된 태그를 인식하지 못한다.
//즉 js를 불러오는 내용을 body태그의 가장 마지막에 배치하면 작동된다.
//하지만 html 표준은 js는 head에 작성하는 것이 표준이다.
//그래서 head안에 작성하면서 body태그에 영향을 미치게 하기 위해서는
//js코드 내부에 이벤트 핸들러(ex:window.onload=fuction를 넣어줘야 한다

window.onload=function(){
    //세개의 정수를 입력받아 가장 작은 수 출력, 모두 같다면 같다 출력

    // var num1 = parseInt(prompt("첫번째 정수"));
    // var num2 = parseInt(prompt("두번째 정수"));
    // var num3 = parseInt(prompt("세번째 정수"));

    // if(num1 == num2 && num1 == num3){
    //     alert("모두 같다")
    // }else if( num1 < num2 && num1 < num3){
    //     alert(num1)
    // }else if( num2 < num3){
    //     alert(num2)
    // }else{
    //     alert(num3)
    // }
    
    // if(num1 == num2 && num1 == num3){
    //     alert("모두 같다")
    // }
    // else if(num1 < num2){
    //     if(num1 < num3){
    //         alert(num1)
    //     }else{
    //         alert(num3)
    //     }
    // }else if(num2 < num3){
    //     alert(num2)
    // }else{
    //     alert(num3)
    // }

    //가위 바위 보 만들기
    //1.가위 2. 바위 3. 보
    // var user = parseInt(prompt("가위 1 바위 2 보 3"))
    var com = Math.floor(Math.random()*3) + 1;

    var sci = document.getElementById("scissors");
    var roc = document.getElementById("rock");
    var pap = document.getElementById("paper");
    
    sci.addEventListener("click",function(){
        if(com == 1){
            alert("비김")
        }else if(com == 3){
            alert("이김")
        }else{
            alert("짐")
        }
    });
    roc.addEventListener("click",function(){
        if(com == 2){
            alert("비김")
        }else if(com == 1){
            alert("이김")
        }else{
            alert("짐")
        }
    });
    pap.addEventListener("click",function(){
        if(com == 3){
            alert("비김")
        }else if(com ==2){
            alert("이김")
        }else{
            alert("짐") 
        }
    });

    // if( user == com){
    //     alert("비김")
    // }else if( user - com == 1|| user - com == -2){
    //     alert("이김")
    // }else{
    //     alert("짐")
    // }

    // if( user == com){
    //     alert("비김")
    // }else if( (user == 2 && com == 1) || (user == 3 && com == 2) || (user == 1 && com == 3)){
    //     alert("이김")
    // }else{
    //     alert("짐")
    // }
}

