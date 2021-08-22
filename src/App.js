import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import PostsList from "./componets/PostsList";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello world</h1>
        <PostsList />
      </div>
    </Provider>
  );
}

export default App;
