import { JSX } from 'react'
import '../styles/css/Pages/App.css'

interface ComponentProperties {
  id: string
}

export const Unauthenticated: (props: ComponentProperties) => JSX.Element = ({ id }) => {
  return (
    <div id={id} className="App">
      <header id="unauthenticated-page-header" className="App-header">
        <img
          id="unauthenticated-page-img"
          src="/user-question.svg"
          className="App-logo"
          alt="logo"
        />
        <div id="unauthenticated-page-text">Неудостоверен потребител!</div>
      </header>
    </div>
  )
}
