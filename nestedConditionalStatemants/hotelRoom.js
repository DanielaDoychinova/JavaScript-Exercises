function solve(month, nights) {
    let priceStudio = 0;
    let priceApartment = 0;
    let discountSt = 0;
    let discountAp = 0;

    switch (month) {
        case 'may':
        
        case 'october':
            priceStudio = 50;
            priceApartment = 65;

            if(nights > 14){
                discountSt = 0.30;
                discountAp = 0.10;
            } else if(nights > 7){
                discountSt = 0.05;

            }
            break;
            
        case 'june':
        
        case 'september':
            priceStudio = 75.20;
            priceApartment = 68.70;

            if (nights > 14) {
                discountSt = 0.20;
                discountAp = 0.10;
            }
            break;

        case 'july':

        case 'august':
            priceStudio = 76;
            priceApartment = 77;
        
            if (nights > 14) {
                discountAp = 0.10;
            }
            break;
        default:
            console.log('Invalid input.');
            
            break;
    }
    
    let studioPrice = (priceStudio * nights) * (1 - discountSt);
    let apartmentPrice = (priceApartment * nights) * (1 - discountAp);

    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    
}

solve('may', 15);