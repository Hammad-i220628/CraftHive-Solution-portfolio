import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaPencilAlt } from "react-icons/fa";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; 

const ContactForm = () => {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please upload a file before submitting!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!email) {
      toast.error("Please enter your email!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Prepare form data for the backend
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);

    try {
      // Send data to the backend API
      const response = await axios.post(
        "http://localhost:5000/api/sendContactForm",
        formData
      );

      if (response.data.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error("Error sending message", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Error sending message", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="contact-banner">
        {/* <h3>Contact Us</h3> */}
      </div>

      {/* New div added after contact-banner */}
      <div className="background-container">
        {/* This div can be used to add a background image */}
     

      <div className="child4">
        <h2>Let’s Work Together</h2>
        <h3>Ready To Work On Your Next Projects</h3>
        <div className="email-container">
          <button className="email-btn">
            <span>uzair332@gmail.com</span>
            <i className="arrow-icon">→</i>
          </button>
        </div>
      </div>

      <div className="whatsapp-container">
        <button
          className="whatsapp-btn"
          onClick={() => window.open("https://wa.me/3340545803", "_blank")}
        >
          <i className="fab fa-whatsapp"></i> Chat via WhatsApp
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
                  value={email}
                  onChange={handleEmailChange}
                />
                <FaEnvelope className="input-icon" />
              </div>
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
            </div>
            <div className="input-group">
              <label htmlFor="details">Details</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="details"
                  name="details"
                  placeholder="Project Details"
                  required
                />
                <FaPencilAlt className="input-icon" />
              </div>
            </div>
            <button type="submit" className="contact-btn">
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
          <input type="text" placeholder="Your Name" required />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <textarea placeholder="Your Message" required></textarea>

          <label htmlFor="file-upload" className="file-label">
            Upload File (PDF, Image, etc.)
          </label>
          <input
            type="file"
            id="file-upload"
            className="file-input"
            onChange={handleFileChange}
          />

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {file && <p className="uploaded-file">File: {file.name}</p>}
        </div>
        <ToastContainer />
      </div>
      

      <Footer />
    </>
  );
};

export default ContactForm;
