import React, { useState } from 'react';



export const Keys = () => {

    const [key,setkeys] =useState()


    const buttonpress = (e) =>{

        console.log(e)

    }


    return(

        <div>
            <button onClick={buttonpress}>A</button>
            <button>S</button>
            <button>D</button>
            <button>F</button>
            
            <button>J</button>
            <button>K</button>
            <button>L</button>
            <button>;</button>
        </div>
    )

}