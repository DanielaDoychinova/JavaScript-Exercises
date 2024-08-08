function solve(input){
    let dogFood = input[0] * 2.50;
    let catFood = input[1] * 4;
    let sum = dogFood + catFood;
    console.log(`Total price: ${sum} lv.`); 
};

solve([3, 4]);