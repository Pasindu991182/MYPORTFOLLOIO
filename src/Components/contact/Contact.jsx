import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import phone_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // ඔයාගේ Web3Forms Access Key එක
    formData.append("access_key", "08b679de-07d8-400c-86e2-10897b2f9bb3"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    // Email එක සාර්ථකව ගියා නම් Alert එකක් පෙන්නලා Form එක clear කරනවා
    if (data.success) {
      alert("✅ Your message has been sent successfully!");
      event.target.reset(); // Form එකේ type කරපු දේවල් මකලා දානවා
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div id='contact' className="contact">
     <div className="contact-title">
       <h1>Contact Me</h1>
       <img src={theme_pattern} alt="Theme Pattern" />
     </div>
     <div className="contact-section">
        
        {/* වම් පැත්ත - විස්තර */}
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm interested in hearing from you! Whether you have a question, feedback, or just want to chat, feel free to reach out.</p>
            <div className="contact-details">
               <div className="contact-detail">
                 <img src={mail_icon} alt="Mail Icon" />
                 <p>pasindughp@gmail.com</p>
               </div>
               <div className="contact-detail">
                 <img src={phone_icon} alt="Phone Icon" />
                 <p>+94 71 936 6028</p>
               </div>
               <div className="contact-detail">
                 <img src={location_icon} alt="Location Icon" />
                 <p>Malabe, Sri Lanka</p>
               </div>
            </div>
        </div>

        {/* දකුණු පැත්ත - Contact Form එක */}
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" id="name" required />
            
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" id="email" required />
            
            <label htmlFor="message">Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter your message" id="message" required></textarea>
            
            <button type="submit" className="contact-submit">Submit now</button>
        </form>

     </div>
    </div>
  )
}

export default Contact