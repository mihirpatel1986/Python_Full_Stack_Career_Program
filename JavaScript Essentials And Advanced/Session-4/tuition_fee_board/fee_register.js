let fees = [1800, 2200, 1500, 2500, 1800, 3000, 1200, 2000];

let total = 0;

for (let i = 0; i < fees.length; i++) {
    console.log(`Student ${i + 1}: ₹${fees[i]}`);

    total = total + fees[i];
}

console.log("----------------------");
console.log("Total Fees: ₹" + total);


let due = 16000;
let instalment = 3000;

console.log("----------------------");
console.log("Yearly Due: ₹" + due);

while (due > 0) {
    due = Math.max(due - instalment, 0);

    console.log("Remaining Due: ₹" + due);
}


console.log("----------------------");
console.log("Payment Retry - Test 1");

let attempt = 1;
let successAttempt = 3;
let paymentSuccess = false;

do {
    if (attempt === successAttempt) {
        console.log(`Attempt ${attempt}: paid`);
        paymentSuccess = true;
    } else {
        console.log(`Attempt ${attempt}: failed`);
    }

    attempt++;

} while (paymentSuccess === false && attempt <= 5);


console.log("----------------------");
console.log("Payment Retry - Test 2");

attempt = 1;
successAttempt = 7;
paymentSuccess = false;

do {
    if (attempt === successAttempt) {
        console.log(`Attempt ${attempt}: paid`);
        paymentSuccess = true;
    } else {
        console.log(`Attempt ${attempt}: failed`);
    }

    attempt++;

} while (paymentSuccess === false && attempt <= 5);


console.log("----------------------");
console.log("Fees using for...of");

for (let fee of fees) {
    if (fee < 1500) {
        continue;
    }

    console.log(`Fee: ₹${fee}`);
}


console.log("----------------------");
console.log("Fees using forEach");

fees.forEach(function(fee) {
    if (fee < 1500) {
        return;
    }

    console.log(`Fee: ₹${fee}`);
});
