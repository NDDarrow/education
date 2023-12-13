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

    //플레이어 위치변경
    if( gamer.drift_turn != 0){
        gamer.drift_turn--;
        alert(`${gamer.drift_turn}턴 뒤 탈출`)
    }else if( gamer.location + dice_sum > 31){
        var diff = (gamer.location + dice_sum) - 32;
        gamer.location = diff;
        moving(gamer, old_location)
    }else{
        gamer.location = gamer.location + dice_sum;
        moving(gamer, old_location)
    }


    // 턴넘기기
    if( turn == player_list.length)
        turn = 1;
    else
        turn++;
}

function game_todo(location){
// location 매개변수는 zone클래스들 중 몇번째 zone클래스인지 인덱스값 있음
// location의 값은 몇번째 zone클래스인지 알수도 있지만, zone배열의 구역객체의
// 인덱스로도 사용가능
    var city = zone[location];
    var gamer = player_list[turn-1];
    if(city.purchase == 0){ //매입금이 = 0인 곳 무인도, 기금, 출발, 공항, 기금납부
        // 16 -복지기금 , 24-공항 , 28-기금납부 , 8-무인도, 0-출발지
        city.func(gamer);
    }else if( zone[location].owner == ''){
        if(confirm(`${city.name}의 매입가는 ${city.purchase}만원, \n살래?`)){
            city.owner = turn; //토지 소유자 변경
            gamer.money -= city.purchase; //현금보유량 변경
            $("#pm"+turn).text(gamer.money+"만원") //변경된 현금량 표기
            
            $(".zone").eq(location).children(".zone_name").css("background", gamer.color);
            
            
        }
    }else{//매입된 땅에 접근시
        var owner = city.owner;
        var tollfee = city.purchase;//통행료
        gamer.money -= tollfee;
        player_list[owner-1].money += tollfee;

        $("#pm"+owner).text(player_list[owner-1].money+"만원");
        $("#pm"+turn).text(gamer.money+"만원");
        alert(`${city.name} 소유주에게 ${tollfee}만원 지불했습니다.`)
    }


}

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
    game_todo(zone_location);
    };