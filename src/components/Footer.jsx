
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:yourmail@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;