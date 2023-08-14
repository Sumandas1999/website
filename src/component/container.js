import React, { useState } from "react";
import download from "../ICONS/download-solid.svg";


function Container() {
  const [ImageRender, setImageRender] = useState([]);
  const [ImageRender1, setImageRender1] = useState([]);
  const [ImageRender2, setImageRender2] = useState([]);

  const getImageArray = () => {
    for (let i = 1; i <= 113; i++) {
      if (i % 3 === 2) {
        const temp = ImageRender;
        ImageRender.push(`../images/image${i}.jpg`)
        setImageRender(temp)
      } else if (i % 3 === 1) {
        const temp = ImageRender1;
        ImageRender1.push(`../images/image${i}.jpg`)
        setImageRender1(temp)
      } else {
        const temp = ImageRender2;
        ImageRender2.push(`../images/image${i}.jpg`)
        setImageRender2(temp)
      }
    }
  }

  if (ImageRender.length === 0 && ImageRender1.length === 0 && ImageRender2.length === 0) {
    getImageArray();
  }

  return (
    <div className="main-container">


      <h1 className="start-head flex justify-center my-4 text-4xl  "> IMAGE STACK</h1>
      <div className=" main-container flex gap-3 md:gap-6 m-10 md:m-20">
        <div className=" main-container space-y-3 md:space-y-6 ">
          {
            ImageRender &&
            ImageRender.map((image, index) => (
              <div className="relative " key={index}>
                <img
                  className="  outline-1 transition duration-300 ease-in-out hover:scale-105 rounded "
                  alt={image}
                  src={image}
                ></img>


              </div>
            ))
          }
        </div>
        <div className=" space-y-3 md:space-y-6 ">{
          ImageRender1 &&
          ImageRender1.map((image, index) => (
            <div className="relative " key={index}>
              <img
                className="  outline-1 transition duration-300 ease-in-out hover:scale-105 rounded "
                src={image}
                alt={image}
              ></img>


            </div>
          ))

        }</div>
        <div className=" space-y-3 md:space-y-6 ">{
          ImageRender2 &&
          ImageRender2.map((image, index) => (
            <div className="relative " key={index}>
              <img
                className="  outline-1 transition duration-300 ease-in-out hover:scale-105 rounded "
                src={image}
                alt={image}
              ></img>


            </div>
          ))
        }</div>
      </div>
    </div>
  );
}

export default Container;
