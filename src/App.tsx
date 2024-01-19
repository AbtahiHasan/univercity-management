import { Provider } from "react-redux";
import { store } from "./redux/store";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
}

export default App;
