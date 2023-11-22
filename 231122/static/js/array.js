//배열
//배열 - 변수가 연속적으로 나열되어 있는 공간
//      변수는 단하나의 값만 저장 할 수 있지만 배열은 다수의 값을 저장할 수 있다.
//      많은 데이터를 저장하고 관리하기에 가장 쉬운 방법이다.

var arr1 = [];
var arr2 = [12, 23, 34, 45];
var arr3 = new Array(); //표준

//arr.push();
//특정 배열 arr에 ()의 값을 추가

arr3.push(45);
arr3.push(23);
arr3.push("김민수");
arr3.push("노재홍");
arr3.push(3.14);

for(var i = 0; i < arr3.length; i++){
    document.write(arr3[i] + " ")
}

let name = ["이순신","강감찬","장보고","장영실","이성계"]
document.write("<br>"+name);

//push = 배열의 마지막에 데이터를 저장
//pop = 배열에 저장된 데이터 삭제
name.pop();
document.write("<br>"+name);

// 배열의 맨 앞쪽에 저장 - unshift()
name.unshift("정도전");
document.write("<br>"+name);
// 배열의 맨 앞쪽을 삭제 - shift()
name.shift();
document.write("<br>"+name);

// 배열의 특정위치에 추가하거나 삭재 - splice(x,y,z) x는 시작점 y는 삭제 개수, z는 추가하는 데이터
name.splice(2, 1,"정약용","김유신","문익점")
document.write("<br>"+name);

//배열에서 특정위치의 데이터 가져오기 - slice

let name2 = name.slice(1,3);
document.write("<br>"+name2);
// 다수의 배열을 하나로 합치기 - concat
let name3 = name.concat(name2);
document.write("<br>"+name3);

// 배열에 저장된 데이터들을 사전적순으로 정렬 - sort
name3.sort();
document.write("<br>sort "+name3);
// 배열을 역순으로 정렬 - reverse
name3.reverse();
document.write("<br>reverse "+name3);
//하나의 문자열로 변환 - join
var str = name.join("-"); //join() 괄호사이의 요소를 기준으로 생성
document.write("<br>"+str);