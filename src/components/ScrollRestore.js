import React, {useLayoutEffect, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useScrollPosition} from "./UseScrollPosition";

function ScrollRestore() {
    const {pathname} = useLocation();

    useLayoutEffect(() => {
        if (pathname === "/act-ii") {
            let x = parseFloat(sessionStorage.getItem("main_scroll_x"));
            let y = parseFloat(sessionStorage.getItem("main_scroll_y"));
            window.scrollTo(-x,-y);
        }
    }, [pathname]);


    function saveScroll({currPos}) {
        if(currPos.y !== "0" && currPos.x !== "0"){
            sessionStorage.setItem("main_scroll_x", currPos.x);
            sessionStorage.setItem("main_scroll_y", currPos.y)
        }
    }
    useScrollPosition(saveScroll, [pathname], false, false, 0);

    return null
}

export default ScrollRestore