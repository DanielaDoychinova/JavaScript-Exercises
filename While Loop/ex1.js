function solve(input) {
    
    let index = 0;
    let text = input[0];


  while (text !== 'Stop') {

    console.log(text);
    index ++;
    text = input[index]
    
  }
}

solve(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);
