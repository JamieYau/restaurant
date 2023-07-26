const renderMenu = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const menu = document.createElement("div");
  menu.id = "menu";
  menu.textContent = "Menu";
  main.appendChild(menu);
};

export default renderMenu;