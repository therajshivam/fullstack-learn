// import React from 'react'
// import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// We can make a custom function here too, like the App.jsx, and render it with react
// function myApp() {
//   return(
//     <div>
//       <h1>Custom App!</h1>
//     </div>
//   )
// }

// this is the example of our custom react implementation
/*
const reactElement = {
    type: 'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}
*/

// this is how react gets the element, it is JSX formate of how bundler takes the input
// const AnotherElement = (
//   <a href="https://google.com" target='_blank'></a>
// )

// const anotherVariable = "chai aur code"

// this is how the bundler parse the JSX code into an object after converting JSX into js.
// const reactElement = React.createElement(
//   'a',
//   {href : 'https://google.com', target : '_blank'},
//   'click me to visit google',
//    anotherVariable,
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

)
