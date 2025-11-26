import { Nav as NavStyled } from './StyledNav'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'

interface NavProps {
  active?: number
  setActive?: React.Dispatch<React.SetStateAction<number>>
}

function Nav({ active, setActive }: NavProps) {
  const router = useRouter()

  return (
    <NavStyled>
      <div className="user-con">
        <img src={'../../img/avatar.png'} alt="" />
        <div className="text">
          <h2>Ramadan</h2>
          <p>Your Budget</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                setActive && setActive(item.id)
                router.push(item.link)
              }}
              className={active === item.id ? 'active' : ''}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          )
        })}
      </ul>
      <div
        className="bottom-nav"
        onClick={() => {
          signOut()
        }}
      >
        <li>{signout} Sign Out</li>
      </div>
    </NavStyled>
  )
}

export default Nav
