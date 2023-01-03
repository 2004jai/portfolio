import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import navbarCSS from '../css/navbar.css';

export default function NavBar(props) {
    
    function scrollSnap(c=false) {
        return (c)? ' scrollSection' : ' ';
    }

    return <nav className={'navbar navbar-expand-lg bg-light .sticky-top'+ scrollSnap(props.scrollSnap)}>
        <img draggable={false} src={logo} alt='Logo' className='appLogo' />
        <div className='container-fluid'>
            <span className='navbar-brand'>
                <img draggable={false} src={logo} alt='Logo' className='d-inline-block align-text-top' />
            </span>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end' id='navbarNavAltMarkup'>
                <div className='nav navbar-nav'>
                    <Link to='/home'>
                        <span className={(props.active === 'home')? 'nav-link active' : 'nav-link'}>Home</span>
                    </Link>
                    <Link to='/events'>
                        <span className={(props.active === 'events')? 'nav-link active' : 'nav-link'}>Events</span>
                    </Link>
                    <Link to='/sponsors'>
                        <span className={(props.active === 'sponsors')? 'nav-link active' : 'nav-link'}>Sponsors</span>
                    </Link>
                    <Link to='/register'>
                        <span className={(props.active === 'register')? 'nav-link active' : 'nav-link'}>Register</span>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
}