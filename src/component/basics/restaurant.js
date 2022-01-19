import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  const [MenuData, setMenuData] = useState(Menu);
  const [Menulist] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedlist = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedlist);
  };

  return (
    <>
      <Navbar filterItem={filterItem} Menulist={Menulist} />
      <MenuCard MenuData={MenuData} />
    </>
  );
};

export default Restaurant;
