import styled from "@emotion/styled";

export const StyledBasketList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-around;
  list-style: none;
  outline: 1px solid blue;
`;

export const BasketItemBox = styled.li`
  position: relative;
  display: flex;
  gap: 20px;
  align-items: center;
  border: 1px solid gray;
`;

export const Image = styled.img`
  display: block;
  width: 100px;
`;

export const Title = styled.h2`
  margin: 8px 0px;
  padding: 0;
  padding-left: 8px;
  text-align: left;
  font-size: 16px;
`;


export const Price = styled.p`
  font-size: 24px;
  color: red;
`;

export const PriceSymbol = styled.span`
  font-size: 12px;
`;
export const BasketButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  border: none;
  font-size: 25px;
  background-color: transparent;
  transition: color 300ms ease-in-out;
  &:hover {
    color: green;
  }
`;
