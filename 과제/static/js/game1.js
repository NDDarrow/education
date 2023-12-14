
//전역변수
const dice_img=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
let turn = 1;
let dice1 = [0,0], dice2 = [0,0]; //주사위 setInterval 값 저장변수

//함수 정의
function rolling(obj){//주사위 생성된 후 버튼을 클릭하면 주사위가 이미지가 변경되는 함수
    $(obj).text("멈춰!")
    $(obj).attr("onclick","stop(this)");

    //주사위 돌리기
    var setTime = 100;
    dice1[0] = setInterval(function(){
        dice1[1] = Math.floor(Math.random()*6);
        $("#dice1").attr("src","./static/images/"+dice_img[ dice1[1] ]);
        
    } , setTime);
    dice2[0] = setInterval(function(){
        dice2[1] = Math.floor(Math.random()*6);
        $("#dice2").attr("src","./static/images/"+dice_img[ dice2[1] ]);
        
    } , setTime);

};
function stop(obj){ //주사위 멈추는 함수
    $(obj).text("굴리기")
    $(obj).attr("onclick","rolling(this)");

    clearInterval(dice1[0]);
    clearInterval(dice2[0]);

    meeple_move();
}

function meeple_move(){ //주사위 값에 따라 말을 움직이기
    var gamer = player_list[turn-1]
    var dice_sum = dice1[1] + dice2[1] + 2;
    var old_location = gamer.location; //현재위치 (이동전);
    console.log(gamer.drift_turn)
    //플레이어 위치변경
    if( gamer.drift_turn != 0){
        gamer.drift_turn--;
        alert(`${gamer.drift_turn}턴 뒤 탈출`)
    }else if( gamer.location + dice_sum > 31){
        var diff = (gamer.location + dice_sum) - 32;
        gamer.location = diff;
        moving(gamer, old_location)
        zone[31].func(gamer) // 출발지를 통과하거나 도착하면 실행 함수
    }else{
        gamer.location = gamer.location + dice_sum;
        moving(gamer, old_location)
    }

    game_todo(find_location(gamer.location), gamer);

    // 턴넘기기
    turn = 다음턴( turn);

    //최종 승자
    var win = 0, c = 0, t = 0
    for(var i = 0; i < player_list.length; i++){
        if( !player_list[i].파산){
            t += player_list[i].zone;
            c++;
            win = player_list[i]
        }
    }
    if(c==1){
        alert(`승자는 ${win.num}플레이어, 총자금:${win.money}, 보유도시"${win.zone}`);
    }else if( t == 28){
        
    }



    $(".pcity").css("background","");
    $("#pcity"+turn).css("background","white");
}
function 다음턴( who ){
    if(who == player_list.length)
        who = 0;

    if( island_.includes( who+1) ){
        player_list[who].drift_turn--;
        if( player_list[who].drift_turn ==0){
            island_.splice(island_.indexOf(who+1),1);
        }
    }

    if( player_list[ who ].파산)
        return 다음턴(who+1);
    return who+1;
};

function moving(gamer, old_location){
    //말 위치 변경, 이전 위치에서는 제거
    var old_zone = find_location(old_location); //이동전 말위치 찾기
    $(".zone").eq(old_zone).children(".m"+turn).remove();


    var zone_location = find_location( gamer.location);
    var tag=
            `<div class='meeple m${gamer.num}' data-pn='${gamer.num}'
            style='color:${gamer.color};'>
            <i class="fa-solid fa-user"></i>
            </div>`;
    $(".zone").eq(zone_location).append(tag);
    overlap(zone_location); //겹침 방지
    
    //이동한 위치에 땅에서 할일
    game_todo(zone_location , gamer);
    };

function game_todo(location , gamer){
// location 매개변수는 zone클래스들 중 몇번째 zone클래스인지 인덱스값 있음
// location의 값은 몇번째 zone클래스인지 알수도 있지만, zone배열의 구역객체의
// 인덱스로도 사용가능
    console.log(gamer)
    var city = zone[location];
    if(city.purchase == 0){ //매입금이 = 0인 곳 무인도, 기금, 출발, 공항, 기금납부
        // 16 -복지기금 , 24-공항 , 28-기금납부 , 8-무인도, 0-출발지
        if(city.num != 0) //촐발지 도착은 meeple.move에서 구현
            city.func(gamer);
    }else if( zone[location].owner == ''){
        if(confirm(`${city.name}의 매입가는 ${city.purchase}만원, \n살래?`)){
            if( gamer.money < city.purchase ){
                alert("자금이 부족합니다.");
                return;
            }
            city.owner = gamer.num; //토지 소유자 변경
            gamer.money -= city.purchase; //현금보유량 변경
            $("#pm"+gamer.num).text(gamer.money+"만원") //변경된 현금량 표기
            
            $(".zone").eq(location).children(".zone_name").css("background", gamer.color);
            gamer.zone++;
            $("#pcity"+gamer.num).text(gamer.zone+"개");            
        }
    }else{//매입된 땅에 접근시
        var owner = city.owner;
        var tollfee = city.purchase;//통행료
        if( gamer.money < tollfee){
            player_list[owner-1].money += gamer.money;
            gamer.money = 0;
            gamer.파산 = true; //자금이 부족하여 파산
            파산처리(gamer); //파산된 플레이어의 토지를 전부 매각과 토지색상제거, 말 제거
        }else{
            gamer.money -= tollfee;
            player_list[owner-1].money += tollfee;
        }

        $("#pm"+owner).text(player_list[owner-1].money+"만원");
        $("#pm"+gamer.num).text(gamer.money+"만원");
        alert(`${city.name} 소유주에게 ${tollfee}만원 지불했습니다.`)
    }


}

function 파산처리(gamer){
    //소유한 토지, 색상 초기화
    $.each(zone, function(idx, city){
        if( city.owner == gamer.num){
            city.owner='' //소유주초기화
            var zl = find_location ( city.num );
            $(".zone").eq(zl).children(".zone_name").css("background",""); //배경색 제거
        }
    });

    //말제거
    var zl = find_location( gamer.location);
    $(".zone").eq(zl).children(".m"+gamer.num).remove();
}

    function airport_move(){
        if( $(this).hasClass("center")) return; //보드의 가운데 클릭시 아무것도 안함.
        
        if(탑승객 != 0){// 탑승객 변수가 0이면 이용불가
            
            
            var 클릭한도시 = $(this)
            var 클릭한도시번호 = $(this).data("num");
            if(클릭한도시번호 == 24){
                return;
            }
            var gamer = player_list[탑승객-1]
            var old_location = gamer.location
            gamer.location = 클릭한도시번호;

            //출발지를 클릭했냐? 출발지를 통과하냐?
            if( 클릭한도시번호 >= 0 && 클릭한도시번호 < 24 )
                zone[31].func(gamer);
            moving( gamer, old_location);

            var zone_location = find_location(클릭한도시번호);
            game_todo(zone_location , gamer)
            탑승객 = 0;
        
        
        }
    }