import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { navbarMenuActions } from "../../store/navbarMenu";

export default function NavbarMenu() {
  // const { shown } = useSelector((state) => state.navbarMenuSlice);
  const dispatch = useDispatch();
  const setShown = () => {
    dispatch(navbarMenuActions.setShown());
  };

  function showNavbarMenu() {
    setShown();
  }
  return (
    <>
      <div className="w-80 bg-white h-screen absolute top-0 right-0">
        <button className="p-5 mt-4 w-full text-right" onClick={showNavbarMenu}>
          X
        </button>
        <div className="text-black px-5 w-full">
          <h1 className="p-2">Model S</h1>
          <h1 className="p-2">Model 3</h1>
          <h1 className="p-2">Model X</h1>
          <h1 className="p-2">Model Y</h1>
          <h1 className="p-2">Solar Roof</h1>
          <h1 className="p-2">Solar Panels</h1>
        </div>
      </div>
      <div
        className="w-full h-screen bg-transparent absolute top-0 left-0"
        onClick={showNavbarMenu}
      ></div>
    </>
  );
}
