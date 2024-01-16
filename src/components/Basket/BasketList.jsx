import { StyledBasketList } from "./Basket.styled";
import { BasketItem } from "./BasketItem";

export const BasketList = ({ items } = []) => {
  return (
    <StyledBasketList>
      {items.map((item) => (
        <BasketItem item={item} key={item._id} />
      ))}
    </StyledBasketList>
  );
};
