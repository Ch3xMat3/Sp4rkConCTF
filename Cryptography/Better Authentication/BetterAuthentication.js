const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter password \n', password => {
    console.log(`Gonna check if ${password} is correct`);
    readline.close();
    validate(password)
});

const isPrime = (n) => {
   for(let i = 2; i <= n/2; i++){
      if(n % i === 0){
         return false;
      }
   };
   return true;
};

const generatePrime = num => {
   const arr = [];
   let i = 2;
   while(arr.length < num){
      if(isPrime(i)){
         arr.push(i);
      };
      i = i === 2 ? i+1 : i+2;
   };
   return arr;
};

function validate(password) {

    if (password.length != 25) {
        throw new Error("pass violation. wrong password length");
    }

    const primes = generatePrime(5);
    const block1 = Array.from(pass).slice(0,5)
    const block2 = Array.from(pass).slice(5,10)
    const block3 = Array.from(pass).slice(10,15)
    const block4 = Array.from(pass).slice(15,20)
    const block5 = Array.from(pass).slice(20,25)

    const block = [
        block1,
        block2,
        block3,
        block4,
        block5
    ]

    let crafted = '';

    for (let i = 0; i < block.length; i++) {
        for (let a = 0; a < block[i].length; a++) {
            crafted += String.fromCharCode(String(block[i][a]).charCodeAt(0) ^ val[i])
        }
    }
    
    if(crafted !== "@QVN00x[3Q6aZC5uXSo4T|:Ev") {
        throw new Error("pass violation. wrong credentials");
    }


    banner(password);
}

function banner(payload) {
    console.info("Congratulation, you are on a roll !!!");
}
