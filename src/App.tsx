import IndexWeb from "src/views/IndexWeb";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, useLocation } from "react-router-dom";
import store from "src/redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store().store}>
        <BrowserRouter>
          <IndexWeb />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
