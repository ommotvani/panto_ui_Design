import React from 'react'
import Slider from "react-slick";
import '../../../pages/home/home.scss'
import clientReviewData from './clientReviewData';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

import stars from '../../../assets/images/stars.svg'


const ClientreviewSlider = () => {
  const settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          // centerMode:true,
          // variableWidth: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding:0,
          // initialSlide: 2
          // centerMode:true,
          // variableWidth: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding:0,
          // centerMode:true,
          // variableWidth: true,

        }
      }
    ]
  };

  return (
    <div className='container client_container'>

      <Slider {...settings} >
        {
          clientReviewData.map((ele) => {
            return (
              <div className='main_card' style={{backgroundImage:`url ()`}}>
              
                <Card className='client_review_card'
                  style={{
                    width: '375px',
                  }}
                >
                  <CardBody className='card_body_section'>
                    <div className='client_images'>
                      <img src={ele.image} alt='img' className='client_img' />

                    </div>
                    <CardTitle tag="h5" className='title client_card_title'>
                      {ele.title}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted client_card_subtitle"
                      tag="h6"
                    >
                      {ele.subtitlte}
                    </CardSubtitle>
                    <CardText className='client_description'>
                      {ele.description}
                    </CardText>
                    <div className='client_footer'>
                      <img src={stars} alt="strat" className='stars_img' />
                    </div>
                  </CardBody>
                </Card>
               
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}


export default ClientreviewSlider
