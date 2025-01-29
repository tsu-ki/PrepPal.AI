import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white text-center py-4">
      <div className="container mx-auto">
        <p className="text-sm text-gray-700">
          &copy; {new Date().getFullYear()} PrepPal.AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
