import React, { useState } from 'react';
import './ContactForm.css';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter valid email address');
    } else {
      setError('');
      // Handle form submission logic here
    }
  };

  return (
    <div className="contact-frame">
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
        <div className="form-column"></div>
        <div className="message-text">Drop us a message, and we’ll get back to you in no time.</div>
          <div className="form-column">
            <div className="form-group">
            {/* <span className='label'>Your Name</span> */}
              {/* <label htmlFor="name">Your Name</label> */}
              <input type="text" id="name" name="name" placeholder='Your Name' />
              <div className="line"></div>
            </div>
            <div className="form-group">
            {/* <span className='label'>Contact Number</span> */}
              {/* <label htmlFor="contact_number">Contact Number</label> */}
              <input type="text" id="contact_number" name="contact_number" placeholder='Contact Number' />
              <div className="line"></div>
            </div>
            <div className="form-group">
        {/* <span className='label'>Message</span> */}
          {/* <label htmlFor="message">Message</label> */}
          <input type="text" id="message" name="message" placeholder='Message' />
          <div className="line"></div>
        </div>
       
          </div>
          <div className="form-column">
            <div className="form-group">
            {/* <span className='label'>Organisation Name</span> */}
              {/* <label htmlFor="org_name">Organisation Name</label> */}
              <input type="text" id="org_name" name="org_name" placeholder='Organisation Name'/>
            
              <div className="line"></div>
            </div>
            <div className="form-group">
            {/* <span className='label'>Email ID</span> */}
              {/* <label htmlFor="email">Email ID</label> */}
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder='Email ID'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <div className="error-message">{error}</div>}
              <div className="line"></div>
            </div>
            <div className="form-group captcha">
          <ReCAPTCHA sitekey="6LcsVfYpAAAAAFyf4d7ZbqiXqUd8LvunJP7eX7I7" />

        </div>
          </div>
        </div>
        <div className="form-row">
        <div className="form-column"></div>
        <div className="form-column">
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
        </div>
        <div className="form-column"></div>

        </div>
     
        
      </form>
    </div>
  );
};

export default ContactForm;