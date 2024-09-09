function solve(input) {

    let salary = Number(input[1]);

    for (let i = 2; i <= input.length; i++) {

        let currentTab = input[i];

        switch (currentTab) {
            case 'Facebook': salary -= 150;
            case 'Instagram': salary -= 100;
            case 'Reddit': salary -= 50;
        }
        if (salary <= 0) {
            console.log('You have lost your salary. ');
            break;
        }
    }
    if (salary > 0) {
        console.log(Math.floor(salary));

    }

}




solve(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);