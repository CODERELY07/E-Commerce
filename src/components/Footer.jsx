import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
        
        {/* WataShop Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">WataShop.</h2>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat sed omnis suscipit praesentium, ad distinctio modi nostrum quo alias repellendus, soluta molestias eos quibusdam veniam architecto, ipsum esse tempora adipisci hic fuga fugit nisi. Quibusdam repellendus praesentium nisi quasi?
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">HELP & INFO HELP</h3>
          <ul className="space-y-2">
            <li>Track Your Order</li>
            <li>Returns Policies</li>
            <li>Shipping + Delivery</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">CONTACT US</h3>
          <p className="text-gray-500 mb-1">Do you have any queries or suggestions?</p>
          <p className="text-gray-800 font-medium">watashop@gmail.com</p>
          <p className="text-gray-500 mt-2">If you need support? Just give us a call.</p>
          <p className="text-gray-800 font-medium">+154 884 8542</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-xs text-gray-500 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="text-center">© Copyright 2025 WataShop. Design by <span className="text-gray-700 font-semibold">You</span></p>
      </div>
    </footer>
  );
};

export default Footer;
