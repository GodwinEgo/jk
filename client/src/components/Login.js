// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () =>
{
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const history = useHistory();

  const handleSubmit = ( e ) =>
  {
    e.preventDefault();
    // Send login data to the backend
    // ...

    // Redirect to dashboard after successful login
    history.push( '/dashboard' );
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={ handleSubmit }>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
