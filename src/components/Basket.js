import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Basket() {
    const [mealDatas, setMealDatas] = useState([]);
    const [enteredNumbers, setEnteredNumbers] = useState({});
    const [total, setTotal] = useState(0);

    const navigator = useNavigate();

    useEffect(() => {
        async function getMealFromBasket() {
            const response = await axios.get('http://localhost:3000/basket');
            setMealDatas(response.data);
            calculateTotal(response.data, enteredNumbers);
        }

        getMealFromBasket();
    }, [enteredNumbers]);

    async function deleteFromBasket(meal) {
        const quantity = enteredNumbers[meal.id] || 1;
        const totalPrice = meal.price * quantity;

        await axios.delete(`http://localhost:3000/basket/${meal.id}`);
        setMealDatas((prevMeals) => prevMeals.filter((m) => m.id !== meal.id));
        setTotal(Math.max(0, total - totalPrice));
    }

    const handleInputChange = (event, meal) => {
        const { value } = event.target;
        if (!isNaN(value)) {
            setEnteredNumbers((prevNumbers) => ({
                ...prevNumbers,
                [meal.id]: value,
            }));
        }
    };

    function handleClick(meal) {
        const quantity = enteredNumbers[meal.id] || 1;
        const totalPrice = meal.price * quantity;
        setTotal(total + totalPrice);
    }

    const calculateTotal = (meals, numbers) => {
        let calculatedTotal = 0;
        meals.forEach((meal) => {
            const quantity = numbers[meal.id] || 0;
            calculatedTotal += meal.price * quantity;
        });
        setTotal(calculatedTotal);
    };

    return (
        <div className='Basket'>
            <div className='total'>
                <Typography variant="h6" gutterBottom>
                    Total: {total}$
                </Typography>
            </div>
            {
                mealDatas.length > 0 ? (
                    <Grid container>
                        {mealDatas.map((meal, index) => (
                            <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                                <Card key={index}>
                                    <CardActionArea>
                                        <CardMedia component="img" height="300" image={meal.photo} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {meal.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {meal.price}$
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{
                                        display: 'block'
                                    }}>
                                        <input
                                            maxLength={2}
                                            type="text"
                                            value={enteredNumbers[meal.id] || ''}
                                            onChange={(event) => handleInputChange(event, meal)}
                                            placeholder='Count'
                                        />
                                        <div className='Basket-card-button-container'>
                                            <Button onClick={() => handleClick(meal)} size="small" color="primary">
                                                <Typography>Buy</Typography>
                                            </Button>
                                            <Button onClick={() => navigator(`/menu/${meal.id}`)} size="small" color="primary">
                                                <Typography>More detail</Typography>
                                            </Button>
                                            <Button onClick={() => deleteFromBasket(meal)} size="small" color="primary">
                                                <Typography>Delete from basket</Typography>
                                            </Button>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    console.error('mealDatas bosdur!!!')
                )
            }
            <Button onClick={() => navigator('payment')}
                style={
                    {
                        marginTop: '50px',
                        marginBottom: '50px',
                        width: '300px',
                        height: '50px',
                        color: 'white'
                    }
                }
                variant="contained"
            >
                <Typography>Payment</Typography>
            </Button>
        </div >
    );
}