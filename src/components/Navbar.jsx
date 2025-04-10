import React from 'react';

const Navbar = () => {
    return (
        <div className=" poppins  ">
            <div className="navbar bg-base-100 shadow-sm poppins">
                <div className="container mx-auto flex justify-between">
                <div className="">
    <a className="text-3xl font-bold"><span className="text-[#003EA4]">Auction</span><span className="text-[#FFD337]">Gallery</span></a>
  </div>

<div className="text-xl flex gap-5 justify-center items-center">
    <a href="">Home</a>
    <a href="">Auctions</a>
    <a href="">Categories</a>
    <a href="">How to works</a>
</div>

<div>
<div className="flex space-x-3">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <button className="bg-gray-100 p-1 rounded-4xl">
        <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
          <span className="badge badge-sm indicator-item">9</span>
        </div> 
        </button>
        </div>
      </div>

   <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-12 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
       
    </div>
  </div>
</div>
 

                </div>
  
</div>

 
        </div>
    );
};

export default Navbar;