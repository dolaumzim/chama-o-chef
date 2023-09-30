import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid transparent;
  transition: all ease 0.8s;
  background-color: rgb(0, 0, 0, 0.4);
  z-index: 1;
  background-color: ${props => (props.className ? 'rgb(0, 0, 0, 0.92)' : '')};
`;

export const Logo = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  img {
    height: 60px;
    border: 0px solid #ccc;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ImgLogo = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  img {
    height: 80px;
    position: relative;
    top: 50%;
    filter: brightness(1);
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  border: 0px solid #ccc;
  gap: 30px;

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  li {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-left: 20px;
  }
  .menu-trigger {
    display: flex;
    gap: 5px;
  }
  .menu-trigger img {
    /* position: absolute; */
    top: 20px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    top: 100px;
    right: 75px;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px 20px;
    width: 200px;
    box-shadow: 4px 7px 12px 0px rgba(0, 0, 0, 0.25);
  }

  .dropdown-menu::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 20px;
    height: 20px;
    width: 20px;
    background: #fff;
    transform: rotate(45deg);
  }

  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 500ms ease;
  }

  .dropdown-menu.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 500ms ease;
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    font-weight: 500;
    font-size: 18px;
    color: #555;
    line-height: 1.2rem;
  }

  h3 span {
    font-size: 14px;
    color: #cecece;
    font-weight: 400;
  }
  span {
    color: gray;
    cursor: pointer;
  }
  .dropdown-menu ul li {
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  .dropdown-menu ul li:hover a {
    color: rgb(212, 33, 9);
    cursor: pointer;
  }

  .dropdown-menu ul li:hover img {
    opacity: 1;
    cursor: pointer;
  }
`;
