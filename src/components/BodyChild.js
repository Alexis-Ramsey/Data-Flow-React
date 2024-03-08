import React from 'react'
import BodyGrandChild from './BodyGrandChild'
import BodyGrandChildTwo from './BodyGrandChildTwo'

export default function BodyChild({counting, setShow, list}){
    //you can destructure it ({number}) or you can do props (props) in the parameter

    return(
        <div className="container">
            <div className="row">
                <h3>I'm the Body Child</h3>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <BodyGrandChild counter={counting}/> {/* You can name the attibute whatever you want */}
                </div>
                <div className="col-sm-6">
                    <BodyGrandChildTwo setShow={setShow} list={list}/>
                </div>
            </div>
        </div>
    )
}