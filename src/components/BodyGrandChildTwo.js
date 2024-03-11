import React from 'react'

export default function BodyGrandChildTwo({setShow, list}){

    function Showing(setShow){
        setShow(prevShow => !prevShow)
    }
 
 
    const listing = list.map(
        (child) =>{

           return <p>{child}</p>             
        }
    )

    return(
        <div className="container">
            <div className="row">
                <h4 onClick={() => Showing(setShow)} className='bodyGrandChildTwo'>I'm the Body Grand Child Two</h4>
                {listing}
            </div>
        </div>
    )
}