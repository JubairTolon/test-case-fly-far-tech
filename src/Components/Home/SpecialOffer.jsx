// import React from 'react';

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import AllDeals from "./AllDeals";
import AllOffers from "./AllOffers";


const SpecialOffer = () => {
    const [specialOffer, setSpecialOffer] = useState('allOffers');
    return (
        <>
            <Box sx={{
                paddingX: {
                    xs: '20px',
                    sm: '80px',
                    md: '100px',
                    lg: '150px'
                },
                marginTop: {
                    xs: '50px',
                    sm: '80px',
                    md: '100px',
                    lg: '120px',
                }
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px' }}>
                    <Typography variant="h1" sx={{ color: 'black', fontSize: '30px' }}>Special Offers</Typography>
                    <Button onClick={() => setSpecialOffer('limited')} sx={{ textTransform: 'capitalize', fontSize: '16px' }}>View All</Button>
                </Box >
                {specialOffer === 'limited' && <AllDeals />}
                {specialOffer === 'allOffers' && <AllOffers />}
            </Box>
        </>
    );
};

export default SpecialOffer;