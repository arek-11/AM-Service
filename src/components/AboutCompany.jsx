import React from 'react';
import '../scss/AboutCompany.scss';

export function AboutCompany({ advantages }) {
  return (
    <div className='AboutCompany mt-16'>
      <div className='container mx-auto py-16 px-4'>
        <h2 className='title text-4xl font-bold text-center text-dark-gray mb-14 '>
          Почему именно мы?
        </h2>
        <div className='description text-lg text-gray-700 max-w-3xl mx-auto'>
          <p>
            Наша компания специализируется на скупке и ремонте техники Apple, бывшей в употреблении. Мы выкупаем широкий перечень цифровых устройств (ноутбуки, смартфоны, планшеты, персональные компьютеры) в любом состоянии.
          </p>
          <p>
            Цифровая техника сегодня есть в каждом доме. Однако срок службы подобных устройств ограничен. Со временем девайсы выходят из строя или морально устаревают. В такой ситуации б/у устройства могут стать обузой, лишними предметами интерьера, занимающими место.
          </p>
          <p>
            Наша компания поможет эффективно решить проблему избавления от ненужной техники и при этом предоставляет отличную возможность заработать. Для этого достаточно обратиться к нам. Наши специалисты помогут избавиться от старых и неработающих цифровых девайсов без лишних проблем и в короткие сроки.
          </p>
        </div>
      </div>

      <div className='advantages-section py-16 bg-light-gray'>
        <h2 className='section-title text-3xl font-bold text-center text-dark-gray mb-12'>
          Наши преимущества
        </h2>
        <div className='container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>
          {advantages.map((el) => (
            <div key={el.id} className='advantage-item bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative'>
              <div className='icon-container'>
                <img src={el.image} alt={el.title} className='icon-image' />
              </div>
              <div className='p-6 pt-16'>
                <h3 className='text-xl font-semibold text-dark-gray mb-2'>{el.title}</h3>
                <p className='text-gray-600'>{el.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
