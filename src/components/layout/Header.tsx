
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/register" className="text-gray-700 hover:text-primary font-medium">
            Patient Registration
          </Link>
          <div className="relative group">
            <button className="text-gray-700 hover:text-primary font-medium flex items-center">
              Services
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10 hidden group-hover:block">
              <Link to="/chatbot" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Symptom Chatbot</Link>
              <Link to="/cancer-detection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cancer Detection</Link>
              <Link to="/medical-reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Medical Report Analysis</Link>
              <Link to="/xray-mri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">X-Ray & MRI Analysis</Link>
            </div>
          </div>
          <Link to="/hospitals" className="text-gray-700 hover:text-primary font-medium">
            Find Hospitals
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-gray-700">Sign In</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-primary hover:bg-primary/90 text-white">Register</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
