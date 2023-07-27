const renderAboutUs = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Highlight the active tab
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
  });
  const aboutUsTab = document.querySelector("#about-us");
  aboutUsTab.classList.add("active");

  // Create the about-us container
  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.id = "about-us-container";

  // Create the about-us title
  const aboutUsTitle = document.createElement("h1");
  aboutUsTitle.textContent = "About Us";
  aboutUsContainer.appendChild(aboutUsTitle);

  // Create the about-us content container
  const aboutUsContent = document.createElement("div");
  aboutUsContent.classList.add("about-us-content");

  // Create restaurant name
  const name = document.createElement("h2");
  name.id = "restaurant-name";
  name.textContent = "The Grand Gourmet";

  // Create Location
  const locationContainer = document.createElement("div");
  locationContainer.id = "restaurant-location-container";
  const line3 = document.createElement("div");
  line3.classList.add("line");
  const location = document.createElement("div");
  location.id = "restaurant-location";
  location.textContent = "London, United Kingdom";
  const line4 = document.createElement("div");
  line4.classList.add("line");
  locationContainer.appendChild(line3);
  locationContainer.appendChild(location);
  locationContainer.appendChild(line4);

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

  // Create opening hours
  const openingHoursContainer = document.createElement("div");
  openingHoursContainer.id = "restaurant-opening-hours-container";
  const hr1 = document.createElement("hr");
  const openingHoursTitle = document.createElement("h3");
  const openingHours = document.createElement("div");
  openingHoursTitle.id = "restaurant-opening-hours-title";
  openingHoursTitle.textContent = "Opening Hours";
  openingHours.id = "restaurant-opening-hours";

  // loop for creating and adding opening hours
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  days.forEach((day) => {
    const dayElement = document.createElement("div");
    dayElement.textContent = `${day}: 9am - 9pm`;
    openingHours.appendChild(dayElement);
  });

  const hr2 = document.createElement("hr");
  openingHoursContainer.appendChild(hr1);
  openingHoursContainer.appendChild(openingHoursTitle);
  openingHoursContainer.appendChild(openingHours);
  openingHoursContainer.appendChild(hr2);

  // append all elements to aboutUsContent
  aboutUsContent.appendChild(name);
  aboutUsContent.appendChild(locationContainer);
  aboutUsContent.appendChild(ratingContainer);
  aboutUsContent.appendChild(openingHoursContainer);

  aboutUsContainer.appendChild(aboutUsContent);

  main.appendChild(aboutUsContainer);
};

export default renderAboutUs;
