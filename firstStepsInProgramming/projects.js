function projects(input){
    let architect = input[0];
    let hours = input[1];
    let projects = input[2];

    console.log(`The architect ${architect} will need ${hours} to complete ${projects} project/s.`);
};

projects(["Somebody", 8, 2]);