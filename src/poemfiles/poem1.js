import React from 'react'
import CycleSpan from "../CycleSpan";
import {Link} from 'react-router-dom'

function Poem1() {
        return (
        <div>
            this is poem 1
            <Link to={"/poem2"}>
                <button>
                    this will go to poem 2
                </button>
            </Link>
            <p>
                this is a Cycle span <CycleSpan entries={["word1", "word2","word3"]}/>
            </p>
        </div>
    )
}

export default Poem1