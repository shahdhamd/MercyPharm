import React, { useEffect, useState } from 'react'
import ContactComp from '../components/ContactComp/ContactComp'
import Spinner from '../components/Spinner/Spinner'

function Contact() {
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
    {/* { loading ? <Spinner/> : */}

        <ContactComp/>
        {/* } */}
    </>
  )
}

export default Contact