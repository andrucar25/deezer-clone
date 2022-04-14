import { Provider } from "react-redux";
import { MainView } from "./pages/MainPage/MainView";
import store from '../src/redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <MainView/>
    </Provider>
  );
}

export default App;
