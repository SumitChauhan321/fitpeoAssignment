import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div>
                <div className='header-heading'>
                    <div><span class="material-symbols-outlined">
                        token
                    </span></div>
                    <div>Dashboard</div>
                </div>
                <div className='header2'>
                    <div >
                        <div className='header2-list'>
                            <div><span class="material-symbols-outlined">
                                dashboard
                            </span></div>
                            <div>Dashboard</div>
                        </div>
                        <div ><span style={{ fontSize: '16px' }} class="material-symbols-outlined">
                            navigate_next
                        </span></div>
                    </div>
                    <div>
                        <div className='header2-list'>
                            <div><span class="material-symbols-outlined">
                                inventory_2
                            </span></div>
                            <div>Product</div>
                        </div>
                        <div><span style={{ fontSize: '16px' }} class="material-symbols-outlined">
                            navigate_next
                        </span></div>
                    </div>
                    <div>
                        <div className='header2-list'>
                            <div><span class="material-symbols-outlined">
                                assignment_ind
                            </span></div>
                            <div>Customers</div>
                        </div>
                        <div><span style={{ fontSize: '16px' }} class="material-symbols-outlined">
                            navigate_next
                        </span></div>
                    </div>
                    <div>
                        <div className='header2-list'>
                            <div><span class="material-symbols-outlined">
                                local_atm
                            </span></div>
                            <div>Income</div>
                        </div>
                        <div><span style={{ fontSize: '16px' }} class="material-symbols-outlined">
                            navigate_next
                        </span></div>
                    </div>
                    <div>
                        <div className='header2-list'>
                            <div><span class="material-symbols-outlined">
                                verified
                            </span></div>
                            <div>Promote</div>
                        </div>
                        <div><span style={{ fontSize: '16px' }} class="material-symbols-outlined">
                            navigate_next
                        </span></div>
                    </div>
                    <div>
                        <div className='header2-list'>
                            <div><span class="material-symbols-outlined">
                                live_help
                            </span></div>
                            <div>Help</div>
                        </div>
                        <div><span style={{ fontSize: '16px' }} class="material-symbols-outlined">
                            navigate_next
                        </span></div>
                    </div>

                </div>
            </div>
            <div className='header-last' style={{display:'flex',flexDirection:'row'}}>
                <div className='header-image'></div>
                <div style={{marginLeft:'5px'}}>
                    <p style={{ fontSize: '12px' }}>Sumit</p>
                    <p style={{ fontSize: '12px', color: 'rgb(182,182,202)' }}>Software Developer</p>
                </div>
                <div style={{marginLeft:'25px'}} >
                    <span style={{ fontSize: '16px', color: 'rgb(182,182,202)' }} class="material-symbols-outlined">
                    expand_more
                    </span>
                </div>
            </div>

        </div>

    )
}

export default Header