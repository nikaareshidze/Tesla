import React from "react";

import LogoHeader from "./Logo_Header";
import MainMenuHeader from "./MainMenu_Header";
import RightMenuHeader from "./RightMenu_Header";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-16">
      <LogoHeader />
      <MainMenuHeader />
      <RightMenuHeader />
    </div>
  );
}
