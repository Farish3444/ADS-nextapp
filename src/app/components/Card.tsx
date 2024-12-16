import React from 'react';
import Image from 'next/image';


const Card = () => {
  return (
  <>

<div className='mt-3 ml-3'>

<h1 className='text-black text-2xl'>COMFORT PANT FOR WOMEN</h1>

</div>

  <div className="flex flex-wrap justify-center gap-8 p-8">  

  
  <div className="max-w-xs  rounded-lg overflow-hidden">  
    <Image src={"/pant1.jpg"} alt="Black Cotton Pant" className="w-full h-64 object-cover" width={100} height={150} />  
    <div className="p-4">  
      <h2 className="text-lg font-semibold text-black">Black Cotton Pant</h2>  
      <p className="text-xl font-bold text-gray-800">₹ 799</p>  
      <div className="flex items-center mt-2">  
        <span className="text-yellow-500">★ ★ ★ ★ ★</span>  
        <span className="text-gray-600">(4.8)</span>  
      </div>  
    </div>  
  </div>  

  
  <div className="max-w-xs bg-white rounded-lg  overflow-hidden">  
    <Image src={"/pant3.jpg"} alt="Maroon Airy Linen Long Kurta" className="w-full h-64 object-cover" width={100} height={150} />  
    <div className="p-4">  
      <h2 className="text-lg font-semibold text-black">Linen Long Kurta</h2>  
      <p className="text-xl font-bold text-gray-800">₹ 999</p>  
      <div className="flex items-center mt-2">  
        <span className="text-yellow-500">★ ★ ★ ★ ★</span>  
        <span className="text-gray-600">(4.8)</span>  
      </div>  
    </div>  
  </div>  


  <div className="max-w-xs bg-white rounded-lg  overflow-hidden">  
    <Image src={"/pant2.jpg"} alt="Yellow Airy Linen Short Kurta" className="w-full h-64 object-cover" width={100} height={150} />  
    <div className="p-4">  
      <h2 className="text-lg font-semibold text-black"> Linen Short Kurta</h2>  
      <p className="text-xl font-bold text-gray-800">₹ 799</p>  
      <div className="flex items-center mt-2">  
        <span className="text-yellow-500">★ ★ ★ ★ ★</span>  
        <span className="text-gray-600">(4.8)</span>  
      </div>  
    </div>  
  </div>  


  <div className="max-w-xs bg-white rounded-lg  overflow-hidden">  
    <Image src={"/pant1.jpg"} alt="Rose Taupe Everyday Cotton Top" className="w-full h-64 object-cover" width={100} height={150} />  
    <div className="p-4">  
      <h2 className="text-lg font-semibold text-black">Rose Cotton Top</h2>  
      <p className="text-xl font-bold text-gray-800">₹ 999</p>  
      <div className="flex items-center mt-2">  
        <span className="text-yellow-500">★ ★ ★ ★ ★</span>  
        <span className="text-gray-600">(4.8)</span>  
      </div>  
    </div>  
  </div>  
</div>
  </>  
  );
};

export default Card;
