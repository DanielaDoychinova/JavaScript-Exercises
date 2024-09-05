function solve(input) {

    let age = Number(input[0]);
    let price = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addMoney = 10;


    for (let i = 1; i <= 10; i++) {
        
        if (i % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney++;
        } else{
            toysCounter++;
        }
    }

    let totalMoneyFromToys = singleToyPrice * toysCounter;
    let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney;

    if (totalSavedMoney >= price) {
        console.log(`Yes! ${(totalSavedMoney - price).toFixed(2)}`);
        
    }

    if (totalSavedMoney < price) {
        console.log(`No! ${(price - totalSavedMoney).toFixed(2)}`);
        
    }

}

solve(["10", "170.00", "6"])