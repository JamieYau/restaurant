import logoSrc from "../assets/images/logo.png";

// render the homepage
const renderHomePage = () => {
  const content = document.querySelector("#content");

  const header = createHeader();
  const main = createMain();

  content.appendChild(header);
  content.appendChild(main);
};

const createHeader = () => {
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
    const navLink = document.createElement("a");
    navLink.setAttribute("href", item.toLowerCase().replace(" ", "") + ".html");
    navLink.textContent = item;
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });

  nav.appendChild(navList);
  header.appendChild(nav);
  return header;
};

const createMain = () => {
  const main = document.createElement("main");
  const welcome = document.createElement("h3");
  welcome.id = "welcome";
  welcome.textContent = "Welcome";
  const name = document.createElement("h2");
  name.id = "restaurant-name";
  name.textContent = "Restaurant";
  const type = document.createElement("div");
  type.id = "restaurant-type";
  type.textContent = "Fine-Dining";
  const ratingContainer = document.createElement("div");
  ratingContainer.id = "restaurant-rating-container";
  const line1 = document.createElement("div");
  line1.classList.add("line");
  const rating = document.createElement("div");
  rating.id = "restaurant-rating";
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.classList.add("fa-solid", "fa-star");
    rating.appendChild(star);
  }
  const line2 = document.createElement("div");
  line2.classList.add("line");
  ratingContainer.appendChild(line1);
  ratingContainer.appendChild(rating);
  ratingContainer.appendChild(line2);
  const locationContainer = document.createElement("div");
  locationContainer.id = "restaurant-location-container";
  const line3 = document.createElement("div");
  line3.classList.add("line");
  const location = document.createElement("div");
  location.id = "restaurant-location";
  location.textContent = "London";
  const line4 = document.createElement("div");
  line4.classList.add("line");
  locationContainer.appendChild(line3);
  locationContainer.appendChild(location);
  locationContainer.appendChild(line4);
  main.appendChild(welcome);
  main.appendChild(name);
  main.appendChild(type);
  main.appendChild(ratingContainer);
  main.appendChild(locationContainer);
  return main;
};

export default renderHomePage;
