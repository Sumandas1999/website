import React, { useState } from 'react'

const Slider = () => {

    const [imageList, setImageList] = useState([]);

    const getImageArray = () => {
        for (let i = 1; i <= 113; i++) {
            const temp = imageList;
            temp.push(`../images/image${i}.jpg`)
            setImageList(temp)
        }
    }

    if (imageList.length === 0) {
        getImageArray();
    }

    return (
        <div className="grid-container  ">
            {
                imageList.map((image, index) => <div key={index}> <img  src={image} /> </div>)
            }
        </div>
    )
}

export default Slider;

