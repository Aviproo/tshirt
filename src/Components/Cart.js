import { useContext } from "react";
import Context from "../store/Context";
import classes from "./Cart.module.css";

const Cart = () => {
  const ctx = useContext(Context);
  let total = 0;
  const placeOrder = () => {
    ctx.placeOrder();
  };
  return (
    <div className={classes.cart}>
      {ctx.cartItem.map((item) => {
        total += +item.price;
        return (
          <div>
            <div key={item.id} className={classes.cartItem}>
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.price}</div>
            </div>
          </div>
        );
      })}
      <div>
        <div>Total:{total}</div>
        <button onClick={placeOrder}>Order</button>{" "}
        <button onClick={() => ctx.showcart()}>Cancel</button>
      </div>
    </div>
  );
};
export default Cart;
