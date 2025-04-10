import React from 'react';
import background from "../assets/Banner-min.jpg"


const Banner = () => {
    return (
        <div className="sora">
             <div
  className=" min-h-[70vh] npm bg-cover   bg-center transform -scale-x-[1]"
  style={{
    backgroundImage: `url(${background})`,
    
  }}>
    <div className="container mx-auto pt-40 scale-x-[-1] sora">
        <h1 className="text-5xl font-semibold text-white ">
            Bid on Unique Items from <br /> Around the World </h1>

        <p className="text-2xl pt-5 pb-5 text-gray-300">Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
        <button className="btn bg-white rounded-4xl font-medium ">Explore Auctions</button>
    </div>
    </div> 
        </div>
    );
};

export default Banner;

// bg-[url('../assets/Banner-min.jpg')]