function solve(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
}
}
solve(77);

function solve2(n) {
    for (let i = 1; i <= n; i += 3) {
       console.log(i);
       
    }
}

solve2(77);

function solve3(n) {
    let num = 1;
    for (let i = 0; i <= n; i+=2) {
        console.log(num);
        
        num = num *2 * 2;
    }
}

solve3(7);

