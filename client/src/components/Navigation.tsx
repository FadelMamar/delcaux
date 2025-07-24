import { useState } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./MobileMenu";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logoPath from "@assets/logo_delcaux_consulting_1753365185310.jpg";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleNavigation = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If we're on home page, scroll to section
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
                src={logoPath} 
                alt="Delcaux Consulting Logo" 
                className="w-16 h-16 object-contain" 
              />
              <span className="text-2xl font-montserrat font-bold text-navy-blue">
                {t('nav.delcaux')}
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-navy-blue hover:text-blue-grey transition-colors font-medium"
              >
                {t('nav.home')}
              </Link>
              <button
                onClick={() => handleNavigation("services")}
                className="text-navy-blue hover:text-blue-grey transition-colors font-medium"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className="text-navy-blue hover:text-blue-grey transition-colors font-medium"
              >
                {t('nav.about')}
              </button>
              <Link
                href="/case-studies"
                className="text-navy-blue hover:text-blue-grey transition-colors font-medium"
              >
                {t('nav.caseStudies')}
              </Link>
              <button
                onClick={() => handleNavigation("contact")}
                className="text-navy-blue hover:text-blue-grey transition-colors font-medium"
              >
                {t('nav.contact')}
              </button>
              <LanguageSelector />
            </div>

            <div className="hidden md:block">
              <Button
                onClick={() => handleNavigation("contact")}
                className="bg-navy-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-navy-blue/90 transition-colors"
              >
                {t('nav.freeConsultation')}
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
        onNavigate={handleNavigation}
      />
    </>
  );
}
