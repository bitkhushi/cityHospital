import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
// import Button from '../container/UI/Buttons/Button';


function Header(props) {


    let cartdata = useSelector(state => state.addtocart)
   

    let Totalitems = cartdata.cart.reduce((acc, v) => acc + v.qty, 0)
   
    let status = localStorage.getItem("logindata")

    const loggeddata = () => {
        localStorage.removeItem("logindata")
    }



    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <div>
            <div className="main-header">
                <div id="topbar" className="d-flex align-items-center fixed-top">
                    <div className="container d-flex justify-content-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                            <i className="bi bi-phone" /> +91 9988776655
                        </div>
                       
                        <div className="d-none d-lg-flex social-links align-items-center">
                        <Link to='/cart' className="d-none d-lg-flex social-links align-items-center">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={Totalitems} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                        </div>
                    </div>
                </div>
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">
                        <div className="logo">
                            <a href="index.html">
                                <h1 className="logo me-auto">City</h1><br />
                                <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                            </a>
                        </div>
                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>

                                <li><Link to='/' className="nav-link scrollto active">Home</Link></li>
                                <li><Link to='/departsments' className="nav-link scrollto">Departments</Link></li>
                                <li><Link to='/doctors' className="nav-link scrollto" >Doctors</Link></li>
                                <li><Link to='/about' className="nav-link scrollto " >About</Link></li>
                                {/* <li><Link to='/contact'className="nav-link scrollto">Contact</Link></li>  */}
                                <li><Link to='/conatct1' className="nav-link scrollto">Contact</Link></li>
                                <li><Link to='/medicines' className="nav-link scrollto">Medicine</Link></li>
                                <li><Link to='/counter' className="nav-link scrollto">Counter</Link></li>


                                {/* <li><Link to='/appointment'className="nav-link scrollto">MakeAppointment</Link></li>  */}

                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>
                        <span className="d-none d-md-inline"><Link to='/appointment' className="appointment-btn scrollto">Make an Appointment</Link></span>




                        <a href="#" className="appointment-btn scrollto">
                            {
                                status ?
                                    <span className="d-none d-md-inline"><Link to='/auth' className="nav-link scrollto" style={{ color: 'white' }} onClick={loggeddata}>Logout</Link></span> :

                                    <span className="d-none d-md-inline"><Link to='/auth' className="nav-link scrollto" style={{ color: 'white' }}>Login/ Signup</Link></span>
                            }

                        </a>
                    </div>
                </header>
            </div>
        </div>

    );
}

export default Header;