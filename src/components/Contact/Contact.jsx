import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Form validation
      if (
        !formData.name ||
        !formData.email ||
        !formData.subject ||
        !formData.message
      ) {
        throw new Error("Please fill in all required fields");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate successful submission (90% success rate)
          if (Math.random() > 0.1) {
            resolve();
          } else {
            reject(new Error("Network error"));
          }
        }, 1500);
      });

      console.log("Form submitted:", formData);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      // Clean up
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="contact section">
      {/* Background Elements */}
      <div className="contact-background">
        <div className="contact-overlay"></div>
        <div className="contact-shape contact-shape-1"></div>
        <div className="contact-shape contact-shape-2"></div>
      </div>

      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-inner">
              <h3>Let's Bring Your Ideas to Life</h3>
              <p>
                I'm currently available for freelance work and exciting new
                projects. If you have an app idea or need help with your
                project, let's discuss how we can work together.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Kandy, Sri Lanka</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>supunyasantha.official@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+94 741344312</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Response Time</h4>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  <a href="#" className="social-link" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="social-link" title="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link" title="Behance">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>I'd love to hear from you. Fill out the form below.</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="submit-status success">
                  <i className="fas fa-check-circle"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="submit-status error">
                  <i className="fas fa-exclamation-circle"></i>
                  Sorry, there was an error sending your message. Please try
                  again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
