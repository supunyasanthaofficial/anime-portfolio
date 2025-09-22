import React, { useState, useEffect, useRef } from "react";
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
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
      if (
        !formData.name ||
        !formData.email ||
        !formData.subject ||
        !formData.message
      ) {
        throw new Error("Please fill in all required fields");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.1) {
            resolve();
          } else {
            reject(new Error("Network error"));
          }
        }, 1500);
      });

      console.log("Form submitted:", formData);
      setSubmitStatus("success");

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
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="contact section demon-slayer-contact"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="demon-contact-bg">
        <div className="bg-element contact-bg-1"></div>
        <div className="bg-element contact-bg-2"></div>
        <div className="bg-element contact-bg-3"></div>
        <div className="flying-crow"></div>
        <div className="floating-letter"></div>
        <div className="particles-container">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className={`section-title ${isVisible ? "animate-in" : ""}`}>
            <span className="title-underline">Send a Demon Slayer Crow</span>
          </h2>
          <div
            className={`breathing-demon ${isVisible ? "animate-in" : ""}`}
          ></div>
        </div>

        <div className="contact-content">
          {/* LEFT SIDE - Info */}
          <div className={`contact-info ${isVisible ? "animate-in" : ""}`}>
            <div className="contact-info-inner">
              <h3 className="jp-heading">
                <span className="text-gradient">繋ぐ心</span> - Let's Bring Your
                Ideas to Life
              </h3>
              <p>
                Like a Demon Slayer awaiting their next mission, I'm ready to
                take on new challenges. If you have an app idea or need help
                with your project, let's discuss how we can work together.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <div className="icon-wrapper">🗺️</div>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Kandy, Sri Lanka</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <div className="icon-wrapper">✉️</div>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>supunyasantha.official@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <div className="icon-wrapper">📞</div>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+94 741344312</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <div className="icon-wrapper">⏱️</div>
                  </div>
                  <div className="contact-text">
                    <h4>Response Time</h4>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow My Journey</h4>
                <div className="social-icons">
                  <a href="#" className="social-link" title="Twitter">
                    <span className="social-icon">🐦</span>
                  </a>
                  <a href="#" className="social-link" title="Instagram">
                    <span className="social-icon">📸</span>
                  </a>
                  <a href="#" className="social-link" title="GitHub">
                    <span className="social-icon">💻</span>
                  </a>
                  <a href="#" className="social-link" title="LinkedIn">
                    <span className="social-icon">👔</span>
                  </a>
                  <a href="#" className="social-link" title="Behance">
                    <span className="social-icon">🎨</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div
            className={`contact-form-container ${
              isVisible ? "animate-in" : ""
            }`}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send a Message Crow</h3>
                <p>
                  Like the crows used by the Demon Slayer Corps, your message
                  will reach me swiftly.
                </p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-icon">👤</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-icon">📧</span>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Mission Type</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-icon">🎯</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mission Details</label>
                <div className="input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <span className="input-icon">📝</span>
                </div>
              </div>

              <button
                type="submit"
                className={`demon-slayer-btn submit-btn ${
                  isSubmitting ? "submitting" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    Sending Crow...
                  </>
                ) : (
                  <>
                    <span className="btn-crow">🦅</span>
                    Send Message Crow
                    <span className="btn-sparkle"></span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="submit-status success">
                  <span className="status-icon">✅</span>
                  <span>Your crow has been dispatched successfully!</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="submit-status error">
                  <span className="status-icon">⚠️</span>
                  <span>The crow was intercepted! Please try again.</span>
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
