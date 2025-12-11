import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

import { Icon } from '@budget-app/ui'

import { menuItems } from '../../utils/menuItems'
import StyledNav from '../../styles/StyledNav'

interface NavProps {
  username?: string | null | undefined
}

export default function Nav({ username }: NavProps) {
  const router = useRouter()

  return (
    <StyledNav>
      {username && (
        <div className="user-con">
          <img src={'../../img/avatar.png'} alt="User Image" />
          <div>
            <h2>{username}</h2>
            <p>Your Budget</p>
          </div>
        </div>
      )}

      <ul className="menu-items">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => router.push(item.link)}
            className={router.pathname === item.link ? 'active' : undefined}
          >
            <Icon name={item.iconName} />
            {item.title}
          </li>
        ))}
      </ul>

      <div className="button-sign-out" onClick={() => signOut()}>
        <Icon name="signout" />
        {'Sign Out'}
      </div>
    </StyledNav>
  )
}
