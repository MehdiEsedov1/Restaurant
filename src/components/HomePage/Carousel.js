import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Typography } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath:
            'https://mcdonalds.az/images/69498c47c850890688f6876f25002a4c.png',
    },
    {
        imgPath:
            'https://scontent.fgyd8-1.fna.fbcdn.net/v/t39.30808-6/287502092_5301444783227014_4057451988657375099_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HvcJhIUXnl4AX_98vok&_nc_ht=scontent.fgyd8-1.fna&oh=00_AfAF1cqDiHvidFAjd0bJF3X_tJ7YmW0slnl48c2Eqf_iXA&oe=65551209',
    },
    {
        imgPath:
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/2802/production/_128624201_brands-lilt-brand-page-desktop-1600x700.jpg.webp',
    },
    {
        imgPath:
            'https://img.freepik.com/free-photo/fried-noodles_74190-4698.jpg',
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const fontStyle = {
        fontSize: '2.5rem'
    }

    return (
        <Box className='box-cariusel' sx={{ flexGrow: 1 }} >
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                className='carousel-photos'
                                component="img"
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        style={{
                            fontSize: "2rem",
                            color: "green"
                        }}
                    >
                        <Typography sx={fontStyle}>Next</Typography>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft sx={{
                                fontSize: "3rem"
                            }} />
                        ) : (
                            <KeyboardArrowRight sx={{
                                fontSize: "3rem"
                            }} />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        style={{
                            fontSize: "2rem",
                            color: "green"
                        }}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight sx={{
                                fontSize: "3rem"
                            }} />
                        ) : (
                            <KeyboardArrowLeft sx={{
                                fontSize: "3rem"
                            }} />
                        )}
                        <Typography sx={fontStyle}>Back</Typography>
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;