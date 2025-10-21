import { JSX } from 'react'
import '../styles/css/Pages/App.css'

interface ComponentProperties {
  id: string
}

export const NotFound: (props: ComponentProperties) => JSX.Element = ({ id }) => {
  return (
    <div id={id} className="App">
      <header id="not-found-page-header" className="App-header">
        <img
          id="not-found-page-img"
          src="/question-exclamation.svg"
          className="App-logo"
          alt="logo"
        />
        <div id="not-found-page-text">Страницата избяга!</div>
      </header>
    </div>
  )
}
