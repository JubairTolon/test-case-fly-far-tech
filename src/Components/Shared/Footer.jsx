import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import payment from '../../assets/payment.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    marginTop: '100px', backgroundColor: 'secondary.dark',
                    height: {
                        xs: 'auto',
                        sm: 'auto',
                        md: 'auto',
                        lg: '500px'
                    },
                    paddingX: {
                        xs: '20px',
                        sm: '80px',
                        md: '100px',
                        lg: '150px'
                    }, paddingY: '40px', color: 'white', width: '100%',
                }}>
                <Box
                    sx={{
                        display: 'flex', flexDirection: 'row', gap: '18px', flexWrap: 'wrap',
                    }}>
                    <Box sx={{
                        width: '300px', marginBottom: {
                            sm: '20px'
                        }
                    }}>
                        <Typography sx={{ marginBottom: '10px' }} variant='h5'>About Us</Typography>
                        <Typography sx={{ fontSize: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eveniet minima quasi officia necessitatibus veniam quibusdam alias reprehenderit explicabo error. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    </Box>
                    <Box sx={{
                        width: '300px', marginBottom: {
                            sm: '20px'
                        }
                    }}>
                        <Typography sx={{ marginBottom: '10px' }} variant='h5'>Need help</Typography>
                        <Typography sx={{ fontSize: '15px' }}><strong>Address: </strong>Lorem ipsum dolor sit amet consectetur.</Typography>
                        <Typography sx={{ marginTop: '5px', fontSize: '15px' }}><strong>Email: </strong>abc@company.com</Typography>
                        <Typography sx={{ marginTop: '5px', fontSize: '15px' }}><strong>Phone1: </strong>+8801878763104</Typography>
                        <Typography sx={{ marginTop: '5px', fontSize: '15px' }}><strong>Phone2: </strong>+8801878763104</Typography>
                    </Box>
                    <Box sx={{
                        width: '180px', display: 'flex', flexDirection: 'column', marginBottom: {
                            xs: '40px',
                            sm: '40px',
                            md: '40px',
                            lg: 0
                        }
                    }}>
                        <Typography sx={{ marginBottom: '10px' }} variant='h5'>About</Typography>
                        <Link>Lorem</Link>
                        <Link className='mt-3 text-sm'>Lorem</Link>
                        <Link className='mt-3 text-sm'>Lorem</Link>
                        <Link className='mt-3 text-sm'>Lorem</Link>
                    </Box>
                    <Box sx={{
                        width: '180px', display: 'flex', flexDirection: 'column', marginBottom: {
                            sm: '20px'
                        }
                    }}>
                        <Typography sx={{ marginBottom: '10px' }} variant='h5'>Company</Typography>
                        <Link>Lorem</Link>
                        <Link className='mt-3 text-sm'>Lorem</Link>
                        <Link className='mt-3 text-sm'>Lorem</Link>
                        <Link className='mt-3 text-sm'>Lorem</Link>
                    </Box>
                    <Box sx={{
                        width: '180px', display: 'flex', flexDirection: 'column', marginBottom: {
                            sm: '20px'
                        }
                    }}>
                        <Typography sx={{ marginBottom: '10px' }} variant='h5'>Support</Typography>
                        <Link>Lorem</Link>
                        <Link className='mt-3 text-sm'>Lorem</Link>
                        <Link className='mt-3 text-sm'>Lorem</Link>
                        <Link className='mt-3 text-sm'>Lorem</Link>
                    </Box>
                </Box >
                <Box sx={{ display: 'flex', borderBottom: 1, borderColor: 'white', paddingY: '60px' }}>
                    <Box>
                        <Typography variant='h5'>We Accept</Typography>
                        <img className='mt-3 w-1/2' src={payment} alt="payment systems allow" />
                    </Box>
                    <Box>
                        <Typography sx={{ marginBottom: '10px' }} variant='h5'>Social</Typography>
                        <Box>
                            <span className='mr-3'><FacebookIcon sx={{ fontSize: '30px' }} /></span>
                            <span className='mr-3'><InstagramIcon sx={{ fontSize: '30px' }} /></span>
                            <span className='mr-3'><TwitterIcon sx={{ fontSize: '30px' }} /></span>
                            <span className='mr-3'><LinkedInIcon sx={{ fontSize: '30px' }} /></span>
                        </Box>
                    </Box>
                </Box>
                <Typography sx={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>© {new Date().getFullYear()} All Right Reserved By BRAC And Developed By <Link className='underline'>Fly Far Tech</Link></Typography>
            </Box>
        </>
    );
};

export default Footer;