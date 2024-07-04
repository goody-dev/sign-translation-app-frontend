import React from 'react'
import EnvelopeIcon from '../assets/icons/closed-blue-envelope.png'

const ContactUs = () => {
  return (
    <div className=''>
      <div>
        <h1>Contact <br/>Us</h1>
        <p>Get in touch with us. Feel free to help us with suggestions on how to improve this product.</p>
      </div>
      <form>
        <div>
          <label for='email'>Email</label>
          <input id='email' type='email' tabIndex={0} placeholder='Enter your email address'></input>
        </div>
        <div>
          <label for='email'>Description</label>
          <textarea id='email' type='email' tabIndex={0} placeholder=''></textarea>
        </div>
        <button tabIndex={0}>Submit</button>
      </form>
      
    </div>
  )
}

export default ContactUs
