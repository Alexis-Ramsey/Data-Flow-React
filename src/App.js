import React from 'react'
import Header from './components/Header'
import Body from './components/Body'

export default function App(){
    const [counter, setCounter] = React.useState(0)

    return(
        <div className="container">
            <div className="row">
                <h1>Hello DataFlow</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <Header /> 
                </div>
                <div className="col-sm-6">
                    <Body number={counter}/> {/* number is the attibute for header => this is how you will pass data from one component to another*/}
                </div>
            </div>
        </div>
    )
}