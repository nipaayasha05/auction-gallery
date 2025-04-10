import React, { useState } from 'react';
import Blog from '../Blog/Blog';
import { FaRegHeart } from "react-icons/fa";
import { SlHeart } from "react-icons/sl";
import { BsFillHeartFill } from "react-icons/bs";
import {   toast } from 'react-toastify';
import { RxCross1 } from "react-icons/rx";

const Blogs = ({blogs}) => {

  const add =()=>{
    toast.success("Item Added to your Favorite Lists") 
  }

  const remove =()=>{
     toast.warning("Item Removed From Favorite!")
  }
  const notify = () => toast("Wow so easy!");
  // const notify = () => toast("Remove!");
  // console.log(blogs)
const [bookmarked,setBookMarked] = useState([])
const [readingCount,setReadingCount] = useState(0)
// console.log(color)


const handleBookMark = (blog) =>{
  console.log(blog)
  // const marked= bookmarked.find((book)=>book.id===blog.id)
  // console.log(marked)
  //  if(!marked){
  //   setBookMarked([...bookmarked,blog])
  //  }
// if(!marked){
 
const newTime = readingCount + 
blog.currentBidPrice
setReadingCount( newTime)

  setBookMarked([...bookmarked,blog])
// }


 
}
// console.log(bookmarked)


const handleRemove = (id ) =>{
  console.log(id)
  // console.log(blog)
  const remainingBookMark = bookmarked.filter((mark)=>mark.id !== id)
  setBookMarked(remainingBookMark)

  const blog = blogs.find((blog)=>blog.id===id)
  console.log(blog)
//   const newTime = readingCount + 
//   blog.currentBidPrice
// console.log(newTime)
//   const count = newTime - blog.currentBidPrice
//   console.log(count)
  // setReadingCount( count)
  const newTime = readingCount - 
blog.currentBidPrice
console.log(newTime)
setReadingCount( newTime)

}

// const handleAddRemove = (blog)=>{
//   console.log(blog)
//   const newTime = readingCount + 
// blog.currentBidPrice
// setReadingCount( newTime)
// }


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

        <td>${blog.currentBidPrice}</td>
        <td>{blog.timeLeft}</td>
        <td ><button className={`${handleColor(blog)}` }    onClick={()=>{handleBookMark(blog);
          add()
         }}
          disabled= {bookmarked.find((book)=>book.id===blog.id)}

          ><BsFillHeartFill />
        
          </button>
         
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
            <div className={ bookmarked.length > 0?'hidden':'block'}>
            <h3 className=' pt-5 text-2xl font-medium text-center'>No favorites yet</h3>
            <p className='border-b-2 border-gray-300 p-2 text-center text-gray-600'>Click the heart icon on any item to add it to your favorites</p>
            </div>

            
            

            {
      bookmarked.map((marked)=><div key={marked.id}
      className=' flex justify-between items-start border-b-2 p-3 border-gray-400  '>
        <div className='flex gap-5 '>
        <img className='w-16 h-16 rounded-md' src={marked.image} alt="" />
        <div>
        <h3 className='font-bold'>{marked.title}</h3>
        <div className='flex justify-between pt-3'>
          <p>${marked.currentBidPrice}</p>
          <p>Bids: {marked.bidsCount}</p>
        </div>
        </div>
        
        </div>
        <div onClick={()=>remove()}>
        <button className='font-bold text-gray-700' onClick={()=>{handleRemove(marked.id);
          
        }}>
          {/* X */}
          <RxCross1 />
       
        </button>
       
        </div>
        
       
      </div>)
    }
     <div className='flex justify-between text-2xl font-medium text-gray-700 pt-3'>
              <h3>Total bids Amount</h3>
               <h3>${readingCount}</h3>
            </div>
            
        </div>
     </div>
      </div>
      </div>
        
    );
};

export default Blogs;