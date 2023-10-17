import React from 'react'
import './Table.css'
const Table = () => {
    return (
        <div style={{ width: '93%', marginLeft: '20px', backgroundColor: 'white', padding: '2vw 2vh', borderRadius: '10px',display:'flex',flexDirection:'column',gap:'20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <div style={{ fontWeight: 'bold' }}>Product Sell</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <div className='search-box' style={{ backgroundColor: 'rgb(242,239,255)' }}>
                        <span class="material-symbols-outlined">
                            search
                        </span>
                        <input style={{ border: 'none', backgroundColor: 'rgb(242,239,255)' }} type="text" placeholder='Search' />
                    </div>


                    <div style={{ borderRadius: '3px' }} >
                        <select style={{ outline: 'none', border: 'none', backgroundColor: 'rgb(242,239,255)', color: 'rgb(165,165,166)', padding: '3px', borderRadius: '5px' }}>
                            <option value="">Last 30 days</option>
                            <option value="">Last 15 days</option>
                            <option value="">Last 7 days</option>
                        </select>
                    </div>
                </div>
            </div>



            <div >
                <table style={{ width: '100%' }} >
                    <tr>
                        <th style={{ width: "60%", textAlign: 'left' }}>Product Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Total sales</th>
                    </tr>
                    <tr>
                        <td rowspan="2" style={{ display: 'flex', gap: '10px' }}>
                            <div className='abstract'></div>
                            <div>
                                <div style={{ fontWeight: 'bold', textAlign: 'left', fontSize: '16px' }}>Abstract 3d</div>
                                <div style={{ fontSize: '12px', color: 'rgb(183,185,204)' }}>Lorem ipsum dolor sit amet.</div></div>
                        </td>
                        <td>32 in stokes</td>
                        <td>$45.99</td>
                        <td>20</td>
                    </tr>


                    <tr>
                        <td rowspan="2" style={{ display: 'flex', gap: '10px' }}>
                            <div className='abstract'></div>
                            <div>
                                <div style={{ fontWeight: 'bold', textAlign: 'left', fontSize: '16px' }}>Abstract 3d</div>
                                <div style={{ fontSize: '12px', color: 'rgb(183,185,204)' }}>Lorem ipsum dolor sit amet.</div></div>
                        </td>
                        <td>32 in stokes</td>
                        <td>$45.99</td>
                        <td>20</td>
                    </tr>




                    <tr>
                        <td rowspan="2" style={{ display: 'flex', gap: '10px' }}>
                            <div className='abstract'></div>
                            <div>
                                <div style={{ fontWeight: 'bold', textAlign: 'left', fontSize: '16px' }}>Abstract 3d</div>
                                <div style={{ fontSize: '12px', color: 'rgb(183,185,204)' }}>Lorem ipsum dolor sit amet.</div></div>
                        </td>
                        <td>32 in stokes</td>
                        <td>$45.99</td>
                        <td>20</td>
                    </tr>




                    <tr>
                        <td rowspan="2" style={{ display: 'flex', gap: '10px' }}>
                            <div className='abstract'></div>
                            <div>
                                <div style={{ fontWeight: 'bold', textAlign: 'left', fontSize: '16px' }}>Abstract 3d</div>
                                <div style={{ fontSize: '12px', color: 'rgb(183,185,204)' }}>Lorem ipsum dolor sit amet.</div></div>
                        </td>
                        <td>32 in stokes</td>
                        <td>$45.99</td>
                        <td>20</td>
                    </tr>
                    
                </table>
            </div>
        </div >
    )
}

export default Table