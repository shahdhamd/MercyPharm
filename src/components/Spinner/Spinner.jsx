import React from 'react'
import './Spinner.css'
function Spinner() {
    return (
        <div style={{height:'100vh',overflowY:'hidden',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div class="spinner" >
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        </div>
    )
}

export default Spinner