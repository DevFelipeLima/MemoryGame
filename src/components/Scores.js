import React from 'react'
import { useState } from 'react'
import './Players.css'

const Score = () => {
    const [Score1, setScore1]= useState(0)
        const handleMarkScore1 =()=>{
            if(Score1  <= 10){
                setScore1(Score1 + 1)
            }else{
                alert("Você venceu!!! PARABENS Player 1 🤘")
            }
           console.log(Score1)
        }
    const [Score2, setScore2]= useState(0)
        const handleMarkScore2 =()=>{
           if(Score2 <= 10){
            setScore2(Score2 + 1)
        }else{
            alert("Você venceu!!! PARABENS Player 2 🤘")
        }
       
        }
        
    

    return ( 
        <>
            <h1>Pontuação</h1>
        <div className='Score1'>
            <spam className='btn-1' onClick={handleMarkScore1}>Player 1</spam>
            <spam>{Score1}</spam>
        </div>
        <div className='Score2'>
        <spam className='btn-2' onClick={handleMarkScore2}>Player 2</spam>
            <spam>{Score2}</spam>
        </div>
        </>
     );
}
 
export default Score;
