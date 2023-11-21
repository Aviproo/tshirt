import "./App.css";
import Form from "./Components/Form";
import ContextProvider from "./store/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Form />
      </div>
    </ContextProvider>
  );
}

export default App;
