import { useState } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="/attached_assets/logo_DelcauxConsulting (2)_1753364072296.jpg" 
                alt="Delcaux Consulting Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span className="text-2xl font-playfair font-bold text-navy-blue">
                Delcaux
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-navy-blue hover:text-blue-grey transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-navy-blue hover:text-blue-grey transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-navy-blue hover:text-blue-grey transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-navy-blue hover:text-blue-grey transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-navy-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-navy-blue/90 transition-colors"
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-navy-blue"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
}
