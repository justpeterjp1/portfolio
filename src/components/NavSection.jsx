import  { useState } from 'react';

const NavSection = ({onNavigate}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
   const handleNavClick = (scrollFn) => {
    scrollFn();           // Scroll to section
    setMenuOpen(false);   // Close menu
  };   

    return (<nav>
    <div className="navbar-container navbar">
        <div className="">JP</div>
    </div>


    </nav>  );
};

export default NavSection;