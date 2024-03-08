import React from 'react' 
import HeaderChild from './HeaderChild'
import HeaderChildTwo from './HeaderChildTwo'

export default function Header(){

    return(
        <div className="container">
            <div className="row">
                <h2>I'm the Header</h2>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <HeaderChild />
                </div>
                <div className="col-sm-6">
                    <HeaderChildTwo />
                </div>
            </div>

        </div>
    )
}