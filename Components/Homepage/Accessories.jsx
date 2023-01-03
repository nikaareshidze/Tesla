import React from "react";

import Header from "../Header/Header";
import ShopNow from "../Call_To_Actions/ShopNow";
import Footer from "../Footer/Footer";

export default function Accessories() {
  return (
    <div
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
      }}
    >
      <Header />
      <div className="flex flex-col justify-around items-center h-full">
        <h1 className="text-4xl">Accessories</h1>
        <ShopNow />
        <Footer />
      </div>
    </div>
  );
}
