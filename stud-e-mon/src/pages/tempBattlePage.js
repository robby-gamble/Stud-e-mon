import React from "react";
import battleImage from '../assets/battlesequence.png';
import '../battlepage.css';

export default function tempBattlePage(props) {

    return (
        <div>
            <div class="container">
                <img
                    src={battleImage}
                    alt="Battle Sequence"
                    width="1110"
                />
                <div class ="player">Player Health Level</div>
                <div class= "monster">Monster Health Level</div>
    <div class="boxed"> Question: This a question. </div>
                <div>
                    <button type="button" class="block">Block Button</button>
                    <button type="button" class="block">Block Button</button>
                    <button type="button" class="block">Block Button</button>
                    <button type="button" class="block">Block Button</button>
                </div>
            </div>



        </div>
    )
};