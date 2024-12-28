import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-black hover:text-gray-600">Home</Link>
            <Link to="/find-recipe" className="text-black hover:text-gray-600">Find A Recipe</Link>
            <Link to="/recipe-collection" className="text-black hover:text-gray-600">Recipe Collection</Link>
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-black">WikiFoods</Link>

          {/* Right Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/about" className="text-black hover:text-gray-600">About</Link>
            <Link to="/contact" className="text-black hover:text-gray-600">Contact</Link>
            <Link to="/download" className="text-black hover:text-gray-600">Download the app</Link>
            <div className="flex items-center space-x-4">
              <button className="text-black hover:text-gray-600">
                <User size={20} />
              </button>
              <button className="text-black hover:text-gray-600 relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;