import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

import { Nav as NavStyled } from './StyledNav'

interface NavProps {
  username?: string | null | undefined
}

function Nav({ username }: NavProps) {
  const router = useRouter()

  return (
    <NavStyled>
      <div className="user-con">
        <img src={'../../img/avatar.png'} alt="" />
        <div className="text">
          <h2>{username}</h2>
          <p>Your Budget</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                router.push(item.link)
              }}
              className={router.pathname === item.link ? 'active' : ''}
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
