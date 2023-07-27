import "./style.css";
import logoSrc from "./assets/images/logo.png";
import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/fontawesome.js";
import renderHomePage from "./modules/homepage.js";
import renderAboutUs from "./modules/about-us.js";
import renderMenu from "./modules/menu.js";
import renderContactUs from "./modules/contact-us.js";

const renderHeader = () => {
  const header = document.createElement("header");
  const logo = document.createElement("img");
  logo.id = "logo";
  logo.src = logoSrc;
  logo.alt = "logo";
  header.appendChild(logo);

  const nav = document.createElement("nav");
  const navList = document.createElement("ul");
  const navItems = ["HomePage", "About Us", "Menu", "Contact Us"];

  navItems.forEach((item) => {
    const navItem = document.createElement("li");
    navItem.id = item.toLocaleLowerCase().replace(/\s/g, "-");
    navItem.textContent = item;
    navList.appendChild(navItem);
  });

  nav.appendChild(navList);
  header.appendChild(nav);
  return header;
};

const init = () => {
  // initial page load
  const content = document.querySelector("#content");
  content.appendChild(renderHeader());
  const main = document.createElement("main");
  content.appendChild(main);
  renderHomePage();

  // attach eventListener to logo
  const logo = document.querySelector("#logo");
  logo.addEventListener("click", () => {
    renderHomePage();
  });

  // attach eventListeners to nav tabs
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((navItem) => {
    navItem.addEventListener("click", (e) => {
      switch (e.target.id) {
        case "homepage":
          renderHomePage();
          break;
        case "about-us":
          renderAboutUs();
          break;
        case "menu":
          renderMenu();
          break;
        case "contact-us":
          renderContactUs();
          break;
        default:
          break;
      }
    });
  });
};

init();
