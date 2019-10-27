import React from 'react'
import CycleSpan from "../components/CycleSpan";
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function WelcomeHome() {
	return (
		<div className='poem WelcomeHome setOdysseus'>
		<h2>Welcome Home</h2>
		<p>
			Eurycleia releases them<br/>
			murmuring their way to Odysseus<br/>
			in the choking sulphur silence of the hall<br/>
			<br/>
			Torchlight is the first to touch him<br/>
			usurped by shocked hungry eyes<br/>
			by rosy lips and fingers<br/>
			as the maids pour themselves in kisses<br/>
			over his head and shoulders<br/>
			<br/>
			At each <CycleSpan entries={["flash of teeth","fingertip callus","chapped kiss"]}/><br/>
			he recognises another mannerism<br/>
			recalls another name<br/>
			takes another memory in his arms<br/>
			<br/>
			He had almost forgotten<br/>
			what it is to weep sweetly<br/>
			<br/>
			
			<TextLink link={'/adistantbattle'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/eurycleiadeliversthenews'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default WelcomeHome