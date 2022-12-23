package projectbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.Objects;

@SpringBootApplication
public class ProjectBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectBackendApplication.class, args);

//        int a = 3;
//        int b = 4;
//            a = a * b;
//            b = a / b;
//            a = a / b;
//        System.out.println("a = " + a);
//        System.out.println("b = " + b);

//        String str = "aabacsdc";
//        String[] strings = str.split("");
//        StringBuilder newStr = new StringBuilder();
//        System.out.println(Arrays.toString(strings));
//
//        for (int i = 0; i < strings.length - 1; i++) {
////            if (newStr.charAt(0) == str.charAt(i)){
////                continue;
////            }
//            int count = 1;
//            for (int j = i + 1; j < strings.length; j++) {
//                if (str.charAt(i) == str.charAt(j)) {
//                    count += 1;
//                }
//            }
//            newStr.append(count).append(str.charAt(i));
//        }
//        System.out.println(newStr);
      String str1 = "11:20:30";
      String str2 = "15:45:35";
      StringBuilder stringBuilder = new StringBuilder();
      int hours = Integer.parseInt(str1.substring(0,2)) + Integer.parseInt(str2.substring(0,2));
      int minutes = Integer.parseInt(str1.substring(3,5)) + Integer.parseInt(str2.substring(3,5));
      int seconds = Integer.parseInt(str1.substring(6,8)) + Integer.parseInt(str2.substring(6,8));
        stringBuilder.append(hours).append(":").append(minutes).append(":").append(seconds);
      if (seconds > 60) {
          stringBuilder.append(hours - 24);
      } else {
          stringBuilder.append(hours).append(":").append(minutes).append(":").append(seconds);
      }
      System.out.println(stringBuilder);
    }
}
