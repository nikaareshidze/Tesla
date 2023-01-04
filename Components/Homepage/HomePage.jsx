import React from "react";
import { useDispatch, useSelector } from "react-redux";

import homepageData from "./homepageData";
import HomepageDataElement from "./HomePageElement";
import Accessories from "./Accessories";

export default function HomePage() {
  const homepageDataElement = homepageData.map((data) => (
    <HomepageDataElement data={data} />
  ));

  const { shown } = useSelector((state) => state.navbarMenuSlice);

  return (
    <div
      style={{
        height: "100vh",
        scrollSnapType: "y mandatory",
        overflowY: `${shown ? "hidden" : "scroll"}`,
      }}
    >
      {homepageDataElement}
      <Accessories />
    </div>
  );
}
