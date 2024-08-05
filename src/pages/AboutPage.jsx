import React from 'react';
import {About} from '../components/About';
import {AboutService} from '../components/AboutService';
import {Advantages} from '../components/Advantages';

export function AboutPage() {
  return (
    <div>
      <About />
      <AboutService />
      <Advantages />
    </div>
  );
}
