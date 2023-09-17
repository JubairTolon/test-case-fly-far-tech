// import React from 'react';

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import AllDeals from "./AllDeals";
import Flight from "./Flight";

const HotDeals = () => {
    const [hotDeal, setHotDeal] = useState('all');
    return (
        <>
            <Box sx={{ paddingX: '150px', marginTop: '80px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px' }}>
                    <Typography variant="h1" sx={{ color: 'black', fontSize: '30px' }}>Hot Deals</Typography>
                    <Box sx={{ backgroundColor: 'secondary.light', height: '50px', display: 'flex', alignItems: 'center', paddingX: '15px', borderRadius: '50px', width: '35%', justifyContent: 'space-between' }}>
                        <Button
                            onClick={() => setHotDeal('all')}
                            sx={hotDeal === 'all' ? {
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '50px',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: 'primary.main'
                                }
                            } : {
                                backgroundColor: 'none',
                                color: 'primary.main',
                                borderRadius: '50px',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: 'secondary.main',
                                    color: 'white'
                                }
                            }}>All</Button>
                        <Button
                            onClick={() => setHotDeal('flight')}
                            sx={hotDeal === 'flight' ? {
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '50px',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: 'primary.main'
                                }
                            } : {
                                backgroundColor: 'none',
                                color: 'primary.main',
                                borderRadius: '50px',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: 'secondary.main',
                                    color: 'white'
                                }
                            }}>Flight</Button>
                        <Button
                            onClick={() => setHotDeal('hotel')}
                            sx={hotDeal === 'hotel' ? {
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '50px',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: 'primary.main'
                                }
                            } : {
                                backgroundColor: 'none',
                                color: 'primary.main',
                                borderRadius: '50px',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: 'secondary.main',
                                    color: 'white'
                                }
                            }}>Hotel</Button>
                        <Button
                            onClick={() => setHotDeal('tour')}
                            sx={hotDeal === 'tour' ? {
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '50px',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: 'primary.main'
                                }
                            } : {
                                backgroundColor: 'none',
                                color: 'primary.main',
                                borderRadius: '50px',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: 'secondary.main',
                                    color: 'white'
                                }
                            }}>Tour</Button>
                        <Button
                            onClick={() => setHotDeal('others')}
                            sx={hotDeal === 'others' ? {
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '50px',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: 'primary.main'
                                }
                            } : {
                                backgroundColor: 'none',
                                color: 'primary.main',
                                borderRadius: '50px',
                                textTransform: 'capitalize',
                                ":hover": {
                                    backgroundColor: 'secondary.main',
                                    color: 'white'
                                }
                            }}>Others</Button>
                    </Box>
                </Box >

                {hotDeal === 'all' && <AllDeals />}
                {hotDeal === 'flight' && <Flight />}
            </Box>
        </>
    );
};

export default HotDeals;