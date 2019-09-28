import java.util.Scanner;
public class BilanganTerbesar {
 public static void main(String[] args) {
 int pertama, kedua, ketiga, terbesar;
 Scanner scan = new Scanner(System.in);
 System.out.print("Masukkan bilangan pertama = ");
 pertama = scan.nextInt();
 System.out.print("Masukkan bilangan kedua = ");
 kedua = scan.nextInt();
 System.out.print("Masukkan bilangan ketiga = ");
 ketiga = scan.nextInt();
 if(pertama>kedua && pertama>ketiga){
 terbesar = pertama;
 }else{
 if(kedua>ketiga){
 terbesar=kedua;
 }else{
 terbesar=ketiga;
 }
 }

 System.out.println("Bilangan terbesar adalah "+terbesar);  
 }
}
