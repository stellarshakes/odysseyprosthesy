import React from 'react'
import CycleSpan from "../CycleSpan";
import {Link} from 'react-router-dom'

function Poem1() {
        return (
        <div className={"poem1"}>
            this is poem 1
            <Link to={"/poem2"}>
                <button>
                    this will go to poem 2
                </button>
            </Link>
            <p className={"paragraph"}>
                this is a Cycle span <CycleSpan entries={["red", "carrot","ben", "tank"]}/>
            </p>
            <p>
                this is a brand new cycle span <CycleSpan entries={["red", "carrot","ben", "tank"]}/>
            </p>
        </div>
    )
}

export default Poem1