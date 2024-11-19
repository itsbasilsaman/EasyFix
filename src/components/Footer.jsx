import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
        <section>
          <h1>Company</h1>
          <p>About us</p> 
          <p>Terms & conditions</p> 
          <p>Privacy policy </p>
          <p>Anti-discrimination policy </p>
          <p>UC impact </p>
          <p>Careers </p>
        </section>
        <section>
        <h1>For Customers</h1>
          <p>UC reviews</p> 
          <p>Categories near you </p> 
          <p>Blog</p>
          <p>Contact us</p>
           
        </section>
        <section>
        <h1>For Partners</h1>
          <p>Register as a proffessional</p> 
          
        </section>
        <section>
        <h1>Social Link</h1>
         <div className='icons flex'>
         <FontAwesomeIcon icon={faXTwitter} />
         <FontAwesomeIcon icon={faFacebook} style={{color: "#125182",}} />
         <FontAwesomeIcon icon={faInstagram} style={{color: "#b84305",}} />
         <FontAwesomeIcon icon={faLinkedin} style={{color: "#2b9cf3",}} />
         </div>
        </section>
    </footer>
  )
}

export default Footer