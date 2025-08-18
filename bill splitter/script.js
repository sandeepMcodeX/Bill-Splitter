const billAmountInput = document.querySelector('.bill-input-sty');
const numberOfPeopleInput = document.querySelector('.numberPeople-input-sty');
const generateBillBtn = document.querySelector('.generate-btn-sty');
const totalBillOutput = document.querySelector('#totalBill span');
const tipAmountOutput = document.querySelector('#tipAmount span');
const eachPersonBillOutput = document.querySelector('#eachPersonBill span');

generateBillBtn.addEventListener('click',()=>{
   const billAmount = parseInt(billAmountInput.value);
   const numberOfPeople = parseInt(numberOfPeopleInput.value);
   const eachPersonBill = billAmount/numberOfPeople;
   totalBillOutput.innerText = `₹${eachPersonBill}`;
   eachPersonBillOutput.innerText = `₹${eachPersonBill}`;
   

})
