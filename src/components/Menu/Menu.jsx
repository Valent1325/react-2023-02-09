import React from "react";

export const Menu = ({ menu }) => {
  const restaurantDishes = menu.map(({ name }) => name).join(" ,");
  return (
    <div>
      <h3>Menu</h3>
      <div>{restaurantDishes}</div>
    </div>
  );
  // return React.createElement("div", {
  //   children: [
  //     React.createElement("h3", {
  //       children: "Menu"
  //     }),
  //     React.createElement('div', {
  //       children: restaurantDishes
  //     }),
  //   ]
  // });
};