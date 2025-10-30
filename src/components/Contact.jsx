import React from 'react'
import "../css/contact.css";


const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://portfolio-y1ms.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!... I'll respond back as soon as possible.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  

  return (
    <div className='contact-footer-wrapper'>
     <section id='contact' className="contact-section">
  <div className="contact-wrapper">
    {/* Social Icons Section */}

    <div className="contact-icons">
  <h3>Connect with Me</h3>
  <p className="contact-description">
    Find me on any of my socials. You can also check out the source code for my projects.
  </p>
  
  <div className="icon-row slide-in-left animate-on-scroll delay-1">
    <a href="https://www.instagram.com/ojo_peter_10?igsh=eTBtYm04aHRjaXhl&utm_source=qr" target="_blank" rel="noopener noreferrer" title="Instagram">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://linkedin.com/in/peter-ojo-ab68b8289" target="_blank" rel="noopener noreferrer" title="LinkedIn">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="mailto:oluwagbotemiojopeter10@gmail.com" title="Email">
      <i className="fas fa-envelope"></i>
    </a>
    <a href="https://github.com/justpeterjp1" target="_blank" rel="noopener noreferrer" title="GitHub">
      <i className="fab fa-github"></i>
    </a>
    <a href="https://wa.me/+2348130357142" target="_blank" rel="noopener noreferrer" title="WhatsApp">
      <i className="fab fa-whatsapp"></i>
    </a>
  </div>
</div>


    {/* Contact Form Section */}
    <form onSubmit={handleSubmit} className="contact-form slide-in-right animate-on-scroll delay-1">
  <h3>Send a Message</h3>
  <div className="mb-3 floating-label">
  <input
    value={formData.name}
    onChange={handleChange}
   type="text" name='name' className="form-control" placeholder=" " required />
  <label>Name</label>
</div>
<div className="mb-3 floating-label">
  <input
  value={formData.email}
    onChange={handleChange} 
  type="email" name='email' className="form-control" placeholder=" " required />
  <label>Email</label>
</div>
<div className="mb-3 floating-label">
  <textarea 
  value={formData.message}
  onChange={handleChange}
  name='message' className="form-control" rows="5" placeholder=" " required></textarea>
  <label>Message</label>
</div>
  <button type="submit" className="btn btn-primary btn-pulse">Send</button>
   {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
</form>
  </div>
</section>
 <footer className="site-footer footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Peter Ojo. All rights reserved.</p>
        {/* <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:yourmail@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div> */}
      </div>
    </footer>
</div>
  )
}

export default Contact