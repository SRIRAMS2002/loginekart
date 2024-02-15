// Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
 <div className="bg-gray-100 p-8 mx-auto max-w-7xl my-40">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart ({totalItemsInCart} items)</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div>
              <li key={product.id} className="flex py-6">
           <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
             <img
               src={product.imageSrc}
               alt={product.imageAlt}
               className="h-full w-full object-cover object-center"
             />
           </div>

           <div className="ml-4 flex flex-1 flex-col">
             <div>
               <div className="flex justify-between text-base font-medium text-gray-900">
                 <h3>
                   <a href={product.href}>{product.name}</a>
                 </h3>
                 <p className="ml-4 text-md">{product.price}</p>
               </div>
               
             </div>
             <div className="flex flex-1 items-center justify-between text-sm">
               <p className="text-gray-800">Qty {product.quantity}</p>

               <div className="flex">
                 <button
                   type="button"
                   onClick={() => removeFromCart(product.id)}
                   className="font-medium text-indigo-600 hover:text-indigo-500"
                 >
                   Remove
                 </button>
               </div>
             </div>
           </div>
         
         </li>
         <div className="h-px  bg-gray-400" />
            </div>
           
          ))}
          <div className="mt-4 flex justify-around">
            <p className="font-bold">
              Total: Rs.{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>
            <button
        
          className="flex px-10 justify-center rounded-md bg-indigo-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Checkout
        </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
