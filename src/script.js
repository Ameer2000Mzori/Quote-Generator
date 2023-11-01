import "./Navbar.css";
import "./Style.css";
import quoteIcon from "./asset/qoutelogo.png";
import NavBar from "./Navbar";

const brandIcon = document.getElementsByClassName("brand-icon")[0];
const menuBtn = document.getElementsByClassName("menu-btn")[0];
brandIcon.src = quoteIcon;

menuBtn.addEventListener("click", NavBar);
