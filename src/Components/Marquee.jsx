import React from 'react';

const Marquee = () => {

  const img = [
    "https://iili.io/2hNY5fn.jpg",
    "https://iili.io/2hN7cZP.jpg",
    "https://iili.io/2hNYpqX.jpg",
    "https://iili.io/2hNaoru.jpg",
    "https://iili.io/2hGj5ru.jpg",
    "https://iili.io/2hGjlmQ.jpg",
    "https://iili.io/2hGjj2a.jpg",
    "https://iili.io/2hGjkIp.jpg"
  ]

  const repeat = [...img, ...img]
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
