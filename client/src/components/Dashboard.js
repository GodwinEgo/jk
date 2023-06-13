// Dashboard.js
import React from 'react';
import FoodPreferences from './FoodPreferences.js';
import OrderHistory from './OrderHistory.js';
import MoneyBalance from './MoneyBalance.js';

const Dashboard = () =>
{
  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <FoodPreferences />
      <OrderHistory />
      <MoneyBalance />
    </div>
  );
};

export default Dashboard;
