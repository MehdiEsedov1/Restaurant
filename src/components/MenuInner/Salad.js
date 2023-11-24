import Cards from '../Cards.js';
import React from 'react'

export default function Salad() {

  const ProductDatas = 5;

  return (
    <div className='innerMenu'>
      <Cards AllDatas={ProductDatas} />
    </div>
  )
}