import React from "react"
function Eventlisterner() {
    const [resized, setResized] = React.useState(0)
    const [skip, setSkip] = React.useState(true)
    function toggle() {
        setSkip(prevSkip => !prevSkip)
    }

    React.useEffect(()=> {
        console.log("Use effect")
        window.addEventListener("resize", function () {
            console.log("add event")
            setResized(window.innerWidth)
        })
        return () => {
            window.removeEventListener("resize", function () {
                console.log("remove effect")
                setResized(window.innerWidth)
            })
        }
    }, [])

    return (
        <div>
            <button onClick={toggle}>Toggle</button>
            <h1>Windows resizing</h1>
            {skip && <h3>resized {resized}</h3>}
        </div>
    )
}

export default Eventlisterner