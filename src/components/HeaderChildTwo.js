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
                <input type="button" value="Click Me!" onClick={Something} />
                {/* <h4 className={show ? "showing" : "notShowing"}>Alexis</h4>  */} {/* You can either do the visibility in the stylesheet or change it within the js tag ("{}")*/} 
                {show ? <h3>Alexis</h3> : " "}
            </div>
        </div>
    )
}