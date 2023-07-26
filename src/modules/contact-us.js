const renderContactUs = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const contactUs = document.createElement("div");
  contactUs.id = "contact-us";
  contactUs.textContent = "Contact Us";
  main.appendChild(contactUs);
};

export default renderContactUs;