 
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {

const [blogs,setBlogs] = useState([])

// const notify = () => toast("🦄 Wow so easy!!!")


useEffect(()=>{
   fetch("blogs.json")
   .then(res=>res.json())
   .then(data=>setBlogs(data))
   },[])

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Blogs blogs={blogs}
     
    ></Blogs>

    
     
     
    
    </>
  )
}

export default App
