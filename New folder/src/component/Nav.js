import React from "react";

import { Link, withRouter } from "react-router-dom";

function Nav() {
  return (
    <div className="   bg-white">
      <div className="storenavbar-wrap p   py-4 bg-white     w-full    ">
        <div className="container mx-auto ">
          <nav className="flex justify-between nav-container font-bold">
            <div>
              <h1 className="text-4xl">
                Y<span className=" ">AZAEN</span>
              </h1>
            </div>
            <div className="flex gap-10">
              <div>
                <a href="">Home</a>
              </div>
              <div>
                <a href="">About</a>
              </div>
              <div>
                <a href="">Serives</a>
              </div>
              <div>
                <a href="">Resume</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* profile image  */}
      <div className="   rounded-full hero-text-102">
        <img
          src="portfolio/85779.jpg"
          alt="logo"
          className=" hero-text-1002 rounded-full"
          style={{ objectFit: "contain" }}
        />
        <h1
          className="text-3xl font-bold text-red-400 w-60 "
          style={{ marginLeft: -30 }}
        >
          Afshana Zaman
        </h1>
      </div>
    </div>
  );
}

export default Nav;
