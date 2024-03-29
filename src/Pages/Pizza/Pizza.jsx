import { useEffect } from "react";
import { fetchPizza } from "../../Redux/operations/oprations";
import { useDispatch, useSelector } from "react-redux";
import { DishList } from "../../components/Dishes/DishList";
import { Container } from "../../components/App.styled";

const Pizza = () => {
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.pizza.items);
  const pizzaState = dishes.filter((item) => item.type === "pizza");

  useEffect(() => {
    dispatch(fetchPizza());
  }, [dispatch]);

  return (
    <Container>
      <h1>Pizza</h1>
      <DishList dishes={pizzaState} />
    </Container>
  );
};

export default Pizza;
