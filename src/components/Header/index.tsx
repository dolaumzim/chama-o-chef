import { ImgLogo, Logo, Menu, StyledHeader } from './styles';
import car from '../../assets/car.svg';
import user from '../../assets/user.svg';
import logo from '../../assets/logo.svg';
import imgLogo from '../../assets/imgLogo.svg';
import { useEffect, useRef, useState } from 'react';
import { InputFind } from '../InputFind';
import { DropdownItem } from '../DropdownIcon/DropdownItem';
import { Link } from 'react-router-dom';
import { frontEndRoutes } from '../../routes';
import { useCart } from '../../contexts/CartContext';

type HeaderProps = {
  action: boolean;
};

const Header: React.FC<HeaderProps> = ({ action }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const {userData} = useCart()
  const [headerName, setHeaderName] = useState('')
 
  useEffect(()=> {
  if(userData.name){
  const nameAux = userData.name.split(' ')
  setHeaderName(nameAux[0])
}
},[userData.name])

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = frontEndRoutes.login;
  }

  
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId??'');
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
        <Link to={frontEndRoutes.home}><img src={logo} alt="name logo"/></Link>
        <ul>
          <li>
            <a href="#nearby">Próximo a você</a>
          </li>
          <li>
            <a href="#favorites">Favoritos</a>
          </li>
          <li>
            <a href="#map" >Chefs próximos</a>
          </li>
        </ul>
      </Logo>

      <ImgLogo>
      <Link to={frontEndRoutes.home}><img src={imgLogo} alt="" /></Link>
      </ImgLogo>

      <Menu>
        <InputFind value={''} onChange={() => {}} placeholder="Busca" />
        <div className="menu-container" ref={menuRef}>
          <div
            className="menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src={user} />
            <span>Olá, {headerName}!</span>
          </div>

          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
            <h3>Olá, {headerName}</h3>
            <ul>
              <DropdownItem img={user} text={'Pedidos'} link='' />
              <DropdownItem img={user} text={'Pagamentos'} link='' />
              <DropdownItem img={user} text={'Meus dados'} link={frontEndRoutes.userProfile} />
              <DropdownItem img={user} text={'Sair'} link='' onClick= {handleLogout}/>
            </ul>
          </div>
        </div>

        <img src={car} />
      </Menu>
    </StyledHeader>
  );
};

export default Header;
