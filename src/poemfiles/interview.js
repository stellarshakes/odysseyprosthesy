import React from 'react'
import CycleSpan from "../components/CycleSpan";
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Interview() {
	return (
		<div className='poem interview setOdysseus'>
		<h2>Penelope Questions the Beggar</h2>
		<p>
			Who are you?<br/>
			<br/>
			<div className='blockquote'><i>
			<CycleSpan entries={["Woman","Lady","Wife"]}/><br/>
			ask me any other question
			</i></div><br/>
			<br/>
			Who are you?<br/>
			<br/>
			<div className='blockquote'><i>
			<CycleSpan entries={["A former host of Odysseus","The son of Deucalion of Crete, friend to your husband","The man you married"]}/>
			</i></div><br/>
			<br/>
			How long have you known him?<br/>
			<br/>
			<div className='blockquote'><i>
			<CycleSpan entries={["Twenty years","All my life","All your life"]}/>
			</i></div><br/>
			<br/>
			What did he look like?<br/>
			<br/>
			<div className='blockquote'><i>
			<CycleSpan entries={["Tall, broad, dressed in a rich purple cloak and a tunic woven with such technique that it fascinated all the women",
			"A hero, a god",
			"Exactly like our boy, if I had not the beard"]}/>
			</i></div><br/>
			<br/>
			That was him, then<br/>
			<br/>
			<div className='blockquote'><i>
			<CycleSpan entries={["Dry your eyes",
			"He's on his way home",
			"I miss you"]}/>
			</i></div><br/>
			<br/>
			He is returning?<br/>
			<br/>
			<div className='blockquote'><i>
			<CycleSpan entries={["Yes",
			"As we speak",
			"I love you"]}/>
			</i></div><br/>
			<br/>
			I still love him<br/>
			<br/>
			<div className='blockquote'><i>
			<CycleSpan entries={["I admire your loyalty",
			"I am unsurprised",
			"Would your tears stop if I held you, the way I once did?"]}/>
			</i></div><br/>
			<br/>
			I kept those suitors at bay <TextLink link={'/penelopeandtheshroud'} class={"text-button text-button-odysseus"} text={"three years"}/>, as long as I could<br/>
			<br/>
			<div className='blockquote'><i>
			<CycleSpan entries={["No one would expect less of the wife of Odysseus",
			"A testament to your wisdom and endurance",
			"You could outfox even me"]}/>
			</i></div><br/>
			<br/>
			Where would you sleep tonight?<br/>
			<br/>
			<div className='blockquote'><i>
			<CycleSpan entries={["I am accustomed to the ground",
			"I don't believe I will",
			"With you if you would have me again"]}/>
			</i></div><br/>
			<br/>
			Shall I obey the <TextLink link={'/agoodomen'} class={"text-button text-button-odysseus"} text={"gods' omen"}/> and remarry?<br/>
			<br/>
			<div className='blockquote'><i>
			<CycleSpan entries={["There is no longer any need",
			"There is no longer any need",
			"There is no longer any need"]}/><br/>
			</i></div><br/>
			<br/>

			<TextLink link={'/thedogdies'} class={"text-button text-button-odysseus"} text={"←"}/> 
			<div class="indent"> </div> 
			<TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
			<div class="indent"> </div> 
			<TextLink link={'/eurycleiasrecognition'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
			<br/>

		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Interview