import React from 'react'
import NavbarHome from '../components/common/NavbarHome'
import serchButton from '../assets/images/Frame 48095395.svg'

function Banner() {
  return (
    <div>
          <div className='homepage' >
      <NavbarHome />
      <div className='main_content container'>

        <h1 className=' homepage_title' >Make your interior more
          minimalistic & modern</h1>

        <p className=' homepage_subtitle'>  Turn your room with panto into a lot more minimalist <br />
          and modern with ease and speed </p>

        <div className='serch'>
          <input placeholder="Search furniture" />
          <img src={serchButton} alt="serch button" className='serch_btn' />
        </div>

      </div>
    </div>
    </div>
  )
}

export default Banner