import React from 'react'
import {Link} from "react-router-dom";

function Poem1() {
    return(
        <div>
            this is poem 3
            <Link to={'/'}>
                <button>
                    This will go to home page
                </button>
            </Link>
        </div>
    )
}

export default Poem1