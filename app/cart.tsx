import React, { useState } from 'react';
import Cart from './cart';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Gucci', price: 50000, quantity: 2 },
    { id: 2, name: 'Gucci', price: 50000, quantity: 2 },
  ]);

  const [cartCount, setCartCount] = useState(cartItems.length);
  const [showAlert, setShowAlert] = useState(false);

  const incrementQuantity = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      setCartCount(updatedItems.length);
      return updatedItems;
    });

    // Show success alert
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
  };

  return (
    <div className="flex justify-center min-h-screen p-6 bg-gray-900">
      <div className="w-full max-w-4xl">
        <h2 className="mb-4 text-xl font-semibold">Cart ({cartCount})</h2>

        {showAlert && (
          <div
            className="fixed w-full px-4 py-3 text-lg font-bold text-center text-white transition-opacity duration-300 bg-green-500 shadow-lg opacity-100 max-w-screen md:text-xl top-5 left-1/2 transform -translate-x-1/2"
            style={{ zIndex: 999 }}
          >
            Product successfully removed!
          </div>
        )}

        {cartItems.map(item => (
          <div key={item.id} className="flex flex-col items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md sm:flex-row">
            <div className="flex items-center w-3/4 space-x-4">
              <img src="/dist/assets/image/cars2.jpeg" alt={item.name} className="object-cover h-24 rounded w-100" />
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Seller: <span className="font-semibold">Just Rite</span> | Size: <span className="font-semibold">XXL</span></p>
                <p className="mt-1 text-sm text-red-500"><i className="fas fa-exclamation-circle"></i> 7 units left</p>
                <p className="mt-1 text-xs font-medium text-red-800"><i className="fas fa-shipping-fast"></i> Athentic Store Express</p>
              </div>
            </div>

            <div className="flex flex-col items-center w-1/4 sm:items-end">
              <div className="text-lg font-semibold text-gray-900">₦{item.price.toLocaleString()}</div>
              <div className="text-sm text-gray-500 line-through">₦{(item.price + 1000000).toLocaleString()}</div>
              <div className="text-sm font-medium text-red-500">-50%</div>

              <div className="flex items-center mt-3 space-x-2">
                <button className="w-8 h-8 text-xl text-white bg-green-500 rounded-md" onClick={() => decrementQuantity(item.id)}>-</button>
                <span className="text-lg font-semibold text-black">{item.quantity}</span>
                <button className="w-8 h-8 text-xl text-white bg-green-500 rounded-md" onClick={() => incrementQuantity(item.id)}>+</button>
              </div>

              <button className="flex items-center mt-3 space-x-1 text-red-500 hover:text-orange-600" onClick={() => removeItem(item.id)}>
                <i className="fas fa-trash-alt"></i>
                <span>Remove</span>
              </button>
            </div>
          </div>
        ))}

        <div className="flex mt-6 space-x-4">
          <div className="flex flex-col w-full">
            <button className="w-full py-2 mb-4 text-white bg-pink-600 rounded-lg hover:bg-pink-700">
              Checkout (₦{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
