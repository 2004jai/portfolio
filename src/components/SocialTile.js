import React from 'react';
import '../css/social.css';

export default function SocialTile(props) {

    function scrollSnap(c = false) {
        return (c) ? ' scrollSection' : ' ';
    }

    return <div className={'socialTile' + scrollSnap(props.scrollSnap)}>
        <div className='socialHeahing'>Follow Us</div>
        <div className='center'>
            <div className='socialICH'>
                <i className="fa fa-instagram socialIC"></i>
                <i className="fa fa-twitter-square socialIC"></i>
                <i className="fa fa-linkedin-square socialIC"></i>
                <i className="fa fa-youtube-square socialIC"></i>
            </div>
        </div>
    </div>
}