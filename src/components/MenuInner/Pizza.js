import Cards from '../Cards.js';
import React from 'react';

export default function pizza() {

  const ProductDatas = 3;

  return (
    <div className='innerMenu'>
      <Cards AllDatas={ProductDatas} />
    </div>
  )
}