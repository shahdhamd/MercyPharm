import React, { useEffect, useState } from 'react'
import Care from '../components/Care/Care'
import Spinner from '../components/Spinner/Spinner'

function Product() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    if(!loading){
      setLoading(true)
    }
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <>
    { loading ? <Spinner/> :
        <Care/>}
    </>
  )
}

export default Product