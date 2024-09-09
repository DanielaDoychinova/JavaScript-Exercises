function solve(input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let wins = 0;
    let points = startingPoints;

    for (let i = 2; i <= input.length; i++) {
        let stage = input[i];

        switch (stage) {
            case 'W':
                points += 2000;
                wins++;
                break;
            case 'F':
                points += 1200;
                break;
            case 'SF':
                points += 720;
                break;
        }

    }

    let avgPoints = (points - startingPoints) / tournaments;
    let percent = (wins / tournaments) * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${percent.toFixed(2)}%`);
    
    
    
}

solve(["5", "1400", "F", "SF", "W", "W", "SF"])