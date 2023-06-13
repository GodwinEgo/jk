// Dashboard.js
import React from 'react';
import FoodPreferences from './FoodPreferences';
import OrderHistory from './OrderHistory';
import MoneyBalance from './MoneyBalance';

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
