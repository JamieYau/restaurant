const renderContactUs = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Highlight the active tab
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
  });
  const contactUsTab = document.querySelector("#contact-us");
  contactUsTab.classList.add("active");

  const contactUsContainer = document.createElement("div");
  contactUsContainer.id = "contact-us";
  contactUsContainer.textContent = "Contact Us";
  main.appendChild(contactUsContainer);
};

export default renderContactUs;
