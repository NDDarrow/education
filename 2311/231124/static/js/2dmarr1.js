// //2차원 배열
// /*
// let arr=[
//     [1,2,3,4,5,6,7,8],
//     [10,20,30,44,55,66,77]
// ];

// for( var i = 0; i < arr.length; i++){
//     for( var j = 0; j < arr[i].length; j++){
//         document.write(arr[i][j]+ " ")
//     }
//     document.write("<br>")
// }
// */

// let man = [
//     ["김유신",45,"군인"],
//     ["이순신",38,"군인"],
//     ["서종우",51,"변호사"],
//     ["김민수",32,"편의점알바"],
//     ["송재영",25,"농심연구원"],
//     ["이민재",29,"한화이글스관람객"],
// ]

// for( var i = 0; i < man.length; i++){
//     // for(var j = 0; j < man[i].length; j++){
//     //     document.write(man[i][j] + " ")
//     // }
//     // document.write("<br>")
//     // if( man[i][1] > 30){
//     //     document.write( man[i][0] + ", " + man[i][2] + "<br>")
//     // }
//     if( man[i][0].indexOf("이") != -1){
//         document.write( man[i][1] + ", " + man[i][2] + "<br>")
//     }
// }
let x = 0; let y = 0;
let board = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
 // function draw 실행
function draw(){
    for ( var i = 0; i < board.length; i++){
        for( var j = 0; j < board[i].length; j++){
            if( board[i][j] == 0)
                $("#box").append("&ensp;&ensp;");
            if( board[i][j] == 1)
                $("#box").append("■");
            if( board[i][j] == 2){
                $("#box").append("凸");
                x = j, y = i;
                
            }
        }
        $("#box").append("<br>")
    }
}
$(function(){
    draw();
});
$(document).on("keyup",function(move){
    //w 87 a 65 s 83 d 68
    board[y][x] = 0;
    switch(move.keyCode){
        // case 87:
        //     board[--y][x] = 2;
        //     if(board[y][x] == board[0][x]){
        //         board[y][x] = 1;
        //         board[++y][x] = 2;
        //     };
        //     break;
        // case 83:
        //     board[++y][x] = 2;
        //     if(board[y][x] == board[board.length-1][x]){
        //         board[y][x] = 1;
        //         board[--y][x] = 2;
        //     };
            
        //     break;
        // case 65:
        //     board[y][--x] = 2;
        //     if(board[y][x] == board[y][0]){
        //         board[y][x] = 1;
        //         board[y][++x] = 2;
        //     };
        //     break;
        // case 68:
        //     board[y][++x] = 2;
        //     if(board[y][x] == board[y][board[y].length-1]){
        //         board[y][x] = 1;
        //         board[y][--x] = 2;
        //     }
        //     break;
        // default:
        //     alert("w,a,s,d를 방향키로 사용합니다.")
        case 87:
            y = board[y-1][x] == 1 ? y : --y;
            break;
        case 83:
            y = board[y+1][x] == 1 ? y : ++y;
            break;
        case 65:
            x = board[y][x-1] == 1 ? x : --x;
            break;
        case 68:
            x = board[y][x+1] == 1 ? x : ++x;
            break;
        default:
            alert("w,a,s,d를 방향키로 사용합니다.")
    }
    board[y][x] = 2;
    $("#box").html("")
    draw();
    
    
    // if(move.keyCode == 87){
    //     board[y][x] = 0;
    //     board[--y][x] = 2;
    //     $("#box").html("")
    //     draw();
    // }
    // if(move.keyCode == 83){
    //     board[y][x] = 0;
    //     board[++y][x] = 2;
    //     $("#box").html("")
    //     draw();
    // }
    // if(move.keyCode == 65){
    //     board[y][x] = 0;
    //     board[y][--x] = 2;
    //     $("#box").html("")
    //     draw();
    // }
    // if(move.keyCode == 68){
    //     board[y][x] = 0;
    //     board[y][++x] = 2;
    //     $("#box").html("")
    //     draw();
    // }
});
