function solve(input) {
    let index = 0;
    let amount = input[index];
    let total = 0;

    while (amount !== 'NoMoreMoney') {
        let increase = Number(amount);


        if (increase < 0) {
            console.log('Invalid operation!');
            break;

        }

        console.log(`Increase: ${increase.toFixed(2)}`);
        
        total += increase;
        index++;
        amount = input[index];

    }

    console.log(`Total: ${total.toFixed(2)}`);
    
    
}

solve(["5.51", "69.42", "100", "NoMoreMoney"]);