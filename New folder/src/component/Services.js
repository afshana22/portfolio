import React from "react";
import Servicesitems from "./Servicesitems";

function Services() {
  return (
    <div className="services-container  ">
      <h1 className=" text-red-400">What I Do</h1>
      <h1 className="text-2xl text-white   ">Services</h1>
      <div className="services-text-line"></div>
      <div className="grid grid-cols-3 gap-4">
        <Servicesitems
          text="Creative Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod odio ut ex euismod finibus. Nullam ornare ac dolor sed pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quis arcu in enim sodales ornare. Maecenas mi nisi, tempus sed ex vitae, interdum ultrices ligula. Etiam lobortis est a augue scelerisque, sed porttitor orci pharetra. Nulla rhoncus ex sed odio ultricies venenatis. Phasellus a ornare elit, vitae molestie mauris. Aenean erat mi t egestas   uere mi non  ."
        />
        <Servicesitems
          text="Branding"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod odio ut ex euismod finibus. Nullam ornare ac dolor sed pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quis arcu in enim sodales ornare. Maecenas mi nisi, tempus sed ex vitae, interdum ultrices ligula. Etiam lobortis est a augue scelerisque, sed porttitor orci pharetra. Nulla rhoncus ex sed odio ultricies venenatis. Phasellus a ornare elit, vitae molestie mauris. Aenean erat mi, pretium sit a s velit  ac quam tinci mi non tellus  ."
        />
        <Servicesitems
          text="User Interface"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod odio ut ex euismod finibus. Nullam ornare ac dolor sed pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quis arcu in enim sodales ornare. Maecenas mi nisi, tempus sed ex vitae, interdum ultrices ligula. Etiam lobortis est a augue scelerisque, sed porttitor orci pharetra. Nulla rhoncus ex sed odio ultricies venenatis. Phasellus a ornare elit, vitae molestie mauris. Aenean erat mi, pretium sit am u re mi non  ."
        />
      </div>
    </div>
  );
}

export default Services;
