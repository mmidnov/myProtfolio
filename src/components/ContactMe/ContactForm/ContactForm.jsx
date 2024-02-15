import './ContactForm.css'
import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-for-content">
        <form>
            <div className="name-container">
                <input type="text" name='firstname' placeholder='First Name' />
                <input type="text" name='lastname' placeholder='Last Name' />
            </div>
            <input type="email" name='email' placeholder='Email' />
            <textarea type="text" name="message" placeholder='Message' rows={3}/>
            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm
