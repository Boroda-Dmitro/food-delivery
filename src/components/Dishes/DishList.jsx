import { Dish } from "./Dish";
import { StyledDishList } from "./DishList.styled";

export const DishList = ({ dishes } = []) => {
  return (
    <StyledDishList>
      {dishes.map((item) => (
        <Dish item={item} key={item._id} />
      ))}
    </StyledDishList>
  );
};
