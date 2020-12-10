package machine;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class CoffeeMachine {
    public static void main(String[] args) throws IOException {

        int fill_m [] = new int[5]; //array for writing new setting for machine by fill_m()
        int proxi[]={0,0,0,0,0};
        //the proxi method for reassigning values of coffee machine settings. return main array
        int status_array [] = status_machine(fill_m, proxi);
        boolean flag =true;

        while(true) {
            BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
            //printing how much water, milk etc machine has at the moment
            if(flag==false) break;
            System.out.println("Write action (buy, fill, take, remaining, exit):");
            String input = reader.readLine();
           //menu
           switch (input) {
               case "buy":
                   status_array=buy(status_array);
                   break;
               case "fill":
                   fill_m=fill_m(status_array[4]);
                   status_array=status_machine(fill_m, status_array);
                   break;
               case "take":
                   status_array[4]=cash_out(status_array[4]);
                   //flag=false;
                   break;
               case "exit":
                   flag=false;
                   break;
               case "remaining":
                   print_status(status_array);
                   break;
           }
       }
    }

    public static boolean check(int array[], int [] coffee){
        //checking method if the machine has enough resources
        boolean check=false;
        for(int i =0; i< 5; i++) {
            if (array[i] - coffee[i] < 0) {
                if(i==0) {
                    System.out.println("Sorry, not enough water!");
                    check=true;
                } else if(i==1) {
                    System.out.println("Sorry, not enough milk!");
                    check = true;
                } else if (i==2) {
                    System.out.println("Sorry, not enough beans!");
                    check=true;
                } else if(i==3){
                    System.out.println("Sorry, not enough cups!");
                    check =true;
                }
                }
            }
        return check;
    }

    public static int [] buy(int array[]) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
        String choice = reader.readLine();
        int [] esp = usage_espresso();
        int [] latte = usage_latte();
        int[] capuc=usage_cappuccino();
        boolean check=false;
        if(choice.equals("1")){
            //checking if the machine has enough resources
            check=check(array, esp);
            if(check==true) {
                return array;
            } else {
                System.out.println("I have enough resources, making you a coffee!\n");
                for (int i = 0; i < 5; i++) {
                    if (i == 4) array[i] = array[i] + esp[i];
                    else array[i] = array[i] - esp[i];
                }
            }
        } else if(choice.equals("2")){
            //checking if the machine has enough resources
            check=check(array, latte);
            if(check==true) return array;

            System.out.println("I have enough resources, making you a coffee!\n");
            for(int i =0; i< 5; i++) {
                if(i==4) array[i]= array[i]+latte[i];
                else array[i]=array[i]-latte[i];
            }

        } else if(choice.equals("3")){
            //checking if the machine has enough resources
            check=check(array, capuc);
            if(check==true) return array;

            System.out.println("I have enough resources, making you a coffee!");
            for(int i =0; i< 5; i++) {
                if(i==4) array[i]=array[i]+capuc[i];
                else array[i]=array[i]-capuc[i];
            }
        } else if(choice.equals("back")){

        }
        return array;
    }

    public static int cash_out(int money){
        //take all earned money
        System.out.printf("I gave you $%d \n", money);
        money=0; //
        return money;
    }

    public static void print_status(int [] array){
         //printing machine status
        System.out.printf("The coffee machine has:\n" + "%d of water \n" +
                "%d of milk \n" +
                "%d of coffee beans \n" +
                "%d of disposable cups \n" +
                "%d of money \n",
                array[0], array[1],array[2],array[3], array[4]);
    }

    public static int[] fill_m(int money) throws IOException {
        //array for filling status array
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int ingred[] = new int[5];
        System.out.println("Write how many ml of water do you want to add:");
        ingred[0] = Integer.parseInt(reader.readLine()); //c_water;
        System.out.println("Write how many ml of milk do you want to add:");
        ingred[1] = Integer.parseInt(reader.readLine()); //c_milk;
        System.out.println("Write how many grams of coffee beans do you want to add:");
        ingred[2] = Integer.parseInt(reader.readLine()); //c_beans;
        System.out.println("Write how many disposable cups of coffee do you want to add:");
        ingred[3] = Integer.parseInt(reader.readLine()); //cups
        ingred[4] =money; // money
        return ingred;
    }

    public static int [] status_machine(int fill_m [], int status []) throws IOException {
        //usage and cost for espresso
        int ingred[] = new int[5];
        if(fill_m[0]==0) {
            ingred[0] = 400; //c_water;
            ingred[1] = 540; //c_milk;
            ingred[2] = 120; //c_beans;
            ingred[3] = 9; //cups
            ingred[4]=550; //cost   money sho
        }
        else {
            for(int i =0; i< fill_m.length; i++) {
                if(i==4) ingred[i] = fill_m[i];
                else ingred[i] = status[i]+fill_m[i];
            }
        }
        return ingred;
    }

    public static int[] usage_espresso() throws IOException {
       //usage and cost for espresso
        int ingred[] = new int[5];
        ingred[0] = 250; //c_water;
        ingred[1] = 0; //c_milk;
        ingred[2] = 16; //c_beans;
        ingred[3]=1; //cups
        ingred[4] = 4; //cost
        return ingred;
    }

    public static int[] usage_latte() throws IOException {
        //usage and cost for latte
        int ingred[] = new int[5];
        ingred[0] = 350; //c_water;
        ingred[1] = 75; //c_milk;
        ingred[2] = 20; //c_beans;
        ingred[3]=1; //cups
        ingred[4] = 7; //cost
        return ingred;
    }

    public static int[] usage_cappuccino() throws IOException {
        //usage and cost for cappuccino
        int ingred[] = new int[5];
        ingred[0] = 200; //c_water;
        ingred[1] = 100; //c_milk;
        ingred[2] = 12; //c_beans;
        ingred[3]=1; //cups
        ingred[4] = 6; //cost
        return ingred;
    }
}

