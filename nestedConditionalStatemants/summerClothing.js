function solve(degrees, parOfTheDay) {
    let outfit;
    let shoes;

    if (parOfTheDay == 'Morning') {
        if (degrees >= 10 && degrees <=18) {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers'  
        }
    
        else if (degrees > 18 && degrees <=24) {
            outfit = 'Shirt';
            shoes = 'Moccasins'  
        }
    
        else if (degrees >= 25) {
            outfit = 'T-Shirt';
            shoes = 'Sandals'  
        }
    }

    if (parOfTheDay == 'Afternoon') {
        if (degrees >= 10 && degrees <=18) {
            outfit = 'Shirt';
            shoes = 'Moccasins'  
        }
    
        else if (degrees > 18 && degrees <=24) {
            outfit = 'T-Shirt';
            shoes = 'Sandals'  
        }
    
        else if (degrees >= 25) {
            outfit = 'Swim Suit';
            shoes = 'Barefoot'  
        }
    }

    if (parOfTheDay == 'Evening') {
        if (degrees >= 10 && degrees <=18) {
            outfit = 'Shirt';
            shoes = 'Moccasins'  
        }
    
        else if (degrees > 18 && degrees <=24) {
            outfit = 'Shirt';
            shoes = 'Moccasins'  
        }
    
        else if (degrees >= 25) {
            outfit = 'Shirt';
            shoes = 'Moccasins'  
        }
    }
    
    
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}`);
}

solve(23, 'Evening');