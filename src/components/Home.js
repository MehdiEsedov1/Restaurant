import React from 'react';
import SwipeableTextMobileStepper from './HomePage/Carousel.js';
import Adds from './HomePage/Adds.js';
import Footer from './HomePage/Footer.js';

export default function Home() {
  return (
    <div>
      <SwipeableTextMobileStepper />
      <Adds />
      <Footer />
    </div>
  )
}