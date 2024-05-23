import React from 'react';
import img3 from './Images/download.gif';

function Home() {
  return (
    <div className='mt-10
     flex justify-between'>
    <p className='mt-60 pl-10 font-bold text-3xl text-white' >
    Empower Yourself: <br/> Unlock Your Potential <br/> with Our Diverse Range of Courses
</p>
      <div className=' text-xl'>
      <img src={img3} alt="Website Logo" className='mix-blend-screen'/>
      </div>
    </div>
  );
}

export default Home;
