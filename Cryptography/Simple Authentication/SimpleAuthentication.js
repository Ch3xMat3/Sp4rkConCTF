```JavaScript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter password \n', password => {
    console.log(`Gonna check if ${password} is correct`);
    readline.close();
    validate(password)
});

function validate(password) {
	const pass = [70,146,141,136,194,197,191,170,169,211,166,122,135,139,104,127,132,149,178,199,168,134,166,135,151,225];
	const pa = Array.from(password);

	if (pa[0].charCodeAt(0) !== pass[0]) {
		throw new Error("pass violation. wrong credentials");
	}
	for (let i = 1; i < pa.length; i++) {
		if ((pa[i].charCodeAt(0) + pa[i-1].charCodeAt(0)) !== pass[i]) {
			throw new Error("pass violation. wrong credentials");
		} else {
			x = pa[i];
		}
	}

	banner(password);
}

function banner(payload) {
    console.info("Congratulation, that was great !!!");
}
```
