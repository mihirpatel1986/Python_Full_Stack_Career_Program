let monthlyFee = 1800;
let months = 6;

let totalFee = monthlyFee * months;

let siblingDiscount = totalFee * 0.1;

let lateDays = 4;
let lateFee = lateDays * 50;

let netPayable = totalFee - siblingDiscount + lateFee;

console.log("Total Fee:", totalFee);
console.log("Sibling Discount:", siblingDiscount);
console.log("Late Fee:", lateFee);
console.log("Net Payable:", netPayable);

let attendancePercent = 80;
let feePaid = true;
let hasPermission = false;

let canWriteTest =
  (attendancePercent >= 75 && feePaid === true) || hasPermission;

console.log("Student 1 can write test:", canWriteTest);

attendancePercent = 70;
feePaid = false;
hasPermission = true;

canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission;

console.log("Student 2 can write test:", canWriteTest);

attendancePercent = 60;
feePaid = true;
hasPermission = false;

canWriteTest = (attendancePercent >= 75 && feePaid === true) || hasPermission;

console.log("Student 3 can write test:", canWriteTest);

let monthlyFees = 1200;
let feeBand;
let paymentStatus;

if (monthlyFees < 1500) {
  feeBand = "Basic";
} else if (monthlyFees <= 2500) {
  feeBand = "Standard";
} else {
  feeBand = "Premium";
}

paymentStatus = feePaid ? "Paid" : "Due";

console.log(
  "Fee:",
  monthlyFees,
  "| Band:",
  feeBand,
  "| Status:",
  paymentStatus,
);

monthlyFees = 1800;
feePaid = true;

if (monthlyFees < 1500) {
  feeBand = "Basic";
} else if (monthlyFees <= 2500) {
  feeBand = "Standard";
} else {
  feeBand = "Premium";
}

paymentStatus = feePaid ? "Paid" : "Due";

console.log(
  "Fee:",
  monthlyFees,
  "| Band:",
  feeBand,
  "| Status:",
  paymentStatus,
);

monthlyFees = 2500;
feePaid = false;

if (monthlyFees < 1500) {
  feeBand = "Basic";
} else if (monthlyFees <= 2500) {
  feeBand = "Standard";
} else {
  feeBand = "Premium";
}

paymentStatus = feePaid ? "Paid" : "Due";

console.log(
  "Fee:",
  monthlyFees,
  "| Band:",
  feeBand,
  "| Status:",
  paymentStatus,
);

monthlyFees = 3000;
feePaid = true;

if (monthlyFees < 1500) {
  feeBand = "Basic";
} else if (monthlyFees <= 2500) {
  feeBand = "Standard";
} else {
  feeBand = "Premium";
}

paymentStatus = feePaid ? "Paid" : "Due";

console.log(
  "Fee:",
  monthlyFees,
  "| Band:",
  feeBand,
  "| Status:",
  paymentStatus,
);

let value;

value = 0;
console.log(value ? "truthy" : "falsy");

value = "";
console.log(value ? "truthy" : "falsy");

value = "0";
console.log(value ? "truthy" : "falsy");

value = null;
console.log(value ? "truthy" : "falsy");

value = undefined;
console.log(value ? "truthy" : "falsy");

value = NaN;
console.log(value ? "truthy" : "falsy");

value = [];
console.log(value ? "truthy" : "falsy");

value = "Aarav";
console.log(value ? "truthy" : "falsy");
