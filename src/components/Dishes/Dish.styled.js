import styled from "@emotion/styled";

export const DishItem = styled.li`
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 480px;
  border: 1px solid gray;
  border-radius: 25px;
  overflow: hidden;
  transition: box-shadow 300ms ease-in-out;
  &:hover {
    -webkit-box-shadow: 10px 10px 19px -7px rgba(158, 155, 158, 1);
    -moz-box-shadow: 10px 10px 19px -7px rgba(158, 155, 158, 1);
    box-shadow: 10px 10px 19px -7px rgba(158, 155, 158, 1);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 8px 0px;
  padding: 0;
  padding-left: 8px;
  text-align: left;
`;

export const IngredientsList = styled.p`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  list-style: none;
  margin: 0;
  margin-bottom: 16px;
  padding-left: 8px;
   max-width: 300px;
  font-size: 12px;
  text-align: left;
`;

export const Price = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 36px;
  color: red;
`;

export const PriceSymbol = styled.span`
  font-size: 18px;
`;
export const BasketButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
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
