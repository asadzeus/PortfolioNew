import './contact.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yj57ltp', 'template_p6gxrmb', form.current, {
        publicKey: 'ts33rksjH-fXCyJCt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("SUCCESS");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("FAILED!" + " " + error.text);

        },
      );
  };

  return (
    <div className='contact' id='contact'>
      <div className="contactContainer">
        <form ref={form} onSubmit={sendEmail} className="contactTop">
          <div className="contactTitle">Contact Me</div>
          <div className="contactFormTop">
              <input type="text" placeholder='Your Name' name="user_name" className='input1' required/>
              <input type="text" placeholder='Enter Email' name="user_email" className='input1' required/>
          </div>
          <div className="contactFormBottom">
              <textarea type="text" placeholder='Enter Email' name="message" className='input2' required/>
              <div className="sendBtn" onClick={sendEmail}> 
                Send Message <SendRoundedIcon className='sendIcon'/>
              </div>
              
          </div>
        </form>

        <div className="contactBottom">
          <a href="https://www.instagram.com/alper1.ertugrul/" target='_blank'><div className="contactImgFrame"><InstagramIcon className='contactImg'/></div></a>
          <a href="https://www.youtube.com/channel/UCPQrHrX96xhsyXcTdJpN39w" target='_blank'><div className="contactImgFrame"><YouTubeIcon className='contactImg'/></div></a>
          <a href="https://www.linkedin.com/in/alper-ertugrul-97b03b1b8/" target='_blank'><div className="contactImgFrame"><LinkedInIcon className='contactImg'/></div></a>
          <a href="https://github.com/asadzeus?tab=repositories" target='_blank'><div className="contactImgFrame"><GitHubIcon className='contactImg'/></div></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
