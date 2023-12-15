package test1;

public class test {
    public static void main(String[] args){
        System.out.println("나도 main");
        // js 변수생성 - a = 10;
        // java 변수생성 - 데이터타입 지정 ->
        //데이터 종류 - 정수, 실수, 문자, 논리
        // 정수 - byte, short , int , long
        //1bit -> 8bit = 1byte = -128 ~ 127
        //byte = 1byte
        //short = 2byte
        //int = 4byte
        //long = 8byte
        //long은 너무크고 byte는 너무작음
        //int가 크기가 적당하고 32bit cpu가 가장 좋아했음( 지금은 64bit cpu가 많아짐)
        int a = 10;
        short b = 20;
        long d = 40;
        System.out.println( a + " " + b + " " + d);
        //실수 - float(4byte, .뒤로 6자리) , double(8byte, .뒤로 15자리)
        float ff = 12.0f;
        double dd = 12.34f;
        //문자 - char(2byte) , '' 작은따옴표가 문자 큰따옴표는 문자열 -> char 는 c언어에서는 아스키코드를 쓰기 때문에 1byte, java는 유니코드를 쓰기때문에 2byte
        char ch = 97;
        System.out.println( ch );
        //논리 - boolean(1byte)
        boolean fg = true;
        //void - 데이터가 없다, 라는 뜻, 또는 타입이 없다라는 뜻

        //참조 타입 - new 연산자로 생성해야 하는 타입
        // 클래스 
        String str = new String("아하 문자열");
        String name = "이순신";

        System.out.println( str );
        }
}
