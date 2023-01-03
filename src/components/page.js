import React, { useLayoutEffect, useState } from 'react';


export default function Page(props) {
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

    return (<div className='wrapApp'>
        {props.children}
    </div>
    )
}