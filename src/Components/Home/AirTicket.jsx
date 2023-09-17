import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
const AirTicket = () => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [way, setWay] = useState('one-way');

    const [startDate, setStartDate] = useState(null);
    const [isOpenStartCal, setIsOpenStartCal] = useState(false);

    const [returnDate, setReturnDate] = useState(null);
    const [isOpenReturnCal, setIsOpenReturnCal] = useState(false);

    let startDay = weekday[startDate?.getDay()];
    let returnDay = weekday[returnDate?.getDay()];

    const handleStartDate = (e) => {
        setIsOpenStartCal(!isOpenStartCal);
        setStartDate(e);
    };
    const handleStartCalander = (e) => {
        e.preventDefault();
        setIsOpenStartCal(!isOpenStartCal);
    };

    const handleReturnDate = (e) => {
        setIsOpenReturnCal(!isOpenReturnCal);
        setReturnDate(e);
    };
    const handleReturnCalander = (e) => {
        e.preventDefault();
        setIsOpenReturnCal(!isOpenReturnCal);
    };
    return (
        <Box sx={{}}>
            <Box>
                <Button
                    onClick={() => setWay('one-way')}
                    sx={way === 'one-way' ? {
                        color: 'white',
                        backgroundColor: 'secondary.main',
                        textTransform: 'capitalize',
                        letterSpacing: '.1rem',
                        boxShadow: 'none',
                        borderRadius: '5px',
                        marginRight: '3px',
                        ":hover": {
                            boxShadow: 'none',
                            backgroundColor: 'secondary.main'
                        },
                    } : {
                        color: 'white',
                        textTransform: 'capitalize',
                        letterSpacing: '.1rem',
                        boxShadow: 'none',
                        borderRadius: '5px',
                        marginRight: '3px',
                        backgroundColor: 'none',
                        ":hover": {
                            boxShadow: 'none',
                            backgroundColor: 'secondary.main'
                        },
                    }}>
                    One day
                </Button>
                <Button
                    onClick={() => setWay('round-day')}
                    sx={way === 'round-day' ? {
                        color: 'white',
                        backgroundColor: 'secondary.main',
                        textTransform: 'capitalize',
                        letterSpacing: '.1rem',
                        boxShadow: 'none',
                        borderRadius: '5px',
                        marginRight: '3px',
                        ":hover": {
                            boxShadow: 'none',
                            backgroundColor: 'secondary.main',
                        },
                    } : {
                        color: 'white',
                        textTransform: 'capitalize',
                        letterSpacing: '.1rem',
                        boxShadow: 'none',
                        borderRadius: '5px',
                        marginRight: '3px',
                        backgroundColor: 'none',
                        ":hover": {
                            boxShadow: 'none',
                            backgroundColor: 'secondary.main'
                        },
                    }}>
                    Round day
                </Button>
                <Button
                    onClick={() => setWay('multicity')}
                    sx={way === 'multicity' ? {
                        color: 'white',
                        backgroundColor: 'secondary.main',
                        textTransform: 'capitalize',
                        letterSpacing: '.1rem',
                        boxShadow: 'none',
                        borderRadius: '5px',
                        marginRight: '3px',
                        ":hover": {
                            boxShadow: 'none',
                            backgroundColor: 'secondary.main'
                        },
                    } : {
                        color: 'white',
                        textTransform: 'capitalize',
                        letterSpacing: '.1rem',
                        boxShadow: 'none',
                        borderRadius: '5px',
                        marginRight: '3px',
                        backgroundColor: 'none',
                        ":hover": {
                            boxShadow: 'none',
                            backgroundColor: 'secondary.main',
                        },
                    }}>
                    Multicity
                </Button>
            </Box>
            <Box sx={{ width: '100%', marginTop: '20px' }}>
                <form className='flex flex-wrap w-full xl:gap-0 gap-6 xl:justify-between'>
                    <Box sx={{
                        height: '100px',
                        width: {
                            xs: '100%',
                            sm: '400px',
                            md: '400px',
                            lg: '400px',

                        },
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                    }}>
                        <span className='flex bg-praimary-text items-center h-12 w-full rounded-sm'>
                            <FlightTakeoffIcon sx={{ color: 'primary.main', marginX: '10px' }} />
                            <input type='texy' className='focus:outline-none w-full' placeholder='Enter address' />
                        </span>
                        <span className='flex bg-praimary-text items-center h-12 w-full rounded-sm'>
                            <FlightLandIcon sx={{ color: 'primary.main', marginX: '10px' }} />
                            <input type='texy' className='focus:outline-none w-full' placeholder='Enter address' />
                        </span>
                    </Box>
                    <Box
                        onClick={handleStartCalander}
                        sx={{
                            display: 'flex', cursor: 'pointer', padding: '6px', backgroundColor: 'white', height: '100px', borderRadius: '5px', justifyContent: 'center',
                            marginBottom: {
                                xs: '15px',
                                sm: '15px',
                                md: 0,
                                lg: 0
                            },
                            alignItems: {
                                xs: 'center',
                                sm: 'center',
                                md: 'top',
                                lg: 'top'
                            },
                            width: {
                                xs: '100%',
                                sm: '140px',
                                md: '140px',
                                lg: '140px',
                            },
                        }}>
                        <CalendarMonthIcon sx={{ fontSize: '25px', marginRight: '10px' }} />
                        {startDate !== null ?
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span>{startDate.toLocaleString('default', { month: 'long' })}</span>
                                <span className='font-bold text-2xl'>{startDate.getDay()}</span>
                                <span>{startDay}</span>
                            </Box> :
                            <Typography>Select start Flight</Typography>
                        }
                        {isOpenStartCal && (
                            <DatePicker
                                dateFormat={"dd-MM-yyyy"}
                                selected={startDate}
                                onChange={handleStartDate}
                                inline />
                        )}
                    </Box>
                    <Box
                        onClick={handleReturnCalander}
                        sx={{
                            display: 'flex', cursor: 'pointer', padding: '6px', backgroundColor: 'white', height: '100px', borderRadius: '5px', justifyContent: 'center',
                            alignItems: {
                                xs: 'center',
                                sm: 'center',
                                md: 'top',
                                lg: 'top'
                            },
                            width: {
                                xs: '100%',
                                sm: '140px',
                                md: '140px',
                                lg: '140px',
                            },
                        }}>
                        <CalendarMonthIcon sx={{ fontSize: '25px', marginRight: '10px' }} />
                        {returnDate !== null ?
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span>{returnDate.toLocaleString('default', { month: 'long' })}</span>
                                <span className='font-bold text-2xl'>{returnDate.getDay()}</span>
                                <span>{returnDay}</span>
                            </Box> :
                            <Typography>Select return Flight</Typography>
                        }
                        {isOpenReturnCal && (
                            <DatePicker selected={returnDate} onChange={handleReturnDate} inline />
                        )}
                    </Box>
                    <Box sx={{
                        height: '100px',
                        width: {
                            xs: '100%',
                            sm: '300px',
                            md: '300px',
                            lg: '300px',
                        },
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                    }}>
                        <span className='flex bg-praimary-text items-center h-12 w-full rounded-sm'>
                            <input type='texy' className='focus:outline-none pl-3 w-full' placeholder='class' />
                        </span>
                        <span className='flex bg-praimary-text items-center h-12 w-full rounded-sm'>
                            <input type='texy' className='focus:outline-none pl-3 w-full' placeholder='how much days' />
                        </span>
                    </Box>
                    <Button
                        sx={{
                            backgroundColor: 'primary.light',
                            height: '100px', width: '120px',
                            borderRadius: '5px',
                            ':hover': {
                                backgroundColor: 'secondary.main'
                            }
                        }}>
                        <span className=' text-praimary-text capitalize flex flex-col items-center'><SearchIcon />Search</span>
                    </Button>
                </form>
            </Box >
        </Box >
    );
};

export default AirTicket;