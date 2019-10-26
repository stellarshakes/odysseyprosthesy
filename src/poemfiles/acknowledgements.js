import React from 'react'
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function Acknowledgements() {
	return (
		<div className='acknowledgements'>
		<h2>Acknowledgements</h2>
		<p>
			I have the honour of being indebted to Chrissy Howe, my creative supervisor, for all of her warm encouragement and the innovative ideas she contributed to this project. Her trust and patience know no bounds. 
		</p>
		<p>
			I would also like to extend my thanks to my thesis supervisor, Ika Willis, for her patience and understanding as I prioritised my work around bursts of poetic inspiration. 
		</p>
		<p>
			Huge thanks to coding genius Patrick Corbett, my technical advisor, for all the hours he committed to helping me transfer this anthology from the page to the web. 
		</p>
		<p>
			My gratitude goes to my family, for their support, willingness to listen as I explained my way around my work, and persistent curiosity to see the finished product that motivated me to complete this project truly to the best of my ability. 
		</p>
		<p>
			I was at my most productive after conversing with my friends, partly due to their stimulating thoughts on story, and partly due to their dogged enthusiasm to test the digital component. 
		</p>
		<p>
			Finally, I would like to thank the University of Wollongong for its outstanding poetry professors, its digital archives, and its many cafés – some of which became very familiar with the sight of me, my laptop, and my Odysseys. 
		</p>
		<p>
		</p>
		<p>
			<TextLink link={'/'} class={"text-button"} text={"←"}/> 
		</p>
		<ScrollToTop/>
		</div>
	)
}

export default Acknowledgements