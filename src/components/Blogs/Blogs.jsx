import React, { } from 'react';
import Blog from '../Blog/Blog';
import { FaRegHeart } from "react-icons/fa";

const Blogs = ({blogs}) => {
  // console.log(blogs)

   
    return (
 <div className="bg-indigo-50  mx-auto "> 
 <div className=" container mx-auto">

  <h3 className="text-3xl font-medium text-[#0E2954] pt-10">Active Auctions</h3>
  <p className="text-xl text-[#0E2954] pb-3">Discover and bid on extraordinary items</p>
      
 <div className="flex justify-between bg-indigo-50    gap-7  ">
 <div className="">
     <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-5">
  <table className="table">
    {/* head */}
    <thead>
      
      <tr>
        <th>Items</th>
       
         <th className="">Current Bid </th>
        <th>Time Left</th>
        <th>Bid Now</th>
        {/* <th>Favorite Color</th> */}
         
        
      </tr>
    </thead>
    <tbody>
       {
        blogs.map((blog)=> (
          <tr key={blog.id}>
 
             <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask  h-16 w-16 rounded-md">
                <img
                  src={blog.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{blog.title}</div>
               
            </div>
          </div>
        </td>

        <td>{blog.currentBidPrice}</td>
        <td>{blog.timeLeft}</td>
        <td className=""><FaRegHeart /></td>
          </tr>
        ))
       }
    </tbody>
  </table>
</div>
     </div>
         
        <div className="bg-base-100 w-96 rounded-2xl p-5">
          <h1>sdhjfsh</h1>
        </div>
     </div>
      </div>
      </div>
        
    );
};

export default Blogs;