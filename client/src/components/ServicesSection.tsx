import { Settings, Database, Brain, GraduationCap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-navy-blue rounded-xl flex items-center justify-center mb-6">
              <Settings className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-navy-blue mb-4">
              Business Process Automation
            </h3>
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
          </div>

          {/* Service 2: Odoo ERP Integration */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-grey rounded-xl flex items-center justify-center mb-6">
              <Database className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-navy-blue mb-4">
              Odoo ERP Integration
            </h3>
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
          </div>

          {/* Service 3: AI Solutions */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-terracotta rounded-xl flex items-center justify-center mb-6">
              <Brain className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-navy-blue mb-4">
              AI Solutions
            </h3>
            <p className="text-blue-grey mb-6">
              Custom artificial intelligence applications including medical image 
              analysis, predictive analytics, and intelligent chatbots.
            </p>
            <ul className="text-sm text-blue-grey space-y-2">
              <li className="flex items-center">
                <Check className="text-terracotta mr-2 h-4 w-4" />
                Medical AI Diagnostics
              </li>
              <li className="flex items-center">
                <Check className="text-terracotta mr-2 h-4 w-4" />
                Predictive Analytics
              </li>
              <li className="flex items-center">
                <Check className="text-terracotta mr-2 h-4 w-4" />
                Intelligent Chatbots
              </li>
            </ul>
          </div>

          {/* Service 4: AI Workshops */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-warm-gold rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-navy-blue mb-4">
              AI Workshops & Training
            </h3>
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
          </div>
        </div>

        {/* Featured Service Highlight */}
        <div className="mt-16 gradient-navy-blue rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-4">
                Medical AI: Revolutionizing Healthcare in West Africa
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Our cutting-edge AI solutions for disease detection in medical 
                images are helping healthcare providers across the region deliver 
                faster, more accurate diagnoses.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn About Medical AI
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400"
                alt="Medical professionals using AI technology"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
