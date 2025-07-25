import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { FaUser, FaEnvelope, FaPhone, FaPencilAlt } from "react-icons/fa";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xpwlddwo");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Show success message if form was submitted successfully
  if (state.succeeded) {
    return (
      <>
        <div className="background-container">
          <div className="child4">
            <h2>Thank You!</h2>
            <h3>Your message has been sent successfully</h3>
            <button 
              className="whatsapp-chat-btn" 
              onClick={() => window.open('https://wa.me/923340545803', '_blank')}
            >
              CHAT VIA WHATSAPP
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>

      {/* New div added after contact-banner */}
      <div className="background-container">
        {/* This div can be used to add a background image */}
     

      <div className="child4">
        <h2>Let's Work Together</h2>
        <h3>Ready To Work On Your Next Projects</h3>
        <button 
          className="whatsapp-chat-btn" 
          onClick={() => window.open('https://wa.me/923340545803', '_blank')}
        >
          CHAT VIA WHATSAPP
        </button>
      </div>


      <div className="child5">
        <div className="form-container">
          <h2>Let’s Build Your Dream Project Together!</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <FaUser className="input-icon" />
              </div>
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <FaEnvelope className="input-icon" />
              </div>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <div className="input-wrapper">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone"
                  required
                />
                <FaPhone className="input-icon" />
              </div>
              <ValidationError 
                prefix="Phone" 
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="input-group">
              <label htmlFor="details">Details</label>
              <div className="input-wrapper">
                <textarea
                  id="details"
                  name="message"
                  placeholder="Project Details"
                  required
                ></textarea>
                <FaPencilAlt className="input-icon" />
              </div>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" className="contact-btn" disabled={state.submitting}>
              Get in Touch
            </button>
          </form>
        </div>

        <div  className="testimonial-card">
          <div className="quote-icon">“</div>
          <p className="paragraph">
            EXCELLENT DESIGN, TRUSTWORTHY & RESPONSIVE STAFF. First...I must say
            how confused I am by some previous negative reviews and suspect they
            reference a different company with a similar name because Ivan
            Infotech has truly exceeded my expectations. I cannot emphasize
            enough how impressed I am with the outstanding work delivered by
            their team. Were an absolute pleasure to work and kindness in
            guiding me through the process was truly appreciated.
          </p>
        </div>
      </div>

      <div className="contact-container">
        <p className="info-text">
          Attach relevant documents (e.g., resume, project files, or images) for
          better assistance.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          <label htmlFor="file-upload" className="file-label">
            Upload File (PDF, Image, etc.)
          </label>
          <input
            type="file"
            id="file-upload"
            name="attachment"
            className="file-input"
            onChange={handleFileChange}
          />

          <button type="submit" className="submit-btn" disabled={state.submitting}>
            Send Message
          </button>
        </form>

        {file && <p className="uploaded-file">File: {file.name}</p>}
        </div>
      </div>
      

      <Footer />
    </>
  );
};

export default ContactForm;
