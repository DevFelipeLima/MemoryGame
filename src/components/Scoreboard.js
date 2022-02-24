import React, { useState } from "react";
import Players from "./Players";
import Score from "./Scores";

const Scoreboard = () => {

    return ( 
        <div className="scoreboard">
        <h1>Scoreboard</h1>
        <Players />
        <Score />
        
        </div>
     );
}
 
export default Scoreboard
