import React from 'react'
import {Link} from "react-router-dom";

function TextLink(props){
    return(
        <Link to={props.link}>
            <button className={props.class}>
                {props.text}
            </button>
        </Link>
    )
}

export default TextLink