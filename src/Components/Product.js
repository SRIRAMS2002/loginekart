// Product.js
import React from 'react';

const Product = ({ products, addToCart }) => {
  return (
    <div className='mx-auto max-w-7xl my-10'>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <img src={product.imageSrc} alt={product.name} className="w-full h-64 object-cover" />
            <div className="flex flex-col mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mt-1">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105 focus:outline-none"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
