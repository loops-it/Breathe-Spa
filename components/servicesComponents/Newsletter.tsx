'use client';

import { useState, } from 'react';
import pageStyle from '@/styles/services.module.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); 
  const [showAlert, setShowAlert] = useState(false); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('email:', email);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('response data:', data);

        setMessage(data.message || 'Subscription successful!');
        setAlertType('success'); 
        setEmail('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Enter valid email address');
        setAlertType('danger'); 
      }

      setShowAlert(true); 

      setTimeout(() => {
        setShowAlert(false);
      }, 5000); 
    } catch (error) {
      console.error('Error in subscription:', error);
      setMessage('An error occurred while subscribing.');
      setAlertType('danger'); 
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  return (
    <div className="w-100 d-flex justify-content-end align-items-md-end gap-3 d-flex flex-column px-0 px-0 ps-md-0">
       
      <form onSubmit={handleSubmit} className="d-flex search-form position-relative" style={{maxWidth: "475px !important"}}>
      {showAlert && message && (
        <div className={`alert alert-${alertType} alert-dismissible fade show py-1`} role="alert">
          {message}
          {/* <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          ></button> */}
        </div>
      )}
        <input
          name="email"
          className="form-control"
          placeholder="Join a Newsletter"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`${pageStyle.darkButton}`}
          style={{ minWidth: '160px', fontSize: "16px !important", borderTopLeftRadius: "0px !important",borderBottomLeftRadius: "0px !important", borderTopRightRadius: "5px !important", borderBottomRightRadius: '5px !important', border: "none", textTransform: 'capitalize' }}
        >
          Subscribe
        </button>
      </form>

     
    </div>
  );
};

export default NewsletterForm;
