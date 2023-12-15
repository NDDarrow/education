package study1501;

import java.util.Random;
import java.util.Scanner;

public class test2 {
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args){

        // for( int i = 0; i <= 5; i++){
        //     System.out.println(i);
        // }
        // //구구단 2단부터 9단까지 출력
        // for( int i = 2; i <= 9; i++){
        //     for(int j =1; j <= 9; j++){
        //         System.out.printf("%d * %d = %d \n",i , j, i*j);
        //     }
        // }

        // for( int i = 1; ; i++){
        //     System.out.println(i);
        //     if( i == 13 )
        //         break;
        // }

        // //1부터 100까지 중에서 10의 배수를 빼고 출력
        // for(int i = 1; i <= 100; i++){
        //     if( i % 10 == 0)
        //         continue; //continue는 아래에 있는 실행을 하지 않고 다음단계로 진행
        //     System.out.println( i );
        // }

        //반복문 문제.
        // 정수하나를 입력받아서 입려한 정수만큼 반복 되게 만들기

        
        // System.out.println("정수 입력");
        // int num = sc.nextInt();
        // for( int i = 0; i <= num; i++){
        //     System.out.println( i );
        // }
        
        // int x = 1;
        // while( x <= 10){
        //     System.out.println( x );
        //     x++;
        // }
        //0을 입력하기 전까지 계속 정수를 입력한다.
        //0을 입력하면 지금까지 입력했던 모든정수의 합을 출력하시오
        // int sum = 0;
        // while( true){
        //     System.out.println("정수입력(0입력시 종료)");{
        //         int num = new Scanner(System.in).nextInt();
        //         if( num == 0){
        //             System.out.println(sum);
        //             break;
        //         }else
        //             sum += num;
        //     }
        // }

        //Math.floor(Math.random()*10)+1;
    //         int rand = (int)(Math.random()*10)+1; 
    //         // 매스랜덤은 실수기 때문에 Math.floor를 사용해도 의미가 없음
    //         //Math.random의 타입은 double로 적거나 앞에(타입)을 붙여 강제형변환을 해줘야됨
    //         System.out.println(rand);

    //         Random rd = new Random();

    //         rand = rd.nextInt(10); // 0~10까지 난수
            
    //         for( int i = 1; i <= 6; i++){
    //             System.out.println( rd.nextInt(45)+1);
    //         }
    

        // 동전 앞면 뒷면 맞추기 ( 1. 앞면 , 2.뒷면)
        Random rd = new Random();
        int coin = rd.nextInt(2)+1;
        System.out.println(coin);
        System.out.println("앞(1)? 뒤(2)?");
        int user = sc.nextInt();

        if( coin == user)
            System.out.println("승");
        else
            System.out.println("패");

    }
}
