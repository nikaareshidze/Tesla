import React from "react";

import Header from "../Header/Header";
import HomePageCTA from "../Call_To_Actions/HomePageCTAs/HomePageCTA";

export default function HomepageDataElement({ data }) {
  return (
    <div
      className="flex flex-col justify-between"
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        backgroundSize: "cover",
        //backgroundSize: "contain",
        height: "100vh",
        scrollSnapAlign: "start",
      }}
    >
      <Header />
      <div className="flex flex-col justify-between items-center h-full my-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl">{data.title}</h1>
          <h1 className="text-base underline underline-offset-4">
            {data.description}
          </h1>
        </div>
        <HomePageCTA />
      </div>
    </div>
  );
}
