import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import '../scss/Home.scss';

const phoneModels = [
  'iPhone 15 Pro Max',
  'iPhone 15 Pro',
  'iPhone 15',
  'iPhone 14 Pro Max',
  'iPhone 14 Pro',
  'iPhone 14 Plus',
  'iPhone 14 Mini',
  'iPhone 14',
  'iPhone 13 Pro Max',
  'iPhone 13 Pro',
  'iPhone 13 Mini',
  'iPhone 13',
  'iPhone 12 Pro Max',
  'iPhone 12 Pro',
  'iPhone 12 Mini',
  'iPhone 12',
  'iPhone 11 Pro Max',
  'iPhone 11 Pro',
  'iPhone 11',
  'iPhone Xr',
  'iPhone Xs',
  'iPhone X',
  'iPhone SE (2022)',
];

export function SendPhoneNumber() {
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    model: '',
    condition: '',
    description: '',
    serviceType: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      setFormData(prevData => ({ ...prevData, [name]: value }));

      const pattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
      if (!pattern.test(value)) {
        setError('Пожалуйста, введите действительный номер телефона в формате: +7 (XXX) XXX-XX-XX');
      } else {
        setError('');
      }
    } else {
      setFormData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!error) {
      try {
        const response = await fetch('http://localhost:3000/send_message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Имя клиента: ${formData.name}\nТелефон: ${formData.phone}\nМодель телефона: ${formData.model}\nСостояние телефона: ${formData.condition}\nОписание: ${formData.description}\nТип услуги: ${formData.serviceType}`,
          }),
        });

        const result = await response.json();
        if (result.status === 'success') {
          alert('Сообщение отправлено!');
          setFormData({
            phone: '',
            name: '',
            model: '',
            condition: '',
            description: '',
            serviceType: '',
          });
        } else {
          setError('Ошибка отправки сообщения.');
        }
      } catch (err) {
        console.error('Ошибка при отправке сообщения:', err);
        setError('Ошибка отправки сообщения.');
      }
    }
  };

  return (
    <div
      className='SendPhoneNumber w-full h-lvh bg-center bg-no-repeat bg-cover relative mx-auto'
      style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/images/homme.webp'}')` }}
    >
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/60'>
        <h1 className='text-white text-4xl font-bold mb-6 text-center max-sm:text-2xl max-lg:text-3xl'>
          Выкуп и ремонт техники Apple
        </h1>
        <div className='bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto relative'>
          <p className='text-base text-center font-bold mb-4 text-gray-700'>
            Хотите продать или отремонтировать технику Apple?
          </p>
          <p className='text-base text-center font-bold mb-6 text-gray-600'>
            Оставьте свои данные, и мы вам перезвоним
          </p>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4'>
              <input
                name='name'
                className='py-2 px-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                type='text'
                placeholder='Имя клиента'
                value={formData.name}
                onChange={handleChange}
              />
              <InputMask
                mask='+7 (999) 999-99-99'
                value={formData.phone}
                onChange={handleChange}
                name='phone'
                maskChar={null}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    className={`py-2 px-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : ''}`}
                    placeholder='+7 (XXX) XXX-XX-XX'
                    required
                  />
                )}
              </InputMask>
              {error && <p className='text-red-500 text-sm'>{error}</p>}
              <select
                name='model'
                className='py-2 px-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.model}
                onChange={handleChange}
              >
                <option value='' disabled>Выберите модель телефона</option>
                {phoneModels.map((model, index) => (
                  <option key={index} value={model}>{model}</option>
                ))}
              </select>
              <select
                name='condition'
                className='py-2 px-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.condition}
                onChange={handleChange}
              >
                <option value='' disabled>Выберите состояние телефона</option>
                <option value='Новый'>Новый</option>
                <option value='Б/У'>Б/У</option>
                <option value='С повреждениями'>С повреждениями</option>
              </select>
              <textarea
                name='description'
                className='py-2 px-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Описание'
                rows='4'
                value={formData.description}
                onChange={handleChange}
              />
              <select
                name='serviceType'
                className='py-2 px-4 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value='' disabled>Выберите тип услуги</option>
                <option value='Продажа'>Продажа</option>
                <option value='Ремонт'>Выездной ремонт</option>
                <option value='Ремонт'>Ремонт</option>
              </select>
              <button
                className='py-2 px-6 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300'
                type='submit'
              >
                ОТПРАВИТЬ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
