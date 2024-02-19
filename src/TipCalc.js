import React, { useState } from 'react';
import './TipCalc.css';

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [split, setSplit] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [perPersonAmount, setPersonSplit] = useState(0);


  const calculateTotals = () => {
    const billAmount = +bill;
    const tip = (billAmount * +tipPercentage) / 100;
    const total = billAmount + tip;
    const personSplit = total / +split;

    setTipAmount(tip.toFixed());
    setTotalBill(total.toFixed());
    setPersonSplit(personSplit.toFixed());
  };
  return (
    <div>
      <h1>Tip Calculator</h1>
      <label>
        Bill: $
        <input type="number" value={bill} onChange={(e) => setBill(e.target.value)} />
      </label>
      <br />
      <label>
        Tip %:
        <input type="number" value={tipPercentage} onChange={(e) => setTipPercentage(e.target.value)} />
      </label>
      <br />
      <label>
        Split:
        <input type="number" value={split} onChange={(e) => setSplit(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateTotals}>Calculate</button>
      <p>
        <label>Tip Amount: ${tipAmount}</label><br />
        <label>Total Bill: ${totalBill}</label><br />
        {split && <label>Per Person: ${perPersonAmount}</label>}
      </p>
    </div>
  );
}

export default TipCalculator;
