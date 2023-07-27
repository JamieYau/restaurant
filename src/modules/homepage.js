const renderHomePage = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Highlight the active tab
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
  });
  const homeTab = document.querySelector("#homepage");
  homeTab.classList.add("active");

  const homeContainer = document.createElement("div");
  homeContainer.id = "home-container";

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
  homeContainer.appendChild(welcome);
  homeContainer.appendChild(name);
  homeContainer.appendChild(type);
  homeContainer.appendChild(ratingContainer);
  homeContainer.appendChild(locationContainer);

  main.appendChild(homeContainer);
};

export default renderHomePage;
