import "./App.css";
import Cart from "./components/Cart";
import Item from "./components/Item";
function App() {
  return (
    <div className="app-container">
      <div className="cart">
        <Cart />
      </div>
      <div className="items">
        <Item name="MacBook pro" price={100000} />
        <Item name="Iphone 15" price={7000} />
        <Item name="Iphone 16" price={150000} />
        <Item name="AC" price={10000} />
        <Item name="TV" price={8000} />
      </div>
    </div>
  );
}
export default App;
