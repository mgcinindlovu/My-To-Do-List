import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import React, { useState } from "react";
import { FaHome, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo}>
        <h2>Mgee Store</h2>
      </div>

      {/* Navigation Links */}
      <nav style={{ ...styles.navbar, ...(isMenuOpen ? styles.navbarOpen : {}) }}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#men" style={styles.navLink}>Men</a></li>
          <li style={styles.navItem}><a href="#women" style={styles.navLink}>Women</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About Us</a></li>
          <li style={styles.navItem}><a href="#products" style={styles.navLink}>Products</a></li>
          <li style={styles.navItem}><a href="#testimonials" style={styles.navLink}>Testimonials</a></li>
          
        

          <li style={styles.navItem}><a href="#hero" style={styles.navLink}><FaHome size={22} /></a></li>
        </ul>
      </nav>

      {/* Hamburger Icon (Hidden on Large and Tablet Screens) */}
      <div style={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} color="#fff" /> : <FaBars size={30} color="#fff" />}
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(68, 0, 255, 0.8)",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "35%",
    boxShadow: "0 4px 10px rgb(0, 0, 0)",
    zIndex: 1000,
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#444",
    padding: "5px 10px",
    borderRadius: "20px",
    marginTop: "10px",
  },
  searchIcon: {
    color: "#fff",
    marginRight: "5px",
  },
  searchInput: {
    border: "none",
    backgroundColor: "transparent",
    color: "#fff",
    outline: "none",
    width: "200px",
  },
  navbar: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    right: "-100%",
    width: "250px",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    transition: "right 0.3s ease-in-out",
    paddingTop: "60px",
  },
  navbarOpen: {
    right: "0",
    marginTop:'10%',
    backgroundColor: "rgba(17, 0, 255, 0.47)",
    width: "100%",
    height: "50%",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  navItem: {
    padding: "10px 0",
    textAlign: "center",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.3s ease",
    display: "block",
  },
  navLinkHover: {
    color: "#00f",
    transition: "color 0.3s ease",
  }, 
  hamburger: {
    display: "block",
    cursor: "pointer",
  },
  
  /* Responsive Styles */
  '@media (min-width: 1200px)': {
    header: {
      display: "flex",
      gap: "1200px",
      
    },
    navbar: {
      position: "static",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "auto",
      height: "auto",
      backgroundColor: "transparent",
      marginLeft: "50px", 
      
    },
    navList: {
      flexDirection: "row",
      padding: 0,
    },
    navItem: {
      padding: "10px 20px",
    },
    hamburger: {
      display: "none", // Hide hamburger menu on laptop screens
    },
  },
  '@media (max-width: 1199px)': {
    navbar: {
      width: "100%",
      height: "100vh",
      right: "-100%",
    },
    navList: {
      flexDirection: "column",
      alignItems: "center",
    },
    navItem: {
      padding: "15px",
    },
  }
};

export default Navbar;
