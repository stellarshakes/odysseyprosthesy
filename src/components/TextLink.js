import React from 'react'
import {Link} from "react-router-dom";

function TextLink(props){
    return(
        <Link to={props.link}>
            <button className={props.class}>
                if he ever was
            </button>
        </Link>
    )
}

export default TextLink