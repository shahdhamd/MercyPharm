import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero/Hero'
import Spinner from '../components/Spinner/Spinner'

function Home() {
  const [loading,setLoading]=useState(true)
  // useEffect(()=>{
  //   if(!loading){
  //     setLoading(true)
  //   }
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },2000)
  // },[])
  return (
    <>
    {/* { loading ? <Spinner/> : */}
        <Hero/>
        {/* } */}
    </>
  )
}

export default Home