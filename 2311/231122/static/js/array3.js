let num = [10, 20, 30, 40, 50, 60]

num.push(70);
num.push(80);
num.push(90);
num.push(100);

for(i = 0; i < num.length; i++){
    document.write(num[i]+"<br>")
}

//num 배열에 저장된 숫자들에게 +3을 해주고 결과를 출력하시세요

for(i = 0 ; i < num.length; i++){
    if(num[i] % 10 == 0){
        num[i] += 3 ;
    }
    document.write(num[i]+" ")
}
document.write("<br>")
//num 배열에서 55보다 큰 숫자들만 출력하세요

// for(i = 0; i < num.length; i++){
//     if(num[i] > 55){
//         document.write(num[i]+" ")
//     }
// }
let num1 = [1,2,3];
let num2 = [4,5,6];
let num3 = new Array();
// 두 배열에 같은 인덱스 위치에 있는 숫자들의 합 구하기

for(var i = 0; i < num1.length; i++){
    num3[i] = num1[i] + num2[i]
}
document.write(num3)

//num1과 num2 배열에서 짝수에 해당하는 숫자만 num3에 저장해서 출력

let num4 = new Array();
for(var i = 0; i < num1.length; i++){
    if(num1[i] % 2 == 0){
        num4.push(num1[i]);
    }
}
for(var i = 0; i < num2.length; i++){
    if(num2[i] % 2 == 0){
        num4.push(num2[i]);
    }
}
document.write("<br>"+ num4)