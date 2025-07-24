import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

import hero_image_1 from "@assets/hero-image-1.jpg";

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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat text-navy-blue leading-tight font-semibold">
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
              src={hero_image_1}
              alt="Modern office workspace in West Africa"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            
          </div>
        </div>
      </div>
    </section>
  );
}
