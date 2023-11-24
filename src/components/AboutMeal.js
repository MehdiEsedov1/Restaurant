import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function AboutMeal() {
  const { mID } = useParams();
  const [mealData, setMealData] = useState({});

  async function fetchData() {
    const respond = await axios("http://localhost:3000/meals");
    return respond.data;
  }

  async function search() {
    const mealDatas = await fetchData();
    const categories = ["Dessert", "Hamburger", "Pizza", "Souce", "Salad", "Drinks"];

    for (let i = 0; i < categories.length; i++) {
      const category = mealDatas[i][categories[i]];
      for (let j = 0; j < category.length; j++) {
        if (category[j].id === mID) {
          setMealData(category[j]);
          return;
        }
      }
    }
  }

  useEffect(() => {
    search();
  }, []);

  async function addBasket(meal) {
    try {
      await axios.post("http://localhost:3000/basket", {
        'name': meal.name,
        'value': meal.value,
        'id': meal.id,
        'photo': meal.photo,
        'price': meal.price
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='aboutMeal'>
      <div className='aboutMeal-container'>
        <img src={mealData.photo} />
        <div className='aboutMeal-inner-container'>
          <Typography variant='h3'>{mealData.name}</Typography>
        </div>
        <Typography variant='h4'>{mealData.price}$</Typography>
        <Typography variant='h5' sx={{
          opacity: '0.8'
        }}>{mealData.mainData}</Typography>
        <Button onClick={() => { addBasket(mealData) }} size="small" color="primary">
          <Typography>add to basket</Typography>
        </Button>
      </div>
    </div>
  )
}