function greeting(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];
    console.log(`Hello! I am ${firstName} ${lastName}, a ${age}-years old person from ${town}`)
};

greeting(["Some", "Body", 27, "Plovdiv"]);