import React from 'react'
import CycleSpan from "../components/CycleSpan";
import TextLink from "../components/TextLink";
import invocationQR from './invocationQR.PNG';

function IntroPage() {
        return (
        	<div>
        	<div className='entry'>
        		<CycleSpan entries={["χαῖρε, ξεῖνε","Καλώς ήλθατε, ξένε","Welcome, stranger"]}/>
		        <div className='qr'>
		        	<img src={invocationQR} alt="Invocation to a Reader"/>
		        	<br/>
		        	the Muse's turn

		        </div>
		        
		        <TextLink link={'/act-ii'} class={"text-button"} text={"the page turn"}/><br/>
		        <div className='heart'>
		        	<TextLink link={'/acknowledgements'} class={"text-button"} text={"❤"}/>
		        </div>
		    </div>
	        </div>
    )
}

export default IntroPage