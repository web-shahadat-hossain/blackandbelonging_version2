import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "react-phone-input-2/lib/style.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import App from "./App.tsx";
import { store } from "./app/store";
import Loader from "./components/common/Loader/Loader.tsx";
import "./index.scss";
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);
