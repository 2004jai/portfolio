import NavBar from '../components/Navbar';
import { isMobile, pageClass, pageStyleActivity } from '../services';
import Page from "../components/page";
import { useEffect, useLayoutEffect, useState } from 'react';
import $ from 'jquery';

export default function HomePage() {

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

    useEffect(function(){
        setTimeout(function(){
            $(".anim3").css({transform: 'scale(1)', opacity: 1});
        },1);
    },[])

    function pageStyleHome() {
        return (isMobile())? {
            height: state.height - (state.height * 60/100)
        } : {
            height: state.height - 74
        }
    }

    return (
        <Page>
            <NavBar active={'home'} />
            <div className={pageClass()} style={pageStyleHome()}>
                <div className='center'>
                    <div className='c'>
                        <h2 className='registerHeading'>Register Now!</h2>
                        <button className='registerButton'>Get Tickets</button>
                    </div>
                </div>
            </div>
            <div className={pageClass()} style={pageStyleHome()}>
                <div className='center'>
                    <div className='frosted hm anim3'>
                        <div className='activityHeading'>Tech Vibes</div>
                        <div className='activityDescription'>
                            Tech Vibes is the annual tech fest of Birla Institute of Technology, Mesra, Jaipur Campus. {/* The theme for this years fest is Electric vehicles, Solar power and Drones. */} We are pleased to announce tht the fest will be held on 24 -25 jan, 2023
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}