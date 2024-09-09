function solve(input) {

    let groupsCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let totalcount = 0;

    for (let i = 1; i <= groupsCount; i++) {

        let currentNumber = Number(input[i]);
        totalcount += currentNumber;

        if (currentNumber <= 5) {
            p1 += currentNumber;
        } else if (currentNumber <= 12) {
            p2 += currentNumber;
        } else if (currentNumber <= 25) {
            p3 += currentNumber;
        } else if (currentNumber <= 40) {
            p4 += currentNumber;
        } else if (currentNumber >= 41) {
            p5 += currentNumber;
        }
    }

    console.log(`${(p1 / totalcount * 100).toFixed(2)}%`);
    console.log(`${(p2 / totalcount * 100).toFixed(2)}%`);
    console.log(`${(p3 / totalcount * 100).toFixed(2)}%`);
    console.log(`${(p4 / totalcount * 100).toFixed(2)}%`);
    console.log(`${(p5 / totalcount * 100).toFixed(2)}%`);
}

solve(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])