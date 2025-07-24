import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.caseStudies": "Case studies",
    "nav.contact": "Contact",
    "nav.freeConsultation": "Free Consultation",
    "nav.delcaux": "Delcaux",

    // Hero Section
    "hero.title": "Automate. Integrate. Innovate.",
    "hero.subtitle":
      "Empowering African businesses with AI, automation, and Odoo ERP.",
    "hero.cta1": "Let's Automate Your Business",
    "hero.cta2": "Learn More",
    "hero.clients": "Clients Served",
    "hero.projects": "Projects Completed",
    "hero.countries": "Countries",
    "hero.aiProcessing": "AI Processing",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle":
      "Comprehensive digital transformation solutions designed specifically for West African businesses and organizations.",

    "services.automation.title": "Process Automation",
    "services.automation.description":
      "Streamline workflows, digitize data systems, and eliminate manual processes to boost efficiency and reduce costs.",
    "services.automation.feature1": "Digital Workflows",
    "services.automation.feature2": "Data Systems",
    "services.automation.feature3": "Process Optimization",
    "services.automation.badge": "Core Service",

    "services.odoo.title": "Odoo ERP Integration",
    "services.odoo.description":
      "Complete enterprise resource planning solutions covering inventory, HR, finance, and customer relationship management.",
    "services.odoo.feature1": "Inventory Management",
    "services.odoo.feature2": "HR & Finance",
    "services.odoo.feature3": "CRM Integration",
    "services.odoo.badge": "Enterprise",

    "services.ai.title": "AI Solutions",
    "services.ai.description":
      "Custom artificial intelligence applications including predictive analytics, intelligent chatbots, and automated decision-making systems.",
    "services.ai.feature1": "Predictive Analytics",
    "services.ai.feature2": "Intelligent Chatbots",
    "services.ai.feature3": "Decision Support Systems",
    "services.ai.badge": "Advanced AI",

    "services.training.title": "Workshops & Training",
    "services.training.description":
      "Comprehensive training programs for professionals and organizations to build AI capabilities.",
    "services.training.feature1": "Professional Training",
    "services.training.feature2": "School Programs",
    "services.training.feature3": "Corporate Workshops",
    "services.training.badge": "Training",

    // About Section
    "about.title": "About us",
    "about.description":
      "At Delcaux, we’re reimagining how technology empowers businesses in Africa. Born from a mission to close the digital gap, we craft impactful solutions tailored to the realities and ambitions of our region.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "Empowering African businesses through cutting-edge automation and AI solutions that drive efficiency, growth, and innovation.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To be the leading technology partner for digital transformation across West Africa, creating sustainable value for businesses and communities.",
    "about.values.title": "Our Values",
    "about.values.description":
      "Innovation, integrity, and impact. We believe in ethical technology that serves people and builds stronger communities.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Ready to transform your business? Let's discuss how we can help you achieve your digital transformation goals.",
    "contact.form.title": "Send us a message",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.service": "Service Interested In",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.placeholder.firstName": "Kwame",
    "contact.form.placeholder.lastName": "Ansu",
    "contact.form.placeholder.email": "kwame@company.com",
    "contact.form.placeholder.company": "Your Company",
    "contact.form.placeholder.message":
      "Tell us about your project and how we can help...",
    "contact.form.service.automation": "Business Process Automation",
    "contact.form.service.odoo": "Odoo ERP Integration",
    "contact.form.service.ai": "AI Solutions",
    "contact.form.service.training": "AI Workshops & Training",
    "contact.form.service.consultation": "General Consultation",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.whatsapp": "WhatsApp",
    "contact.info.office": "Office",
    "contact.info.location": "Niamey, Niger",
    "contact.info.hours": "Business Hours",
    "contact.info.hours.mondayFriday": "Monday - Friday",
    "contact.info.hours.saturday": "Saturday",
    "contact.info.hours.sunday": "Sunday",
    "contact.info.hours.closed": "Closed",
    "contact.info.hours.time": "9:00 AM - 5:00 PM",
    "contact.info.hours.timezone": "West Africa Time (GMT+1)",
    "contact.followus": "Follow us",

    // Footer
    "footer.services": "Services",
    "footer.businessAutomation": "Business Automation",
    "footer.odooERP": "Odoo ERP Integration",
    "footer.aiSolutions": "AI Solutions",
    "footer.training": "AI Training",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.support": "Support",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.description":
      "Empowering West African businesses through automation and AI solutions that drive real transformation.",
    "footer.rights": "All rights reserved.",

    // Case Studies Section
    "caseStudies.title": "Case studies",
    "caseStudies.subtitle":
      "Real projects, real impact. Discover how we've helped businesses transform through technology.",
    "caseStudies.ctaTitle": "Ready to Create Your Success Story?",
    "caseStudies.ctaSubtitle":
      "Join these successful organizations and let us help transform your business with cutting-edge technology solutions.",
    "caseStudies.ctaButton": "Start Your Project",

    "caseStudies.case1.date": "June 2025",
    "caseStudies.case1.title": "Association Management Application",
    "caseStudies.case1.description":
      "Designed a mobile application for an association to help 200+ members connect more effectively and move away from overcrowded WhatsApp groups.",
    "caseStudies.case1.challenge": "Replace chaotic WhatsApp communication",
    "caseStudies.case1.solution":
      "Custom mobile app with organized communication",
    "caseStudies.case1.result": "Streamlined member connectivity",

    "caseStudies.case2.date": "October 2024",
    "caseStudies.case2.title": "AI Pneumonia Classification System",
    "caseStudies.case2.description":
      "Assisted a healthcare startup in developing an AI system for accurate pneumonia classification from medical imaging.",
    "caseStudies.case2.challenge": "Accurate medical diagnosis automation",
    "caseStudies.case2.solution": "AI-powered image classification system",
    "caseStudies.case2.result": "Enhanced diagnostic accuracy",

    "caseStudies.case3.date": "November 2024",
    "caseStudies.case3.title": "Data Analysis Training for Public Servants",
    "caseStudies.case3.description":
      "Delivered comprehensive 15-hour data analysis training program to public sector employees.",
    "caseStudies.case3.challenge":
      "Upskill government workforce in data analysis",
    "caseStudies.case3.solution": "Intensive hands-on training program",
    "caseStudies.case3.result": "Enhanced analytical capabilities",

    "caseStudies.case4.date": "November-December 2024",
    "caseStudies.case4.title": "Intelligent Legal Assistant",
    "caseStudies.case4.description":
      "Created an AI-powered assistant for law professionals to interact with and query their legal data effectively.",
    "caseStudies.case4.challenge":
      "Efficient legal data management and querying",
    "caseStudies.case4.solution": "AI chatbot for legal document interaction",
    "caseStudies.case4.result": "Streamlined legal research process",

    "caseStudies.case5.date": "February 2025",
    "caseStudies.case5.title": "AI Training for IT Professionals",
    "caseStudies.case5.description":
      "Conducted 16-hour intensive AI training program for IT professionals, focusing on practical workplace applications.",
    "caseStudies.case5.challenge": "Bridge AI knowledge gap in IT workforce",
    "caseStudies.case5.solution": "Comprehensive AI training curriculum",
    "caseStudies.case5.result": "Enhanced AI implementation skills",

    // Toast Messages
    "toast.success.title": "Message sent successfully!",
    "toast.success.description": "We'll get back to you within 24 hours.",
    "toast.error.title": "Error sending message",
    "toast.error.description":
      "Please try again or contact us directly via WhatsApp.",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.about": "À Propos",
    "nav.caseStudies": "Études de Cas",
    "nav.contact": "Contact",
    "nav.freeConsultation": "Consultation Gratuite",
    "nav.delcaux": "Delcaux",

    // Hero Section
    "hero.title": "Automatiser. Intégrer. Innover.",
    "hero.subtitle":
      "Autonomiser les entreprises africaines avec l'IA, l'automatisation et Odoo ERP.",
    "hero.cta1": "Automatisons Votre Entreprise",
    "hero.cta2": "En Savoir Plus",
    "hero.clients": "Clients Servis",
    "hero.projects": "Projets Terminés",
    "hero.countries": "Pays",
    "hero.aiProcessing": "Traitement IA",

    // Services Section
    "services.title": "Nos Services",
    "services.subtitle":
      "Solutions complètes de transformation numérique conçues spécifiquement pour les entreprises et organisations ouest-africaines.",

    "services.automation.title": "Automatisation des Processus",
    "services.automation.description":
      "Rationalisez les flux de travail, numérisez les systèmes de données et éliminez les processus manuels pour augmenter l'efficacité et réduire les coûts.",
    "services.automation.feature1": "Flux de Travail Numériques",
    "services.automation.feature2": "Systèmes de Données",
    "services.automation.feature3": "Optimisation des Processus",
    "services.automation.badge": "Service Principal",

    "services.odoo.title": "Intégration ERP Odoo",
    "services.odoo.description":
      "Solutions complètes de planification des ressources d'entreprise couvrant l'inventaire, les RH, la finance et la gestion de la relation client.",
    "services.odoo.feature1": "Gestion d'Inventaire",
    "services.odoo.feature2": "RH et Finance",
    "services.odoo.feature3": "Intégration CRM",
    "services.odoo.badge": "Entreprise",

    "services.ai.title": "Solutions IA",
    "services.ai.description":
      "Applications d'intelligence artificielle personnalisées incluant l'analyse prédictive, les chatbots intelligents et les systèmes de prise de décision automatisés.",
    "services.ai.feature1": "Analyse Prédictive",
    "services.ai.feature2": "Chatbots Intelligents",
    "services.ai.feature3": "Systèmes d'Aide à la Décision",
    "services.ai.badge": "IA Avancée",

    "services.training.title": "Ateliers et Formation",
    "services.training.description":
      "Programmes de formation complets pour les professionnels et organisations pour développer les capacités en IA.",
    "services.training.feature1": "Formation Professionnelle",
    "services.training.feature2": "Programmes Scolaires",
    "services.training.feature3": "Ateliers d'Entreprise",
    "services.training.badge": "Formation",

    // About Section
    "about.title":
      "Pionnier de la Transformation Numérique en Afrique de l'Ouest",
    "about.description":
      "Fondé avec la vision de combler le fossé numérique, Delcaux est à l'avant-garde de l'innovation technologique en Afrique de l'Ouest. Nous comprenons les défis et opportunités uniques de notre région, et nous nous engageons à livrer des solutions qui génèrent un impact commercial réel.",
    "about.mission.title": "Notre Mission",
    "about.mission.description":
      "Autonomiser les entreprises africaines grâce à des solutions d'automatisation et d'IA de pointe qui favorisent l'efficacité, la croissance et l'innovation.",
    "about.vision.title": "Notre Vision",
    "about.vision.description":
      "Être le partenaire technologique leader pour la transformation numérique à travers l'Afrique de l'Ouest, créant une valeur durable pour les entreprises et les communautés.",
    "about.values.title": "Nos Valeurs",
    "about.values.description":
      "Innovation, intégrité et impact. Nous croyons en une technologie éthique qui sert les gens et construit des communautés plus fortes.",

    // Contact Section
    "contact.title": "Contactez-Nous",
    "contact.subtitle":
      "Prêt à transformer votre entreprise ? Discutons de la façon dont nous pouvons vous aider à atteindre vos objectifs de transformation numérique.",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.firstName": "Prénom",
    "contact.form.lastName": "Nom",
    "contact.form.email": "Email",
    "contact.form.company": "Entreprise",
    "contact.form.service": "Service d'Intérêt",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le Message",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.placeholder.firstName": "Jean",
    "contact.form.placeholder.lastName": "Dupont",
    "contact.form.placeholder.email": "jean@entreprise.com",
    "contact.form.placeholder.company": "Votre Entreprise",
    "contact.form.placeholder.message":
      "Parlez-nous de votre projet et comment nous pouvons vous aider...",
    "contact.form.service.automation": "Automatisation des Processus Métier",
    "contact.form.service.odoo": "Intégration ERP Odoo",
    "contact.form.service.ai": "Solutions IA",
    "contact.form.service.training": "Ateliers et Formation IA",
    "contact.form.service.consultation": "Consultation Générale",
    "contact.info.title": "Informations de Contact",
    "contact.info.email": "Email",
    "contact.info.whatsapp": "WhatsApp",
    "contact.info.office": "Siège",
    "contact.info.location": "Niamey, Niger",
    "contact.info.hours": "Heures d'Ouverture",
    "contact.info.hours.mondayFriday": "Lundi - Vendredi",
    "contact.info.hours.saturday": "Samedi",
    "contact.info.hours.sunday": "Dimanche",
    "contact.info.hours.closed": "Fermé",
    "contact.info.hours.time": "9:00 - 17:00",
    "contact.info.hours.timezone": "Africa de l'Ouest (GMT+1)",
    "contact.followus": "Suivez-Nous",

    // Footer
    "footer.services": "Services",
    "footer.businessAutomation": "Automatisation Métier",
    "footer.odooERP": "Intégration ERP Odoo",
    "footer.aiSolutions": "Solutions IA",
    "footer.training": "Formation IA",
    "footer.company": "Entreprise",
    "footer.about": "À Propos",
    "footer.contact": "Contact",
    "footer.support": "Support",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "footer.description":
      "Autonomiser les entreprises ouest-africaines grâce à des solutions d'automatisation et d'IA qui favorisent une transformation réelle.",
    "footer.rights": "Tous droits réservés.",

    // Case Studies Section
    "caseStudies.title": "Études de Cas",
    "caseStudies.subtitle":
      "Projets réels, impact réel. Découvrez comment nous avons aidé les entreprises à se transformer grâce à la technologie.",
    "caseStudies.ctaTitle": "Prêt à Créer Votre Histoire de Succès ?",
    "caseStudies.ctaSubtitle":
      "Rejoignez ces organisations prospères et laissez-nous vous aider à transformer votre entreprise avec des solutions technologiques de pointe.",
    "caseStudies.ctaButton": "Démarrer Votre Projet",

    "caseStudies.case1.date": "Juin 2025",
    "caseStudies.case1.title": "Application de Gestion d'Association",
    "caseStudies.case1.description":
      "Conception d'une application mobile pour une association afin d'aider plus de 200 membres à se connecter plus efficacement et à s'éloigner des groupes WhatsApp encombrés.",
    "caseStudies.case1.challenge":
      "Remplacer la communication chaotique WhatsApp",
    "caseStudies.case1.solution":
      "Application mobile personnalisée avec communication organisée",
    "caseStudies.case1.result": "Connectivité des membres rationalisée",

    "caseStudies.case2.date": "Octobre 2024",
    "caseStudies.case2.title": "Système de Classification IA pour Pneumonie",
    "caseStudies.case2.description":
      "Assistance à une startup de santé dans le développement d'un système IA pour la classification précise de la pneumonie à partir d'imagerie médicale.",
    "caseStudies.case2.challenge":
      "Automatisation du diagnostic médical précis",
    "caseStudies.case2.solution":
      "Système de classification d'images alimenté par IA",
    "caseStudies.case2.result": "Précision diagnostique améliorée",

    "caseStudies.case3.date": "Novembre 2024",
    "caseStudies.case3.title":
      "Formation en Analyse de Données pour Fonctionnaires",
    "caseStudies.case3.description":
      "Livraison d'un programme de formation complet de 15 heures en analyse de données aux employés du secteur public.",
    "caseStudies.case3.challenge":
      "Améliorer les compétences de la main-d'œuvre gouvernementale en analyse de données",
    "caseStudies.case3.solution": "Programme de formation pratique intensif",
    "caseStudies.case3.result": "Capacités analytiques améliorées",

    "caseStudies.case4.date": "Novembre-Décembre 2024",
    "caseStudies.case4.title": "Assistant Juridique Intelligent",
    "caseStudies.case4.description":
      "Création d'un assistant alimenté par IA pour les professionnels du droit afin d'interagir efficacement avec leurs données juridiques.",
    "caseStudies.case4.challenge":
      "Gestion et interrogation efficaces des données juridiques",
    "caseStudies.case4.solution":
      "Chatbot IA pour l'interaction avec les documents juridiques",
    "caseStudies.case4.result": "Processus de recherche juridique rationalisé",

    "caseStudies.case5.date": "Février 2025",
    "caseStudies.case5.title": "Formation IA pour Professionnels IT",
    "caseStudies.case5.description":
      "Conduite d'un programme de formation intensif IA de 16 heures pour les professionnels IT, axé sur les applications pratiques en milieu de travail.",
    "caseStudies.case5.challenge":
      "Combler le fossé de connaissances IA dans la main-d'œuvre IT",
    "caseStudies.case5.solution": "Programme de formation IA complet",
    "caseStudies.case5.result": "Compétences d'implémentation IA améliorées",

    // Toast Messages
    "toast.success.title": "Message envoyé avec succès !",
    "toast.success.description": "Nous vous répondrons dans les 24 heures.",
    "toast.error.title": "Erreur lors de l'envoi du message",
    "toast.error.description":
      "Veuillez réessayer ou nous contacter directement via WhatsApp.",
  },
};
