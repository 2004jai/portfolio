import NavBar from '../components/Navbar';
import { isMobile, pageClass, pageStyle } from '../services';
import Page from "../components/page";
import { useEffect, useLayoutEffect, useState } from 'react';
import $ from 'jquery';
import SocialTile from '../components/SocialTile';
import '../css/register.css'

export default function RegisterPage() {

    const [state, setState] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useLayoutEffect(() => {
        function updateSize() {
            setState({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(function () {
        setTimeout(function () {
            $(".anim4").css({"transform": 'scale(1)'});
        }, 1);
    }, [])

    return (
        <Page>
            <NavBar active={'register'} />
            <div className={pageClass() + ' fullWidth'} style={pageStyle()}>
                <div className='center anim4'>
                    <div className='c ax'>
                        <h2 className='registerPageHeading'>Register</h2>
                        <input className="webInput" placeholder='Enter name' /> <br />
                        <input className="webInput" placeholder='Enter email' /> <br />
                        {/* <input className="webInput" placeholder='Enter mobile' /> */}
                        <input className="webInput" placeholder='Enter password' /> <br />
                        <button className='registerButton SM'>Submit</button>
                    </div>
                </div>
            </div>
            {/* <div className={pageClass()} style={pageStyleHome()}>
                <div className='center'>
                    <div className='c ax'>
                        <h2 className='registerPageHeading'>Sign Up!</h2>
                        <input className="webInput" placeholder='Enter email' /> <br /> <br />
                        <input className="webInput" placeholder='Enter password' /> <br /> <br />
                        <button className='registerButton SM'>Submit</button>
                    </div>
                </div>
            </div> */}
            <SocialTile />
        </Page>
    );
}