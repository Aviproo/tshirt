import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [form, setForm] = useState([]);
  const [cart, setCart] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const setFormData = (formdata) => {
    setForm([...form, formdata]);
  };

  const showcart = () => {
    setCart(!cart);
  };

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  const placeOrder = () => {
    alert("order Placed");
    setCartItem([]);
  };
  const data = {
    cart: cart,
    form: form,
    setFormData: setFormData,
    cartItem: cartItem,
    showcart: showcart,
    addToCart: addToCart,
    placeOrder: placeOrder,
  };
  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
