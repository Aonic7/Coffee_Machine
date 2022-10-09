//Functionality of the machine:
// Three types of coffee
// Possibility choose size of the cup

const input = require('sync-input')
let coffeeMachineStorage = {water: 400, milk: 540, coffeeBeans: 120, cupS:9, cupM:9, cupL:9, money:550};
let cupEspressoS = {water: 250, coffeeBeans: 16, money:4};
let cupEspressoM = {water: 350, coffeeBeans: 20, money:6};
let cupEspressoL = {water: 450, coffeeBeans: 25, money:8};
let cupLatteS = {water: 250, milk: 75, coffeeBeans: 20, money:7};
let cupLatteM = {water: 350, milk: 90, coffeeBeans: 25, money:8};
let cupLatteL = {water: 450, milk: 100, coffeeBeans: 30, money:9};
let cupCappuccinoS = {water: 200, milk: 100, coffeeBeans: 12, money:6};
let cupCappuccinoM = {water: 250, milk: 100, coffeeBeans: 15, money:7};
let cupCappuccinoL = {water: 350, milk: 120, coffeeBeans: 20, money:9};

function checkSupplies(water, coffeeBeans, cupS, cupM, cupL, milk, usageWater, usageBeans, usageCup, usageMilk, cupType){
            if(cupType=="1"){
                if(water - usageWater>=0 && coffeeBeans-usageBeans>=0 && cupS-usageCup>=0 && milk-usageMilk>=0){
                    console.log("I have enough resources, making you a coffee!")
                    return true;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans>=0 && cupS-usageCup>=0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough water!")
                    return false;
                }else if(water - usageWater>=0 && coffeeBeans-usageBeans<0 && cupS-usageCup>=0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough coffee beans!")
                    return false;
                }else if(water - usageWater>=0 && coffeeBeans-usageBeans>=0 && cupS-usageCup<0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough S cups!")
                    return false;
                } else if(water - usageWater>=0 && coffeeBeans-usageBeans>=0 && cupS-usageCup>=0 && milk-usageMilk<0){
                    console.log("Sorry, not enough milk!")
                    return false;
                } else if(water - usageWater<0 && coffeeBeans-usageBeans<0 && cupS-usageCup>=0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough water and coffee beans!")
                    return false;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans<0 && cupS-usageCup<0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough water, coffee beans, cups!")
                    return false;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans<0 && cupS-usageCup<0 && milk-usageMilk<0){
                    console.log("Sorry, not enough resources!")
                    return false;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans>=0 && cupS-usageCup>=0 && milk-usageMilk<0){
                    console.log("Sorry, not enough water and milk!")
                    return false;
                }
            }else if(cupType=="2"){
                if(water - usageWater>=0 && coffeeBeans-usageBeans>=0 && cupM-usageCup>=0 && milk-usageMilk>=0){
                    console.log("I have enough resources, making you a coffee!")
                    return true;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans>=0 && cupM-usageCup>=0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough water!")
                    return false;
                }else if(water - usageWater>=0 && coffeeBeans-usageBeans<0 && cupM-usageCup>=0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough coffee beans!")
                    return false;
                }else if(water - usageWater>=0 && coffeeBeans-usageBeans>=0 && cupM-usageCup<0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough M cups!")
                    return false;
                } else if(water - usageWater>=0 && coffeeBeans-usageBeans>=0 && cupM-usageCup>=0 && milk-usageMilk<0){
                    console.log("Sorry, not enough milk!")
                    return false;
                } else if(water - usageWater<0 && coffeeBeans-usageBeans<0 && cupM-usageCup>=0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough water and coffee beans!")
                    return false;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans<0 && cupM-usageCup<0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough water, coffee beans, cups!")
                    return false;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans<0 && cupM-usageCup<0 && milk-usageMilk<0){
                    console.log("Sorry, not enough resources!")
                    return false;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans>=0 && cupM-usageCup>=0 && milk-usageMilk<0){
                    console.log("Sorry, not enough water and milk!")
                    return false;
                }
            } else if(cupType=="3"){
                if(water - usageWater>=0 && coffeeBeans-usageBeans>=0 && cupL-usageCup>=0 && milk-usageMilk>=0){
                    console.log("I have enough resources, making you a coffee!")
                    return true;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans>=0 && cupL-usageCup>=0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough water!")
                    return false;
                }else if(water - usageWater>=0 && coffeeBeans-usageBeans<0 && cupL-usageCup>=0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough coffee beans!")
                    return false;
                }else if(water - usageWater>=0 && coffeeBeans-usageBeans>=0 && cupL-usageCup<0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough cups!")
                    return false;
                } else if(water - usageWater>=0 && coffeeBeans-usageBeans>=0 && cupL-usageCup>=0 && milk-usageMilk<0){
                    console.log("Sorry, not enough milk!")
                    return false;
                } else if(water - usageWater<0 && coffeeBeans-usageBeans<0 && cupL-usageCup>=0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough water and coffee beans!")
                    return false;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans<0 && cupL-usageCup<0 && milk-usageMilk>=0){
                    console.log("Sorry, not enough water, coffee beans, cups!")
                    return false;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans<0 && cupL-usageCup<0 && milk-usageMilk<0){
                    console.log("Sorry, not enough resources!")
                    return false;
                }else if(water - usageWater<0 && coffeeBeans-usageBeans>=0 && cupL-usageCup>=0 && milk-usageMilk<0){
                    console.log("Sorry, not enough water and milk!")
                    return false;
                }
            }

            return false;
}

function supplyStatus() {
    console.log("The coffee machine has:");
    console.log(`${coffeeMachineStorage['water']} ml of water\n` +
        `${coffeeMachineStorage['milk']} ml of milk\n` +
        `${coffeeMachineStorage['coffeeBeans']} g of coffee beans\n` +
        `${coffeeMachineStorage['cupS']} disposable S cups\n` +
        `${coffeeMachineStorage['cupM']} disposable M cups\n`+
        `${coffeeMachineStorage['cupL']} disposable L cups\n`+
        `$${coffeeMachineStorage['money']} of money`);

}
function addSupplies(){
    //var ingridCoffee = new Array();
    let ingridWater = input('Write how many ml of water the coffee machine has:');
    let ingridMilk = input('Write how many ml of milk the coffee machine has:');
    let ingridBeans = input('Write how many grams of coffee beans the coffee machine has:');
    let ingridCupsS = input('Write how many disposable S cups you want to add: ');
    let ingridCupsM = input('Write how many disposable M cups you want to add: ');
    let ingridCupsL = input('Write how many disposable L cups you want to add: ');
    coffeeMachineStorage['water'] = coffeeMachineStorage['water']+parseInt(ingridWater);
    coffeeMachineStorage['milk'] = coffeeMachineStorage['milk']+parseInt(ingridMilk );
    coffeeMachineStorage['coffeeBeans'] = coffeeMachineStorage['coffeeBeans']+ parseInt(ingridBeans );
    coffeeMachineStorage['cupS'] = coffeeMachineStorage['cupS']+parseInt(ingridCupsS);
    coffeeMachineStorage['cupM'] = coffeeMachineStorage['cupM']+parseInt(ingridCupsM);
    coffeeMachineStorage['cupL'] = coffeeMachineStorage['cupL']+parseInt(ingridCupsL);
}

function mainMenu(){
    let exitStatus=true;
    let checkFlag;
    while (exitStatus==true){
        console.log("Write action (buy, fill, take, remaining, exit):");
        let  answerCommand = input(' ');
        switch (answerCommand) {
            case "buy":
                console.log("What size of cup do you want? 1 - S, 2 - M, 3 - L:");
                let cupType = input(' ');
                console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
                let coffeeType = input(' ');
                checkFlag=false;
                switch (coffeeType) {
                    case "1":
                        if(cupType=="1"){
                            checkFlag = checkSupplies(coffeeMachineStorage['water'], coffeeMachineStorage['coffeeBeans'],
                                coffeeMachineStorage['cupS'], coffeeMachineStorage['cupM'], coffeeMachineStorage['cupL'],
                                coffeeMachineStorage['milk'], cupEspressoS['water'], cupEspressoS['coffeeBeans'], 1, 1, cupType );
                            if(checkFlag==true) {
                                coffeeMachineStorage['water'] = coffeeMachineStorage['water'] - cupEspressoS['water'];
                                coffeeMachineStorage['coffeeBeans'] = coffeeMachineStorage['coffeeBeans'] - cupEspressoS['coffeeBeans'];
                                coffeeMachineStorage['money'] = coffeeMachineStorage['money'] + cupEspressoS['money'];
                                coffeeMachineStorage['cupS'] = coffeeMachineStorage['cupS'] - 1;
                                break;
                            }else{
                                break;
                            }
                        }else if(cupType=="2"){
                            checkFlag = checkSupplies(coffeeMachineStorage['water'], coffeeMachineStorage['coffeeBeans'],
                                coffeeMachineStorage['cupS'], coffeeMachineStorage['cupM'], coffeeMachineStorage['cupL'],
                                coffeeMachineStorage['milk'], cupEspressoM['water'], cupEspressoM['coffeeBeans'], 1, 1, cupType );
                            if(checkFlag==true) {
                                coffeeMachineStorage['water'] = coffeeMachineStorage['water'] - cupEspressoM['water'];
                                coffeeMachineStorage['coffeeBeans'] = coffeeMachineStorage['coffeeBeans'] - cupEspressoM['coffeeBeans'];
                                coffeeMachineStorage['money'] = coffeeMachineStorage['money'] + cupEspressoM['money'];
                                coffeeMachineStorage['cupM'] = coffeeMachineStorage['cupM'] - 1;
                                break;
                            }else{
                                break;
                            }
                        } else if(cupType=="3"){
                            checkFlag = checkSupplies(coffeeMachineStorage['water'], coffeeMachineStorage['coffeeBeans'],
                                coffeeMachineStorage['cupS'], coffeeMachineStorage['cupM'], coffeeMachineStorage['cupL'],
                                coffeeMachineStorage['milk'], cupEspressoL['water'], cupEspressoL['coffeeBeans'], 1, 1,cupType);
                            if(checkFlag==true) {
                                coffeeMachineStorage['water'] = coffeeMachineStorage['water'] - cupEspressoL['water'];
                                coffeeMachineStorage['coffeeBeans'] = coffeeMachineStorage['coffeeBeans'] - cupEspressoL['coffeeBeans'];
                                coffeeMachineStorage['money'] = coffeeMachineStorage['money'] + cupEspressoL['money'];
                                coffeeMachineStorage['cupL'] = coffeeMachineStorage['cupL'] - 1;
                                break;
                            }else{
                                break;
                            }
                        }
                        break;
                    case "2":
                        if(cupType=="1"){
                            checkFlag = checkSupplies(coffeeMachineStorage['water'], coffeeMachineStorage['coffeeBeans'],
                                coffeeMachineStorage['cupS'], coffeeMachineStorage['cupM'], coffeeMachineStorage['cupL'],
                                coffeeMachineStorage['milk'], cupLatteS['water'], cupLatteS['coffeeBeans'], 1, cupLatteS['milk'], cupType );
                            if(checkFlag==true) {
                                coffeeMachineStorage['water'] = coffeeMachineStorage['water'] - cupLatteS['water'];
                                coffeeMachineStorage['milk'] = coffeeMachineStorage['milk'] - cupLatteS['milk'];
                                coffeeMachineStorage['coffeeBeans'] = coffeeMachineStorage['coffeeBeans'] - cupLatteS['coffeeBeans'];
                                coffeeMachineStorage['money'] = coffeeMachineStorage['money'] + cupLatteS['money'];
                                coffeeMachineStorage['cupS'] = coffeeMachineStorage['cupS'] - 1;
                                break;
                            }else{
                                break;
                            }
                        }else if(cupType=="2"){
                            checkFlag = checkSupplies(coffeeMachineStorage['water'], coffeeMachineStorage['coffeeBeans'],
                                coffeeMachineStorage['cupS'], coffeeMachineStorage['cupM'], coffeeMachineStorage['cupL'],
                                coffeeMachineStorage['milk'], cupLatteM['water'], cupLatteM['coffeeBeans'], 1, cupLatteM['milk'], cupType );
                            if(checkFlag==true) {
                                coffeeMachineStorage['water'] = coffeeMachineStorage['water'] - cupLatteM['water'];
                                coffeeMachineStorage['milk'] = coffeeMachineStorage['milk'] - cupLatteM['milk'];
                                coffeeMachineStorage['coffeeBeans'] = coffeeMachineStorage['coffeeBeans'] - cupLatteM['coffeeBeans'];
                                coffeeMachineStorage['money'] = coffeeMachineStorage['money'] + cupLatteM['money'];
                                coffeeMachineStorage['cupM'] = coffeeMachineStorage['cupM'] - 1;
                                break;
                            }else{
                                break;
                            }
                        }else if(cupType=="3"){
                            checkFlag = checkSupplies(coffeeMachineStorage['water'], coffeeMachineStorage['coffeeBeans'],
                                coffeeMachineStorage['cupS'], coffeeMachineStorage['cupM'], coffeeMachineStorage['cupL'],
                                coffeeMachineStorage['milk'], cupLatteL['water'], cupLatteL['coffeeBeans'], 1, cupLatteL['milk'],cupType);
                            if(checkFlag==true) {
                                coffeeMachineStorage['water'] = coffeeMachineStorage['water'] - cupLatteL['water'];
                                coffeeMachineStorage['milk'] = coffeeMachineStorage['milk'] - cupLatteL['milk'];
                                coffeeMachineStorage['coffeeBeans'] = coffeeMachineStorage['coffeeBeans'] - cupLatteL['coffeeBeans'];
                                coffeeMachineStorage['money'] = coffeeMachineStorage['money'] + cupLatteL['money'];
                                coffeeMachineStorage['cupL'] = coffeeMachineStorage['cupL'] - 1;
                                break;
                            }else{
                                break;
                            }
                        }

                    case "3":
                        if(cupType=="1"){
                            checkFlag = checkSupplies(coffeeMachineStorage['water'], coffeeMachineStorage['coffeeBeans'],
                                coffeeMachineStorage['cupS'], coffeeMachineStorage['cupM'], coffeeMachineStorage['cupL'],
                                coffeeMachineStorage['milk'], cupCappuccinoS['water'], cupCappuccinoS['coffeeBeans'], 1, cupCappuccinoS['milk'], cupType );
                            if(checkFlag==true) {
                                coffeeMachineStorage['water'] = coffeeMachineStorage['water'] - cupCappuccinoS['water'];
                                coffeeMachineStorage['milk'] = coffeeMachineStorage['milk'] - cupCappuccinoS['milk'];
                                coffeeMachineStorage['coffeeBeans'] = coffeeMachineStorage['coffeeBeans'] - cupCappuccinoS['coffeeBeans'];
                                coffeeMachineStorage['money'] = coffeeMachineStorage['money'] + cupCappuccinoS['money'];
                                coffeeMachineStorage['cupS'] = coffeeMachineStorage['cupS'] - 1;
                                break;
                                }else{
                                     break;
                                }
                        }else if(cupType=="2"){
                            checkFlag = checkSupplies(coffeeMachineStorage['water'], coffeeMachineStorage['coffeeBeans'],
                                coffeeMachineStorage['cupS'], coffeeMachineStorage['cupM'], coffeeMachineStorage['cupL'],
                                coffeeMachineStorage['milk'], cupCappuccinoM['water'], cupCappuccinoM['coffeeBeans'], 1, cupCappuccinoM['milk'], cupType );
                            if(checkFlag==true) {
                                coffeeMachineStorage['water'] = coffeeMachineStorage['water'] - cupCappuccinoM['water'];
                                coffeeMachineStorage['milk'] = coffeeMachineStorage['milk'] - cupCappuccinoM['milk'];
                                coffeeMachineStorage['coffeeBeans'] = coffeeMachineStorage['coffeeBeans'] - cupCappuccinoM['coffeeBeans'];
                                coffeeMachineStorage['money'] = coffeeMachineStorage['money'] + cupCappuccinoM['money'];
                                coffeeMachineStorage['cupM'] = coffeeMachineStorage['cupM'] - 1;
                                break;
                            }else{
                                break;
                            }
                        }else if(cupType=="3"){
                            checkFlag = checkSupplies(coffeeMachineStorage['water'], coffeeMachineStorage['coffeeBeans'],
                                coffeeMachineStorage['cupS'], coffeeMachineStorage['cupM'], coffeeMachineStorage['cupL'],
                                coffeeMachineStorage['milk'], cupCappuccinoL['water'], cupCappuccinoL['coffeeBeans'], 1, cupCappuccinoL['milk'],cupType);
                            if(checkFlag==true) {
                                coffeeMachineStorage['water'] = coffeeMachineStorage['water'] - cupCappuccinoL['water'];
                                coffeeMachineStorage['milk'] = coffeeMachineStorage['milk'] - cupCappuccinoL['milk'];
                                coffeeMachineStorage['coffeeBeans'] = coffeeMachineStorage['coffeeBeans'] - cupCappuccinoL['coffeeBeans'];
                                coffeeMachineStorage['money'] = coffeeMachineStorage['money'] + cupCappuccinoL['money'];
                                coffeeMachineStorage['cupL'] = coffeeMachineStorage['cupL'] - 1;
                                break;
                            }else{
                                break;
                            }
                        }
                        break;
                    case "back":
                        break;
                    default:
                        break;
                }
                break;
            case "fill":
                addSupplies();
                break;
            case "take":
                console.log(`I gave you $${coffeeMachineStorage['money']}`);
                coffeeMachineStorage['money'] = 0;
                break;
            case "exit":
                 exitStatus=false;
                 break;
            case "remaining":
                supplyStatus();
                break;
            default:
                break;
        }
    }
}
mainMenu();
