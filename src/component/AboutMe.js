import React from "react";

// function AboutMe() {

const AboutMe = () => {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  return (
    <div id="about" className="aboutme-container grid grid-cols-3 gap-4">
      <div className="aboutme-image">
        <img
          src="portfolio/IMG_20211029_125956.jpg"
          className="h-80 m-auto p-6 "
        />
      </div>
      <div className="aboutme-description col-span-2">
        <h1 className="text-red-400">Discover</h1>
        <h1 className="text-2xl text-white">About Me</h1>
        <div className="services-text-line"></div>
        <p>
          My name is Afshana Zaman. Im a full stack developer based on guwahati
          assam .and im very passionate and dedicated to my work. With 1 year 6
          months experience as a professional full stack developer. I have
          acquired the skills necessary to build great and premium websites
        </p>
        <div>
          <p onClick={() => myFunction()} className="dropbtn">
            View More
          </p>
          <div
            id="myDropdown"
            className=" dropdown-content border b-2 border-red-400 p-4 mt-4"
          >
            <div className="grid grid-cols-2">
              <p>
                <span className="font-bold">Name:</span> Afshana Zaman
              </p>
              <p>
                <span className="font-bold">Phone:</span> 1234567890
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p>
                <span className="font-bold">Experience :</span> 1 Year 6 Months
              </p>
              <p>
                <span className="font-bold">Age: 24</span>
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p>
                <span className="font-bold">Address:</span> Guwahati,Assam
              </p>
              <p>
                <span className="font-bold">Current Job:</span> Eoot
                Technologies
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/afshana-zaman-786887193/"
                  className="text-blue-400"
                >
                  <i class="fa fa-linkedin text-blue"></i>
                </a>
                <a
                  href="https://github.com/afshana22/portfolio.git"
                  className="text-blue-400"
                >
                  <i class="fa fa-github text-white"></i>
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
