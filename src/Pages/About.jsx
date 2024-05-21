import React, { useEffect, useState } from 'react'
import AboutPharm from '../components/AboutPharm/AboutPharm'
import Spinner from '../components/Spinner/Spinner'

function About() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    if(!loading){
      setLoading(true)
    }
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <>
    {/* { loading ? <Spinner /> : */}
        <AboutPharm/>
         {/* } */}
    </>
  )
}

export default About