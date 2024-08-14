function solve(budget, season, count) {
    let price;
    if (season == 'spring') {
        if (count <= 6){
            if (count % 2 == 0) {
                price = 3000 - (3000 * 0.15);
            } else {
                price = 3000 - (3000 * 0.10);
            }
        }
        if (count >= 7 && count <= 11){
            if (count % 2 == 0) {
                price = 3000 - (3000 * 0.20);
            } else {
                price = 3000 - (3000 * 0.15);
            }
        }
        if (count >= 12){
            if (count % 2 == 0) {
                price = 3000 - (3000 * 0.30);
            } else {
                price = 3000 - (3000 * 0.25);
            }
        }
    }
    if (season == 'summer') {
        if (count <= 6){
            if (count % 2 == 0) {
                price = 4200 - (4200 * 0.15);
            } else {
                price = 4200 - (4200 * 0.10);
            }
        }
        if (count >= 7 && count <= 11){
            if (count % 2 == 0) {
                price = 4200 - (4200 * 0.20);
            } else {
                price = 4200 - (4200 * 0.15);
            }
        }
        if (count >= 12){
            if (count % 2 == 0) {
                price = 4200 - (4200 * 0.30);
            } else {
                price = 4200 - (4200 * 0.25);
            }
        }
    }
    if (season == 'fall') {
        if (count <= 6){
                price = 4200 - (4200 * 0.10);
        }
        if (count >= 7 && count <= 11){
                price = 4200 - (4200 * 0.15);
        }
        if (count >= 12){
                price = 4200 - (4200 * 0.25);
        }
    }
    if (season == 'winter') {
        if (count <= 6){
            if (count % 2 == 0) {
                price = 2600 - (2600 * 0.15);
            } else {
                price = 2600 - (2600 * 0.10);
            }
        }
        if (count >= 7 && count <= 11){
            if (count % 2 == 0) {
                price = 2600 - (2600 * 0.20);
            } else {
                price = 2600 - (2600 * 0.15);
            }
        }
        if (count >= 12){
            if (count % 2 == 0) {
                price = 2600 - (2600 * 0.30);
            } else {
                price = 2600 - (2600 * 0.25);
            }
        }
    }

    if (budget >= price) {
        let left = budget - price;
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
        
    } else {
        let needed = price - budget;
        console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`);
        
    }
}

solve(3000, 'summer', 11);