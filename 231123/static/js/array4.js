const store = ["슈펜","니꼴밀러","피에르가르뎅","엘칸도","미쏘", "치크", "뉴발란스", "애슐리", "자연별곡", "코코몽키즈랜드" ];
const floor = [1, 1, 1, 4, 3, 5, 2, 7, 8, 10 ];
const zone = ["D", "B", "C", "A", "D", "A", "C", "A", "A", "A"];

// store - 매장명, floor - 층수 , zone - 층별 구역
// 매장명을 입력하면 매장의 위치를 출력

//키보드에서 발생하는 이벤트의 종류
//keydown (키를 누르는),keyup(키에서 손을 떼는 순간), keypress(키보드가 들어가는 순간)
//발생 순서 keydown(누름) - keypress(눌려짐) - keyup(눌렸다 되돌아감)

$(function(){
    $("#store").keyup(function(key){
        if(key.keyCode == 13){
            search();
        }
    })
});
function search(){
    var brand = $("#store").val();
    // for ( var i = 0; i < store.length, i++){
    //     if( store[i] == brand)
    //         alert(i + "번째인덱스")
    var idx = store.indexOf(brand);
    if( idx == -1)
        $("#result").text("없는 브랜드명")
    else{
        var res = `<b>${floor[idx]}</b>층 , ${zone[idx]}구역`;
        res += `<h3>${floor[idx]}층 매장</h3>`;
        
        let same_floor = new Array();
        for( var i = 0; i < floor.length; i++){
            if(floor[i] == floor[idx] && i != idx){
                same_floor.push( store[i] );
            }
        }
        res += same_floor;
        $("#result").html(res);
    }
    }

