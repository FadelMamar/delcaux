import { Settings, Database, Brain, GraduationCap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-navy-blue mb-4">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1: Business Process Automation */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow border-0">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-navy-blue rounded-xl flex items-center justify-center mb-4">
                <Settings className="text-white h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-montserrat font-semibold text-navy-blue">
                {t("services.automation.title")}
              </CardTitle>
              <Badge variant="secondary" className="w-fit">
                {t("services.automation.badge")}
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-blue-grey space-y-2">
                <li className="flex items-center">
                  <Check className="text-navy-blue mr-2 h-4 w-4" />
                  {t("services.automation.feature1")}
                </li>
                <li className="flex items-center">
                  <Check className="text-navy-blue mr-2 h-4 w-4" />
                  {t("services.automation.feature2")}
                </li>
                <li className="flex items-center">
                  <Check className="text-navy-blue mr-2 h-4 w-4" />
                  {t("services.automation.feature3")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 2: Odoo ERP Integration */}
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow border-0">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-blue-grey rounded-xl flex items-center justify-center mb-4">
                <Database className="text-white h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-montserrat font-semibold text-navy-blue">
                {t("services.odoo.title")}
              </CardTitle>
              <Badge variant="outline" className="w-fit">
                {t("services.odoo.badge")}
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-blue-grey space-y-2">
                <li className="flex items-center">
                  <Check className="text-blue-grey mr-2 h-4 w-4" />
                  {t("services.odoo.feature1")}
                </li>
                <li className="flex items-center">
                  <Check className="text-blue-grey mr-2 h-4 w-4" />
                  {t("services.odoo.feature2")}
                </li>
                <li className="flex items-center">
                  <Check className="text-blue-grey mr-2 h-4 w-4" />
                  {t("services.odoo.feature3")}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 3: AI Solutions */}
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-shadow border-0">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-terracotta rounded-xl flex items-center justify-center mb-4">
                <Brain className="text-white h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-montserrat font-semibold text-navy-blue">
                {t("services.ai.title")}
              </CardTitle>
              <Badge
                variant="destructive"
                className="w-fit bg-terracotta hover:bg-terracotta/80"
              >
                {t("services.ai.badge")}
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-blue-grey space-y-2">
                <li className="flex items-center">
                  <Check className="text-terracotta mr-2 h-4 w-4" />
                  Predictive Analytics
                </li>
                <li className="flex items-center">
                  <Check className="text-terracotta mr-2 h-4 w-4" />
                  Intelligent Chatbots
                </li>
                <li className="flex items-center">
                  <Check className="text-terracotta mr-2 h-4 w-4" />
                  Decision Support Systems
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Service 4: AI Workshops */}
          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-lg transition-shadow border-0">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-warm-gold rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="text-white h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-montserrat font-semibold text-navy-blue">
                {t("services.training.title")}
              </CardTitle>
              <Badge className="w-fit bg-warm-gold hover:bg-warm-gold/80">
                {t("services.training.badge")}
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-blue-grey space-y-2">
                <li className="flex items-center">
                  <Check className="text-warm-gold mr-2 h-4 w-4" />
                  Professional Training
                </li>
                <li className="flex items-center">
                  <Check className="text-warm-gold mr-2 h-4 w-4" />
                  School Programs
                </li>
                <li className="flex items-center">
                  <Check className="text-warm-gold mr-2 h-4 w-4" />
                  Corporate Workshops
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
