import "./App.css";
import CardPage from "./components/CardPage";
import NavBar from "./components/NavBar";
import product from "./product.json";
function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="app-container">
        {product.map((item) => (
          <CardPage
            url={item.image}
            title={item.productName}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
