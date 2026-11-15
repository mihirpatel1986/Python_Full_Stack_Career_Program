const instituteName = "Bright Future Institute";

let studentName = "Parth";
let monthlyFee = 1800;
let batchName = "Full Stack Development";
let paid = true;

console.log("Institute Name:", instituteName);
console.log("Student Name:", studentName);
console.log("Monthly Fee:", monthlyFee);
console.log("Batch Name:", batchName);
console.log("Fee Paid:", paid);

{
  var batchCode = "M9";
  let seatNo = 12;
}

console.log("Batch Code:", batchCode);
console.log("Seat No Type:", typeof seatNo);

monthlyFee = 2000;
console.log("Updated Monthly Fee:", monthlyFee);

let feeB = monthlyFee;

feeB = 2500;

console.log("Primitive Copy - monthlyFee:", monthlyFee);
console.log("Primitive Copy - feeB:", feeB);

const student1 = {
  name: "Aarav",
  fee: 1800,
};

const student2 = student1;

student2.fee = 2200;

console.log("Reference Copy - student1.fee:", student1.fee);
console.log("Reference Copy - student2.fee:", student2.fee);

let feeStatus = 1800;

console.log("Fee Status:", feeStatus);
console.log("Data Type:", typeof feeStatus);

feeStatus = "1800";

console.log("Fee Status:", feeStatus);
console.log("Data Type:", typeof feeStatus);

feeStatus = false;

console.log("Fee Status:", feeStatus);
console.log("Data Type:", typeof feeStatus);
