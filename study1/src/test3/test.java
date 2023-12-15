package test3;

public class test {
    
    public static void main(String[] args){
        //비트 연산자
        System.out.println( 10 & 34);
        System.out.println( 14 | 12);
        System.out.println( ~13 );
        System.out.println( ~-14);
        System.out.println( 29 ^ 13); // ^ -> xor비트연산자
        
        // & 2진수로 계산해서 두 2진수에서 공통으로 1인 값으로 숫자를 만들어서 출력
        // 자리수 끼리의 곱셈으로 이해
        // | 2진수로 계산해서 두 2진수에서 1인 값들을 자리수로 합해 출력
        // 자수리 끼리의 덧셈으로 이해(2가 나와도 1)
        // ~ 2진수로 계산해서 2진수의 1을 0으로 0을 1로 변환해서 출력 

        //시프트 비트 연산자 -> 이동연산자
        System.out.println( 10 << 2); // << -> 왼쪽 이동연산자
        System.out.println( 24 >> 3); // >> -> 오른쪽 이동연산자

        System.out.println( 4 << 2); // 4*2^2의 계산결과와 같다
    }

}
