import React from 'react'
import Image from 'next/image'

const header = () => {
  return (
    <div>

      <div className='mt-20 bg-neutral-100' >

        <div className='flex flex-col items-center'>
          <p className='font-bold'>Lessons and Insighsts</p>
          <p className='font-bold text-green-400 '>from 8 yeras</p>
          <p>Where to grow your business as a photographer: site or social media?</p>

          <button className='font-semibold text-black bg-green-400'>Register</button>

        </div>

        <div className='flex justify-end mr-40 items-center"'>
          <Image src="/header.png" alt='logo' width={272} height={283} className=' object-contain   '   ></Image>

        </div>
      </div>

      <div className='flex flex-col items-center text-black f '>

        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>

        <div className='flex flex-row gap-4 mt-4'>

          <Image src="/b1.png" alt='logo' width={33.41} height={33.41}></Image>
          <Image src="/b2.png" alt='logo' width={33.41} height={33.41}></Image>
          <Image src="/b3.png" alt='logo' width={33.41} height={33.41}></Image>
          <Image src="/b4.png" alt='logo' width={33.41} height={33.41}></Image>
          <Image src="/b5.png" alt='logo' width={33.41} height={33.41}></Image>
          <Image src="/b6.png" alt='logo' width={33.41} height={33.41}></Image>
        </div>

      </div>

      <div className="flex justify-center items-center">
  <div className="flex-shrink-0 ">
  
  <Image src="/frame1.png" alt='logo' width={280} height={280}></Image>


  </div>

  <div className="flex-row flex-1 text-center mt-32">

<h1>The unseen of spending three  <br /> years at Pixelgrade</h1>
<p> excepturi et odio obcaecati ipsam debitis harum impedit. Ipsam nobis doloremque ex, officia ipsa tenetur.</p>


<button className='bg-green-400'>Lerarn more</button>
  </div>
</div>




    </div>
  )
}

export default header



























// <div className='mr-40 flex'>
// <Image src="/frame1.png" alt="frame" width={272} height={283} ></Image>


// </div>

// <div className='flex flex-col justify-between items-center' >


// <h1>The unseen of spending three  <br />years at Pixelgrade</h1>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.  <br />Sed accumsan quam vitae est varius fringilla. <br /> Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis <br />.Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, <br /> tempus sem. Donec elementum pulvinar odio.</p>

// </div>


