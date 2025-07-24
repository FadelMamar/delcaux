import { Settings, Database, Brain, GraduationCap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServicesSection() {
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
          <h2 className="text-4xl font-playfair font-bold text-navy-blue mb-4">
            Our Services
          </h2>
          <p className="text-xl text-blue-grey max-w-3xl mx-auto">
            Comprehensive digital transformation solutions designed specifically 
            for West African businesses and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1: Business Process Automation */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow border-0">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-navy-blue rounded-xl flex items-center justify-center mb-4">
                <Settings className="text-white h-8 w-8" />
              </div>
              <CardTitle className="text-xl text-navy-blue">
                Business Process Automation
              </CardTitle>
              <Badge variant="secondary" className="w-fit">Core Service</Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-blue-grey mb-6">
                Streamline workflows, digitize data systems, and eliminate manual 
                processes to boost efficiency and reduce costs.
              </p>
              <ul className="text-sm text-blue-grey space-y-2">
                <li className="flex items-center">
                  <Check className="text-navy-blue mr-2 h-4 w-4" />
                  Digital Workflows
                </li>
                <li className="flex items-center">
                  <Check className="text-navy-blue mr-2 h-4 w-4" />
                  Data Systems
                </li>
                <li className="flex items-center">
                  <Check className="text-navy-blue mr-2 h-4 w-4" />
                  Process Optimization
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
              <CardTitle className="text-xl text-navy-blue">
                Odoo ERP Integration
              </CardTitle>
              <Badge variant="outline" className="w-fit">Enterprise</Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-blue-grey mb-6">
                Complete enterprise resource planning solutions covering inventory, 
                HR, finance, and customer relationship management.
              </p>
              <ul className="text-sm text-blue-grey space-y-2">
                <li className="flex items-center">
                  <Check className="text-blue-grey mr-2 h-4 w-4" />
                  Inventory Management
                </li>
                <li className="flex items-center">
                  <Check className="text-blue-grey mr-2 h-4 w-4" />
                  HR & Finance
                </li>
                <li className="flex items-center">
                  <Check className="text-blue-grey mr-2 h-4 w-4" />
                  CRM Integration
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
              <CardTitle className="text-xl text-navy-blue">
                AI Solutions
              </CardTitle>
              <Badge variant="destructive" className="w-fit bg-terracotta hover:bg-terracotta/80">Advanced AI</Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-blue-grey mb-6">
                Custom artificial intelligence applications including predictive 
                analytics, intelligent chatbots, and automated decision-making systems.
              </p>
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
              <CardTitle className="text-xl text-navy-blue">
                AI Workshops & Training
              </CardTitle>
              <Badge className="w-fit bg-warm-gold hover:bg-warm-gold/80">Training</Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-blue-grey mb-6">
                Comprehensive training programs for professionals, educational 
                institutions, and organizations to build AI capabilities.
              </p>
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
