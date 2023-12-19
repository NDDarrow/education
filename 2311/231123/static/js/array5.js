const movie =["서울의봄","프레디의피자가게","사채소년","헝거게임","더와일드","더마블스","30일","나폴레옹","빅슬립"]
const grade = [8.7, 7.3, 7.3, 6.7,8.2, 3.9, 6.9, 9.6, 9.0,]
const nation = ["한국","미국","한국","미국","미국","미국","한국","영국","한국"]

//영화 제목을 검색하여 평점과 국가를 출력
$(function(){
    $("#name").keyup(function(key){
        if(key.keyCode == 13){
            research();
        }
    })
});

function research(){
    var mov = ($("#name").val()).replace(/\s/g,"");
    var idx = movie.indexOf(mov);
    if(movie.indexOf(mov) == -1)
        $("#result").text("없는 영화")
    else{
        var ans = `${movie[idx]}의 평점 : ${grade[idx]} 국가 : ${nation[idx]}`;
        $("#result").html(ans);
    }
    $("#name").val("")
}


//2차원 배열
//배열안에 배열이 요소로 들어가있는 형태
let num= [[1,2,3] , [4,5,6] , [11,22,33,44]];
alert(num[1][1])

//2차원배열은 인덱스가 2개기 때문에 반복문도 2번 사용된다.

for (var i = 0; i < num.length; i++){
    for( var j = 0; j < num[i].length; j++){
        document.write(num[i][j]+ " ")
    }
}