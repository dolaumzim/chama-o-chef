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

  a {
    max-width: 100px;
    margin-left: 10px;
    transition: 500ms;
  }
`;
