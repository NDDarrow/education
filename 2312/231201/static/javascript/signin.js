

let mid=["shwo5158" , "shwo123" , "shwo2193" , "shwo5480" , "shwo9796" , "shwoghd" , "shwo1234" ,"shwo9910"]
let mpw=["shak5158" , "shak123", "shak2193","shak5480", "shak9796", "shakghd", "shak1234", "shak9910"]

$(function(){
    $("#signBt").on("click",function(){

        if($("#id").val() == ''){
            alert("아이디를 입력하세요");
            $("#id").focus();
        }else if($("#pw").val() == ''){
            alert("비밀번호를 입력하세요");
            $("#pw").focus();
        }else{
            //아이디 존재유무
            var idx = mid.indexOf($("#id").val() );
            if(idx == -1){
                var ok = confirm("아이디가 존재 하지 않습니다. \n회원가입 하시겠습니까?")
                if(ok) location.href="signup.html";
            }else if(mpw[idx] == $("#pw").val()){
                alert("로그인 성공");
            }else{
                alert("비밀번호가 일치하지 않습니다.");
                $("#pw").val("").focus();
            }
            // for(var tmp in mid){
            //     if(mid[tmp] == $("#id").val()){
            //         if(mpw[tmp] == $("#pw").val()){
            //             alert("로그인 성공");
            //             break;
            //         }else{
            //             alert("비밀번호가 틀렸습니다(5회 이상 불일치시 로그인 불가")
            //             break;
            //         }
            //     }
            // }
        }
    });
});