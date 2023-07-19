import React from 'react'
import '../home/home.scss'
import moreinfoArrow from '../../assets/images/Vector.svg'

function Aboutus() {
    return (
        <div className='aboutus_container container'>


            <div className='aboutus_section'>
                <h2 className='title About_us_title'>Why <br />Choosing Us</h2>


                <div className='aboutus_description'>


                    <div className='aboutus_contant'>
                        <h4>Luxury facilities</h4>
                        <div className='description'>
                            <p>
                                The advantage of hiring a workspace  with us is that givees you comfortable service and all-around facilities.
                            </p>
                            <div>
                                <span >More Info</span>
                                <img src={moreinfoArrow} alt='more info' className='moreinfo_arraow' />
                            </div>
                        </div>

                    </div>

                    <div className='aboutus_contant'>


                        <h4>Affordable Price</h4>


                        <div className='description'>
                            <p>
                                You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.
                            </p>
                            <div>
                                <span >More Info</span>
                                <img src={moreinfoArrow} alt='more info' className='moreinfo_arraow' />
                            </div>

                        </div>

                    </div>

                    <div className='aboutus_contant'>


                        <h4>Many Choices</h4>


                        <div className='description'>
                            <p>
                                You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.
                            </p>
                            <div>
                                <span >More Info</span>
                                <img src={moreinfoArrow} alt='more info' className='moreinfo_arraow' />
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>

    )
}

export default Aboutus