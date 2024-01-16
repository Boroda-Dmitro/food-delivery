import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/App.styled";
import { BasketList } from "../../components/Basket/BasketList";
import { basketSlice } from "../../Redux/Basket/Slise";

const Basket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderDone, setOrderDone] = useState("");
  const basketState = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    const newTotalPrice = basketState.reduce((acc, item) => {
      if (item.number && item.price) {
        acc += item.number * item.price;
      }
      return acc;
    }, 0);

    setTotalPrice(newTotalPrice);
  }, [basketState]);

  const makeOrder = () => {
     setOrderDone("Замовлення прийнято в роботу, наш оператор з Вами зв'яжеться");
    console.log(orderDone);
    dispatch(basketSlice.actions.resetBasket());
  };

  return (
    <Container>
      {orderDone !== "" ? (
        <p>{orderDone}</p>
      ) : basketState.length === 0 ? (
        "Кошик порожній"
      ) : (
        <>
          <BasketList items={basketState} />
          <p>Вартість замовлення: {totalPrice}</p>
          <button onClick={makeOrder}>Замовити</button>
        </>
      )}
    </Container>
  );
};

export default Basket;
