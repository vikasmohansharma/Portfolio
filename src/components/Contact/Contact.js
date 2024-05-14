import React from 'react';
import "./Contact.scss";
import {  X, Instagram, GitHub, LinkedIn } from '@mui/icons-material';

const Contact = () => {
  return (
    <><div className="contact">
      <div className="intro">
        <p>
          Hi there! 👋 I'm excited to connect with you. If you're interested in <span style={{color:"violet"}}>hiring me</span>,  collaboration, have a project idea, or just want to chat, feel free to reach out to me through any of the following channels:
        </p>
      </div>
      <h2 className='contactme'>Contact Me</h2>
      <div className="social-icons">
        <a target="blank" href="https://github.com/vikasmohansharma">
        <GitHub className="icon" /></a>
        <a target="blank" href="https://www.linkedin.com/in/vikas-sharma-b86968286/"><LinkedIn className="icon" /></a>
        <a target="blank"href="https://twitter.com/vikasaryavart"><X className="icon" /></a>
        <a target="blank"href="https://twitter.com/vikasaryavart"><Instagram className="icon" /></a>
      </div>
    </div>
   
    </>
  );
};

export default Contact;
