import React from "react";

import homepageData from "./homepageData";
import HomepageDataElement from "./HomePageElement";
import Accessories from "./Accessories";

export default function HomePage() {
  const homepageDataElement = homepageData.map((data) => (
    <HomepageDataElement data={data} />
  ));

  return (
    <div
      style={{
        height: "100vh",
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
      }}
    >
      {homepageDataElement}
      <Accessories />
    </div>
  );
}
