import React from "react";

export default function MainMenuHeader() {
  return (
    <div className="flex max-[1200px]:hidden">
      <h1 className="px-4 py-1 cursor-pointer hover:bg-[#c6c9d2] rounded-md duration-300 ease-in-out transition-colors">
        Model 3
      </h1>
      <h1 className="px-4 py-1 cursor-pointer hover:bg-[#c6c9d2] rounded-md duration-300 ease-in-out transition-colors">
        Model S
      </h1>
      <h1 className="px-4 py-1 cursor-pointer hover:bg-[#c6c9d2] rounded-md duration-300 ease-in-out transition-colors">
        Model X
      </h1>
      <h1 className="px-4 py-1 cursor-pointer hover:bg-[#c6c9d2] rounded-md duration-300 ease-in-out transition-colors">
        Model Y
      </h1>
      <h1 className="px-4 py-1 cursor-pointer hover:bg-[#c6c9d2] rounded-md duration-300 ease-in-out transition-colors">
        Solar Roof
      </h1>
      <h1 className="px-4 py-1 cursor-pointer hover:bg-[#c6c9d2] rounded-md duration-300 ease-in-out transition-colors">
        Solar Panels
      </h1>
    </div>
  );
}
