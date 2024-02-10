import React from "react";
import Auth from "./components/Auth";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Layout from "./components/Layout";

function App() {
  
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const cartItems = useSelector(state => state.cart.itemList)
  console.log(cartItems)

  return (
    <div >
     {!isLoggedIn && <Auth /> }
      {isLoggedIn && <Layout /> }
    </div>
  );
}

export default App;
