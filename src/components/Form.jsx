import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

//much of this code is inspired by and repurposed from Activity 16 Student React Forms -- UCB Full-Stack Bootcamp

function Form() {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
   
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') { 
      setName(value);
    } else if (name === 'userMessage') { 
      setUserMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      alert(`Not a valid email, please try again`);
      return;
    }


    setName('');
    setUserMessage('');
    setEmail('');
  };

  return (
    <div className="contactform">
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={userMessage}
          name="userMessage"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="submit">submit</button>
      </form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
