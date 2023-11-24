import Cards from '../Cards.js';
import React from 'react';

export default function burger() {

  const ProductDatas = 2;

  return (
    <div className='innerMenu'>
      <Cards AllDatas={ProductDatas} />
    </div>
  )

}