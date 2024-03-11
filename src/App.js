import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './styles.css'
import UseEffect from './components/UseEffect'

export default function App(){
    const [counter, setCounter] = React.useState(0)
    const [show, setShow] = React.useState(false)
    const [list, setList] = React.useState(['child 1', 'child 2'])

    return(
        <div className="container">
            <div className="row">
                <h1>Hello DataFlow</h1>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <Header show={show} setList={setList} list={list} /> 
                </div>
                <div className="col-sm-4">
                    <Body number={counter} counting={setCounter} setShow={setShow} list={list}/> {/* number is the attibute for header => this is how you will pass data from one component to another*/}
                </div>
                <div className="col-sm-4">
                    <UseEffect count={counter}/>
                </div>
            </div>
        </div>
    )
}