const billAmountInput = document.querySelector('.bill-input-sty');
const customTipInput = document.querySelector('.customTip-input-sty');
const numberOfPeopleInput = document.querySelector('.numberPeople-input-sty');
const generateBillBtn = document.querySelector('.generate-btn-sty');
const tipAmountOutput = document.querySelector('#tipAmount span');
const eachPersonBillOutput = document.querySelector('#eachPersonBill span');
const totalBillOutput = document.querySelector('#totalBill span');
const tipsContainer = document.querySelector('.tip-btn-container');
const resetButton = document.querySelector('.reset-btn-sty');


let tipPercent = 0 ;
generateBillBtn.addEventListener('click', () => {
  const billAmount = parseInt(billAmountInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);
  const tipAmount = billAmount * (tipPercent / 100);
  const totalBill = billAmount + tipAmount;
  const eachPersonBill = totalBill / numberOfPeople;
  tipAmountOutput.innerText = `₹ ${tipAmount}`;
  totalBillOutput.innerText = `₹ ${totalBill}`;
  eachPersonBillOutput.innerText = `₹ ${eachPersonBill}`;
  resetButton.classList.remove('disabled');
});


tipsContainer.addEventListener('click', (e) => {
  if (e.target !== tipsContainer) {
    [...tipsContainer.children].forEach((tip) =>
      tip.classList.remove('selected')
    );
    e.target.classList.add('selected');
    tipPercent = parseInt(e.target.innerText);
    customTipInput.value = '';
  }
});


customTipInput.addEventListener('input', () => {
  tipPercent = parseInt(customTipInput.value);
  [...tipsContainer.children].forEach((tip) =>
    tip.classList.remove('selected')
  );
});


resetButton.addEventListener('click', () => {
  tipPercent = 0;
  billAmountInput.value = '';
  numberOfPeopleInput.value = '';
  customTipInput.value = '';
  tipAmountOutput.innerText = '';
  totalBillOutput.innerText = '';
  eachPersonBillOutput.innerText = '';
  [...tipsContainer.children].forEach((tip) =>
    tip.classList.remove('selected')
  );
  resetButton.classList.add('disabled');
  generateBillBtn.classList.add('disabled');
  tipsContainer.classList.add('disabled');
});


billAmountInput.addEventListener('input', () => {
  generateBillBtn.classList.remove('disabled');
  tipsContainer.classList.remove('disabled');
});
