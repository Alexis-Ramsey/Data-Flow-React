import React, { useState } from 'react'

export default function UseEffect(){
    const [count, setCounter] = React.useState(0)
    const [even, setIsEven] = useState({})
    const [isTrue, setIsTrue] = React.useState(false)
   



//We are pulling data from external scr (API) so we need to use a "useEffect" hook
//UseEffect have two parameters  => 1.) is required  2.) is optional  
    React.useEffect(() => {
        console.log("Data Ran")
        fetch(`https://api.isevenapi.xyz/api/iseven/${count}/`)
        .then(res => res.json())
        .then(data => setIsEven(data))
    }, [isTrue])

    function ChangeNumber(event){
        setCounter(event.target.value)
    }

    console.log(even)

    function changing(event){
        event.preventDefault()
        setIsTrue(prevtrue => !prevtrue)
      
    }

    return(
        <div className="container">
            <div className="row">
                <h1>Hello UseEffect</h1>
            </div>
            <div className="row">
                <form action="">
                    <input type="text" onChange={ChangeNumber}/>
                    <button onClick={changing}>Submit</button>
                    {even.iseven ? <h3>is even</h3> : <h3>is odd</h3>}
                </form>
            </div>
        </div>
    )

}