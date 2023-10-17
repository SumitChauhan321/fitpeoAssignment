import React from 'react'
import './Graph.css'
const Graph = () => {
    return (
        <div className='overview'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div >
                    <div style={{ fontWeight: 'bold' }}>Overview</div>
                    <div style={{ fontSize: "12px", color: 'rgb(165,165,166)' }}>Montly Earning</div>
                </div>


                <div style={{ backgroundColor: "white", borderRadius: '3px' }} >
                    <select style={{ outline: 'none', border: 'none', backgroundColor: 'rgb(242,239,255)', color: 'rgb(165,165,166)', padding: '3px', borderRadius: '5px' }}>
                        <option value="">Quarterly</option>
                        <option value="">Yearly</option>
                        <option value="">Montly</option>
                    </select>
                </div>
            </div>


            <div className='box'>
                <div className='skill'>
                    <div className='graph' style={{height:'25vh'}}>
                        
                    </div>
                    <div className='month' >Jan</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'30vh'}}>
                      
                    </div>
                    <div className='month' >Feb</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'10vh'}}>
                       
                    </div>
                    <div className='month' >Mar</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'5vh'}}>
                      
                    </div>
                    <div className='month' >Apr</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'15vh'}}>
                       
                    </div>
                    <div className='month' >May</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'12vh'}}>
                       
                    </div>
                    <div className='month' >Jun</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'22vh'}}>
                       
                    </div>
                    <div className='month' >Jul</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'27vh'}}>
                     
                    </div>
                    <div className='month' >Aug</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'13vh'}}>
                       
                    </div>
                    <div className='month' >Sep</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'30vh'}}>
                     
                    </div>
                    <div className='month' >Oct</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'10vh'}}>
                        
                    </div>
                    <div className='month' >Nov</div>
                </div>
                <div className='skill' >
                    <div className='graph' style={{height:'16vh'}}>
                        
                    </div>
                    <div className='month' >Dec</div>
                </div>

                
            </div>


        </div>
    )
}

export default Graph