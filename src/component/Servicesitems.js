import React from "react";

function Servicesitems({ text, description }) {
  return (
    <div className="border border-red-400 b-4 text-white  p-6 text-justify">
      <img src="" className="h-10" />
      <h1 className="font-bold">{text}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default Servicesitems;
