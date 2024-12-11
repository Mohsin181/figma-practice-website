import React from 'react';
import Image from "next/image"


const navbar = () => {
  return (
<nav className=' flex justify-between items-center w-full h-10 bg-slate-200 '>  

<Image src= "/logo.png" alt='logo' width={50} height={50} className=' object-contain'  ></Image>
 
<h2 className=' ml-32  text-[263238] '>Nexcent</h2>

 <li className='flex justify-center text-black  gap-10'>

<ul>Home</ul>
<ul>Features</ul>
<ul>Community</ul>
<ul>Blog</ul>
<ul>Pricing</ul>
<button className='flex justify-center text-black bg-green-400'>Register Now</button>


 </li>




 
    </nav> 
  )
}

export default navbar
