import React, { useState, useLayoutEffect, useEffect } from 'react';
import { imageStyleActivity, pageClass, pageStyleActivity, isMobile } from "../services";
import $ from 'jquery';

export default function ActivityTile(props) {
    const [state, setState] = useState({
        width: window.innerWidth, 
        height: window.innerHeight
    });

    useEffect(function(){
        setTimeout(function(){
            $(".anim1").css({transform: 'scale(1)', opacity: 1});
        },1);
    },[])

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

    function scrollSnap(c) {
        return (c)? ' scrollSection' : ' ';
    }
    
    return (
        <div className='wrapApp'>
            <div className={pageClass() + scrollSnap(props.scrollSnap)} style={pageStyleActivity()}>
                <div className='center'>
                    <img className='bookFameImage' draggable={false} src={props.image} style={imageStyleActivity()} />
                </div>
            </div>
            <div className={pageClass() + scrollSnap(props.scrollSnap)} style={pageStyleActivity()}>
                <div className='center'>
                    <div className='frosted anim1'>
                        <div className="activityHeading">{props.heading}</div>
                        <div className="activityDescription">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}