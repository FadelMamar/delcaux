import { Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

import hero_image_2 from "@assets/hero-image-2.jpg";

export default function AboutSection() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-navy-blue mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg font-worksans text-blue-grey mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-navy-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-navy-blue mb-2">
                    {t('about.mission.title')}
                  </h3>
                  <p className="font-worksans text-blue-grey">
                    {t('about.mission.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-grey rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-navy-blue mb-2">
                    {t('about.vision.title')}
                  </h3>
                  <p className="font-worksans text-blue-grey">
                    {t('about.vision.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warm-gold rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-navy-blue mb-2">
                    {t('about.values.title')}
                  </h3>
                  <p className="font-worksans text-blue-grey">
                    {t('about.values.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-navy-blue hover:bg-navy-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get Started Today
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={hero_image_2}
              alt="Modern office workspace representing digital transformation"
              className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}