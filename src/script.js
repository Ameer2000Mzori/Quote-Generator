import "./Navbar.css";
import "./Style.css";
import "./Home.css";
import "./Quote.css";
import quoteIcon from "./asset/qoutelogo.png";
import NavBar from "./Navbar";
import createQuote from "./quoteGenerator";

const brandIcon = document.getElementsByClassName("brand-icon")[0];
const menuBtn = document.getElementsByClassName("menu-btn")[0];
const nextBtn = document.getElementsByClassName("nextbtn")[0];

brandIcon.src = quoteIcon;

menuBtn.addEventListener("click", NavBar);

nextBtn.addEventListener("click", createQuote);
