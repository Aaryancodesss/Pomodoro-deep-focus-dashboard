import { useState } from 'react';
import { Filter } from 'lucide-react';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const ProductListing = ({ onQuickAdd }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-dark-800 pb-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0">All Footwear</h1>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-gray-300 transition-colors md:hidden"
            >
              <Filter size={18} /> Filters
            </button>
            <div className="hidden md:flex items-center gap-4 text-sm text-gray-400">
              <span className="font-semibold text-white cursor-pointer hover:text-gray-300">Featured</span>
              <span className="cursor-pointer hover:text-gray-300">Newest</span>
              <span className="cursor-pointer hover:text-gray-300">Price: High-Low</span>
              <span className="cursor-pointer hover:text-gray-300">Price: Low-High</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className={`w-full md:w-64 space-y-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div>
              <h3 className="font-semibold uppercase tracking-wider mb-4 border-b border-dark-800 pb-2">Category</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" className="accent-white" /> Men's</li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" className="accent-white" /> Women's</li>
                <li className="flex items-center gap-3 cursor-pointer hover:text-white"><input type="checkbox" className="accent-white" /> Sneakers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold uppercase tracking-wider mb-4 border-b border-dark-800 pb-2">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {[7, 8, 9, 10, 11, 12, 13].map(size => (
                  <button key={size} className="border border-dark-700 py-2 text-sm hover:border-white transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {products.map(product => (
                <ProductCard key={product.id} product={product} onQuickAdd={onQuickAdd} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
