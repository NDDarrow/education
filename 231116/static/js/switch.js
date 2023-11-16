//조건문 - switch
//switch 는 참거짓으로 판별하는게 아닌 여러 조건중에 
//하나를 선택(switch를 누르는 행위)
// var a = parseInt(prompt("1 1000 234 택"))
// switch(a){
//     case 1:
//         alert("1");
//         break;
//     case 1000:
//         alert("1000");
//         break;
//     case 234:
//         alert("234");
//         break;
//     case 10:
//         alert("10 선택");
//         break;
// }

//break 태그는 탈출태그로 해당 구문에서 탈출시키는 기능을 한다
// 그래서 break태그는 단독사용이 불가능하고 반복문 switch문에서 사용해야 한다.

// var airjordan = 2;
// var airmax = 97;
// var alp = "나이키 에어포스 90 재고";
// switch( alp.split(" ")[1] ){
//     case "에어조던" :
//         document.write("현재 재고 수량은 " + airjordan + "개");
//         break;
//     case "에어맥스" :
//         document.write("현재 재고 수량은 " + airmax + "개");
//         break;
//     case "a" :
//         document.write("apple");
//         break;
//     default:
//         document.write("제품 없음")
// }



    var score = parseInt(Math.random()*101);
    switch(parseInt(score/10)){
        case 10: case 9:
            document.write("A"); break;
        case 8:
            document.write("B"); break;
        case 7:
            document.write("C"); break;
        default:
            document.write("F");

    }