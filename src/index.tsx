import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "src/App";
import "./index.css";
import ApolloClient from "src/apollo.js";
import store from "src/redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ApolloProvider client={ApolloClient}>
      <Provider store={store().store}>
        <App />
      </Provider>
    </ApolloProvider>
  </>
);
