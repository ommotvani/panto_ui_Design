import React from 'react'
import Banner from '../Banner'
import Aboutus from '../aboutUs/Aboutus'
import ProductPage from '../sellingProductPage/ProductsPage'
import Experiences from '../experiences/Experiences'
import Material from '../material/Material'
import Clientreview from '../clientreview/Clientreview'
import Footer from '../../components/common/Footer'
// import Experiences from '../experiences/Experiences'



function Home() {
  return (

    <div  >
    <Banner />
    <Aboutus />
    <ProductPage />
    <Experiences />
    <Material />
    <Clientreview />
    <Footer />
    </div>

  )
}

export default Home