import React from 'react'
import { SendPhoneNumber } from '../components/SendPhoneNumber'
import { AboutCompany } from '../components/AboutCompany'
import { Products } from '../components/Products'



export function HomePage({ products, advantages }) {
  return (
    <div className='HomePage'>
      <SendPhoneNumber />
      <AboutCompany advantages={advantages} />
      <Products products={products} />
    </div>
  )
}