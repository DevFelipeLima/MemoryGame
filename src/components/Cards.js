import { useState } from "react";
import Card from "./Card";




const Cards =()=> {
    const [items, setItems]=useState([
          
            {id:1, img:'/img/naruto.png', status:''},
            {id:1, img:'/img/naruto.png', status:''},
            {id:2, img:'/img/sakura.png', status:''},
            {id:2, img:'/img/sakura.png', status:''},
            {id:3, img:'/img/sasuke.png', status:''},
            {id:3, img:'/img/sasuke.png', status:''},
            {id:4, img:'/img/kakashi.png', status:''},
            {id:4, img:'/img/kakashi.png', status:''},
            {id:5, img:'/img/tsunade.png', status:''},
            {id:5, img:'/img/tsunade.png', status:''},
            {id:6, img:'/img/jiraya.png', status:''},
            {id:6, img:'/img/jiraya.png', status:''},
            {id:7, img:'/img/shikamaru.png', status:''},
            {id:7, img:'/img/shikamaru.png', status:''},
            {id:8, img:'/img/gaara.png', status:''},
            {id:8, img:'/img/gaara.png', status:''},
            {id:9, img:'/img/minato.png', status:''},
            {id:9, img:'/img/minato.png', status:''},
            {id:10, img:'/img/hinata.png', status:''},
            {id:10, img:'/img/hinata.png', status:''},
        ].sort(()=>Math.random() - 0.5))

        //checar se os id sao iguais e mudar o stat de acordo com a resposta
        const [previous, setPrevious]=useState(-1)
            const check = (current)=>{
                if(items[current].id == items[previous].id){
                    items[current].status = 'correct'
                    items[previous].status = 'correct'
                    setPrevious(-1)
                }else{
                    items[current].status='wrong'
                    items[previous].status='wrong'
                    setItems([...items])
                    setTimeout(()=>{
                        items[current].status=''
                        items[previous].status=''
                        setItems([...items])
                        setPrevious(-1)
                    }, 1000)
                }
            }
      

        const handleClick=(id)=>{
            if(previous ===-1 ){
                items[id].status='active'
                setPrevious(id)
            }else{
                check(id)
            }
        }
       
    return ( 
        <div className="cards">
            {items.map((item, index )=>(
                <Card key={index} item={item} id={index} handleClick={handleClick} />
                ))}
        </div>
     );
}
 
export default Cards