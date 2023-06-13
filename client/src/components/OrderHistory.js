// OrderHistory.js
import React, { useState, useEffect } from 'react';

const OrderHistory = () =>
{
  const [ orders, setOrders ] = useState( [] );

  useEffect( () =>
  {
    // Fetch order history from the backend
    // ...

    // Update the orders state with the fetched data
    setOrders( [
      { id: 1, food: 'Pizza', price: 10 },
      { id: 2, food: 'Burger', price: 8 },
      { id: 3, food: 'Sushi', price: 15 },
    ] );
  }, [] );

  return (
    <div className="order-history">
      <h3>Order History</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Food</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { orders.map( ( order ) => (
            <tr key={ order.id }>
              <td>{ order.id }</td>
              <td>{ order.food }</td>
              <td>{ order.price }</td>
            </tr>
          ) ) }
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
