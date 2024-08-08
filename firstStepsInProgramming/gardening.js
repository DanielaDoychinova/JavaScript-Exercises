function solve(input){
    let area = input;
    let pricePerSqMeter = 7.61;
    let firstPrice = area * pricePerSqMeter;
    let discountPercent = 0.18;
    let discount = firstPrice * discountPercent;
    let finalPrice = firstPrice - discount;

    console.log(`The final price is: ${finalPrice} lv. The discount is ${discount} lv.`);
};

solve(550);