import { useEffect } from "react";
import { fetchPizza } from "../../Redux/operations/oprations";
import { useDispatch, useSelector } from "react-redux";
import { DishList } from "../../components/Dishes/DishList";
import { Container } from "../../components/App.styled";

const Burger = () => {
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.pizza.items);
  const burgerState = dishes.filter((item) => item.type === "burger");

  useEffect(() => {
    dispatch(fetchPizza());
  }, [dispatch]);

  return (
    <Container>
      <h1>Pizza</h1>
      <DishList dishes={burgerState} />
    </Container>
  );
};

export default Burger;
