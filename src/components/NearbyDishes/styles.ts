import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 30px;
  padding: 20px 160px;
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const Outer = styled.div`
  display: flex;
  justify-content: center;
  overflow:visible;
  width:100%;
`;

export const Inner = styled.div`
  width: 75%;
  overflow: visible;
  z-index: 0;


  >div>div>div{
    display:flex;
    justify-content:center;
    gap: 20px;
    padding: 15px
  }
`;