import React, { useState, useEffect } from "react";

const Slider = () => {
  const slides = [
    { id: 1, image: "https://i.ibb.co.com/fQccsJp/pexels-suzyhazelwood-1122865.jpg", alt: "Slide 1" },
    { id: 2, image: "https://i.ibb.co.com/44Hhs9n/pexels-pixabay-415078.jpg", alt: "Slide 2" },
    { id: 3, image: "https://i.ibb.co.com/K9QqLrH/pexels-asumaani-10323770.jpg", alt: "Slide 3" },
    { id: 4, image: "https://i.ibb.co.com/y8zH6m8/pexels-tiana-18128-2898170.jpg", alt: "Slide 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
   <div className="max-w-screen-xl w-full mx-auto py-[50px]">
     <div className="relative w-full  max-h-[500px] overflow-hidden bg-gray-200">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <img
              src={slide.image} 
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-red-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
   </div>
  );
};

export default Slider;
