import { useContext } from "react";
import Context from "../store/Context";
import classes from "./Form.module.css";
const Input = () => {
  const ctx = useContext(Context);
  return (
    <div>
      {ctx.form.map((item) => {
        const showItem = () => {
          ctx.addToCart(item);
          console.log(ctx.cartItem);
        };
        return (
          <div key={item.id} className={classes.item}>
            <div>{item.name}</div> <div>{item.description}</div>
            <div>{item.price}</div>
            <div className={classes.buyBtn}>
              <div>
                <button onClick={showItem}>Buy L(100)</button>
              </div>
              <div>
                <button onClick={showItem}>Buy M(100)</button>
              </div>
              <div>
                <button onClick={showItem}>Buy S(100)</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Input;
