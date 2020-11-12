import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { Route } from "react-router-dom";

import Header from "./components/header"
import Menu from "./components/menu";
import Footer from "./components/footer";
import Content from "./components/content";
import Result from "./components/result";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header></Header>
        <Menu></Menu>
        <Route path="/" exact component={Content} />
        <Route path="/result" component={Result} />
        <Footer></Footer>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
