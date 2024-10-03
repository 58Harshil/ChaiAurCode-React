import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from 'react/jsx-runtime.js'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

/*
const ReactElement = {
  type: 'a',
  props: {
      href: 'https://reactjs.org/',
      target: '_blank',
  },
  children: 'Learn React',
}
*/

const anotheruser = "chai aur react"
const ReactElement = React.createElement(
  'a',
  {href: 'https://reactjs.org', target: '_blank'},
  'click me to visit google',
  anotheruser
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Vist google</a>
)


ReactDom.createRoot(document.getElementById('root')).render(
  reactElement
)
