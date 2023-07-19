import React from 'react'
import '../../assets/scss/App.scss'
import { Icon } from '@iconify/react';


function Footer() {
    return (
        <div className='footer_section'>

            <div className='footer footer_container'>

                <div className='footer_content'>


                    <div className='panto_review'>
                        <span className='title'>Panto</span>
                        <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    </div>




                    <div className='service_section'>
                        <span className='footer_title'>Services</span>
                   

                        <div className='d-flex flex-column'>
                            <a href='/' className='email' >Email Marketing</a>
                            <a href='/'> Campaigns</a>
                            <a href='/'>Branding</a>
                        </div>
                     
                    </div>

                    <div className='furniture_section'>
                        <span className='footer_title'>Furniture</span>
                        <div className='d-flex flex-column'>
                            <p>
                                <a href='/'>Beds</a>
                            </p>
                            <p>

                                <a href='/'>Chair</a>
                            </p>
                            <p>

                                <a href='/'>All</a>
                            </p>
                        </div>

                    </div>

                    <div className='follow_us_section'>
                        <span className='footer_title'>Follow Us</span>
                        <div className='d-flex flex-column'>




                            
                                <a href="/"  class="social_item">
                                <Icon icon="gg:facebook" color="black" width="25" height="25" />
                                <span>facebook</span>
                                </a>
                          

                     

                                <a href="/"  class="social_item">
                                <Icon icon="uim:twitter" color="black" width="25" height="25" />
                                <span>twitter</span>
                                </a>
                            


                          

                                <a href="/"  class="social_item">
                                <Icon icon="fa6-brands:instagram" color="black" width="25" height="25" />
                                <span>instagram</span>
                                </a>
                            



                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-between footer_end_container'>
                    <p className='copy_right'>   Copyright © 2021  </p>

                    <div className='footer_end g-3' >
                        <p> Terms & Conditions  </p>
                        <p>   Privacy Policy   </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer