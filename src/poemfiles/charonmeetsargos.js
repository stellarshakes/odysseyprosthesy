import React from 'react'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function CharonMeetsArgos() {
	return (
		<div className='poem charonmeetsargos setOdysseus'>
		<h2>Charon Meets Argos</h2>
		<p>
			There you are<br/>
			upon that pile of rot<br/>
			<br/>
			Come, boy! Come!<br/>
			You will not have to endure much longer<br/>
			<br/>
			And who is this?<br/>
			Another wretched soul at the doors of Hades' halls?<br/>
			Why, no<br/>
			this withered man is not as withered as he seems<br/>
			<br/>
			This must be some god's doing<br/>
			<br/>
			Who is it, boy?<br/>
			Is it your master, home at last?<br/>
			Such an age you've been waiting<br/>
			but here he is<br/>
			<br/>
			now turning away his eyes<br/>
			uncharacteristically bright<br/>
			<br/>
			now sneaking you affection under that disguise<br/>
			while his company's back is turned<br/>
			<br/>
			now going<br/>
			again<br/>
			<br/>
			Time is no friend of yours, poor creature<br/>
			<br/>
			Come, boy! Come here!<br/>
			He's not the only one that knows how to leave<br/>
			<br/>
			Come with me! Come on!<br/>
			There is scarce fresh meat where I come from<br/>
			but we have no shortage of bones for you<br/>
			Come here, boy!<br/>
			Come and tell me all about your master<br/>
			<br/>
			We will pass the time this way<br/>
			and before you know it<br/>
			I will bring him down to you myself<br/>
			<br/>
			

			<TextLink link={'/farewellrecalled'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/penelopequestionsthebeggar'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>
			
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default CharonMeetsArgos