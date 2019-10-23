import React from 'react'
import CycleSpan from "../components/CycleSpan";
import StopCycleSpan from "../components/StopCycleSpan";
import {Link} from 'react-router-dom'
import TextLink from "../components/TextLink";
import NavBar from "../components/NavBar";

function Main() {
	return (
		<div className='main poemContainer'>
		<table className='allthreads'>
			<tr>
				<td className='bkone threadt'>
					<div className='threadttext'>
					All the war heroes<br/>
					from Ilios<br/>
					returned<br/>
					ten<br/>
					years<br/>
					ago<br/>
					<br/>
					except<br/>
					my father<br/>
					<br/>
					<br/>
					We received<br/>
					guests<br/>
					in his stead<br/>
					<br/>
					arrogant evil men<br/>
					who gorge themselves<br/>
					at our expense<br/>
					<br/>
					eating up our home<br/>
					harassing my mother<br/>
					the servants<br/>
					the bard<br/>
					and<br/>
					bullying<br/>
					me<br/>
					<br/>
					<br/>
					ten insufferable years now<br/>
					</div>
				</td>
				<td className='bkone threadp'>
					<div className='threadptext'>
					It's<br/>
					a<br/>
					long<br/>
					twenty<br/>
					years<br/>
					<br/>
					that<br/>
					teaches<br/>
					someone<br/>
					<br/>
					how<br/>
					to<br/>
					pass<br/>
					the<br/>
					time<br/>
					<br/>
					<br/>
					<br/>
					I<br/>
					have<br/>
					our<br/>
					talented<br/>
					bard<br/>
					<br/>
					and<br/>
					I<br/>
					have<br/>
					my<br/>
					weaving<br/>
					</div>
				</td>
				<td className='bkone threado'>
					<div className='threadotext'>
					<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
					My<br/>
					story<br/>
					starts<br/>
					with<br/>
					<br/>
					gods<br/>
					<br/>
					prophecies<br/>
					<br/>
					all<br/>
					that<br/>
					marionette meddling<br/>
					</div>
				</td>
			</tr>
			<tr>
				<td className='bktwo threadt'>
					<div className='threadttext'>
					<br/>
					<br/>
					But<br/>
					a god<br/>
					has pierced<br/>
					my mind<br/>
					like a war cry<br/>
					<br/>
					<br/>
					I can<br/>
					do<br/>
					something<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					I will<br/>
					leave<br/>
					<br/>
					tonight<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					I will<br/>
					chase<br/>
					down<br/>
					my father<br/>
					or<br/>
					at least<br/>
					news<br/>
					of his<br/>
					whereabouts<br/>
					<br/>
					<br/>
					</div>
				</td>
				<td className='bktwo threadp'>
					<div className='threadptext'>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					I<br/>
					miss<br/>
					my<br/>
					best<br/>
					friend<br/>
					<br/>
					<br/>
					Even<br/>
					Telemachos<br/>
					has<br/>
					left<br/>
					<br/>
					and taken<br/>
					all<br/>
					his<br/>
					good<br/>
					company<br/>
					with him<br/>
					<br/>
					a child<br/>
					of nineteen<br/>
					<br/>
					on<br/>
					the<br/>
					whimsical command<br/>
					of<br/>
					some god<br/>
					</div>
				</td>
				<td className='bktwo threado'>
					<div className='threadotext'>
					<br/>
					<br/>
					but<br/>
					I<br/>
					started<br/>
					long<br/>
					before<br/>
					then<br/>
					<br/>
					<br/>
					You<br/>
					know<br/>
					my<br/>
					name<br/>
					<br/>
					my<br/>
					story<br/>
					<br/>
					my<br/>
					mission<br/>
					<br/>
					<br/>
					I<br/>
					had<br/>
					to<br/>
					leave<br/>
					my<br/>
					infant<br/>
					son<br/>
					behind<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					</div>
				</td>
			</tr>
			<tr>
				<td className='bkthree threadt'>
					<div className='threadttext'>
					My<br/>
					quest<br/>
					will<br/>
					bring<br/>
					me<br/>
					<br/>
					<br/>
					glory<br/>
					<br/>
					respect<br/>
					<br/>
					maybe<br/>
					even<br/>
					my dad<br/>
					</div>
				</td>
				<td className='bkthree threadp'>
					<div className='threadptext'>
					<br/>
					<br/>
					It's<br/>
					just<br/>
					me<br/>
					here<br/>
					now<br/>
					<br/>
					well<br/>
					<br/>
					and<br/>
					those<br/>
					suitors<br/>
					such as they are<br/>
					</div>
				</td>
				<td className='bkthree threado'>
					<br/>
				</td>
			</tr>
		</table>

		<br/>
		<br/>
		~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		<br/>
		<br/>

		Template for 3-cell rows

		<tr>
			<td className='bknumber threadinitial'>
				<div className='threaditext'>
					Text
				</div>
			</td>
			<td className='bknumber threadinitial'>
				<div className='threaditext'>
					Text
				</div>
			</td>
			<td className='bknumber threadinitial'>
				<div className='threaditext'>
					Text
				</div>
			</td>
		</tr>


		<table>
		  <tr>
		    <td><CycleSpan entries={["χαῖρε, ξεῖνε","Καλώς ήλθατε, ξένε","Welcome, stranger"]}/><br/>
		    <CycleSpan entries={["χαῖρε, ξεῖνε","Καλώς ήλθατε, ξένε","Welcome, stranger"]}/><br/>
		    hi!</td>
		    <td>Little</td>
		    <td>Piggy</td>
		    <td>Went</td>
		    <td>To</td>
		    <td>Market</td>
		  </tr>
		  <tr>
		    <td colspan="2">This</td>
		    <td>Little</td>
		    <td>Piggy</td>
		    <td>Went</td>
		    <td>To</td>
		  </tr>
		    <tr>
		    <td colspan="4">This</td>
		    <td rowspan="3">Little</td>
		    <td>Piggy</td>
		  </tr>
		  <tr>
		    <td rowspan="2">This</td>
		    <td>Little</td>
		    <td>Piggy</td>
		    <td>Went</td>
		    <td>To</td>
		  </tr>
		  <tr>
		    <td>Little</td>
		    <td>Piggy</td>
		    <td>Went</td>
		    <td>To</td>
		  </tr>
		</table>

		<p>

			<div class="indent">text or space</div>
			<br/>
			<TextLink link={'/subpoem'} class={"text-button text-button-character"} text={"verse"}/> 
			
		</p>
		</div>
	)
}

export default Main