import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [form, setForm] = useState([]);
  const setFormData = (formdata) => {
    setForm([...form, formdata]);
  };
  const data = {
    form: form,
    setFormData: setFormData,
  };
  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
