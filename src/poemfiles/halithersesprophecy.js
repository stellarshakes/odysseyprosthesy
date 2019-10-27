import React from 'react'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function HalithersesProphecy() {
        return (
        <div className='poem halithersesprophecy setPenelope'>
        	<h2>Halitherses' Prophecy</h2>
            <p>
            	Twenty years ago<br/>
				a little bird visited<br/>
				twittering<br/>
				<br/>
				It told me<br/>
				that all his men will be killed<br/>
				that he will return in the twentieth year<br/>
				that he will be unrecognisable<br/>
				<br/>
				I told him<br/>
				and he thought<br/>
				and he thanked me<br/>
				and he thought<br/>
				<br/>
				He told his men<br/>
				but they laughed<br/>
				but they sailed to war<br/>
				but they sailed to war all the same<br/>
				<br/>
				The men have long since stopped laughing<br/>
				<blockquote>sailing now only through Poseidon's black sands</blockquote>
				He continues to think<br/>
				<blockquote>cunning, machinating his way ever homewards</blockquote>
				I pass my time in the yard and at the shore<br/>
				<blockquote>waste my breath in the assembled council</blockquote>
				<br/>
				Today<br/>
				two little birds visited<br/>
				screaming bloody vindications<br/>
				<br/>
				<TextLink link={'/theveil'} class={"text-button text-button-odysseus"} text={"←"}/> 
				<div class="indent"> </div> 
				<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
				<div class="indent"> </div> 
				<TextLink link={'/odysseus'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
				<br/>
            </p>
            <ScrollToTop/>
        </div>
    )
}

export default HalithersesProphecy