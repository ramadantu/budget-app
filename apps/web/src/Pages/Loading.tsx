import { JSX } from 'react'
import '../styles/css/Pages/App.css'

interface ComponentProperties {
  id: string
}

export const Loading: (props: ComponentProperties) => JSX.Element = ({ id }) => {
  return (
    <div id={id} className="App">
      <header id="loading-page-header" className="App-header">
        <img id="loading-page-img" src="/user-search.svg" className="App-logo" alt="logo" />
        <div id="loading-page-text">Зареждане...</div>
      </header>
    </div>
  )
}
