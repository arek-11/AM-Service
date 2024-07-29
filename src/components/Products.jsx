import React from 'react';
import '../scss/Products.scss';

export function Products({ products, backgroundImage }) {
  return (
    <div className='products-section' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='container mx-auto w-4/5 py-16'>
        <h2 className='text-center font-bold text-3xl mb-12'>Какую технику мы скупаем</h2>
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            products.map((el) => (
              <div key={el.id} className='relative group'>
                <img
                  className='w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105'
                  src={el.image}
                  alt={el.title}
                />
                <div className='absolute inset-0 bg-black/40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <h2 className='text-white text-2xl font-semibold'>{el.title}</h2>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
