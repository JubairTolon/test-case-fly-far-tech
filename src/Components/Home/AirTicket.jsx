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
                <form className='flex flex-wrap w-full items-center gap-6 xl:justify-between' noValidate autoComplete="off">
                    <Box sx={{ height: '100px', width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <span className='flex bg-praimary-text items-center h-12 w-full rounded-sm'><FlightTakeoffIcon sx={{ color: 'primary.main', marginX: '10px' }} /><input type='texy' className='focus:outline-none w-full' placeholder='Enter address' /></span>
                        <span className='flex bg-praimary-text items-center h-12 w-full rounded-sm'><FlightLandIcon sx={{ color: 'primary.main', marginX: '10px' }} /><input type='texy' className='focus:outline-none w-full' placeholder='Enter address' /></span>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex', cursor: 'pointer', padding: '6px', backgroundColor: 'white', height: '100px', width: '140px', borderRadius: '5px'
                        }}>
                        <Box sx={{ color: 'black', display: 'flex', width: '100%' }} onClick={handleStartCalander}>
                            <CalendarMonthIcon sx={{ fontSize: '25px', marginRight: '10px' }} />
                            {startDate !== null ? <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span>{startDate.toLocaleString('default', { month: 'long' })}</span>
                                <span className='font-bold text-3xl'>{startDate.getDay()}</span>
                                <span>{startDay}</span>
                            </Box> : <Typography>Selest start Flight</Typography>}
                            {isOpenStartCal && (
                                <DatePicker selected={startDate} onChange={handleStartDate} inline />
                            )}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex', cursor: 'pointer', padding: '6px', backgroundColor: 'white', height: '100px', width: '140px', borderRadius: '5px'
                        }}>
                        <Box sx={{ color: 'black', display: 'flex', width: '100%' }} onClick={handleReturnCalander}>
                            <CalendarMonthIcon sx={{ fontSize: '25px', marginRight: '10px' }} />
                            {returnDate !== null ? <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span>{returnDate.toLocaleString('default', { month: 'long' })}</span>
                                <span className='font-bold text-3xl'>{returnDate.getDay()}</span>
                                <span>{returnDay}</span>
                            </Box> : <Typography>Selest return Flight</Typography>}
                            {isOpenReturnCal && (
                                <DatePicker selected={returnDate} onChange={handleReturnDate} inline />
                            )}
                        </Box>
                    </Box>
                    <Box sx={{ height: '100px', width: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <span className='flex bg-praimary-text items-center h-12 w-full rounded-sm'><input type='texy' className='focus:outline-none pl-3 w-full' placeholder='Enter address' /></span>
                        <span className='flex bg-praimary-text items-center h-12 w-full rounded-sm'><input type='texy' className='focus:outline-none pl-3 w-full' placeholder='Enter address' /></span>
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