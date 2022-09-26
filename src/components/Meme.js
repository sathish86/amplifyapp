import React from "react";
import meme_data from "./meme_data";

function Meme(props) {
    const [meme, setMeme] = React.useState({
        topText: "hello",
        bottomText: "World",
        randomImage: "https://picsum.photos/400/400?random=1"
    })
    const [allData, setAllData] = React.useState([])
    React.useEffect(() => {
        console.log("all data")
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllData(prevAllData => data.data.memes))
    }, [])
    console.log(allData)

    function getMemeImage() {
        const item = allData[Math.floor(Math.random() * allData.length)];
        console.log("Meme clicked")
        setMeme(prevMeme => {
            return {...prevMeme, randomImage: item.url}
        })
    }
    function handleChange(event){
        event.preventDefault();
        console.log("Handle change")
        const {name, value} = event.target
        console.log(name, value)
        setMeme(prevMeme => {
            return {...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
               
                    <input className="form--input" type='text'
                        onChange={handleChange}
                        name="topText" 
                        placeholder="type top text"
                        value={meme.topText}/>
                    <input className="form--input" type='text'
                        onChange={handleChange}
                        name="bottomText"
                        placeholder="type bottom text"
                        value={meme.bottomText}/>
                <button onClick={getMemeImage} className="form--button">
                    Get a new image</button>
                <div className="container">
                    <img src={meme.randomImage}></img>
                    <h3 className="centered">{meme.topText}</h3>
                    <h3 className="bottom-right">{meme.bottomText}</h3>
                </div>
                
            </div>
        </main>
    )
}

export default Meme;