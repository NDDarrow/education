package test4;

import java.util.Scanner;

public class test {
    
    public static void main(String[] args){
        int num = 100;
        System.out.println( "한 줄씩 출력" + num);
        System.out.print("줄바꿈 없이 출력" + num);
        System.out.print("이어서나옴" + num);
        System.out.printf("포멧 지정 %d" , num);
        // %d - 정수, %f - 실수, %c - 문자, %s - 문자열
        // \n - 개행, \t -탭, \', \", \r - 캐리지 리턴(커서의 위치를 맨앞으로 이동), \b - 백스페이스
        int a =10, b=20;
        float c = 3.12345f;
        System.out.printf("\n %d %d %f", a , b , c);
        // %를 쓸때 정수에 실수를 넣거나 실수에 정수를 넣는등 다른 타입이면 에러

        System.out.printf( "\n %.1f \n", c);
        //%f로 실수출력시 %뒤에 .원하는 자릿수 를 넣으면 원하는 자릿수 만큼만 출력
        System.out.printf("10+20 = %d",10 + 20);

        Scanner sc = new Scanner(System.in); //자바에서 입력받으려면 Scanner 객체 필요

        int num1 = sc.nextInt();
        short num2 = sc.nextShort();
        System.out.println(num1 + " " + num2);

        System.out.println( "이름 입력 :");
        String name = sc.next();
        System.out.println("이름은" + name);

        //사격형의 너비와 높이를 입력받아 넓이를 출력

        System.out.println("높이 입력");
        int num3 = sc.nextInt();
        System.out.println("너비 입력");
        int num4 = sc.nextInt();

        System.out.println(num3 * num4);

        //국어, 영어, 역사 3과목의 점수를 입력받아서 총점과 평균을 출력하세요

        System.out.println("국어 점수 입력");
        int lan = sc.nextInt();
        System.out.println("영어 점수 입력");
        int eng = sc.nextInt();
        System.out.println("역사 점수 입력");
        int his = sc.nextInt();

        int score = lan + eng + his;
        int avr = score/3;
        
        System.out.println("총점 : "+ score + "\n평균 : "+ avr );

    }
    
}
