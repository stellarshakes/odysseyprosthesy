import React from 'react'
import CycleSpan from "../components/CycleSpan";
import TextLink from "../components/TextLink";
import ScrollToTop from "../components/ScrollToTop"

function BabyTelemachos() {
        return (
        <div className='poem babytelemachos setOdysseus'>
            <h2>Baby Telemachos</h2>
            <p>
                your mother last let me hold you<br/>
                warm and peaceful in sleep<br/>
                the night before we cast off for Ilios<br/>
                <br/>
                she had to weep in silence<br/>
                <br/>
                you woke fussing<br/>
                under a tender kiss coarse with whiskers<br/>
                <br/>
                the moment when your eyes<br/>
                big and blue as the prows of our ships<br/>
                washed over me<br/>
                the milk on your shallow breath<br/>
                was a private infinity<br/>
                ruptured by<br/>
                <CycleSpan entries={["clanging armour waking from storage",
                    "a new kind of grief, some god's doing",
                    "second thoughts?"]}/><br/>
                <br/>
                the taut sting of your little fingers grasping at my beard<br/>
                lingers still<br/>
                <br/>
                within my breast<br/>
                <br/>
                there is another sting:<br/>
                that I will hear your voice<br/>
                twenty years in the making<br/>
                and not know it<br/>
                <br/>
                <TextLink link={'/odysseus'} class={"text-button text-button-odysseus"} text={"←"}/> 
                <div class="indent"> </div> 
                <TextLink link={'/act-ii'} class={"text-button text-button-odysseus"} text={"⌂"}/>
                <div class="indent"> </div> 
                <TextLink link={'/farewell'} class={"text-button text-button-odysseus"} text={"→"}/><br/>
                <br/>
            </p>
            <ScrollToTop/>
        </div>
    )
}

export default BabyTelemachos