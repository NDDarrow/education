package study1501;

import java.util.Scanner;

public class test {
    public static void main(String[] args){
        int num1 = 10;
        int num2 = 40;

        if( num1 > num2 ){
            System.out.println("큰 숫자 : " + num1);
        }else{
            System.out.println("큰 숫자 : " + num2);
        }
        
    Scanner sc = new Scanner(System.in);
    // int tall = sc.nextInt();
    // // 키가 130이상만 바이킹을 탈 수 있다.

    // if( tall >= 130)
    //     System.out.println("바이킹 탑승 가능");    
    // else
    //     System.out.println("바이킹 탑승 불가");
    
    System.out.println("이름 입력 : ");
    String name = sc.nextLine();
    if(name.equals("이순신")) //java에서 문자열을 비교하기 위해선 ===이 아닌 문자열.equals라는 메소드를 사용해야 한다.
        System.out.println("일치합니다");
    else
        System.out.println("다릅니다.");
    
    // var word = "banana"; word.indexOf("na"); word.includes("a");
    // 나오는 값 2

    // indexOf는 java에서도 사용가능, includes는 불가한 대신 contains가 같은역할
    // 앵간한
        if( name.contains("순"))
            System.out.println("포함");
        if( name.indexOf("신") != -1)
            System.out.println("신이 입력되었습니다.");
        else
            System.out.println("미입력");




    }
}
