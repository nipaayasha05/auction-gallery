import React, { } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogs}) => {
  // console.log(blogs)

   
    return (

      
 <div className="flex mt-12">
 <div className="">
     <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
          </tr>
        ))
       }
    </tbody>
  </table>
</div>
     </div>
         
        <div>
          
        </div>
     </div>
     
        
    );
};

export default Blogs;