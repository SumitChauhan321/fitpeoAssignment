import React from 'react'
import './Dashboard.css'
import Graph from './Graph'
import Customer from './Customer';
import Table from './Table';
const Dashboard = () => {
    return (
        <div style={{ marginLeft: '220px',backgroundColor:'rgb(245,246,248)',display:'flex',gap:'15px',flexDirection:'column' }}>
            <div style={{ display: 'flex', justifyContent: "space-between", padding: '3vh 3vw 0vw' }}>
                <div style={{ fontWeight: 'bold' }}>Hello Sumit </div>
                <div className='search-box'>
                    <span class="material-symbols-outlined">
                        search
                    </span>
                    <input style={{ border: 'none' }} type="text" placeholder='Search' />
                </div>
            </div>



            <div className='dashboard' style={{ display: 'flex', justifyContent: 'space-evenly' }}>



                <div className='earning' style={{ backgroundColor: 'white' }}>
                    <div className='earning-logo'><span class="material-symbols-outlined">
                        currency_exchange
                    </span></div>
                    <div>
                        <div style={{ color: 'rgb(177,177,177)', fontSize: '13px' }}>Earning</div>
                        <div style={{ fontWeight: 'bold' }}>$198K</div>
                        <div style={{ display: 'flex', color: 'green', fontWeight: 'bold', fontSize: '14px', alignItems: 'center' }}><span style={{ fontSize: '14px' }} class="material-symbols-outlined">
                            arrow_upward
                        </span>37.8% <p style={{ color: 'black', fontWeight: 'normal' }}> this month</p></div>
                    </div>
                </div>



                <div className='earning' style={{ backgroundColor: 'white' }}>
                    <div className='earning-logo' style={{ backgroundColor: 'rgb(231,219,255)', color: 'rgb(163,7,255)' }}><span class="material-symbols-outlined">
                        list_alt
                    </span></div>
                    <div>
                        <div style={{ color: 'rgb(177,177,177)', fontSize: '13px' }}>Orders</div>
                        <div style={{ fontWeight: 'bold' }}>$2.4K</div>
                        <div style={{ display: 'flex', color: 'red', fontWeight: 'bold', fontSize: '14px', alignItems: 'center' }}><span style={{ fontSize: '14px' }} class="material-symbols-outlined">
                            arrow_downward
                        </span>2% <p style={{ color: 'black', fontWeight: 'normal' }}> this month</p></div>
                    </div>
                </div>



                <div className='earning' style={{ backgroundColor: 'white' }}>
                    <div className='earning-logo' style={{ backgroundColor: 'rgb(203,242,255)', color: 'rgb(4,87,191)' }}><span class="material-symbols-outlined">
                        account_balance_wallet
                    </span></div>
                    <div>
                        <div style={{ color: 'rgb(177,177,177)', fontSize: '13px' }}>Balance</div>
                        <div style={{ fontWeight: 'bold' }}>$2.4K</div>
                        <div style={{ display: 'flex', color: 'red', fontWeight: 'bold', fontSize: '14px', alignItems: 'center' }}><span style={{ fontSize: '14px' }} class="material-symbols-outlined">
                            arrow_downward
                        </span>2% <p style={{ color: 'black', fontWeight: 'normal' }}> this month</p></div>
                    </div>
                </div>



                <div className='earning' style={{ backgroundColor: 'white' }}>
                    <div className='earning-logo' style={{ backgroundColor: 'rgb(255,172,214)', color: 'rgb(225,23,33)' }}><span class="material-symbols-outlined">
                        work
                    </span></div>
                    <div>
                        <div style={{ color: 'rgb(177,177,177)', fontSize: '13px' }}>Balance</div>
                        <div style={{ fontWeight: 'bold' }}>$89K</div>
                        <div style={{ display: 'flex', color: 'green', fontWeight: 'bold', fontSize: '14px', alignItems: 'center' }}><span style={{ fontSize: '14px' }} class="material-symbols-outlined">
                            arrow_downward
                        </span>11% <p style={{ color: 'black', fontWeight: 'normal' }}> this week</p></div>
                    </div>
                </div>




            </div>


            <div className='table-graph' style={{display:'flex',justifyContent:'space-around'}}>
                <Graph />
                <Customer/>
            </div>

            <div>
                <Table/>
            </div>

        </div>
    )
}

export default Dashboard