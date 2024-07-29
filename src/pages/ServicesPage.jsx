import { React } from 'react'
import { Services } from '../components/Services'
import { ServiceCard } from '../components/ServiceCard'

export function ServicesPage({ services }) {
  return (
    <div className='ServicesPage'>
      <Services ServiceCard={ServiceCard} />
    </div>
  )
}
