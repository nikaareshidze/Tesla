import React from "react";

import BuyNowCTA from "../BuyNow";
import CustomOrderCTA from "../CustomOrder";

export default function HomePageCTA() {
  return (
    <div className="flex justify-center items-center py-4 mb-4 gap-x-6">
      <BuyNowCTA />
      <CustomOrderCTA />
    </div>
  );
}
