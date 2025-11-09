import React from 'react';
import image1 from '../../assets/vector1.png'



const HeroSection = () => {
    return (
        
<div className= "grid grid-cols-2 bg-gray-100 W-[auto] gap-[10px]  p-15">
  <div className= "bg-purple-500 w-[500px] h-[250px] rounded-lg shadow-md">
    <h3 className= "text-white text-4xl bold center flex justify-center mt-24">In Progress </h3>
    <h3 className= "text-white text-4xl center flex justify-center">0 </h3>
   
    <img src={image1} className='mb-10' alt="Purple Card" />
    
    
    
  </div>
  <div className= "bg-green-500 w-[500px] h-[250px] rounded-lg shadow-md">
    <h3 className= "text-white text-4xl bold center flex justify-center mt-24">Resolved </h3>
    <h3 className= "text-white text-4xl center flex justify-center">0 </h3>
    <img src={image1} alt="Green Card" />
 </div>
 </div>
    );
};

export default HeroSection;