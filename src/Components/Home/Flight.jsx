// import React from 'react';

import { Box, Typography } from "@mui/material";
import plane1 from '../../assets/plane1.jpg';
import plane2 from '../../assets/plane2.jpg';

const Flight = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '40px' }}>
                <Box
                    sx={{
                        height: '350px',
                        width: '48%',
                        backgroundImage: `url(${plane2})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: '10px',
                        cursor: 'pointer',
                        ":active": {
                            opacity: '.9'
                        }
                    }}
                >
                </Box>
                <Box
                    sx={{
                        height: '350px',
                        width: '48%',
                        backgroundImage: `url(${plane1})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: '10px',
                        cursor: 'pointer',
                        ":active": {
                            backgroundColor: 'red'
                        }
                    }}
                >
                    <Typography variant="h1" sx={{ fontWeight: '600', letterSpacing: '.1ch', fontSize: '35px', color: 'white', marginLeft: '50px', marginTop: '30px' }}>Get Air Ticket at <br /> Low Price</Typography>
                </Box>
            </Box>
        </>
    );
};

export default Flight;