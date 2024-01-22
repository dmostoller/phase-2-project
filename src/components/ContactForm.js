import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
 const form = useRef();
 const navigate = useNavigate();

 const sendEmail = (e) => {
   e.preventDefault(); 

   emailjs.sendForm('service_jz3d31c', 'template_avspnq3', form.current, '2CBV5usGCJRMr4WbB')
     .then((result) => {
         alert("Your Message Has Been Sent")
         navigate("/")
     }, (error) => {
        console.log ("error")
     });
 };

 return (
   <form className='ui form' ref={form} onSubmit={sendEmail}>
     <div className='field'>
        <label>Name</label>
        <input type="text" name="from_name" />
     </div>
     <div className='field'>
        <label>Email</label>
        <input type="text" name="reply_to" />
     </div>   
     <div className='field'>
        <label>Message</label>
        <textarea type="text" name="message" />
     </div>
     <button className="ui button teal" type="submit">Submit</button>
   </form>
 );
};

export default ContactForm;