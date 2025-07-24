import { Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
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
              Pioneering Digital Transformation in West Africa
            </h2>
            <p className="text-lg font-lato text-blue-grey mb-8 leading-relaxed">
              Founded with the vision of bridging the digital divide, Delcaux is 
              at the forefront of technological innovation in West Africa. We 
              understand the unique challenges and opportunities in our region, 
              and we're committed to delivering solutions that drive real business impact.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-navy-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-navy-blue mb-2">Our Mission</h3>
                  <p className="font-lato text-blue-grey">
                    Empowering African businesses through cutting-edge automation 
                    and AI solutions that drive efficiency, growth, and innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-grey rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-navy-blue mb-2">Our Vision</h3>
                  <p className="font-lato text-blue-grey">
                    To be the leading technology partner for digital transformation 
                    across West Africa, creating sustainable value for businesses and communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-warm-gold rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="text-white h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-navy-blue mb-2">Our Values</h3>
                  <p className="font-lato text-blue-grey">
                    Innovation, integrity, and impact. We believe in ethical 
                    technology that serves people and builds stronger communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-navy-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue/90 transition-colors"
              >
                Partner With Us
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-navy-blue text-navy-blue px-8 py-3 rounded-lg font-semibold hover:bg-navy-blue hover:text-white transition-colors"
              >
                Meet Our Team
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400"
              alt="African professionals collaborating on technology"
              className="rounded-2xl shadow-lg w-full h-auto"
            />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-navy-blue mb-2">5+</div>
                <div className="text-sm text-blue-grey">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-grey mb-2">25+</div>
                <div className="text-sm text-blue-grey">Expert Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
