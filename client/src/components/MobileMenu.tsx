import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/logo_delcaux_consulting_1753364800001.jpg";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <img 
              src={logoPath} 
              alt="Delcaux Consulting Logo" 
              className="w-8 h-8 object-contain" 
            />
            <span className="text-xl font-playfair font-bold text-navy-blue">
              Delcaux
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="px-4 py-6 space-y-4">
          <button
            onClick={() => handleNavigate("home")}
            className="block w-full text-left py-2 text-navy-blue hover:text-blue-grey transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate("services")}
            className="block w-full text-left py-2 text-navy-blue hover:text-blue-grey transition-colors font-medium"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigate("about")}
            className="block w-full text-left py-2 text-navy-blue hover:text-blue-grey transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => handleNavigate("contact")}
            className="block w-full text-left py-2 text-navy-blue hover:text-blue-grey transition-colors font-medium"
          >
            Contact
          </button>
          
          <div className="pt-4 border-t">
            <Button
              onClick={() => handleNavigate("contact")}
              className="w-full bg-navy-blue text-white hover:bg-navy-blue/90"
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
