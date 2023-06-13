// FoodPreferences.js
import React, { useState } from 'react';

const FoodPreferences = () =>
{
  const [ preferences, setPreferences ] = useState( [] );

  const handleAddPreference = ( e ) =>
  {
    e.preventDefault();
    // Add food preference to the backend
    // ...

    // Clear the input field
    setPreferences( [ ...preferences, e.target.preference.value ] );
    e.target.reset();
  };

  return (
    <div className="food-preferences">
      <h3>Food Preferences</h3>
      <form onSubmit={ handleAddPreference }>
        <input type="text" name="preference" placeholder="Enter food preference" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        { preferences.map( ( preference, index ) => (
          <li key={ index }>{ preference }</li>
        ) ) }
      </ul>
    </div>
  );
};

export default FoodPreferences;
