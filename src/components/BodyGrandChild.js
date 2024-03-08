import React from 'react'

export default function BodyGrandChild({counter}){

    function Adding(counter){
        counter((prevCount) => prevCount + 1)
    }
    


    return(
        <div className="container">
            <div className="row">
                <h4>I'm the Body Grand Child</h4>
                <input type="button" value="add" onClick={() => Adding(counter)} />
            </div>
        </div>
    )
}