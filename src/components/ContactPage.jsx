import React, { useState } from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  const faqData = [
    { question: "How do I get started with DSA?", answer: "Begin with our Beginner's section..." },
    { question: "What's the difference between Beginner and Advanced sections?", answer: "Beginner covers basic DSA..." },
    { question: "How long does it take to master DSA?", answer: "With consistent practice (1-2 hours daily)..." },
    { question: "Do you provide coding practice problems?", answer: "Yes! Each section includes curated problems..." },
    { question: "Is this suitable for interview preparation?", answer: "Absolutely! Content is designed for tech interviews." }
  ];

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  return (
    <div className="contact-page pt-28">
      <div className="contact-header">
        <Link to={"/"}>
          <button className="back-button">← Back to Home</button>
        </Link>
        <h1>Contact & FAQ</h1>
      </div>

      <div className="tab-navigation">
        <button className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>Contact Us</button>
        <button className={`tab-btn ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => setActiveTab('faq')}>FAQ</button>
      </div>

      <div className="page-content">
        {activeTab === 'contact' && (
          <div className="contact-section">
            <div className="contact-intro">
              <h2>Get in Touch</h2>
              <p>Have questions about DSA? Need help with your coding journey? We're here to help!</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {['name', 'email', 'message'].map((field) => (
                <div className="form-group" key={field}>
                  <label htmlFor={field}>{field === 'name' ? 'Full Name' : field === 'email' ? 'Email Address' : 'Message'}</label>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
                      placeholder={field === 'name' ? 'Enter your full name' : 'your.email@example.com'}
                    />
                  ) : (
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your question..."
                      rows="5"
                    ></textarea>
                  )}
                </div>
              ))}

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="faq-section">
            <div className="faq-intro">
              <h2>Frequently Asked Questions</h2>
              <p>Find answers to common questions about our DSA learning platform.</p>
            </div>

            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={activeFaq === index}
                  >
                    {faq.question} <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                  </button>
                  {activeFaq === index && <div className="faq-answer">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;