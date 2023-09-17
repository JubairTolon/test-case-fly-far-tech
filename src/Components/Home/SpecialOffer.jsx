// import React from 'react';

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import AllDeals from "./AllDeals";
import AllOffers from "./AllOffers";


const SpecialOffer = () => {
    const [specialOffer, setSpecialOffer] = useState('allOffers');
    return (
        <>
            <Box sx={{ paddingX: '150px', marginTop: '120px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px' }}>
                    <Typography variant="h1" sx={{ color: 'black', fontSize: '30px' }}>Special Offers</Typography>
                    <Button onClick={() => setSpecialOffer('limited')} sx={{ textTransform: 'capitalize' }}>View All</Button>
                </Box >
                {specialOffer === 'limited' && <AllDeals />}
                {specialOffer === 'allOffers' && <AllOffers />}
            </Box>
        </>
    );
};

export default SpecialOffer;