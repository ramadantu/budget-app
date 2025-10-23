import { Nav as NavStyled } from './StyledNav'
// @ts-ignore
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { LogOutUser } from '../../utils/keycloak'

interface NavProps {
  active: number
  setActive: React.Dispatch<React.SetStateAction<number>>
}

function Nav({ active, setActive }: NavProps) {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
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
              onClick={() => setActive(item.id)}
              className={active === item.id ? 'active' : ''}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          )
        })}
      </ul>
      <div className="bottom-nav" onClick={LogOutUser}>
        <li>{signout} Sign Out</li>
      </div>
    </NavStyled>
  )
}

export default Nav
