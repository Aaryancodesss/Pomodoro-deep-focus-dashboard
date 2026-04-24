import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface pt-16 pb-8 px-6 md:px-12 mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div>
          <Link to="/" className="text-3xl font-display font-bold tracking-tighter uppercase mb-6 inline-block">
            Aero<span className="text-accent">V</span>
          </Link>
          <p className="text-secondary text-sm leading-relaxed max-w-xs">
            Elevating human performance through innovative design and cutting-edge sportswear technology.
          </p>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Shop</h4>
          <ul className="space-y-4">
            <li><Link to="/shop" className="text-secondary hover:text-white transition-colors text-sm">Men's Footwear</Link></li>
            <li><Link to="/shop" className="text-secondary hover:text-white transition-colors text-sm">Women's Footwear</Link></li>
            <li><Link to="/shop" className="text-secondary hover:text-white transition-colors text-sm">Apparel</Link></li>
            <li><Link to="/shop" className="text-secondary hover:text-white transition-colors text-sm">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Support</h4>
          <ul className="space-y-4">
            <li><Link to="#" className="text-secondary hover:text-white transition-colors text-sm">Help Center</Link></li>
            <li><Link to="#" className="text-secondary hover:text-white transition-colors text-sm">Returns & Exchanges</Link></li>
            <li><Link to="#" className="text-secondary hover:text-white transition-colors text-sm">Shipping Info</Link></li>
            <li><Link to="#" className="text-secondary hover:text-white transition-colors text-sm">Order Tracking</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold uppercase tracking-wider mb-6">Connect</h4>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
          <p className="text-secondary text-sm">Subscribe to our newsletter for the latest drops.</p>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-secondary text-xs mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} AeroV Sportswear. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link to="#" className="text-secondary hover:text-white text-xs">Privacy Policy</Link>
          <Link to="#" className="text-secondary hover:text-white text-xs">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
