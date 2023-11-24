import Cards from '../Cards.js';
import React from 'react';

export default function Souce() {

  const ProductDatas = 4;

  return (
    <div className='innerMenu'>
      <Cards AllDatas={ProductDatas} />
    </div>
  )
}