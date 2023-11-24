import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

export default function Faq() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const respond = await axios('http://localhost:3000/questions');
            setQuestions(respond.data);
        }

        fetchData();
    }, []);

    return (
        <div className='faq'>
            <div className='accordion-container'> {
                questions.length > 0 ?
                    questions.map((question, index) => {
                        return <Accordion key={index}>
                            <AccordionSummary
                                sx={{
                                    backgroundColor: 'rgb(1, 74, 1)',
                                    color: 'white',
                                    height: '100px',
                                }}
                                expandIcon={<ExpandMoreIcon sx={{
                                    color: 'white'
                                }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant='h5'>
                                    {question.questionSummary}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {question.questionDetails}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    })
                    :
                    console.error("Questions not found")
            }
            </div>
        </div>
    )
}