import { ImgLogo, Logo, Menu, StyledHeader } from './styles';
import car from '../../assets/car.svg';
import user from '../../assets/user.svg';
import logo from '../../assets/logo.svg';
import imgLogo from '../../assets/imgLogo.svg';
import { useEffect, useRef, useState } from 'react';
import { InputFind } from '../InputFind';
import { DropdownItem } from '../DropdownIcon/DropdownItem';

type HeaderProps = {
  action: boolean;
};

const Header: React.FC<HeaderProps> = ({ action }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
        console.log(menuRef.current);
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
        <img src={logo} alt="name logo" />
        <ul>
          <li>
            {/* Implementar o Link do Router */}
            <a href="#">Chefs próximos</a>
          </li>
          <li>
            {/* Implementar o Link do Router */}
            <a href="#">Favoritos</a>
          </li>
        </ul>
      </Logo>

      <ImgLogo>
        <img src={imgLogo} alt="" />
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
            <span>Olá, {'data.user'}!</span>
          </div>

          <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
            <h3>Olá, {'data.user'}</h3>
            <ul>
              <DropdownItem img={user} text={'Pedidos'} />
              <DropdownItem img={user} text={'Pagamentos'} />
              <DropdownItem img={user} text={'Meus dados'} />
              <DropdownItem img={user} text={'Sair'} />
            </ul>
          </div>
        </div>

        <img src={car} />
      </Menu>
    </StyledHeader>
  );
};

export default Header;
