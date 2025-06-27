import React from 'react'
import { useEffect, useState } from 'react'
import Banner from '../components/Banner';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 2000)
  }, [loading]);

  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Banner/>
      </div>
    </>
  )
}

export default Home
