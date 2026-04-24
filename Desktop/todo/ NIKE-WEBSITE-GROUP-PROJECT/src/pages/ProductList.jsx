import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/mockData';

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Sneakers', 'Men', 'Women'];
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-4">Collection</h1>
          <p className="text-secondary">Discover our latest performance gear engineered for excellence.</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-8 md:mt-0">
          <button className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider border border-white/20 rounded-full px-6 py-3 hover:bg-white/5 transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Sort</span>
          </button>
          <button className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider border border-white/20 rounded-full px-6 py-3 hover:bg-white/5 transition-colors md:hidden">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h3 className="font-display font-bold uppercase tracking-wider mb-6 text-xl">Categories</h3>
            <ul className="space-y-4">
              {categories.map(category => (
                <li key={category}>
                  <button 
                    onClick={() => setActiveCategory(category)}
                    className={`text-sm tracking-wide transition-colors ${activeCategory === category ? 'text-white font-bold' : 'text-secondary hover:text-white'}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            
            <h3 className="font-display font-bold uppercase tracking-wider mb-6 mt-12 text-xl">Price</h3>
            <ul className="space-y-4">
              <li><button className="text-secondary hover:text-white text-sm tracking-wide transition-colors">Under $100</button></li>
              <li><button className="text-secondary hover:text-white text-sm tracking-wide transition-colors">$100 - $150</button></li>
              <li><button className="text-secondary hover:text-white text-sm tracking-wide transition-colors">Over $150</button></li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex md:hidden overflow-x-auto space-x-4 pb-6 mb-6 scrollbar-hide">
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium tracking-wider transition-colors ${activeCategory === category ? 'bg-white text-black' : 'bg-white/5 text-secondary hover:bg-white/10'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants} className="group relative">
                <Link to={`/product/${product.id}`}>
                  <div className="bg-white/5 rounded-2xl p-6 mb-4 h-[350px] flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-lighten transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                      <p className="text-secondary text-sm">{product.category}</p>
                    </div>
                    <span className="font-bold">${product.price.toFixed(2)}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProducts.length === 0 && (
             <div className="text-center py-20">
               <p className="text-secondary text-xl">No products found in this category.</p>
             </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductList;
