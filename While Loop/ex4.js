function solve(input) {
    let current = 1;
    let n = Number(input[0]);
    while (current <= n) {
        console.log(current);
        current = (current * 2) + 1;
        
    }
}

solve(['31'])