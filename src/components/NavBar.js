import React from 'react'
import {Link} from "react-router-dom";
import StopCycleSpan from "./StopCycleSpan";

function NavBar(){
    const navStyle = {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    };

    return (
        <nav style={navStyle}>
            <StopCycleSpan entries={[
                "first entry",
                "more entries",
                "final stopping entry"
            ]} className={"cycleSpan"}/>
            <Link to={"/"}>
                <button>
                    Home
                </button>
            </Link>
            <Link to={"/babytelemachos"}>
                <button>
                    babytelemachos
                </button>
            </Link>
            <Link to={"/despair"}>
                <button>
                    despair
                </button>
            </Link>
            <Link to={"/halithersesprophecy"}>
                <button>
                    halithersesprophecy
                </button>
            </Link>
            <Link to={"/phemios"}>
                <button>
                    phemios
                </button>
            </Link>
            <Link to={"/theveil"}>
                <button>
                    theveil
                </button>
            </Link>
        </nav>
    )
}

export default NavBar