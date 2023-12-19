let info = "이순신:군인,34세,아산 - 장보고:군인,41세,완도 - 김춘추:정치인,28세,경주";
let data = info.split(" - ");
// 출력 - 이름 직업
let data1 = data[0].substring(0, data[0].indexOf(":")) //.toString().split(":")
let data2 = data[0].substring(data[0].indexOf(":")+1,data[0].indexOf(","));
console.log(data1 + " " + data2)

//장보고의 나이는 몇인가? 출력 -나이만 출력하기 !!!!
let jang1 = data[1].substring(data[1].indexOf(",")+1,data[1].indexOf("세"));
console.log(jang1)

let jang2 = data[1].substring(data[1].indexOf(",")+1,data[1].lastIndexOf(","));
console.log(parseInt(jang2)) //parseInt() - 앞쪽에 있는 숫자만 정수로 변환
