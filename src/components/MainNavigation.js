// MainNavigation.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import classes from "./MainNavigation.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import ContrastTwoToneIcon from '@mui/icons-material/ContrastTwoTone';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontcolor, setFontColor] = useState("white");
  const [theme, setTheme] = useState("black");
  useEffect(() => {
    document.body.style.backgroundColor = theme;
    document.body.style.color = fontcolor;



  }, [theme,fontcolor]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarLogo} >
        <img src="vslogo2.png" alt="Vikas Sharma Logo" />
        
      </div>
      <div style={{ marginRight:"0"}} ><button  style={{  cursor:"pointer", border:"none", background:"transparent"}} onClick={() => {
  setTheme(theme === "white" ? "black " : "white");
  setFontColor(theme === "white" ? "white" : "black");
}}>
 <ContrastTwoToneIcon
        style={{
          color: theme === "white" ? "black" : "white",
          marginLeft: "auto", // Adjust margin to move the icon closer to the menu
          marginRight: "10px", // Add some margin between the icon and menu
          cursor: "pointer",
        }}
        onClick={() => {
          setTheme(theme === "white" ? "black" : "white");
          setFontColor(theme === "white" ? "white" : "black");
        }}
      /></button></div>
      
      <div className={`${classes.navbarMenu} ${isOpen ? classes.open : ""}`}>
      
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <HomeOutlinedIcon />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              <InfoOutlinedIcon />
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleMenu}>
              <AccountTreeOutlinedIcon />
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={toggleMenu}>
              <PictureAsPdfOutlinedIcon />
              Resume
            </Link>
          </li>
          <li style={{marginRight: "48px"}}>
            <Link to="/contact" onClick={toggleMenu}>
              <ConnectWithoutContactOutlinedIcon />
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`${classes.hamburger} ${isOpen ? classes.open : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <CloseIcon className="icon" />
        ) : (
          <MenuIcon className="icon" />
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
