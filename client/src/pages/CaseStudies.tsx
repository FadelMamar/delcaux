import { Calendar, Target, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function CaseStudies() {
  const { t } = useLanguage();

  const caseStudies = [
    {
      id: 1,
      dateKey: "caseStudies.case1.date",
      titleKey: "caseStudies.case1.title",
      descriptionKey: "caseStudies.case1.description",
      challengeKey: "caseStudies.case1.challenge",
      solutionKey: "caseStudies.case1.solution",
      resultKey: "caseStudies.case1.result",
      category: "Mobile App Development",
      color: "from-blue-50 to-blue-100",
      badgeColor: "bg-blue-600",
    },
    {
      id: 2,
      dateKey: "caseStudies.case2.date",
      titleKey: "caseStudies.case2.title",
      descriptionKey: "caseStudies.case2.description",
      challengeKey: "caseStudies.case2.challenge",
      solutionKey: "caseStudies.case2.solution",
      resultKey: "caseStudies.case2.result",
      category: "AI Healthcare",
      color: "from-green-50 to-green-100",
      badgeColor: "bg-green-600",
    },
    {
      id: 3,
      dateKey: "caseStudies.case3.date",
      titleKey: "caseStudies.case3.title",
      descriptionKey: "caseStudies.case3.description",
      challengeKey: "caseStudies.case3.challenge",
      solutionKey: "caseStudies.case3.solution",
      resultKey: "caseStudies.case3.result",
      category: "Training & Education",
      color: "from-yellow-50 to-yellow-100",
      badgeColor: "bg-yellow-600",
    },
    {
      id: 4,
      dateKey: "caseStudies.case4.date",
      titleKey: "caseStudies.case4.title",
      descriptionKey: "caseStudies.case4.description",
      challengeKey: "caseStudies.case4.challenge",
      solutionKey: "caseStudies.case4.solution",
      resultKey: "caseStudies.case4.result",
      category: "AI Legal Tech",
      color: "from-purple-50 to-purple-100",
      badgeColor: "bg-purple-600",
    },
    {
      id: 5,
      dateKey: "caseStudies.case5.date",
      titleKey: "caseStudies.case5.title",
      descriptionKey: "caseStudies.case5.description",
      challengeKey: "caseStudies.case5.challenge",
      solutionKey: "caseStudies.case5.solution",
      resultKey: "caseStudies.case5.result",
      category: "Professional Training",
      color: "from-orange-50 to-orange-100",
      badgeColor: "bg-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-mesh text-white py-20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {t("nav.home")}
          </Link>
          <h1 className="text-5xl font-montserrat font-bold mb-6">
            {t("caseStudies.title")}
          </h1>
          <p className="text-xl font-worksans text-white/90 max-w-3xl">
            {t("caseStudies.subtitle")}
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className={`bg-gradient-to-br ${study.color} hover:shadow-lg transition-all duration-300 border-0 group`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${study.badgeColor} text-white`}>
                      {study.category}
                    </Badge>
                    <div className="flex items-center text-blue-grey text-sm">
                      <Calendar className="mr-1 h-4 w-4" />
                      {t(study.dateKey)}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-montserrat font-bold text-navy-blue group-hover:text-blue-grey transition-colors">
                    {t(study.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-worksans text-blue-grey mb-6 leading-relaxed">
                    {t(study.descriptionKey)}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Target className="text-navy-blue mt-1 h-4 w-4 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-navy-blue text-sm">
                          Challenge
                        </div>
                        <div className="text-blue-grey text-sm">
                          {t(study.challengeKey)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 mt-1 h-4 w-4 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-navy-blue text-sm">
                          Solution
                        </div>
                        <div className="text-blue-grey text-sm">
                          {t(study.solutionKey)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-warm-gold mt-1 h-4 w-4 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-navy-blue text-sm">
                          Result
                        </div>
                        <div className="text-blue-grey text-sm">
                          {t(study.resultKey)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-navy-blue to-blue-grey py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl font-worksans text-white/90 mb-8 max-w-2xl mx-auto">
            Join these successful organizations and let us help transform your
            business with cutting-edge technology solutions.
          </p>
          <Link href="/">
            <Button className="bg-white text-navy-blue hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
