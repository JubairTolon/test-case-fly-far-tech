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
                    backgroundColor: 'secondary.dark', paddingY: '40px', color: 'white', width: '100%',
                    marginTop: {
                        xs: '40px',
                        sm: '60px',
                        md: '80px',
                        lg: '100px'
                    },
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
                    }
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '18px', flexWrap: 'wrap' }}>
                    <Box sx={{
                        width: '300px',
                        marginBottom: {
                            sm: '20px'
                        }
                    }}>
                        <Typography sx={{ marginBottom: '10px' }} variant='h5'>About Us</Typography>
                        <Typography sx={{ fontSize: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eveniet minima quasi officia necessitatibus veniam quibusdam alias reprehenderit explicabo error. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    </Box>
                    <Box sx={{
                        width: '300px',
                        marginBottom: {
                            sm: '20px'
                        }
                    }}>
                        <Typography sx={{ marginBottom: '10px' }} variant='h5'>Need help</Typography>
                        <Typography sx={{ fontSize: '15px' }}><strong>Address: </strong>Lorem ipsum dolor sit amet consectetur.</Typography>
                        <Typography sx={{ marginTop: '5px', fontSize: '15px' }}>Email: abc@company.com</Typography>
                        <Typography sx={{ marginTop: '5px', fontSize: '15px' }}>Phone1: +8801878763104</Typography>
                        <Typography sx={{ marginTop: '5px', fontSize: '15px' }}>Phone2: +8801878763104</Typography>
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
                <Box sx={{
                    borderBottom: 1, borderColor: 'white', paddingY: '60px', display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row',
                        lg: 'row'
                    },
                }}>
                    <Box>
                        <Typography variant='h5'>We Accept</Typography>
                        <img className='mt-3 w-full lg:w-1/2' src={payment} alt="payment systems allow" />
                    </Box>
                    <Box sx={{ marginTop: { xs: '30px' } }}>
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
            </Box >
        </>
    );
};

export default Footer;