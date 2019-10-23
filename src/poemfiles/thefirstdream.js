import React from 'react'
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop"

/*still needs editing for space*/

function TheFirstDream() {
	return (
		<div className='poem thefirstdream setPenelope'>
		<h2>Title</h2>
		<p>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;.<br/>
			.<br/>
			<br/>
			A&emsp;w r a i t h&emsp;manifests<br/>
			and startles me <br/>
			<div class="indent3">&ensp;out of my</div>
			<div class="indent">&nbsp;&nbsp;&nbsp;&nbsp;t</div>
			<div class="indent">&nbsp;&nbsp;&nbsp;&nbsp;e</div>
			<div class="indent">&nbsp;&nbsp;&nbsp;&nbsp;a</div>
			<div class="indent">&nbsp;&nbsp;&nbsp;&nbsp;r</div>
			<div class="indent">&nbsp;&nbsp;&nbsp;&nbsp;s</div>
			<br/>
			I believe I recognise it.<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;her.<br/>
			<br/>
			It is<br/>
			<div class="indent">my sister</div>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;!<br/>
			<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iphthime<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;!<br/>
			<br/>
			<div class="indent">Iphthime swears</div>
			:<br/>
			my son will return <br/>
			 safe !<br/>
			<br/>
			Athena               him.<br/>
			   escorts<br/>
			<br/>
			But she gives no news on<br/>
			  Odysseus<br/>
			,<br/>
			<br/>
			neither<br/>
			good        nor        bad.<br/>
			<br/>
			She says<br/>
			    there is no<br/>
			   use speaking<br/>
			<br/>
			   empty words .<br/>
			         .<br/>
			              .<br/>

			<Link to={"/"}>
                →
            </Link>
		</p>
		<ScrollToTop/>
		<NavBar/>
		</div>
	)
}

export default TheFirstDream