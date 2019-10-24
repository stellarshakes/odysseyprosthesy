import React from 'react'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function OdysseusReturning() {
    return (
        <div className='poem OdysseusReturning setOdysseus'>
            <h2>Odysseus</h2>
            <p>
                My reputation is of savage air<br/>
                <br/>
                It rolled through a thousand waves<br/>
                filtered past its cage<br/>
                and you hear it wail as it comes<br/>
                <br/>
                My reputation is of asphalt rain<br/>
                <br/>
                Its company is the rain-sky<br/>
                and it stings like a blood fever<br/>
                when it bolts down to greet you<br/>
                <br/>
                My reputation is of dormant gold<br/>
                <br/>
                It was forged in a storm<br/>
                where glory comes from<br/>
                and buys your flesh by the pound<br/>
                <br/>
                As for me<br/>
                <br/>
                I am not make-believe<br/>
                I am made of blood and ideas<br/>
                I make infinite decisions<br/>
                <br/>
                and I'm coming home<br/>
                <br/>
                with the tang of bronze in my eyes<br/>
                and a vacant prison in my hands<br/>
                <br/>
                <TextLink link={'/athena'} class={"text-button text-button-telemachos"} text={"Telemachos"}/> 
                | 
                <TextLink link={'/odysseusproof'} class={"text-button text-button-odysseus"} text={"Odysseus"}/><br/>
                <br/>
            </p>
            <ScrollToTop/>
        </div>
    )
}

export default OdysseusReturning