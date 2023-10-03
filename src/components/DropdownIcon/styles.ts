import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DropDownItem = styled.li`
  display: flex;
  margin: 10px auto;

  img {
    max-width: 20px;
    margin-right: 10px;
    opacity: 0.5;
    transition: 500ms;
  }
`

export const DropDownLink = styled(Link)`
    max-width: 100px;
    margin-left: 10px;
    transition: 500ms;
    color: #000;

    &:visited{
      color: inherit;
    }

    &:hover{
      color: rgb(212, 33, 9);
    }
`