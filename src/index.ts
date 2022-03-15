const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Password length: ', (passwordLength) => {
    let letters: string = 'abcdefghijklmnopqrstuvwxyz';
    let numbers: string = '0123456789';
    let punctuation: string = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password: string = '';
    let character: string;

    let entity1: any;
    let entity2: any;
    let entity3: any;
    let hold: any;

    if (passwordLength <= 0) {
        console.log('Invalid length');

        process.exit(1);
    }

    while (password.length < passwordLength) {
        entity1 = Math.ceil(letters.length * Math.random() * 11);
        entity2 = Math.ceil(numbers.length * Math.random() * 11);
        entity3 = Math.ceil(punctuation.length * Math.random() * 11);

        hold = letters.charAt(entity1);
        hold = password.length % 2 === 0 ? hold.toUpperCase() : hold;

        character += hold;
        character += numbers.charAt(entity2);
        character += punctuation.charAt(entity3);
        password = character;
    }

    password = password
        .split('')
        .sort(function () {
            return 0.5 - Math.random();
        })
        .join('');

    console.log(password.substring(0, passwordLength));
});
