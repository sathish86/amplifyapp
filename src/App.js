import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import Additem from './components/Additem';
import Article from './components/Article';
import boxes_data from './components/boxes_data';
import Box from './components/Box';
import Form from './components/Form';
import StartWarsCount from './components/StarWarsCount';
import Eventlisterner from './components/Eventlisterner';
import './style.css';
import React from 'react';

// function App() {
//   return (
//     <div>
//       <Eventlisterner/>

//     </div>
//   );
// }

function App() {
  const user = "Sathish"
  return (
    <div>
      <Header user_name={user} />
      <Meme user_name={user} />

    </div>
  );
}

// // use effect example
// function App() {

//   const [count, setCount] = React.useState(0)
//   const [starWarsData, setStarWarsData] = React.useState({})
//   console.log("App comp rendered")

//   React.useEffect(() => {
//     console.log("in starwars")
//     fetch(`https://swapi.dev/api/people/${count}`)
//     .then(res => res.json())
//     .then(data => setStarWarsData(prevStarWarsData => data))
//   }, [count])

//   // React.useEffect(() => {
//   //   console.log("Use effect")
//   // }, [count])

//   function handleClick(){
//     console.log("handleClick func")
//     // fetch("https://swapi.dev/api/people/1")
//     // .then(res => res.json())
//     // .then(data => setStarWarsData(prevStarWarsData => data))

//     setCount(prevCount => {
//       prevCount = prevCount + 1
//       return (prevCount)
//     })
//   }
//   return (
//     <div>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//       <StartWarsCount count={count}/>
//       <button onClick={handleClick}>Add</button>

//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Form/>

//     </div>
//   );
// }

// // ******  condition rendering 
// function App(){
//   const [message, setMessage] = React.useState(['a','b'])
//   const [isShown, setIsShown] = React.useState(false)
//   function toggle(){
//     setIsShown(prevIsShown => !prevIsShown)
//   }
//   return (

//     <div>
//       You have {isShown && <p> {message.length} </p>} messages
//       <button onClick={toggle}>{isShown ? "hide": "show"} message</button>
//     </div>

//   )
// }

// function App() {
//   const [boxes, setBoxes] = React.useState(boxes_data)

//   function toggle(id) {
//     setBoxes(prevBoxes => {
//       return prevBoxes.map(item => {
//         return item.id === id ? {...item, on: !item.on} : item
//       })
//     })
//   }

//   const boxElements = boxes.map(box_item => {
//     return (<Box
//       key={box_item.id}
//       handleClick={() => toggle(box_item.id)}
//       on={box_item.on}
//     />)
//   })

//   return (
//     <div>
//       {boxElements}
//     </div>
//   );
// }

// function App() {
//   // const thingsArray = ["Thing1", "Thing2"]


//   return (
//     <div>
//       {/* <Header/>
//       <Meme/> */}
//       {/* <Additem/> */}
//       <Article/>
//     </div>
//   );
// }

// function App() {
//   function handleClick(){
//     console.log("I am clicked");
//   }
//   function handleMouseOver(){
//     console.log("Mouse overred");
//   }
//   return (
//     <div>
//       <img onMouseOver={handleMouseOver} src="https://picsum.photos/640/360"/>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

export default App;
