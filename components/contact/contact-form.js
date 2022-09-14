import { useState, useEffect } from "react";
import classes from './contact-form.module.css';
import Notification from "../ui/notification";
import { useRouter } from "next/router";

async function sendContactData(contactDetail) {
   const response = await fetch('/api/contact',{
      method: 'POST',
      body: JSON.stringify(contactDetail),
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   if(!response.ok) {
      throw new Error(data.message ||'something went wrong!!!')
   }
}

function ContactForm() {
   const router = useRouter();
   const [enteredEmail,setEnteredEmail] = useState('');
   const [enteredName,setEnteredName] = useState('');
   const [enteredMessage,setEnteredMessage] = useState('');
   const [reqStatus,setReqStatus] = useState(); //pending,success,error
   const [reqError,setReqError ] = useState(''); 
   useEffect(() => {
      if(reqStatus === 'success' || reqStatus === 'error') {
         const timer = setTimeout(() => {
            setReqStatus(null);
            setReqError(null);
         },3000);
         return () => clearTimeout(timer);
      }
   },[reqStatus]);
   async function handleSubmit(e) {
      e.preventDefault();
      //add client side validation
      setReqStatus('pending');
      try {
         await sendContactData({
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage
         })
         setReqStatus('success');
         setEnteredMessage('');
         setEnteredEmail('');
         setEnteredName('');
         router.push('/');
      }
      catch(e) {
         setReqError(e.message);
         setReqStatus('error',e);
      }
   }

   let notification;
   if(reqStatus === 'pending') {
      notification ={
         status: 'pending',
         title: "Sending message....",
         message: "Your message is on the way..."
      }
   }
   if(reqStatus === 'success') {
      notification = {
         status: 'success',
         title: "Success....",
         message: "Your message sent successfully..."
      }
   }
   if(reqStatus === 'error') {
      notification ={
         status: 'error',
         title: "Error....",
         message: reqError
      }
   }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input 
               type='email' 
               id='email' 
               required  
               value={enteredEmail} 
               onChange={e => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input 
               type='text' 
               id='name'
               required 
               value={enteredName} 
               onChange={e => setEnteredName(e.target.value)}
               />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea 
            id='message' 
            rows='5'
            required
            value={enteredMessage} 
            onChange={e => setEnteredMessage(e.target.value)}
            />
        </div>
        <div className={classes.actions}>
          <button ype="submit">Send Message</button>
        </div>
      </form>
      {notification && (
         <Notification 
            status={notification.status}
            title={notification.title}
            message={notification.message} 
         />
      )}
    </section>
  );
}

export default ContactForm;