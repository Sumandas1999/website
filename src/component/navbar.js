import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import grass from "../images/image42.jpg";
import Camera from "../lottiefiles/9948-camera-pop-up.json";



function Navbar() {
  return (
    <div>
      <div
        className="bg-cover  "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 15, 0.03), rgba(0, 0, 0, 0.5)), url(${grass})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "50vh",
          overflow: "hidden",
        }}
        

      >
        <nav className=" z-10 backdrop-blur-sm bg-white/20 h-16 py-0 mt-0 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
            <a className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="heading-1 self-center text-2xl font-semibold whitespace-nowrap text-red ">GalaXy Shots</span>


              <Player
                src={Camera}
                className="player"
                loop
                autoplay
                speed={1}
                style={{ height: '7vh', width: '7vw' }}
              />
            </a>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                {/* <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white  ">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white  ">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white  ">Services</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white  ">Pricing</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white  ">Contact</a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div className="grid grid-cols gap-4 text-4xl justify-center align-middle  text-white">
          <h1 className="navtext">

            "In the world of photography,
            <br /> you get to share a captured moment with <br /> other people."
            ...
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
