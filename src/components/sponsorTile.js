import React, { useState, useLayoutEffect, useEffect } from 'react';
import { pageClass, imageStyleSponsor, isMobile } from "../services";
import '../css/sponsors.css';
import $ from 'jquery';

export default function SponsorTile(props) {

    const [state, setState] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    // useLayoutEffect(() => {
    //     function updateSize() {
    //         setState({
    //             width: window.innerWidth,
    //             height: window.innerHeight
    //         });
    //     }
    //     window.addEventListener('resize', updateSize);
    //     updateSize();
    //     return () => window.removeEventListener('resize', updateSize);
    // }, []);

    useEffect(function(){
        setTimeout(function(){
            $(".c.frostedSponsorTile").css({left: '0px', opacity: '1'});
        },1);
    },[])

    function pageStyleSponsor() {
        return (isMobile())? {
            height: state.height - (state.height * 40/100)
        } : {
            height: state.height - 200
        }
    }

    function mb() {
        return (isMobile())? ' mb': ' ';
    }

    return (
        <div className={pageClass()} style={pageStyleSponsor()}>
            <div className='v'>
                <div className={'c frostedSponsorTile anim2 '+ mb()}>
                    <img className='sponsorImage' draggable={false} src={props.sponsorOneImage} style={imageStyleSponsor()} />
                    <div className='sponsorText'>{props.sponsorOneName}</div>
                </div>
                <br />
                <div className={'c frostedSponsorTile anim2 '+ mb()}>
                    <img className='sponsorImage' draggable={false} src={props.sponsorTwoImage} style={imageStyleSponsor()} />
                    <div className='sponsorText'>{props.sponsorTwoName}</div>
                </div>
            </div>
        </div>
    );
}