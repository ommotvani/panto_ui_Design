import React from 'react'
import '../home/home.scss'
import ProductsTab from '../../components/home/sellingProducts/ProductsTab'
import SimpleSlider from '../../components/home/sellingProducts/Productscarosal'
import moreinfoArrow from '../../assets/images/Vector.svg'

function ProductPage() {
  return (
    <section className='prodcuts_section'>
{/* 
      <div className='title products_page_title'> */}
        <h3>Best Selling Product</h3>
      {/* </div> */}

      <div>
        <ProductsTab />
        <SimpleSlider />

        <div className='viewall_section'>
          <span>View All</span>
          <img src={moreinfoArrow} alt='more info' className='moreinfo_arraow' />
        </div>

      </div>

    </section>
  )
}

export default ProductPage