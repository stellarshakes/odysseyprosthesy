import React from 'react'
import TextLink from "../components/TextLink";
import {Link} from 'react-router-dom'
import NavBar from "../components/NavBar";

function Despair() {
    return (
        <div className='despair setPenelope'>
            <h2>Despair</h2>
            <p>
                My noble father<br/>
                <TextLink link={'/babytelemachos'} class={"text-button"}/><br/>
                <div className='link'>
                    <Link to={"/babytelemachos"}>
                        if he ever was
                    </Link></div>
                <br/>
                lies somewhere in the sea, lies somewhere dead<br/>
                and in his place are suitors<br/>
                rich fine young men who said<br/>
                <br/>
                they'd kill me<br/>
                <br/>
                I have to throw them out<br/>
                I'll raise my voice and prove myself<br/>
                I'll curse and I will shout<br/>
                <br/>
                and I will cry in the assembly<br/>
                I'll blacken all their names<br/>
                <br/>
                Even in my own home if I must<br/>
                and I must<br/>
                I will assert my place<br/>
                I will be firmer with our slaves<br/>
                <br/>
                Or I will tell my mother<br/>
                to be shut up <br/>
                in her room alone<br/>
                I will be a man and rule my house<br/>
                and protect her<br/>
                <br/>
                I really need him home
            </p>
            <NavBar/>
        </div>
    )
}

export default Despair

