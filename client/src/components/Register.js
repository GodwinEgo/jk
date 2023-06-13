// Register.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () =>
{
  const [ name, setName ] = useState( '' );
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const history = useHistory();

  const handleSubmit = ( e ) =>
  {
    e.preventDefault();
    // Send registration data to the backend
    // ...

    // Redirect to login page after successful registration
    history.push( '/login' );
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          placeholder="Name"
          value={ name }
          onChange={ ( e ) => setName( e.target.value ) }
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ ( e ) => setEmail( e.target.value ) }
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ ( e ) => setPassword( e.target.value ) }
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
