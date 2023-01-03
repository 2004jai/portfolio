const desktopWidth = 500;

function isMobile() {
    return (window.innerWidth < desktopWidth);
}
function pageClass() {
    return (isMobile()) ? 'pageMobile' : 'page';
}

function pageStyle() {
    return (isMobile()) ? {} : {
        height: (window.innerHeight - 74) + 'px'
    };
}

function pageStyleActivity() {
    return (isMobile()) ? {
        height: (window.innerHeight - (window.innerHeight*60/100)) + 'px'
    } : {
        height: (window.innerHeight - 74) + 'px'
    };
}

function imageStyleActivity() {
    return (isMobile()) ? {
        height: '70%',
        marginTop: '5%'
    } : {
        height: '45%'
    };
}

function imageStyleSponsor() {
    return (isMobile()) ? {
        width: '50%'
    } : {
        width: '60%'
    };
}

export { desktopWidth, pageClass, pageStyle, pageStyleActivity, imageStyleActivity, imageStyleSponsor, isMobile }