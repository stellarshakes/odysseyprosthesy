import React from 'react'
import {Link} from "react-router-dom";

function NavBar() {
    const navStyle = {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    };

    return (
        <nav style={navStyle}>
            <Link to={'/theveil'}>
                <button>
                    TheVeil
                </button>
            </Link>
            <Link to={'/phemios'}>
                <button>
                    Phemios
                </button>
            </Link>
            <Link to={'/despair'}>
                <button>
                    Despair
                </button>
            </Link>
            <Link to={'/halithersesprophecy'}>
                <button>
                    HalithersesProphecy
                </button>
            </Link>
            <Link to={'/babytelemachos'}>
                <button>
                    BabyTelemachos
                </button>
            </Link>
            <Link to={'/odysseus'}>
                <button>
                    Odysseus
                </button>
            </Link>
            <Link to={'/penelopesshroud'}>
                <button>
                    PenelopesShroud
                </button>
            </Link>
            <Link to={'/telemachosleaves'}>
                <button>
                    TelemachosLeaves
                </button>
            </Link>
            <Link to={'/penelope'}>
                <button>
                    Penelope
                </button>
            </Link>
            <Link to={'/helen'}>
                <button>
                    Helen
                </button>
            </Link>
            <Link to={'/'}>
                <button>
                    IntroPage
                </button>
            </Link>
        </nav>
    )
}

export default NavBar