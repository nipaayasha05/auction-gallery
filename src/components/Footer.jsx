import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-3 pt-5 poppins'>
           <h3 className="text-3xl font-bold"><span className="text-[#003EA4]">Auction</span><span className="text-[#FFD337]">Gallery</span></h3> 
           <div className='flex gap-5'>
            <p>Bid.</p>
            <p>Win.</p>
            <p>Own.</p>
           </div>

           <div className='flex  gap-5'>
            <small>Home</small>
            <small>Auctions</small>
            <small>Categories</small>
            <small>How to works</small>
           </div>

           <small className='pb-5'>© 2025 AuctionHub. All rights reserved.</small>
        </div>
    );
};

export default Footer;