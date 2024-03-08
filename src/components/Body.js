import React from 'react'
import BodyChild from './BodyChild'
import BodyChildTwo from './BodyChildTwo'

export default function Body({number, counting, setShow, list}){
    //you can destructure it ({number}) or you can do props (props) in the parameter

    

    return(
        <div className="container">
            <div className="row">
                <h2>I'm the Body</h2>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <BodyChild counting={counting} setShow={setShow} list={list} />
                </div>
                <div className="col-sm-6">
                    <BodyChildTwo number={number} />
                </div>
            </div>
        </div>
    )
}