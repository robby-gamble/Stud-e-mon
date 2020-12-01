import React from "react";
import battleImage from '../assets/battlesequence.png';
import '../battlepage.css';

export default function tempBattlePage() {

    return (
        <div>
            <div class="container">
                <img
                    src={battleImage}
                    alt="Battle Sequence"
                    width="1110"
                />
                <progress id="health" value="100" max="100"></progress>
                <div class ="player">Player Health Level</div>
                <div class= "monster">Monster Health Level</div>
    <div class="boxed"> Question: This a question. </div>
                <div>
                <button type="button" class="btn btn-primary btn-lg">
                    <h3 style={{ textAlign: "center", color: "black"}}>
                    {this.props.title}
                    </h3>
                </button>
                <button type="button" class="btn btn-primary btn-lg">
                    <h3 style={{ textAlign: "center", color: "black"}}>
                    {this.props.title}
                    </h3>
                </button>
                <button type="button" class="btn btn-primary btn-lg">
                    <h3 style={{ textAlign: "center", color: "black"}}>
                    {this.props.title}
                    </h3>
                </button>
                <button type="button" class="btn btn-primary btn-lg">
                    <h3 style={{ textAlign: "center", color: "black"}}>
                    {this.props.title}
                    </h3>
                </button>
                    
                </div>
            </div>



        </div>
    )
};