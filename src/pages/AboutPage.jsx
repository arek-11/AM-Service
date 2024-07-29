import React from 'react';
import { About } from '../components/About';
import { AboutService } from '../components/AboutService';
import { Advantages } from '../components/Advantages';
import { Testimonials } from '../components/Testimonials';

export function AboutPage() {
  return (
    <>
      <About />
      <AboutService />
      <Advantages />
      <Testimonials />

    </>
  );
}
