import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formEntries, setFormEntries] = useState({
    name: '',
    contactNumber: '',
    message: '',
    orgName: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  useEffect(() => {
    const allFieldsFilled = Object.values(formEntries).every((entry) => entry.trim() !== '');
    setIsSubmitEnabled(allFieldsFilled && captchaVerified);
  }, [formEntries, captchaVerified]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormEntries((prevEntries) => ({
      ...prevEntries,
      [name]: value
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(formEntries.email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
      setShowDialog(true);
      // Handle form submission logic here
      console.log('Form Entries:', formEntries);
      // Clear the form entries
      setFormEntries({
        name: '',
        contactNumber: '',
        message: '',
        orgName: '',
        email: ''
      });
      setCaptchaVerified(false);
      setTimeout(() => {
        setShowDialog(false);
      }, 5000);
    }
  };
return (
    <div className="contact-frame">
      <form onSubmit={handleSubmit}>
      {showDialog && <div className="dialog-box">Data submitted successfully!</div>}
        <div className="form-row">
          <div className="form-column"></div>
          <div className="message-text">Drop us a message, and we’ll get back to you in no time.</div>
          <div className="form-column">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Your Name'
                value={formEntries.name}
                onChange={handleChange}
              />
              <div className="line"></div>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                placeholder='Contact Number'
                value={formEntries.contactNumber}
                onChange={handleChange}
              />
              <div className="line"></div>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="message"
                name="message"
                placeholder='Message'
                value={formEntries.message}
                onChange={handleChange}
              />
              <div className="line"></div>
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <input
                type="text"
                id="orgName"
                name="orgName"
                placeholder='Organisation Name'
                value={formEntries.orgName}
                onChange={handleChange}
              />
              <div className="line"></div>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Email ID'
                value={formEntries.email}
                onChange={handleChange}
              />
              {error && <div className="error-message">{error}</div>}
              <div className="line"></div>
            </div>
            <div className="form-group captcha">
              <ReCAPTCHA
                sitekey="6LcsVfYpAAAAAFyf4d7ZbqiXqUd8LvunJP7eX7I7"
                onChange={handleCaptchaChange}
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-column"></div>
          <div className="form-column">
            <div className="form-group">
              <button type="submit" className="submit-button" disabled={!isSubmitEnabled}>Submit</button>
            </div>
          </div>
          <div className="form-column"></div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
