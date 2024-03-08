import React from 'react'

export default function BodyGrandChildTwo({setShow, list}){

    function Showing(setShow){
        setShow(prevShow => !prevShow)
    }

 
        const listing = list.map(
            (child) =>{

                
            
            return(
                {listing}
            )}
        )

   

    return(
        <div className="container">
            <div className="row">
                <h4 onClick={() => Showing(setShow)}>I'm the Body Grand Child Two</h4>
                <p>{list}</p>
            </div>
        </div>
    )
}