// MoneyBalance.js
import React, { useState } from 'react';

const MoneyBalance = () =>
{
  const [ balance, setBalance ] = useState( 100 );

  const handleAddMoney = ( e ) =>
  {
    e.preventDefault();
    const amount = parseFloat( e.target.amount.value );
    // Add money to the user's balance in the backend
    // ...

    // Update the balance state with the added amount
    setBalance( balance + amount );
    e.target.reset();
  };

  return (
    <div className="money-balance">
      <h3>Money Balance</h3>
      <p>Your current balance: ${ balance }</p>
      <form onSubmit={ handleAddMoney }>
        <input type="number" name="amount" placeholder="Enter amount to add" step="0.01" required />
        <button type="submit">Add Money</button>
      </form>
    </div>
  );
};

export default MoneyBalance;
