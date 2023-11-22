import { useContext, useRef } from "react";
import classes from "./Form.module.css";
import Context from "../store/Context";
import axios from "axios";
import Cart from "./Cart";
const Form = () => {
  const ctx = useContext(Context);
  const name = useRef();
  const description = useRef();
  const price = useRef();

  const AddHandler = () => {
    const nameRef = name.current.value;
    const descriptionRef = description.current.value;
    const priceRef = price.current.value;
    const data = {
      id: Math.random().toString(),
      name: nameRef,
      description: descriptionRef,
      price: priceRef,
    };

    ctx.setFormData(data);
  };

  const showCartHandeler = () => {
    ctx.showcart();
  };
  return (
    <div className={classes.form}>
      <div>
        T-shirt Name <br />
        <input ref={name} />
      </div>
      <div>
        Discription <br />
        <input ref={description} />
      </div>
      <div>
        Price <br />
        <input ref={price} />
      </div>
      <div>
        Quantity Available <br />
        <div className={classes.span}>
          <div>
            <span>L</span>
            <span className={classes.span}>100</span>
          </div>
          <div>
            <span>M</span>
            <span className={classes.span}>100</span>
          </div>
          <div>
            <span>S</span>
            <span className={classes.span}>100</span>
          </div>
        </div>
      </div>
      <div className={classes.addProduct}>
        <button onClick={AddHandler}>Add product</button>
      </div>
      <div>
        <button onClick={showCartHandeler}>
          Cart <sup>{ctx.cartItem.length}</sup>
        </button>
        {ctx.cart && <Cart />}
      </div>
    </div>
  );
};
export default Form;
