function solve(input) {
    let index = 0;
    let n = input[index];
    let min = n;

    while (n !== 'Stop') {
        min = Number(min);
        let value = Number(n);
        if(value < min){
            min = value
        }

        index++;
        n = input[index]
    }
    console.log(min);
    
}

solve(["100", "99", "80", "70", "Stop"])