import styled from 'styled-components'
import { useState, useMemo } from 'react'
// @ts-ignore
import bg from './img/bg.png'
import { MainLayout } from './Components/Layout/StyledMain'
import Orb from './Components/Orb/Orb'
import Nav from './Components/Nav/Nav'
import Dashboard from './Components/Dashboard/Dashboard'
import Incomes from './Components/Incomes/Incomes'
import Expenses from './Components/Expenses/Expenses'

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`

function App() {
  const [active, setActive] = useState(1)

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  const OrbMemoized = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled>
      {OrbMemoized}
      <MainLayout>
        <Nav active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  )
}

export default App
