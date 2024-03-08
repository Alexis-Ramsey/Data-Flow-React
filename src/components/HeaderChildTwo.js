import React from 'react' 

export default function HeaderChildTwo({show, setList, list}){

    function Something(){

        setList((prevList) => 
            [...prevList, `child ${list.length + 1}`]
        )

        // console.log(list)
    }

    return(
        <div className="container">
            <div className="row">
                <h3>I'm the Header Child Two</h3>
                <h4 className={show ? "showing" : "notShowing"}>Alexis</h4>
                <input type="button" value="Click Me!" onClick={Something} />
            </div>
        </div>
    )
}