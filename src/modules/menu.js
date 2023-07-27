import BurgerImg from "../assets/images/burger.jpg";
import PizzaImg from "../assets/images/pizza.jpg";
import SaladImg from "../assets/images/salad.jpg";
import SteakImg from "../assets/images/steak.jpg";

const renderMenu = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Highlight the active tab
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
  });
  const menuTab = document.querySelector("#menu");
  menuTab.classList.add("active");

  // Create the menu container
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";

  // Create the menu title
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menuContainer.appendChild(menuTitle);

  // Sample menu items array (you can replace this with your actual menu items)
  const menuItems = [
    { name: "Pizza", price: "$10", image: PizzaImg },
    { name: "Burger", price: "$8", image: BurgerImg },
    { name: "Salad", price: "$6", image: SaladImg },
    { name: "Steak", price: "$12", image: SteakImg },
    // Add more menu items as needed
  ];

  // Create a list to display menu items
  const menuList = document.createElement("ul");
  menuList.classList.add("menu-list");

  // Loop through the menuItems array and create list items for each item
  menuItems.forEach((menuItem) => {
    const menuItemElement = document.createElement("li");
    menuItemElement.classList.add("menu-item");

    // Create an image element for the menu item
    const menuItemImage = document.createElement("img");
    menuItemImage.src = menuItem.image;
    menuItemImage.alt = menuItem.name;
    menuItemImage.classList.add("menu-item-image");

    // Create a div to hold the name and price of the menu item
    const menuItemDetails = document.createElement("div");
    menuItemDetails.classList.add("menu-item-details");

    // Create the name element
    const menuItemName = document.createElement("h3");
    menuItemName.textContent = menuItem.name;

    // Create the price element
    const menuItemPrice = document.createElement("span");
    menuItemPrice.textContent = menuItem.price;

    // Append name and price to the details div
    menuItemDetails.appendChild(menuItemName);
    menuItemDetails.appendChild(menuItemPrice);

    // Append image and details div to the menu item
    menuItemElement.appendChild(menuItemImage);
    menuItemElement.appendChild(menuItemDetails);

    // Append the menu item to the menu list
    menuList.appendChild(menuItemElement);
  });

  // Append the menu list to the menu container
  menuContainer.appendChild(menuList);

  // Append the menu container to the main content area
  main.appendChild(menuContainer);
};

export default renderMenu;
