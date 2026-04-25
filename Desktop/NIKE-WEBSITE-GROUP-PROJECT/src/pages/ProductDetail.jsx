import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../data/mockData';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const [selectedSize, setSelectedSize] = useState(null);

  // Fallback images for gallery
  const gallery = [
    product.image,
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-dark-900">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12">
        
        {/* Image Gallery */}
        <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible">
            {gallery.map((img, idx) => (
              <button key={idx} className="w-20 h-24 md:w-24 md:h-28 flex-shrink-0 bg-dark-800">
                <img src={img} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
          <div className="flex-1 bg-dark-800 aspect-[4/5] order-1 md:order-2">
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Product Info (Sticky on Desktop) */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32">
            <div className="mb-8">
              <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold tracking-tighter mb-4">{product.name}</h1>
              <p className="text-2xl font-medium">${product.price}</p>
            </div>

            <p className="text-gray-400 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold uppercase tracking-wider text-sm">Select Size</span>
                <button className="text-sm text-gray-500 underline underline-offset-4 hover:text-white transition-colors">Size Guide</button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium transition-all ${
                      selectedSize === size 
                        ? 'bg-white text-black border border-white' 
                        : 'border border-dark-700 hover:border-white text-white'
                    }`}
                  >
                    US {size}
                  </button>
                ))}
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAddToCart({ ...product, size: selectedSize || product.sizes[0] })}
              className="w-full bg-white text-black py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <ShoppingBag size={20} /> Add to Cart
            </motion.button>

            <div className="border-t border-dark-800 pt-6 space-y-4">
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium uppercase tracking-wider text-sm">
                  Free Shipping & Returns
                  <span className="transition group-open:rotate-180">↓</span>
                </summary>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  Free standard shipping on all orders. Returns are accepted within 30 days of purchase.
                </p>
              </details>
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-medium uppercase tracking-wider text-sm">
                  Reviews (4.8 <Star size={14} className="inline fill-white" />)
                  <span className="transition group-open:rotate-180">↓</span>
                </summary>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  "Most comfortable runners I've ever owned. The cushioning is incredible." - Verified Buyer
                </p>
              </details>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
