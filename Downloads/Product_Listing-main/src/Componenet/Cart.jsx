import React, { useContext, useState } from 'react';
import { Maincontext } from './Context';
import { TbBackground } from 'react-icons/tb';

const Cart = () => {
  const {cart , qtyHandler,removeFromCart} = useContext(Maincontext)

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
    console.log(total)
  };

  return (
    <div className="max-w-7xl   mb-[50px]  mx-auto p-6 bg-no-repeat bg-cover bg-[url('https://img.freepik.com/premium-photo/pink-podium-blue-background-3d-render_360590-43.jpg')]" >
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
      
      {cart.length == 0 ? (
        <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center space-x-4">
                <img src={item.thumbnail} alt={item.name} className="w-24 h-24 object-cover" />
                <div>
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Quantity: 
                <button   onClick={()=> qtyHandler(item.id,0)} className="focus:outline-none text-white  hover:bg-green-800 
                  focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3.5 bg-gray-400 py-2.5 me-2 mb-2
                   dark:hover:bg-green-700 dark:focus:ring-green-800">-</button>
                
                  {item.qty}</span>
                  <button onClick={()=> qtyHandler(item.id,1)} className="focus:outline-none text-white  hover:bg-green-800 
                  focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3.5 bg-gray-400 py-2.5 me-2 mb-2
                   dark:hover:bg-green-700 dark:focus:ring-green-800">+</button>
             
              
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition duration-200"
                >
                  Remove
                </button>
              </div> 
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Total: ${calculateTotal().toFixed(2)}</h2>
       
      </div>
    </div>
  );
};

export default Cart;
