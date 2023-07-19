import React from 'react'
import '../home/home.scss'
import moreinfoArrow from '../../assets/images/Vector.svg'
import experincegroupimg from '../../assets/images/experince_section_groupimage.svg'



function Experiences() {
    return (
        <div className='experince_section'>
            <div className='experience_first_section '>
                <div className='first_image_container'>
                    <img src={experincegroupimg} alt='firstimg' className='firstimg img-fluid'/>
                </div>
                <div className='experince_section_description'>
                    <span className='experince_section_heading'>experince</span>
                    <p className='title experience_Section_title'> we provide you  the <br /> best experience</p>
                    <p className='experience_Section_description'> You don't have to worry about the result because all of these <br />interiors are made by people who are professionals in their fields <br /> with an elegant and lucurious style and with premium quality <br/>materials</p>
                    <span className='experince_section_footer'>More Info</span>
                    <img src={moreinfoArrow} alt='more info' className='moreinfo_arraow img-fluid' />
                </div>
            </div>


        </div>
    )
}

export default Experiences