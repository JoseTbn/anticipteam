import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Team from '../../assets/img/Team work_Flatline.svg'
import { useNavigate } from 'react-router-dom';
import { ArrowSmLeftIcon } from '@heroicons/react/outline';

const Form = () => {
let navigate = useNavigate();
 
 
    const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className=''>
        {/* <ArrowSmLeftIcon onClick={() => {
              navigate(-1);
            }} className=' text-blue-800 w-6'>x</ArrowSmLeftIcon> */}
    
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} props={Team} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;