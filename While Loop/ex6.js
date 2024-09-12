function solve(input) {
    let index = 0;
    let n = input[index];
    let max = n;

    while (n !== 'Stop') {
        max = Number(max);
        let value = Number(n);
        if(value > max){
            max = value
        }

        index++;
        n = input[index]
    }
    console.log(max);
    
}

solve(["100", "99", "80", "70", "Stop"])