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

  // Create the home container
  const homeContainer = document.createElement("div");
  homeContainer.id = "home-container";

  // Create welcome message
  const welcome = document.createElement("h3");
  welcome.id = "welcome";
  welcome.textContent = "Welcome";

  // Create restaurant name
  const name = document.createElement("h2");
  name.id = "restaurant-name";
  name.textContent = "The Grand Gourmet";

  // Create restaurant type
  const type = document.createElement("div");
  type.id = "restaurant-type";
  type.textContent = "Fine-Dining";

  // Create star rating
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

  // Create Location
  const locationContainer = document.createElement("div");
  locationContainer.id = "restaurant-location-container";
  const line3 = document.createElement("div");
  line3.classList.add("line");
  const location = document.createElement("div");
  location.id = "restaurant-location";
  location.textContent = "London";
  const line4 = document.createElement("div");
  line4.classList.add("line");

  // Append elements to homeContainer
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
