import React from "react"
function Additem() {

    const [thingsArray, setThingsArray] = React.useState(["Thing1", "Thing2"])
    function addItems() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Things ${prevThingsArray.length + 1}`]
        })
    }
    const thingsElements = thingsArray.map(item => <p key={item}>{item}</p>)
    return (
        <add_items >
            <button onClick={addItems} className="form--button">
                Add item</button>
            {thingsElements}
        </add_items>
    )
}

export default Additem;