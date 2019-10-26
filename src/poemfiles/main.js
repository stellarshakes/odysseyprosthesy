import React from 'react'
import CycleSpan from "../components/CycleSpan";
import TextLink from "../components/TextLink";
import {useScrollPosition} from "../components/UseScrollPosition";

function Main() {
	return (
		<div className='main poemContainer'>
		<table className='allthreads'>
			<tr className='headrow'>
				<td className='threadt'>
					<div className='threadttext'>
						<br/><br/>
						Telemachos
						<br/><br/>
					</div>
				</td>
				<td className='threadp'>
					<div className='threadptext'>
						<br/><br/>
						Penelope
						<br/><br/>
					</div>
				</td>
				<td className='threado'>
					<div className='threadotext'>
						<br/><br/>
						Odysseus
						<br/><br/>
					</div>
				</td>
			</tr>
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
					ten <TextLink link={'/despair'} class={"text-button text-button-telemachos"} text={"insufferable"}/> years now<br/>
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
					<TextLink link={'/phemios'} class={"text-button text-button-penelope"} text={"bard"}/><br/>
					<br/>
					and<br/>
					I<br/>
					have<br/>
					my<br/>
					<TextLink link={'/penelopesshroud'} class={"text-button text-button-penelope"} text={"weaving"}/><br/>
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
					<TextLink link={'/theveil'} class={"text-button text-button-odysseus"} text={"gods"}/><br/>
					<br/>
					<TextLink link={'/halithersesprophecy'} class={"text-button text-button-odysseus"} text={"prophecies"}/><br/>
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
					<TextLink link={'/telemachosleaves'} class={"text-button text-button-telemachos"} text={"tonight"}/><br/>
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
					<TextLink link={'/odysseus'} class={"text-button text-button-odysseus"} text={"mission"}/><br/>
					<br/>
					<br/>
					I<br/>
					had<br/>
					to<br/>
					leave<br/>
					my<br/>
					infant<br/>
					<TextLink link={'/babytelemachos'} class={"text-button text-button-odysseus"} text={"son"}/><br/>
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
					<TextLink link={'/penelope'} class={"text-button text-button-penelope"} text={"me"}/><br/>
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
			<tr>
			<td className='bkfour threadt threadp intersection' colspan='2'>
				<div>
					<br/>
					<div class="indent8"> </div><div class="indent5"> </div><div className='threadptext'>There is</div><br/>
					<div class="indent2"> </div>I can<div class="indent8"> </div><div class="indent2"> </div><div className='threadptext'>no privacy</div><br/>
					<div class="indent2"> </div>quest<div class="indent8"> </div><div class="indent2"> </div><div className='threadptext'>in solitude</div><br/>
					as<div class="indent8"> </div><div class="indent2"> </div><br/>
					<div class="indent2"> </div>far<div class="indent8"> </div><div class="indent"> </div>The<div class="indent"> </div><br/>
					<div class="indent3"> </div>as<div class="indent8"> </div>rest<div class="indent2"> </div><br/>
					<div class="indent8"> </div>of<br/>
					sandy<div class="indent5"> </div>my<br/>
					Pylos<div class="indent3"> </div>family<br/>
					<br/>
					and<div class="indent2"> </div>is&emsp;<br/>
					<TextLink link={'/helen'} class={"text-button"} text={"distant"}/><br/>
					<div class="indent3"> </div>Sparta<br/>
					and<div class="indent3"> </div><br/>
					those<div class="indent4"> </div><br/>
					that<div class="indent6"> </div><br/>
					remain<div class="indent6"> </div><br/>
					<br/>
					I tell myself<div class="indent5"> </div><br/>
					<br/>
					will<div class="indent4"> </div>My<br/>
					<div class="indent"> </div>&emsp;not<div class="indent2"> </div>triumphant<br/>
					<TextLink link={'/thesuitorsconference'} class={"text-button"} text={"return"}/><br/>
					<br/>
					will<div class="indent5"> </div><br/>
					<div class="indent3"> </div>bring<div class="indent7"> </div>To the gods<br/>
					<div class="indent2"> </div>my<div class="indent9"> </div>I<div class="indent"> </div><br/>
					<div class="indent"> </div>
					<div class='threadttext'><CycleSpan entries={["poor","dear","lonely"]}/></div><div class="indent9"> </div>am<br/>
					<div class="indent"> </div>mother<div class="indent10"> </div>a<div class="indent"> </div><br/>
					comfort<div class="indent10"> </div>study<br/>
					<div class="indent10"> </div><div class="indent3"> </div>in<br/>
					<div class="indent10"> </div><div class="indent4"> </div>solitude<br/>
				</div>
			</td>
			<td className='bkfour threado'>
				<div className='threadotext'>
					
				</div>
			</td>
		</tr>
		<tr>
			<td className='bkfour threadt'>
				<div className='threadttext'>
					Lion-hearted<br/>
					Odysseus<br/>
					need<br/>
					only<br/>
					wait<br/>
					<br/>
					<br/>
					I<br/>
					am<br/>
					on<br/>
					my<br/>
					way<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bkfour threadp'>
				<div className='threadptext'>
					<br/>				
					ripe<br/>
					for<br/>
					<TextLink link={'/thefirstdream'} class={"text-button text-button-penelope"} text={"dreaming"}/><br/>
					<br/>
					There is<br/>
					no relief<br/>
					in sleep<br/>
					<br/>
					Odysseus<br/>
					has to<br/>
					return<br/>
					<br/>
					he has to<br/>
				</div>
			</td>
			<td className='bkfour threado'>
				<div className='threadotext'>
					
				</div>
			</td>
		</tr>
		<tr>
			<td className='bkfive threadt'>
				<div className='threadttext'>
				
				</div>
			</td>
			<td className='bkfive threadp threado intersection' colspan='2'>
				<div>
					<br/>
					Widowhood<div class="indent10"></div><div class="indent"></div><br/>
					is not for me<div class="indent9"></div><br/>
					<br/>
					I<div class="indent9"></div><br/>
					miss<div class="indent8"></div>and<br/>
					his<div class="indent8"></div>my<br/>
					<div class="indent"></div>
					<div class='threadptext'>
					<CycleSpan entries={["tempered","balsamic","bronze-swept"]}/></div>
					<div class="indent6"></div>
					<div class='threadotext'>
					<CycleSpan entries={["dear","clever","extraordinary"]}/>&emsp;</div><br/>
					voice<div class="indent6"></div>wife<br/>
					<br/>
					even<div class="indent4"></div>with<br/>
					thick<div class="indent3"></div>just<br/>
					with<div class="indent2"></div>clumsy<br/>
					<TextLink link={'/farewell'} class={"text-button"} text={"farewells"}/><br/>
					<br/>
					<div class="indent3"></div>I miss<br/>
					<div class="indent6"></div>my best friend<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td>
			</td>
			<td className='bksixten threado'>
				<div className='threadotext'>
					The war<br/>
					lasted ten years<br/>
					<br/>
					Ogygia<br/>
					nearly as long<br/>
					<br/>
					<br/>
					The <TextLink link={'/calypso'} class={"text-button text-button-odysseus"} text={"missive"}/><br/>
					came<br/>
					eventually<br/>
					<br/>
					and<br/>
					I was<br/>
					<CycleSpan entries={["finally","suspiciously","impossibly"]}/><br/>
					free<br/>
					<br/>
					<br/>
					<CycleSpan entries={["Thanks to Athena","Thanks to Ino","Despite Poseidon"]}/><br/>
					I washed up<br/>
					on Phaeakia<br/>
					<br/>
					cloaked<br/>
					the last embers<br/>
					of my life<br/>
					under a tree<br/>
					<br/>
					<br/>
					until<br/>
					a<br/>
					<TextLink link={'/nausikaa'} class={"text-button text-button-odysseus"} text={"princess"}/><br/>
					woke<br/>
					me<br/>
					<br/>
					clothed me<br/>
					<br/>
					guided me<br/>
					all<br/>
					the<br/>
					way<br/>
					back<br/>
					to her home<br/>
					<br/>
					<br/>
					Her parents<br/>
					were<br/>
					gracious hosts<br/>
					<br/>
					but<br/>
					I could not<br/>
					stomach<br/>
					all the fine things<br/>
					<br/>
					mellow wine<br/>
					<TextLink link={'/demodokos'} class={"text-button text-button-odysseus"} text={"lyresong"}/><br/>
					races and dances<br/>
					<br/>
					that<br/>
					they had<br/>
					to offer<br/>
					<br/>
					<br/>
					I was<br/>
					<CycleSpan entries={["still","only","always"]}/><br/>
					hungry<br/>
					for Ithaki<br/>
					<br/>
					<br/>			
					After<br/>
					<CycleSpan entries={["enduring","repeating","reliving"]}/><br/>
					every<br/>
					encounter<br/>
					with<br/>
					<br/>
					<TextLink link={'/polyphemos'} class={"text-button text-button-odysseus"} text={"man-eaters"}/><br/>
					<br/>
					<TextLink link={'/aeaea'} class={"text-button text-button-odysseus"} text={"magic"}/><br/>
					<br/>
				</div>
			</td>
			<td>
			</td>
		</tr>
		<tr>
			<td className='bkelevenfourteen threadp'>

			</td>
			<td className='bkelevenfourteen threado'>
				<div className='threadotext'>
					<TextLink link={'/teiresiasprophecy'} class={"text-button text-button-odysseus"} text={"duty"}/><br/>
					<br/>
					<TextLink link={'/sirens'} class={"text-button text-button-odysseus"} text={"temptation"}/><br/>
					<br/>
					commuting<br/>
					between<br/>
					a <TextLink link={'/scylla'} class={"text-button text-button-odysseus"} text={"rock"}/><br/>
					and a <TextLink link={'/charybdis'} class={"text-button text-button-odysseus"} text={"hard place"}/><br/>
					<br/>
					<br/>
					the gods<br/>
					and the Phaeakians<br/>
					granted<br/>
					my<br/>
					wish<br/>
					<br/>
					Home<br/>
					<br/>
					To Ithaki<br/>
					<br/>
					At last<br/>
					after<br/>
					an<br/>
					eternity<br/>
					of<br/>
					waiting<br/>
					returned to my native land!<br/>
					<br/>
					Strategist Athena<br/>
					welcomed me<br/>
					advised me<br/>
					disguised me<br/>
					<br/>
					and<br/>
					in the form of a beggar<br/>
					I made my way to<br/>
					Eumaeus' hut<br/>
					<br/>
					our faithful<br/>
					old<br/>
					swineherd<br/>
					told me <TextLink link={'/ctimene'} class={"text-button text-button-odysseus"} text={"stories"}/><br/>
					of my family<br/>
					and the wretched state<br/>
					of my home<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bkelevenfourteen threadt'>
				<div className='threadttext'>
					<br/>
					A god<br/>
					guides<br/>
					me<br/>
					into<br/>
					a<br/>
					safe<br/>
					port<br/>
					<br/>
					<br/>
					I did not learn<br/>
					what I had set out<br/>
					to learn<br/>
					<br/>
					<br/>
					<br/>
					my father is still missing<br/>
					<br/>
					my mother needs me now<br/>
					<br/>
					Perhaps<br/>
					I should be<br/>
					at home<br/>
					<br/>
					<br/>
					First<br/>
					I will stop<br/>
					by Eumaeus' house<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					he has been<br/>
					enduringly<br/>
					loyal<br/>
					to our family<br/>
					<br/>
					even<br/>
					especially<br/>
					under the abuse<br/>
					of those<br/>
					suitor-tyrants<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bkfifteen threadp'>
				<div className='threadptext'>
					
				</div>
			</td>
			<td className='bkfifteen threado threadt intersection' colspan='2'>
				<div>
					The swineherd<div class="indent10"></div>Perhaps<br/>
					<div class="indent2"></div>was<div class="indent10"></div><div class="indent"></div>I should have<br/>
					<div class="indent"></div>a gracious host<div class="indent9"></div>visited sooner<br/>
					<br/>
					he<div class="indent10"></div><br/>
					<div class="indent"></div>shared<div class="indent8"></div>This is not<br/>
					<div class="indent"></div>his food<div class="indent7"></div>the best time<br/>
					<br/>
					<br/>
					<div class="indent"></div>even<div class="indent7"></div>he<br/>
					<div class="indent"></div>especially<div class="indent6"></div>is<div class="indent"></div><br/>
					<div class="indent"></div>when<div class="indent4"></div>entertaining<br/>
					<TextLink link={'/odysseusmeetshisson'} class={"text-button"} text={"an unexpected guest"}/><br/>
					<div class="indent4"></div>appeared<br/>

				</div>
			</td>
		</tr>
		<tr>
			<td className='bkfifteen threadt' colspan='3'>
				<div className='threadttext'>
					<div class="indent5"></div>but<br/>
					<div class="indent2"></div>he is<br/>
					accommodating<br/>
					<br/>
					<br/>
					It's getting dark<div class="indent4"></div><br/>
					<div class="indent4"></div><br/>
					and he offers me<div class="indent8"></div><br/>
					a place<div class="indent10"></div><br/>
					to spend<div class="indent10"></div><div class="indent2"></div><br/>
					the night<div class="indent10"></div><div class="indent4"></div><br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bksixteen threadt'>
				<div className='threadttext'>
					<div class="indent7"></div>Perhaps<br/>
					<div class="indent6"></div>I should stay<br/>
					<br/>
					<br/>
					In the clear light of the morning<br/>
					the guest<br/>
					proves<br/>
					that<br/>
					he<br/>
					is<br/>
					Odysseus<br/>
					<br/>
					It's my father<br/>
					who welcomes<br/>
					me<br/>
					home<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					and<br/>
					who<br/>
					lets<br/>
					me<br/>
					conspire<br/>
					with him<br/>
					many ways<br/>
					of getting<br/>
					our home<br/>
					back<br/>
					<br/>
				</div>
			</td>
			<td className='bksixteen threadp'>
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
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					The<br/>
					air<br/>
					has<br/>
					been<br/>
					thick<br/>
					with<br/>
					<CycleSpan entries={["gods","dreams","flying rumours"]}/><br/>
					recently<br/>
					<br/>
				</div>
			</td>
			<td className='bksixteen threado'>
				<div className='threadotext'>
					<br/>
					<br/>
					After<br/>
					an eternity<br/>
					of waiting<br/>
					<br/>
					Eumaeus left<br/>
					<br/>
					I shed my disguise<br/>
					and<br/>
					when<br/>
					Telemachos<br/>
					<br/>
					my son<br/>
					<br/>
					knew<br/>
					me<br/>
					<br/>
					I wept<br/>
					harder<br/>
					than<br/>
					when Ilios<br/>
					plucked me from him<br/>
					<br/>
					and there<br/>
					we devised<br/>
					a plan<br/>
					to gather support<br/>
					to reclaim<br/>
					our home<br/>
					<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bkseventeen threadt'>
				<div className='threadttext'>
					<br/>
					The god<br/>
					that lives<br/>
					in my ear<br/>
					can retire<br/>
					<br/>
					I know<br/>
					what<br/>
					to do<br/>
					<br/>
					<br/>
					I<br/>
					know<br/>
					Ithaki<br/>
					<br/>
					its<br/>
					men<br/>
				</div>
			</td>
			<td className='bkseventeen threado threadp intersection' colspan='2'>
				<div>
					<div class="indent"></div>I<div class="indent10"></div><div class="indent2"></div>But<br/>
					<div class="indent"></div>cannot<div class="indent9"></div>there was<br/>
					believe<div class="indent6"></div>one more<br/>
					<div class="indent"></div>that<div class="indent3"></div>important<br/>
					<TextLink link={'/farewellrecalled'} class={"text-button"} text={"farewell"}/><br/>
					to<div class="indent3"></div>will<br/>
					undo<div class="indent5"></div>be<br/>
					<div class="indent8"></div>the<br/>
					Eumaeus<div class="indent7"></div>last<br/>
					escorted me<div class="indent7"></div>time<br/>
					in beggar's rags<div class="indent8"></div>I<div class="indent"></div><br/>
					once again<div class="indent9"></div>hear<div class="indent"></div><br/>
					<div class="indent10"></div><div class="indent"></div>his<br/>
					across the town<div class="indent9"></div>voice<div class="indent"></div><br/>
					past my old <TextLink link={'/thedogdies'} class={"text-button text-button-odysseus"} text={"dog"}/><div class="indent10"></div><div class="indent3"></div><br/>
					through the gates<div class="indent10"></div><div class="indent3"></div><br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bkeighteen threadt'>
				<div className='threadttext'>
					<br/>
					and<br/>
					among<br/>
					them<br/>
					whose<br/>
					loyalty<br/>
					we<br/>
					can<br/>
					trust<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bkeighteen threado'>
				<div className='threadotext'>
					home<br/>
					<br/>
					<br/>
					Our ungracious guests<br/>
					were eating their way<br/>
					through their overstayed welcome<br/>
					<br/>
					and that<br/>
					was the least<br/>
					of their charges<br/>
					<br/>
				</div>
			</td>
			<td className='bkeighteen threadp'>
				<div className='threadptext'>
					<br/>
					<br/>
					Even Telemachos<br/>
					returned to me<br/>
					whole<br/>
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
			<td className='bknineteen threadt'>
				<div className='threadttext'>
					<br/>
					It won't<br/>
					take much<br/>
					to<br/>
					win them<br/>
					over<br/>
					<br/>
					<br/>
					<br/>
					Our<br/>
					loyal<br/>
					household<br/>
					wants<br/>
					those<br/>
					reckless<br/>
					brutes<br/>
					out<br/>
					just as much<br/>
					as we do<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bknineteen threado'>
				<div className='threadotext'>
					<br/>
					<br/>
					Penelope<br/>
					noticed me<br/>
					such as I was<br/>
					and<br/>
					<br/>
					after<br/>
					an<br/>
					eternity<br/>
					of<br/>
					waiting<br/>
					<br/>
					<TextLink link={'/interview'} class={"text-button text-button-odysseus"} text={"we spoke"}/><br/>
					<br/>
					again<br/>
					<br/>
					<br/>
					My fingernails<br/>
					chewed my palms<br/>
					raw<br/>
					<br/>
					such<br/>
					was the grief<br/>
					<CycleSpan entries={["her smile","her tale","her tears"]}/><br/>
					drew out<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bknineteen threadp'>
				<div className='threadptext'>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					So<br/>
					I<br/>
					buy<br/>
					him<br/>
					<TextLink link={'/penelopesshroudends'} class={"text-button text-button-penelope"} text={"three years"}/><br/>
					<br/>
					<br/>
					right under<br/>
					those suitors'<br/>
					brutish<br/>
					reckless<br/>
					noses<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					The gods<br/>
					conjure him<br/>
					in<br/>
					<TextLink link={'/theseconddream'} class={"text-button text-button-penelope"} text={"dreams"}/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bktwenty threadt'>
				<div className='threadttext'>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bktwenty threado'>
				<div className='threadotext'>
					She instructed<br/>
					Eurycleia<br/>
					to wash<br/>
					my feet<br/>
					sore from travelling<br/>
					<br/>
					An old <TextLink link={'/eurycleiasrecognition'} class={"text-button text-button-odysseus"} text={"scar"}/><br/>
					gave me away<br/>
					but<br/>
					I swore her to secrecy<br/>
					<br/>
					the plan<br/>
					to reclaim our home<br/>
					was still safe<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bktwenty threadp'>
				<div className='threadptext'>
					upon<br/>
					<TextLink link={'/thethirddream'} class={"text-button text-button-penelope"} text={"dreams"}/><br/>
					<br/>
					and<br/>
					I<br/>
					endure<br/>
					them<br/>
					<CycleSpan entries={["and the men","and the pressure to marry","and the pressure to not marry"]}/><br/>
					<br/>
					<br/>
					patiently<br/>
					<br/>
					<br/>
					<br/>
					I've had<br/>
					considerable practise<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bktwenty threadt threado intersection' colspan='2'>
				<div>
					<div class="indent"></div><br/>
					<div class="indent10"></div><div class="indent2"></div>and<br/>
					<div class="indent10"></div>I<br/>
					<div class="indent"></div><br/>
					<div class="indent7"></div>with<br/>
					<div class="indent5"></div>a<br/>
					The gods<div class="indent2"></div>little<div class="indent"></div><br/>
					<TextLink link={'/reckoning'} class={"text-button"} text={"help"}/><br/>
					<div class="indent5"></div>their favourites<br/>
					<div class="indent"></div><br/>
					<div class="indent6"></div>in the pursuit<br/>
					<div class="indent6"></div>of <TextLink link={'/thekingreturns'} class={"text-button text-button-telemachos"} text={"justice"}/><br/>
					<div class="indent"></div><br/>
					<div class="indent"></div><br/>
					<div class="indent6"></div>if any<br/>
					<div class="indent5"></div>my father<br/>
					would<div class="indent3"></div>must<br/>
					be<div class="indent2"></div>be<br/>
					<TextLink link={'/odysseusreturning'} class={"text-button"} text={"the one"}/><br/>
					person<div class="indent2"></div>to<div class="indent"></div><br/>
					to have earned<div class="indent4"></div>see<div class="indent2"></div><br/>
					such<div class="indent8"></div>it<div class="indent"></div><br/>
					favour<div class="indent10"></div>through<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bktwenty threadp'>
				<div className='threadptext'>
					<br/>
					<br/>
					<br/>
					I know how to remind them<br/>
					what sort of a man he was<br/>
					<br/>
					<br/>
					their gifts<br/>
					cannot match<br/>
					his generosity<br/>
					<br/>
					<br/>
					<br/>
					their pressure<br/>
					does not match<br/>
					his presence<br/>
					<br/>
					<br/>
					<br/>
					and their bravado<br/>
					will not match<br/>
					his strength <br/>
					<br/>
					<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bktwentyone threadt'>
				<div className='threadttext'>
				
				</div>
			</td>
			<td className='bktwentyone threado'>
				<div className='threadotext'>
					
				</div>
			</td>
			<td className='bktwentyone threadp'>
				<div className='threadptext'>
					Good thing<br/>
					I never let<br/>
					the servants<br/>
					clear out<br/>
					that old bow<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bktwentyone threadt'>
				<div className='threadttext'>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					I help<br/>
					my mother<br/>
					set up<br/>
					her challenge<br/>
					with my father's bow<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
 					<br/>
				</div>
			</td>
			<td className='bknumber threado threadp intersection' colspan='2'>
				<div >
					<div class="indent10"></div><div class="indent2"></div>These men<br/>
					<div class="indent10"></div>don't understand<br/>
					<div class="indent8"></div>the meaning<br/>
					Penelope<div class="indent7"></div>of<div class="indent2"></div><br/>
					was perspicacious<div class="indent5"></div>no<div class="indent3"></div><br/>
					<div class="indent"></div><br/>
					<div class="indent5"></div>They accept<br/>
					Her<div class="indent2"></div>the<br/>
					<TextLink link={'/odysseusproof'} class={"text-button"} text={"challenge"}/><br/>
					and fail<div class="indent2"></div>for<div class="indent"></div><br/>
					<div class="indent"></div>one<div class="indent4"></div>her suitors<br/>
					<div class="indent2"></div>by<div class="indent5"></div>with my old bow<br/>
					<div class="indent3"></div>one<div class="indent7"></div>was the perfect start<br/>
					<div class="indent"></div><br/>
					<div class="indent"></div>except one<div class="indent9"></div>Even Athena<br/>
					<div class="indent10"></div>&ensp;<div class="indent2"></div>had not<br/>
					<div class="indent10"></div>&ensp;<div class="indent2"></div>expected it<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bktwentytwo threadt'>
				<div className='threadttext'>
					excuse her<br/>
					discreetly<br/>
					to safety<br/>
					<br/>
					<br/>
					I wonder<br/>
					which one of them<br/>
					I got<br/>
					my brains<br/>
					from<br/>
					<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bktwentytwo threadp'>
				<div className='threadptext'>
					<br/>
					Telemachos knows<br/>
					to let me leave<br/>
					before<br/>
					any<br/>
					real<br/>
					conflict<br/>
					erupts<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bktwentytwo threado'>
				<div className='threadotext'>
					<br/>
					<br/>
					<br/>
					<br/>
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
			<td className='bktwentytwo threadt'>
				<div className='threadttext'>
					Gathering<br/>
					help<br/>
					wasn't too hard either<br/>
					<br/>
					I'm getting<br/>
					pretty good at this<br/>
					<br/>
				</div>
			</td>
			<td className='bktwentytwo threado' colspan='2'>
				<div className='threadotext'>
					<br/>
					<br/>
					<div class="indent7"></div>Telemachos<br/>
					<div class="indent2"></div>had faithfully<br/>
					gathered<div class="indent3"></div><br/>
					our still-loyal servants<div class="indent7"></div><br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bknumber threado threadt intersection' colspan='2'>
				<div>
					With the loyalty<div class="indent10"></div><div class="indent4"></div><br/>
					of our best servants<div class="indent10"></div><div class="indent2"></div><br/>
					<div class="indent10"></div><div class="indent2"></div>with their help<br/>
					and<div class="indent8"></div>and<div class="indent"></div><br/>
					Athena<div class="indent5"></div>a little<div class="indent"></div><br/>
					running<div class="indent5"></div><br/>
					<TextLink link={'/athena'} class={"text-button"} text={"divine interference"}/><div class="indent"></div><br/>
					<div class="indent"></div><br/>
					we could<div class="indent2"></div><div className="threadttext"><CycleSpan entries={["Odysseus","the lion-hearted hero of Hellas","my dad"]}/></div><br/>
					purge<div class="indent4"></div>won<br/>
					our home<div class="indent4"></div>our home<br/>
					of the parasites<div class="indent5"></div>back<div class="indent"></div><br/>
					the bloated nobility of the Ionian<div class="indent8"></div><br/>
					that infected it<div class="indent8"></div>and I<br/>
					<div class="indent10"></div><div class="indent2"></div>was the one<br/>
					The disguise<div class="indent10"></div>fighting<br/>
					lifted<div class="indent10"></div><div class="indent2"></div>there<br/>
					<div class="indent10"></div><div class="indent4"></div>with him<br/>
					I was<div class="indent10"></div><div class="indent4"></div><br/>
					<TextLink link={'/odysseusproclamation'} class={"text-button text-button-odysseus"} text={"myself"}/><div class="indent10"></div><div class="indent4"></div><br/>
					again<div class="indent10"></div><div class="indent4"></div><br/>
				</div>
			</td>
			<td className='bknumber threadp'>
				<div className='threadptext'>
					<br/>
					<br/>	
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					I can hear<br/>
					their disappointed groans<br/>
					from my bedroom<br/>
					like bardsong<br/>
					<br/>
					but<br/>
					some god<br/>
					sends me<br/>
					to sleep<br/>
					before<br/>
					I can know<br/>
					the outcome<br/>
					<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bktwentytwo threado'>
				<div className='threadotext'>
					<br/>
					<br/>
					There was<br/>
					a lot<br/>
					of cleaning to be done<br/>
					by the end<br/>
					<br/>
				</div>
			</td>
			<td className='bktwentytwo threadt'>
				<div className='threadttext'>
					
				</div>
			</td>
			<td className='bktwentytwo threadp'>
				<div className='threadptext'>
					
				</div>
			</td>
		</tr>
		<tr>
			<td className='bktwentytwo threado threadt intersection' colspan='2'>
				<div>
					Eurycleia<div class="indent10"></div>Our old nurse<br/>
					under orders<div class="indent10"></div><br/>
					<div class="indent"></div>had kept<div class="indent6"></div>had taken<br/>
					our maids<div class="indent3"></div>the maids<br/>
					safe<div class="indent2"></div><br/>
					<TextLink link={'/adistantbattle'} class={"text-button"} text={"away"}/><br/>
					<div class="indent3"></div>from the hall<br/>
					somewhere safe<div class="indent4"></div><br/>
					<br/>
					but<div class="indent7"></div><br/>
					will emerge<div class="indent6"></div>released them<br/>
					soon<div class="indent8"></div>when it was quiet<br/>
					and send them<div class="indent10"></div><div class="indent3"></div><br/>
					to greet us<div class="indent10"></div><div class="indent3"></div><br/>
					<br/>
				</div>
			</td>
			<td className='bktwentytwo threadp'>
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
			<td className='bktwentytwo threadt'>
				<div className='threadttext'>
					first<br/>
					the<br/>
					<TextLink link={'/thefairerexecution'} class={"text-button text-button-telemachos"} text={"treacherous"}/><br/>
					<br/>
					then<br/>
					the<br/>
					loyal<br/>
					<br/>
				</div>
			</td>
			<td className='bktwentytwo threado'>
				<div className='threadotext'>
					first<br/>
					the<br/>
					treacherous<br/>
					<br/>
					then<br/>
					the<br/>
					<TextLink link={'/welcomehome'} class={"text-button text-button-odysseus"} text={"loyal"}/><br/>
					<br/>
				</div>
			</td>
			<td className='bktwentytwo threadp'>
				<div className='threadptext'>
					Eurycleia<br/>
					is<br/>
					the<br/>
					one<br/>
					to<br/>
					awaken<br/>
					me<br/>
					<br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bktwentythree threadt'>
				<div className='threadttext'>
					and<br/>
					the black corruption<br/>
					that invaded<br/>
					our household<br/>
					all those years ago<br/>
					will end<br/>
					with my hand<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					Eurycleia goes upstairs<br/>
					and<br/>
					when a different<br/>
					set of footsteps<br/>
					descend<br/>
					<br/>
					when<br/>
					my mum and dad<br/>
					are in the same room<br/>
					<br/>
					after twenty years<br/>
					<br/>
					they<br/>
					say<br/>
					nothing<br/>
					<br/>
					and<br/>
					<TextLink link={'/enoughisenough'} class={"text-button text-button-telemachos"} text={"I can't believe it"}/><br/>
					<br/>
					<br/>
					<br/>
					<br/>
					I leave them<br/>
					<br/>
					I have<br/>
					Ithaki<br/>
					to tend to<br/>
					instead<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bktwentythree threado threadp intersection' colspan='2'>
				<div>
					<br/>
					then left<div class="indent10"></div><br/>
					to<div class="indent7"></div><br/>
					<div class="indent"></div>share<div class="indent6"></div>with<br/>
					<div class="indent"></div>the<div class="indent3"></div>some<br/>
					<TextLink link={'/eurycleiadeliversthenews'} class={"text-button"} text={"news"}/><br/>
					<div class="indent2"></div>of<br/>
					I descend<div class="indent2"></div>my<br/>
					the stairs<div class="indent4"></div>arrival<br/>
					<br/>
					<br/>
					<div class="indent"></div>there he is<div class="indent7"></div>with Penelope<br/>
					<br/>
					<br/>
					the lion-hearted hero of Hellas<div class="indent10"></div><br/>
					my husband<div class="indent7"></div>She descended<br/>
					my best friend<div class="indent6"></div>and I had no idea<br/>
					<div class="indent8"></div>where to<br/>
					looking<div class="indent5"></div>look<br/>
					as<div class="indent5"></div><br/>
					<div className='threadptext'><CycleSpan entries={["memory-perfect","detail-perfect","picture-perfect"]}/></div><div class="indent4"></div><br/>
					as<div class="indent4"></div><br/>
					the<div class="indent3"></div><br/>
					day<div class="indent2"></div><br/>
					we<div class="indent"></div>I<br/>
					<TextLink link={'/reunion'} class={"text-button"} text={"met"}/><br/>
					my<div class="indent"></div><br/>
					wife<div class="indent2"></div><br/>
					again<div class="indent2"></div>now<br/>
					<div class="indent4"></div>tired<br/>
					<div class="indent6"></div>life-worn<br/>
					<br/>
					<div class="indent8"></div>replete with return<br/>
					<div class="indent8"></div>and restless with repletion<br/>
					<br/>
					<div class="indent8"></div>He must have questions<br/>
					<br/>
					<br/>
					Later on<div class="indent2"></div>That night<br/>
					<br/>
					in<br/>
					our<br/>
					bed<div class="indent"></div>first<br/>
					<div class="indent3"></div>private<br/>
					<div class="indent"></div>full<div class="indent2"></div>moment<br/>
					after<div class="indent"></div>in<br/>
					twenty<br/>
					years<br/>
					<br/>
					I<div class="indent"></div>I<br/>
					told<div class="indent2"></div>tell<br/>
					her<div class="indent3"></div>him<br/>
					everything<div class="indent2"></div>everything<br/>
					<TextLink link={'/pillowtalk'} class={"text-button"} text={"from the beginning"}/><br/>
				</div>
			</td>
		</tr>
		<tr>
			<td className='bktwentyfour threadt'>
				<div className='threadttext'>
					Besides<br/>
					there will<br/>
					be<br/>
					time<br/>
					<br/>
					I am home<br/>
					with<br/>
					both of my parents<br/>
					<br/>
					<br/>
					<br/>
					Why<br/>
					should anyone<br/>
					have to<br/>
					leave<br/>
					again?<br/>
					<br/>
					<br/>
					<br/>
					We have done<br/>
					all<br/>
					that the gods asked of us<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					We can rest<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
				</div>
			</td>
			<td className='bktwentyfour threadp'>
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
					<br/>
					<br/>
					But<br/>
					our story<br/>
					has not yet<br/>
					wound up<br/>
					<br/>
					it continues<br/>
					at the pace<br/>
					of the gods<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					hard<br/>
					fast<br/>
					relentless<br/>
					<br/>
				</div>
			</td>
			<td className='bktwentyfour threado'>
				<div className='threadotext'>
					<br/>
					<br/>
					I had<br/>
					ample time<br/>
					the next<br/>
					day<br/>
					to visit<br/>
					<TextLink link={'/laertes'} class={"text-button text-button-odysseus"} text={"my father"}/><br/>
					to hold him<br/>
					to wipe his tears<br/>
					<br/>
					but<br/>
					the gods<br/>
					were pulling<br/>
					at my strings<br/>
					again<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					It will be time<br/>
					to leave<br/>
					for another story<br/>
					again<br/>
					<br/>
					somehow<br/>
					<br/>
					<br/>
					<br/>
					and too soon<br/>
				</div>
			</td>
		</tr>
	</table>
			

		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		</div>
	)
}

export default Main