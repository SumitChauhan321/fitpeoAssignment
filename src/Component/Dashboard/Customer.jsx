import React from 'react'
import './Customer.css'
const Customer = () => {
    return (
        <div className='customer'>
            <div style={{padding:'10px 20px'}}>
                <div style={{fontWeight:'bold'}}>Customers</div>
                <div style={{fontSize:'12px',color:"rgb(193,193,193)"}}>Customers that buy product</div>
            </div>
            <div className='white'>
            
                <div className='yellow'>

                    <div className='inner-white'>
                        <div style={{fontWeight:'bold'}}>65%</div>
                       <div style={{fontSize:'12px'}}>Total New</div>
                       <div style={{fontSize:'12px'}}>Customers</div>
                       
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Customer