import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center gradient-blue-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-navy-blue leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl font-lato text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-navy-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-blue/90 transition-colors text-lg"
              >
                {t('hero.cta1')}
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="border-2 border-navy-blue text-navy-blue px-8 py-4 rounded-lg font-semibold hover:bg-navy-blue hover:text-white transition-colors text-lg"
              >
                {t('hero.cta2')}
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-navy-blue">50+</div>
                <div className="text-sm font-lato text-blue-grey">{t('hero.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-blue-grey">100+</div>
                <div className="text-sm font-lato text-blue-grey">{t('hero.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-warm-gold">8</div>
                <div className="text-sm font-lato text-blue-grey">{t('hero.countries')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
              alt="Modern office workspace in West Africa"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-lato font-medium">{t('hero.aiProcessing')}</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-navy-blue text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
