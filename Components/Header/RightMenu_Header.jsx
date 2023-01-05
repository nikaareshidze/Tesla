import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavbarMenu from "./NavbarMenu";
import { navbarMenuActions } from "../../store/navbarMenu";

export default function RightMenuHeader() {
  const { shown } = useSelector((state) => state.navbarMenuSlice);
  const dispatch = useDispatch();
  const setShown = () => {
    dispatch(navbarMenuActions.setShown());
  };

  function showNavbarMenu() {
    setShown(true);
  }

  return (
    <>
      <div className="flex mr-8  max-[1200px]:hidden">
        <h1 className="px-4 py-1 cursor-pointer hover:bg-[#c6c9d2] rounded-md duration-300 ease-in-out transition-colors">
          Shop
        </h1>
        <h1 className="px-4 py-1 cursor-pointer hover:bg-[#c6c9d2] rounded-md duration-300 ease-in-out transition-colors">
          Account
        </h1>
        <h1
          className="px-4 py-1 cursor-pointer hover:bg-[#c6c9d2] rounded-md duration-300 ease-in-out transition-colors"
          onClick={showNavbarMenu}
        >
          Menu
        </h1>
        {shown ? <NavbarMenu /> : ""}
      </div>
      <div className=" min-[1199px]:hidden">
        <h1 onClick={showNavbarMenu} className="mr-8">
          {shown ? "" : "Menu"}
        </h1>
        {shown ? <NavbarMenu /> : ""}
      </div>
    </>
  );
}
