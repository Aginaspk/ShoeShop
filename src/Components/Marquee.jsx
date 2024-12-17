import React from 'react';

const Marquee = ({ img }) => {

    const repeat = [...img,...img]
  return (
    <div className="overflow-hidden whitespace-nowrap relative h-full">
      <div className="marquee-inner inline-block ">
        {repeat.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="inline-block w-[400px] 2xl:h-[500px] h-[450px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
