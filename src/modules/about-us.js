const renderAboutUs = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const aboutUs = document.createElement("div");
  aboutUs.id = "about-us";
  aboutUs.textContent = "About Us";
  main.appendChild(aboutUs);
};

export default renderAboutUs;
