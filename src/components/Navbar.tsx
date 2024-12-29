import { ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-[#2b1810] text-white py-4 px-8 flex items-center justify-between fixed w-full top-0 z-50">
      <div className="flex items-center space-x-8">
        <div className="space-x-8">
          <a href="#" className="hover:text-gray-300 text-base font-light">Subscription Boxes</a>
          <a href="#" className="hover:text-gray-300 text-base font-light">Shop</a>
          <a href="#" className="hover:text-gray-300 text-base font-light">Our Company</a>
        </div>
      </div>

      <div className="text-2xl font-normal text-white absolute left-1/2 transform -translate-x-1/2">
        <a href="/">WikiFoods</a>
      </div>

      <div className="flex items-center space-x-8">
        <a href="#" className="hover:text-gray-300 text-base font-light">Give a Gift</a>
        <a href="#" className="hover:text-gray-300 text-base font-light">Schools & Groups</a>
        <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-gray-300 relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;