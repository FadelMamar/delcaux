import { Linkedin, Twitter, Facebook } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const [location, navigate] = useLocation();
  const { t } = useLanguage();

  const handleNavigation = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    // If we're on home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-navy-blue text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-3xl font-montserrat font-bold">{t('nav.delcaux')}</div>
            <p className="font-worksans text-blue-200 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <button
                  onClick={() => handleNavigation("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.businessAutomation')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.odooERP')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.aiSolutions')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.training')}
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <button
                  onClick={() => handleNavigation("about")}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("contact")}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.contact')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("contact")}
                  className="hover:text-white transition-colors text-left"
                >
                  {t('footer.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a
                  href="/case-studies"
                  className="hover:text-white transition-colors"
                >
                  {t('nav.caseStudies')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-200 text-sm">
            © 2025 {t('nav.delcaux')}. {t('footer.rights')}
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-blue-200 hover:text-white transition-colors text-sm"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="text-blue-200 hover:text-white transition-colors text-sm"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
