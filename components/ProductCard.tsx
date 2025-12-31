import React from 'react';
import { ShoppingBag, ArrowUpLeft } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20">
      {product.tag && (
        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          {product.tag}
        </span>
      )}
      
      <div className="h-64 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 relative">
        <p className="text-zinc-400 text-xs mb-2 font-medium tracking-wide">{product.category}</p>
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <div className="flex justify-between items-end mt-4">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            {product.price} <span className="text-sm text-zinc-500 font-normal">تومان</span>
          </span>
          <button className="bg-white text-black p-3 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};