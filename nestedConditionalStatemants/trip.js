function solve(budget, season) {
    let price;
    let destination;
    let how;
    if (budget <= 100) {
        if (season == 'summer') {
            price = budget * 0.30;
            destination = 'Somewhere in Bulgaria';
            how = 'camp';

            console.log(`Somewhere in ${destination}\n${how} - ${price.toFixed(2)}`);
            
        }
        if (season == 'winter') {
            price = budget * 0.70;
            destination = 'Somewhere in Bulgaria';
            how = 'hotel';

            console.log(`Somewhere in ${destination}\n${how} - ${price.toFixed(2)}`);
        }

    }
    if (budget <= 1000) {
        if (season == 'summer') {
            price = budget * 0.40;
            destination = 'Somewhere in the Balkans'
            how = 'camp';

            console.log(`Somewhere in ${destination}\n${how} - ${price.toFixed(2)}`);
        }
        if (season == 'winter') {
            price = budget * 0.80;
            destination = 'Somewhere in the Balkans';
            how = 'hotel';

            console.log(`Somewhere in ${destination}\n${how} - ${price.toFixed(2)}`);
        }
    }
    if (budget > 1000) {
        price = budget * 0.90;
        destination = 'Somewhere in Europe'
        how = 'hotel';

        console.log(`Somewhere in ${destination}\n${how} - ${price.toFixed(2)}`);
    }
}

solve(312, 'summer');