import React from 'react'

export default function BodyGrandChild({pizza}){

    return(
        <div className="container">
            <div className="row">
                <h4>I'm the Body Grand Child</h4>
                <h5>{pizza}</h5>
            </div>
        </div>
    )
}