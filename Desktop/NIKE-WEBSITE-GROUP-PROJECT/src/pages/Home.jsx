import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { categories, products } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const Home = ({ onQuickAdd }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const featuredProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase mb-6"
          >
            Defy <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Gravity</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Experience the next generation of athletic footwear. Engineered for those who refuse to stay grounded.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/shop" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
              Shop Collection <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        >
          <ChevronDown size={32} className="text-white/70" />
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-dark-900">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Explore</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[3/4] group overflow-hidden cursor-pointer"
              >
                <Link to={`/shop/${category.id}`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10" />
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-8 left-8 z-20">
                    <h3 className="text-3xl font-bold tracking-tight mb-2">{category.name}</h3>
                    <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group-hover:underline underline-offset-4">
                      Shop Now <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-dark-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">New Arrivals</h2>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:underline underline-offset-4">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onQuickAdd={onQuickAdd} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
