const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">&copy; 2024 My Project.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
