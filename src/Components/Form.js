import { useContext, useRef } from "react";
import classes from "./Form.module.css";
import Context from "../store/Context";
import axios from "axios";
const Form = () => {
  const ctx = useContext(Context);
  const name = useRef();
  const description = useRef();
  const price = useRef();
  const AddHandler = () => {
    const data = {
      name: name.current.value,
      description: description.current.value,
      price: price,
    };
    ctx.setFormData(data);
    axios
      .post(
        "https://crudcrud.com/Dashboard/8b73ed47d2a24d8781b625d9a7f952e6/formData",
        data
      )
      .then((res) => console.log(res));
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
        <button>
          Cart <sup>0</sup>
        </button>
      </div>
    </div>
  );
};
export default Form;
