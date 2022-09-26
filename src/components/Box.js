import React from "react";

function Box(props) {
    const styles = {
        backgroundColor: props.on ? "blue" : "transparent"
    }
    return (
        <div
            onClick={props.handleClick}
            style={styles}
            className='box'>
        </div>)
}
export default Box