import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data/mockData';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/shop" className="text-accent hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Link to="/shop" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-secondary hover:text-white transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Shop
      </Link>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-3/5 flex flex-col md:flex-row-reverse gap-4">
          <div className="flex-1 bg-white/5 rounded-3xl overflow-hidden h-[500px] md:h-[700px] flex items-center justify-center p-8">
            <motion.img 
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={product.images[selectedImage] || product.image} 
              alt={product.name} 
              className="w-full h-full object-cover mix-blend-lighten"
            />
          </div>
          
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto w-full md:w-24 pb-4 md:pb-0 scrollbar-hide">
            {(product.images?.length > 0 ? product.images : [product.image]).map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-colors ${selectedImage === idx ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover mix-blend-lighten bg-white/5" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:w-2/5">
          <div className="sticky top-32">
            <div className="mb-8">
              <p className="text-accent font-bold uppercase tracking-wider text-sm mb-2">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4">{product.name}</h1>
              <div className="text-3xl font-light">${product.price.toFixed(2)}</div>
            </div>

            <div className="mb-10">
              <h3 className="font-bold uppercase tracking-wider text-sm mb-4">Description</h3>
              <p className="text-secondary leading-relaxed">
                {product.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
