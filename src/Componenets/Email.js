import React from 'react'
import emailjs from 'emailjs-com';

function Email() {
 function sentEmail (e) {
    e.preventDefault();
    emailjs.sendForm(
        'service_8fpm1kk',
        'template_00cf14e',
        e.target,
        'Mp85MN6jo66mXZm3H'
        )
        .then(res=>
            {
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })

 }
    return (
    <div>
        <h1>Email sending </h1>
        <form onSubmit={sentEmail}>
        <label>Name:-</label>
        <input type="text" name="name" /><br />

        <label>Email</label>
         <input type="email" name="email" /><br/>

         <label>Message</label>       
         <textarea name="message" rows="4"/><br/>
         <input type='submit' value='send'/>
         </form>
    </div>
  )
}

export default Email