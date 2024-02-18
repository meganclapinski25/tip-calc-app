import React, { useState } from 'react';
import './TipCalc.css';

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [split, setSplit] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [perPersonAmount, setPerPersonAmount] = useState(0);

  const handleBillChange = (event) => {
    const value = parseFloat(event.target.value);
    setBill(value || '');
    calculateTipAmount(value, parseFloat(tipPercentage), parseInt(split));
  };

  const handleTipPercentageChange = (event) => {
    const value = parseFloat(event.target.value);
    setTipPercentage(value || '');
    calculateTipAmount(parseFloat(bill), value, parseInt(split));
  };

  const handleSplitChange = (event) => {
    const value = parseInt(event.target.value);
    setSplit(value || '');
    calculatePerPersonAmount(parseFloat(totalBill), value);
  };

  const calculateTipAmount = (bill, tipPercentage, split) => {
    const tipAmount = (bill * tipPercentage) / 100;
    const totalBill = bill + tipAmount;
    setTipAmount(tipAmount);
    setTotalBill(totalBill);
    calculatePerPersonAmount(totalBill, split);
  };

  const calculatePerPersonAmount = (totalBill, split) => {
    if (split > 0) {
      const perPersonAmount = totalBill / split;
      setPerPersonAmount(perPersonAmount);
    } else {
      setPerPersonAmount(0);
    }
  };

  return (
    <div>
      <h1>Tip Calculator</h1>
      <label>
        Bill: $
        <input type="number" value={bill} onChange={handleBillChange} />
      </label>
      <br />
      <label>
        Tip %:
        <input type="number" value={tipPercentage} onChange={handleTipPercentageChange} />
      </label>
      <br />
      <label>
        Split:
        <input type="number" value={split} onChange={handleSplitChange} />
      </label>
      <br />
      <p>Tip Amount: ${tipAmount.toFixed(2)}</p>
      <p>Total Bill: ${totalBill.toFixed(2)}</p>
      <p>Per Person Amount: ${perPersonAmount.toFixed(2)}</p>
    </div>
  );
}

export default TipCalculator;
