import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop"

function Polyphemos() {
	return (
		<div className='poem polyphemos setOdysseus'>
		<h2>Flight from Polyphemos</h2>
		<p>
			Just as the oars start to froth at the sea<br/>
			and the curved ship picks up speed<br/>
			dread fills Eurylochos<br/>
			<br/>
			For<br/>
			as if impelled by a god<br/>
			Odysseus is standing, shouting back to the Cyclops<br/>
			and the cloak of stealth shreds<br/>
			<br/>
			The air is thick with barbs and boasts<br/>
			and stone<br/>
			hurled upon the ship<br/>
			<br/>
			Colossal ripples coast the ship to shore<br/>
			within sniffing distance<br/>
			within snatching distance<br/>
			but Odysseus is replete with rage<br/>
			<br/>
			Opening his mouth<br/>
			and crying out with a fury<br/>
			at last Eurylochos condemns<br/>
			<CycleSpan entries={["What are you doing?",
			"Your pride will see us all killed!",
			"You are enraged at the cost of our lives."]}/><br/>
			his cry obscured by cries from all quarters of the ship<br/>
			<br/>
			Odysseus has ears only for the beast<br/>
			<br/>
			Shaking off his men<br/>
			climbing high astern<br/>
			now hot with wrath<br/>
			now spitting thorns<br/>
			now crunching boulders out of air<br/>
			<br/>
			He casts a second boast<br/>
			a third<br/>
			and the men suffer the final blow<br/>
			<br/>
			Spitting bile and spite<br/>
			the Cyclops delivers his malediction<br/>
			<br/>
			Wicked words with wicked power<br/>
			wing their way across the bay<br/>
			<br/>
			Cursed triply by the beast ashore<br/>
			the sky above<br/>
			the sea below<br/>
			Eurylochos pauses<br/>
			steels his nerves<br/>
			and swears on his heart<br/>
			and its ceaseless beats<br/>
			<br/>
			<TextLink link={'/demodokos'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/aeaea'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>
		</p>
		<ScrollToTop/>
		<NavBar/>
		</div>
	)
}

export default Polyphemos