import React from 'react'
import moreinfoArrow from '../../assets/images/Vector.svg'
import materialgroupimg from '../../assets/images/Group 48095438 (1).svg'
import '../home/home.scss'

function Material() {
  return (
    <div>
      <div className='material_section'>
        <div className='material_section_decription'>
          <span className='material_section_heading'>Materials</span>
          <p className='title material_section_title'> Very serious  <br /> materials for making <br />furniture</p>
          <p className='material_section_content'> Because panto was very serious about designing furniture for our <br />environment, using a very expensive and famous capital but at a <br />relatively low price</p>
          <span className='material_scetion_footer'>More Info</span>
          <img src={moreinfoArrow} alt='more info' className='moreinfo_arraow img-fluid' />
        </div>


        <div className='material_section_img_container'>
          <img src={materialgroupimg} alt="material_group_img" className='img-fluid' />
        </div>
      </div>
    </div>
  )
}

export default Material