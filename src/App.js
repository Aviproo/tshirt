import "./App.css";
import Form from "./Components/Form";
import Input from "./Components/Input";
import ContextProvider from "./store/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Form />
        <Input />
      </div>
    </ContextProvider>
  );
}

export default App;
