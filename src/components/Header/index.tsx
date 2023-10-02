import { ImgLogo, Logo, Menu, StyledHeader, HeaderName } from './styles';
import userhat from '../../assets/userhat.svg';
import user from '../../assets/user.svg';
import logout from '../../assets/logout.svg';
import logo from '../../assets/logo.svg';
import imgLogo from '../../assets/imgLogo.svg';
import { useEffect, useRef, useState } from 'react';
import { DropdownItem } from '../DropdownIcon/DropdownItem';
import { Link } from 'react-router-dom';
import { frontEndRoutes } from '../../routes';
import { useCart } from '../../contexts/CartContext';
import { CartButton } from '../CartButton';

type HeaderProps = {
  action: boolean;
};

const Header: React.FC<HeaderProps> = ({ action }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { userData, setIsCartVisible } = useCart();
  const [headerName, setHeaderName] = useState('');

  useEffect(() => {
    if (userData.name) {
      const nameAux = userData.name.split(' ');
      setHeaderName(nameAux[0]);
    }
  }, [userData.name]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = frontEndRoutes.login;
  };

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId ?? '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <StyledHeader className={action ? 'activeColor' : ''}>
      <Logo>
        <Link to={frontEndRoutes.home}>
          <img src={logo} alt="name logo" />
        </Link>
        {location.pathname.includes('home')?
          <ul>
          <li>
            <a href="#nearby">Próximo a você</a>
          </li>
          <li>
            <a href="#favorites">Favoritos</a>
          </li>
          <li>
            <a href="#map">Chefs próximos</a>
          </li>
        </ul>
        :null}
      </Logo>

      <ImgLogo>
        <Link to={frontEndRoutes.home}>
          <img src={imgLogo} alt="" />
        </Link>
      </ImgLogo>

      <Menu>
        <div className="menu-container" ref={menuRef}>
          <div
            className="menu-trigger"
            onClick={() => {
              setOpen(!open);
              setIsCartVisible(false);
            }}
          >
            <img src={userhat} />
            <HeaderName>Olá, {headerName}!</HeaderName>
          </div>

          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
            <h3>Olá, {headerName}</h3>
            <ul>
              <DropdownItem
                img={user}
                text={'Meus dados'}
                link={frontEndRoutes.userProfile}
              />
              <DropdownItem
                img={logout}
                text={'Sair'}
                link=""
                onClick={handleLogout}
              />
            </ul>
          </div>
        </div>

        <CartButton />
      </Menu>
    </StyledHeader>
  );
};

export default Header;
