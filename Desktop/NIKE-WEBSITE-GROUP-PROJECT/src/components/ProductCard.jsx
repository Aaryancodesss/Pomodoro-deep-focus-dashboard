import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onQuickAdd }) => {
  return (
    <motion.div 
      className="group relative flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-dark-800 mb-4 rounded-sm">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-2 py-1 uppercase tracking-wide">
            New Arrival
          </div>
        )}
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <button 
            onClick={(e) => {
              e.preventDefault();
              onQuickAdd(product);
            }}
            className="w-full bg-white text-black py-3 font-semibold uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium tracking-tight mb-1">
            <Link to={`/product/${product.id}`} className="hover:text-gray-300 transition-colors">{product.name}</Link>
          </h3>
          <p className="text-gray-400 text-sm">{product.category}</p>
        </div>
        <p className="text-lg font-medium">${product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
