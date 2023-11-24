import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Mysnackbar from './MUIComponents/Mysnackbar';

export default function Cards(props) {
  const [mealDatas, setMealDatas] = useState([]);
  const [statusSnackbar, setStatusSnackbar] = useState(null);
  const [open, setOpen] = React.useState(false);

  const navigator = useNavigate();

  useEffect(() => {
    async function fetchMealData() {
      try {
        const respond = await axios.get("http://localhost:3000/meals");

        switch (props.AllDatas) {
          case 1: setMealDatas(respond.data[0].Dessert);
            break;
          case 2: setMealDatas(respond.data[1].Hamburger);
            break;
          case 3: setMealDatas(respond.data[2].Pizza);
            break;
          case 4: setMealDatas(respond.data[3].Souce);
            break;
          case 5: setMealDatas(respond.data[4].Salad);
            break;
          case 6: setMealDatas(respond.data[5].Drinks);
            break;
          default: console.error("Yoxdur !!!");
        }
      }
      catch (error) {
        console.error("JSON fayilinda bele bir deyer yoxdur!!!");
      }
    }

    fetchMealData();
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  async function addBasket(meal) {
    try {
      await axios.post("http://localhost:3000/basket", {
        'name': meal.name,
        'value': meal.value,
        'id': meal.id,
        'photo': meal.photo,
        'price': meal.price
      });
      setStatusSnackbar(true);
    }
    catch (error) {
      setStatusSnackbar(false);
    }
  }

  return (
    <div className='Basket'>
      {mealDatas.length > 0 ?
        <Grid container>
          {mealDatas.map((meal, index) => {
            return (
              <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                <Card key={index}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
                      image={meal.photo}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {meal.price}$
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button onClick={() => { addBasket(meal); handleClick() }} size="small" color="primary">
                      <Typography>add to basket</Typography>
                    </Button>
                    <Button onClick={() => { navigator(`/menu/${meal.id}`) }} size="small" color="primary">
                      <Typography>More detail</Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        : console.error("mealDatas bosdur!!!")
      }
      <Mysnackbar status={statusSnackbar} handleClick={handleClick} />
    </div >
  )
}