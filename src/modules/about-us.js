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

  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.id = "about-us";
  aboutUsContainer.textContent = "About Us";
  main.appendChild(aboutUsContainer);
};

export default renderAboutUs;
