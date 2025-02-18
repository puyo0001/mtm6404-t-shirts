// React T-Shirts Store with Buy Button
const { useState } = React;

// TshirtStore Component
const TshirtStore = () => {
  const [tshirts, setTshirts] = useState([
    {
      title: "Blue T-Shirt",
      image: "images/blue-t-shirt.jpg",
      price: 7.99,
      stock: 4,
      quantity: 1,
    },
    {
      title: "Bright Purple T-Shirt",
      image: "images/bright-purple-t-shirt.jpg",
      price: 5.99,
      stock: 1,
      quantity: 1,
    },
    {
      title: "Cobalt Blue T-Shirt",
      image: "images/cobalt-blue-t-shirt.jpg",
      price: 9.99,
      stock: 5,
      quantity: 1,
    },
    {
      title: "Green T-Shirt",
      image: "images/green-t-shirt.jpg",
      price: 6.99,
      stock: 0,
      quantity: 1,
    },
    {
      title: "Grey T-Shirt",
      image: "images/grey-t-shirt.jpg",
      price: 4.99,
      stock: 2,
      quantity: 1,
    },
    {
      title: "Light Green T-Shirt",
      image: "images/light-green-t-shirt.jpg",
      price: 7.99,
      stock: 4,
      quantity: 1,
    },
    {
      title: "Purple T-Shirt",
      image: "images/purple-t-shirt.jpg",
      price: 7.99,
      stock: 0,
      quantity: 1,
    },
    {
      title: "Red T-Shirt",
      image: "images/red-t-shirt.jpg",
      price: 6.99,
      stock: 3,
      quantity: 1,
    },
    {
      title: "Teal T-Shirt",
      image: "images/teal-t-shirt.jpg",
      price: 7.99,
      stock: 2,
      quantity: 1,
    },
  ]);
  // Handle Buy Function
  const handleBuy = (index, quantity) => {
    setTshirts((prevTshirts) =>
      prevTshirts.map((tshirt, i) =>
        i === index ? { ...tshirt, stock: tshirt.stock - quantity } : tshirt
      )
    );
  };

  return (
    <div className="container">
      {/* Title of the Store */}
      <h1 className="text-center my-4">T-Shirt Store</h1>

      <div className="row g-3">
        {tshirts.map((tshirt, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <TshirtCard
              tshirt={tshirt}
              onBuy={(quantity) => handleBuy(index, quantity)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// TshirtCard Component
const TshirtCard = ({ tshirt, onBuy }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="card p-3">
      <img src={tshirt.image} alt={tshirt.title} className="img-fluid mb-3" />
      <h4>{tshirt.title}</h4>
      <p>Price: ${tshirt.price.toFixed(2)}</p>
      {tshirt.stock > 0 ? (
        <>
          <p>Stock: {tshirt.stock}</p>
          <select value={quantity} onChange={handleQuantityChange}>
            {[...Array(tshirt.stock).keys()].map((n) => (
              <option key={n + 1} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
          <button
            className="btn btn-outline-secondary mt-3"
            onClick={() => onBuy(quantity)}
          >
            Buy
          </button>
        </>
      ) : (
        <p className="text-danger">Out of Stock</p>
      )}
    </div>
  );
};

// Render TshirtStore Component
ReactDOM.createRoot(document.getElementById("root")).render(<TshirtStore />);
