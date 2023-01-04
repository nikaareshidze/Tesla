import React from "react";

export default function MainMenuHeader() {
  return (
    <div className="flex max-[1200px]:hidden">
      <h1 className="px-2 py-1 mx-2 cursor-pointer">Model S</h1>
      <h1 className="px-2 py-1 mx-2 cursor-pointer">Model 3</h1>
      <h1 className="px-2 py-1 mx-2 cursor-pointer">Model X</h1>
      <h1 className="px-2 py-1 mx-2 cursor-pointer">Model Y</h1>
      <h1 className="px-2 py-1 mx-2 cursor-pointer">Solar Roof</h1>
      <h1 className="px-2 py-1 mx-2 cursor-pointer">Solar Panels</h1>
    </div>
  );
}
