import "./App.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartProvider } from "./Store/CartContext";
import { UserProgressProvider } from "./Store/UserProgressContext";

function App() {
  return (
    <UserProgressProvider>
      <CartProvider>
        <Header />
        <Meals />
        <Cart />
      </CartProvider>
    </UserProgressProvider>
  );
}

export default App;
