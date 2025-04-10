import React, { useState } from 'react';
import Blog from '../Blog/Blog';
import { FaRegHeart } from "react-icons/fa";
import { SlHeart } from "react-icons/sl";
import { BsFillHeartFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

const Blogs = ({blogs}) => {

  // const add =()=>{
  //   toast.success("easy") 
  // }

  const remove =()=>{
     toast.error("hard")
  }
  const notify = () => toast("Wow so easy!");
  // const notify = () => toast("Remove!");
  // console.log(blogs)
const [bookmarked,setBookMarked] = useState([])
// const [color,setColor] = useState("black")
// console.log(color)


const handleBookMark = (blog) =>{
  console.log(blog)
  // const marked= bookmarked.find((book)=>book.id===blog.id)
  // console.log(marked)
  //  if(!marked){
  //   setBookMarked([...bookmarked,blog])
  //  }
// if(!marked){
  setBookMarked([...bookmarked,blog])
// }


 
}
console.log(bookmarked)


const handleRemove = (id) =>{
  const remainingBookMark = bookmarked.filter((mark)=>mark.id !== id)
  setBookMarked(remainingBookMark)
}


const handleColor =(blog) =>{
  const marked= bookmarked.find((book)=>book.id===blog.id)
  return marked?" cursor-not-allowed  text-red-500":"text-black"
  }

//   const disable = add.find(ad=>ad.id===ad)
// setAdd(disable)
// }

   
    return (
 <div className="bg-indigo-50  mx-auto "> 
 <div className=" container mx-auto">

  <h3 className="text-3xl font-medium text-[#0E2954] pt-10">Active Auctions</h3>
  <p className="text-xl text-[#0E2954] pb-3">Discover and bid on extraordinary items</p>
      
 <div className="flex justify-between bg-indigo-50  pb-14  gap-7  ">
 <div className="">
     <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
  <table className="table">
    {/* head */}
    <thead>
      
      <tr className="text-gray-700">
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
        <td onClick={()=>add()}><button className={`${handleColor(blog)}` }    onClick={()=>{handleBookMark(blog); }}
          disabled= {bookmarked.find((book)=>book.id===blog.id)}

          ><BsFillHeartFill />
           <ToastContainer />
          </button>
          <ToastContainer />
          </td>
          
          </tr>
        ))
       }
    </tbody>
  </table>
</div>
     </div>
         
        <div className="bg-base-100 w-2/6 rounded-2xl p-5 ">
            <div className="flex justify-center items-center gap-3  border-b-2 border-gray-300">
            <BsFillHeartFill />
            <h3 className="text-3xl font-medium text-gray-700 pb-3">Favorite Items</h3>
            </div>

            {
      bookmarked.map((marked)=><div key={marked.id}
      className=' flex justify-between items-start border-b-2 p-3 border-gray-400  '>
        <div className='flex gap-5 '>
        <img className='w-16 h-16' src={marked.image} alt="" />
        <h3>{marked.title}</h3>
        </div>
        <div onClick={()=>remove()}>
        <button onClick={()=>{handleRemove(marked.id);}}>X
       
        </button>
        <ToastContainer />
        </div>
        
        
      </div>)
    }
            
        </div>
     </div>
      </div>
      </div>
        
    );
};

export default Blogs;