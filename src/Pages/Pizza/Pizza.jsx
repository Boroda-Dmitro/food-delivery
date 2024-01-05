import { useEffect } from "react";
import { fetchPizza } from "../../Redux/operations/oprations";
import { useDispatch, useSelector } from "react-redux";

const Pizza = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.pizza);

  useEffect(() => {
    dispatch(fetchPizza());
     }, [dispatch, ]);


 
  return (
    <div>
      <h1>Pizza</h1>
      <ul>
        {pizzaState.items.map((pizza) => (
          <li key={pizza.id}>{pizza.name}</li>
        ))}
      </ul>
    </div>
  );;
};

export default Pizza;
