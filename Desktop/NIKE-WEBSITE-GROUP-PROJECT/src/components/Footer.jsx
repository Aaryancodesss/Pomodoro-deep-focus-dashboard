import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold tracking-tighter mb-6">AURA.</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Elevating performance through high-end sportswear. Experience movement without limits.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-dark-800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-dark-800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-dark-800">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold uppercase tracking-wider mb-6 text-sm">Shop</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/shop/men" className="hover:text-white transition-colors">Men's Footwear</Link></li>
            <li><Link to="/shop/women" className="hover:text-white transition-colors">Women's Footwear</Link></li>
            <li><Link to="/shop/sneakers" className="hover:text-white transition-colors">New Releases</Link></li>
            <li><Link to="/shop/sale" className="hover:text-white transition-colors">Sale</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold uppercase tracking-wider mb-6 text-sm">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold uppercase tracking-wider mb-6 text-sm">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Sign up for exclusive drops and early access.</p>
          <div className="flex">
            <input type="email" placeholder="Email Address" className="bg-dark-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-white transition-all rounded-l-md" />
            <button className="bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200 transition-colors rounded-r-md">Join</button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-dark-800 pt-8">
        <p>&copy; {new Date().getFullYear()} Aura Sportswear. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
