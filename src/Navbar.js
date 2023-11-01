const btnImg = document.getElementsByClassName("btn-img")[0];
const navLinks = document.getElementsByClassName("navlinks")[0];
import openm from "./asset/openmm.png";
import closem from "./asset/closemm.png";
btnImg.src = openm;
const NavBar = () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    btnImg.src = openm;
  } else {
    navLinks.classList.add("active");
    btnImg.src = closem;
  }
};

export default NavBar;
