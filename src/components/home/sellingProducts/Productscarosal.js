import React from 'react'
// import image1 from '../../assets/images/firstchair.svg';
import Slider from "react-slick";
import stars from '../../../assets/images/Group 172.svg'
import { ProductsImagesData } from './ProductsImagesData';
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import addbtn from '../../../assets/images/Frame 174.svg'
import '../../../pages/home/home.scss'



const SimpleSlider = () => {


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };



  return (
    <div className='container products_container'>

      <Slider {...settings} >

        {ProductsImagesData.map((ele, index) => {


          return (
            <Card key={index} >

              <div className='card_img d-flex justify-content-center'>
                <img
                  alt="Sample"
                  src={ele.image}
                />
              </div>

              <CardBody>
                <CardTitle tag="h5" className='product_title'>
                  chair
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted product_sub_title"
                  tag="h6"
                >
                  {ele.name}
                </CardSubtitle>

                  <img src={stars} alt='stars' className='starts'/>

                <div className='card_footer'>
                  <div className='price'>
                    <span className='product_price'> <sup>$</sup> {ele.price} </span>

                  </div>

                  <img src={addbtn} className='addbtn' alt="addbtn" />
                </div>

              </CardBody>
            </Card>
          )
        })
        }



      </Slider>
    </div>
  );
}


export default SimpleSlider
