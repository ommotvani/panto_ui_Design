import React from 'react'
import '../home/home.scss'
import ClientreviewSlider from '../../components/home/clientreview/ClientreviewSlider'


function Clientreview() {
  return (
    <div  className='client_container'>
      <div className='container_section'>
        <div className='client_Section_title'>
          <div className='client_section_subtitle'>
            <span className='client_section_heading'> Testimonials </span>
            <h3 className='title'>Our Client Reviews</h3>
          </div>
        </div>
        <ClientreviewSlider />
      </div>
    </div>
  )
}

export default Clientreview