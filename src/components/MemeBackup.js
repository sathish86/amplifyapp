import React from "react";
import meme_data from "./meme_data";

function Meme(props) {
    let url = "https://picsum.photos/400/400?random=1"
    const [urlResult, setUrlResult] = React.useState(url)
    const [meme, setMeme] = React.useState({
        topText: "hello",
        bottomText: "World",
        randomImage: urlResult
    })
    const [allImages, setAllImages] = React.useState(meme_data)

    console.log(urlResult)

    function getMemeImage() {
        const item = allImages[Math.floor(Math.random() * allImages.length)];
        console.log("Meme clicked")
        setMeme(prevMeme => {
            return {...prevMeme, randomImage: item.url}
        })
    }

    function getTopText(e) {
        console.log(e)
        setMeme(prevMeme => {
            return {...prevMeme, topText: "asdf"}
        })
    }

    // // Add or subtract counter
    // const [count, setCount] = React.useState(0)
    // function add(){
    //     setCount(prevCount => prevCount+1)
    // }
    // function subtract(){
    //     setCount(prevCount => prevCount-1)
    // }

    return (
        <main>
            <div className="form">
                <input className="form--input" type='text'
                    placeholder={meme.topText} />
                <input className="form--input" type='text'
                    placeholder={meme.bottomText} />
                <button onClick={getMemeImage} className="form--button">
                    Get a new image</button>
                {/* <button onClick={subtract} className="form--button">
                Subtract -</button>
                <button onClick={add} className="form--button">
                Addition + </button>
                <input className="form--input" type='text'
                placeholder="" value={count} /> */}
                <p><span>{meme.topText}</span></p>
                <p><span>{meme.bottomText}</span></p>
                <img className="form--image" src={meme.randomImage}></img>
            </div>
        </main>
    )
}

export default Meme;