import { styled } from 'styled-components';

export const Item = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;
`;

export const ImageDish = styled.img`
  width: 70px;
  border-radius: 10px;
  padding: 5px;
`;

export const ItemContent = styled.div`
  padding: 10px 35px 0 10px;
`;

export const ItemTile = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
`;

export const ItemPrice = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export const RemoveItem = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  color: #d83232;
  font-size: 1.4rem;
  border: none;
  background: none;
  cursor: pointer;
`;

export const ItemQuantity = styled.span`
  position: absolute;
  bottom: 10px;
  right: 0;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #dedede;
  background: #fff;
  width: 100px;
  height: 30px;
  flex-shrink: 0;
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 3px;
  margin-top: 10px;
`;

export const ButtonPlus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 10px;
  color: ${props => props.color || '#f58100'};
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #ffff;
  text-align: center;
`;
