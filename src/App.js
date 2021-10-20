import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadGames} from "./actions/gamesAction";
import Home from "./pages/Home";
import Globalstyles from "./components/GlobalStyle";
import {Route} from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="App">
      <Globalstyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
