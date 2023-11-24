import Cards from '../Cards.js';
import React from 'react';

export default function Drinks() {

  const ProductDatas = 6;

  return (
    <div className='innerMenu'>
      <Cards AllDatas={ProductDatas} />
    </div>
  )
}