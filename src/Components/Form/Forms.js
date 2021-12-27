
import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Team from '../../assets/img/Team work_Flatline.svg'
import { useNavigate } from 'react-router-dom';

const Form = () => {
let navigate = useNavigate();
 
 
    const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span onClick={() => {
              navigate("/");
            }} className='close-btn'  >×</span>
        <div className='form-content-left'>
          <img className='form-img' src={Team} alt='Direction' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;