import React from 'react'
import {Link} from "react-router-dom";

function Poem1() {
    return(
        <div>
            this is poem 2
            <Link to={'/poem3'}>
                <button>
                    this will go to poem 3
                </button>
            </Link>
        </div>
    )
}

export default Poem1