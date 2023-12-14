

// const zone_name= [
//     "복지기금","화성","성남","창원","제주","용인","수원","울산",
//     "인천공항","청주","광주","부천","대구","남양주","인천","포항",
//     "복지기금납부","천안","부산","전주","서울","안산","대전",
//     "무인도","안양","김해","평택","시흥","파주","의정부","김포","출발"
// ];

// const zone_color=["#FF2424","#53C14B","#FFBB00","#121212"]; // 각면의 색상
// const land_purchase = [
//     0 , 25 , 27 , 26 , 34 , 28 , 27 , 39 ,
//     0 , 16 , 42 , 20 , 45 , 19 , 48 , 27 ,
//     0 , 21 , 52 , 20 , 80 , 22 , 120 , 0 ,
//     12 , 10 , 15 , 12 , 9 , 9 , 7 , 0

// ];

// const bg_image = [
//     "출발.png","무인도.jpg","적십자.jpg","세계여행.png","부루마블.jpg"
// ];

//각 구역의 객체 생성자 함수
// 구역 이름, 토지매입가격, 소유자, 색상, 기능(모서리부분), 이미지

// function zone_Object( name, purchase, owner, color, func, image){
//     this.name = name;
//     this.purchase = purchase;
//     this.owner = owner;
//     this.color = color;
//     this.func = func;
//     this.back = image;
// }

//플레이어 생성자 함수
function player(num,color){
    this.num = num;
    this.color = color;
    this.money = 100; //초기 게임머니 100만원
    this.zone = new Array(); //매입한 토지를 저장할 배열
    this.drift_turn = 0; // 무인도 남은 턴
    this.location = 0; //현재위치
}

//전역변수
let fund = 0; //사회복지기금 모금 금액 저장 변수
let island_ = new Array(); //무인도에 도착한 플레이어
let zone = new Array(); //각 구역의 객체 저장 배열
let player_list = new Array();// 게임 참가자 

// function zone_create(){
//     for( var i=0; i < zone_name.length; i++){
//         var color = zone_color[0];
//         if( i >= 0 & i <= 7)
//             color = zone_color[2];
//         if(( i >= 8 & i <= 23) & i%2 == 0)
//             color = zone_color[3];
//         if((i >= 8 & i <= 23) & i%2 ==1)
//             color = zone_color[1];

//         var image = "";
//         if( i == 0) image = bg_image[2];
//         if( i == 8) image = bg_image[3];
//         if( i == 23) image = bg_image[1];
//         if( i == 31) image = bg_image[0];

//         zone.push( new zone_Object(
//             zone_name[i] , land_purchase[i], "", color , "", image
//         ));
//     }
// };
//구역객채들을 zone클래스 div에 적용하기
function zone_draw(){
    $.each( zone, function( idx , obj){
        if(idx == 0 || idx == 8 || idx == 23 || idx == 31){
            $(".zone").eq(idx).css("background-image","url(./static/images/"+obj.back+")");
            $(".zone").eq(idx).css("background-size","contain")
            $(".zone").eq(idx).css("background-position","center")
        }else{
            $(".zone").eq(idx).children(".zone_name").text(obj.name)
            $(".zone").eq(idx).children(".zone_color").css("background-color",obj.color);
            //각 구역의 번호 부여
        }
        $(".zone").eq(idx).attr("data-num" , obj.num)
    });
};

function game_init(){
    var pc = Number( $("#player_number").val() );

    $("#game_state").html("<h3>게임현황</h3>");

    var pcolor=["#ff0000","#00ff00","#FFFF00","#0000FF","#00BBFF"]
    for(var i = 1; i <= pc; i++){
        player_list.push( new player( i , pcolor[i-1]));
        $("#game_state").append(
            `<div class='ps'>
                <b class='pnum'>${i}</b>
                <input type='color' id='pcl${i}' value='${player_list[i-1].color}'>
                <div class='state'>
                    자금 : <b id='pm${i}'>${player_list[i-1].money}만원</b>
                    보유도시 : <b id='pcity${i}'>${player_list[i-1].zone.length}개</b>
                </div>
            </div>`
        );
    }
    $("input[type=color]").on("change", change_pcl );
    $("#game_state").show();
    $("#set_player").hide();


    //게임 플레이어수에 맞는 말 만들기
    //svg - scalable vector graphics (수학공식을 통해 이미지를 저장, 표시)
    //<i class="fa-regular fa-user" style="color: #ff0000;"></i> 레드
    for(var i  = 0; i < player_list.length; i++){
        var gamer = player_list[i];
        var zone_location = find_location( gamer.location)
        var tag=
            `<div class='meeple m${gamer.num}' data-pn='${gamer.num}'
            style='color:${gamer.color};'>
            <i class="fa-solid fa-user"></i>
            </div>`;
        $(".zone").eq(zone_location).append(tag);
        
        overlap(zone_location)
        
    }
    // var idx = find_location( 0 );
    // console.log(idx)
    
    create_dice();
};

function create_dice(){ //화면에 주사위 나타내기
    var dice = `
    <div id='dice_wrap'>
        <div class='dice'>
            <div class='diceImg'>
                <img id='dice1' src='./static/images/dice1.png'>
            </div>
            <div class='diceImg'>
                <img id='dice2' src='./static/images/dice4.png'>
            </div>
        </div>
        <div class='dicebt'>
            <button onclick='rolling(this)'>굴리기</button>
        </div>
    </div>
    `;
    $(".center").append(dice);
}

function overlap(location){ //한자리에 말이 중복되면 겹침을 방지하기 위한 함수
    var len = $(".zone").eq(location).children(".meeple").length;
    if( len >= 2){
        var left= 50, top=50;
        for(var i = 0; i <= len; i++){
            $(".zone").eq(location).children(".meeple").eq(i).css("left",(left+i*5)+"%");
            $(".zone").eq(location).children(".meeple").eq(i).css("top",(top+i*5)+"%");
        }
    }
};

    

function find_location( n ){ //플레이어 말이 표시될 위치 또는 이동할 위치 찾기
    var index = 0;
    $(".zone").each( function( idx, item){
        var num = Number($(item).data("num")); // zone클래스 태그의 data-num값
        if(num == n){
            index = idx;
            return; //return은 해당함수를 종료시키기도한다.
            //each안에 만든 익명함수만 종료시키기 때문에 find_location 함수를 통해 return하는게 불가능하다.
            //그래서 값을 index변수에 저장하여 index변수를 반환 시켜준 것이다.
        }
    });
    return index; // data-num 과 n의 값이 일치하는 태그의 위치넘기기
}

function change_pcl(){ //플레이어가 자신의 말 색상을 변경할 경우 실행
    var new_color = $(this).val();
    var num = Number($(this).attr("id").substring(3)); // attr은 태그의속성 - id .class.name 등등
    var gamer = player_list[num-1];;//색상 변경한 플레이어 객체

    gamer.color = new_color;
    //자신의 말 찾기 num변수에는 자신의 번호가 저장되있다.
    for( var i = 0; i < $(".meeple").length; i++){
        if( $(".meeple").eq(i).data("pn") == num){
            $(".meeple").eq(i).css("color",new_color)
            break; //플레이어말 찾아서 색변경시 반복문 종료
        }
    }
    

}



$(function(){
    //현재상황 - json파일용은 어제 다루었던 zone배열안의 내용과 같다.
    //getJSON으로 json파일을 읽어와서 zone배열에 저장
    // zone배열의 내용은 어제와 동일
    // zone_draw() 함수는 zone 배열의 값을 가지고와서 화면에 표시한다.
    // 하지만 zone_draw() 함수가 정상적으로 작동하지 않고있음
    // getJSON의 function(data){}안으로 넣어주면 작동됨 
    // 비동기문제가 발생하기 때문
    // 비동기처리 코드가 실행이 완료되면 그 다음 실행 될 수 있게 하는방법
    // async, await
    // async는 비동기 함수 앞에 붙여준다
    // await는 비동기 처리 앞에 붙여준다.
    // async function a(){ await.$getJSON();}

    // zone_create();
    $.getJSON("./data/city.json", function(data){
        zone = data;
        zone_draw()
        
        func_link()
    });

    // zone_draw();
    
    $("#enroll").on("click", game_init );
    $("#player_number").on("change", function(){
        $(this).next().text( $(this).val() + "명")
    });
    $("#player_number + label").text(2+"명");

    $(".zone").on("click",airport_move);
});
// 16 -복지기금 , 24-공항 , 28-기금납부 , 8-무인도, 0-출발지
function func_link(){
    zone[0].func = `welfare(gamer)`;
    zone[8].func = `airport(gamer)`;
    zone[16].func = `fundpayment(gamer)`;
    zone[23].func = `island(gamer)`;
    zone[31].func = `complete(gamer)`;
}


function welfare(gamer){ //복지기금 수령
    alert(`복지기금 ${fund}만원을 받았습니다.`)
    gamer.money += fund;
    fund = 0;
    $("#pm"+gamer.num).text( gamer.money+"만원");
}
function airport(gamer){ // 원하는 위치로 이동
    
}
function fundpayment(gamer){ //복지기금 납부
    alert("복지기금으로 20만원을 납부했습니다.")
    gamer.money -= 20;
    fund += 20;
    $("#pm"+gamer.num).text( gamer.money+"만원");
}
function island(gamer){ //3턴동안 못움직임
    gamer.drift_turn = 3;
}
function complete(gamer){ //출발지에 도착하거나 통과하면 20만원 보너스

}







//game1
//전역변수
//const dice_img=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
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
    console.log(zone[location])
    var gamer = player_list[turn-1];
    if(city.purchase == 0){ //매입금이 = 0인 곳 무인도, 기금, 출발, 공항, 기금납부
        // 16 -복지기금 , 24-공항 , 28-기금납부 , 8-무인도, 0-출발지
        console.log(gamer)
        console.log(city)
        
        eval(city.func);
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



// 과제 - 각 구역의 객체를 json 으로 작성해 오세요.
// city.json으로 작성 하세요.

//zone.Object 생성자 함수로 생성한 객체들을 json파일로 작성