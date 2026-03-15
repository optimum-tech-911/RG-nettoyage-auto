import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LogoMarquee } from '../components/ui/LogoMarquee';

export function Services() {
  const services = [
    {
      title: "Nettoyage Intérieur Classique",
      price: "À partir de 49€",
      description: "Un entretien régulier pour garder votre habitacle propre et sain.",
      features: ["Aspiration complète", "Dépoussiérage plastiques", "Nettoyage vitres intérieures", "Parfum d'ambiance"],
      image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Nettoyage Extérieur Premium",
      price: "À partir de 59€",
      description: "Un lavage minutieux à la main pour préserver votre carrosserie.",
      features: ["Prélavage mousse active", "Lavage manuel aux deux seaux", "Nettoyage jantes", "Séchage microfibre", "Brillant pneus"],
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Formule Intégrale",
      price: "À partir de 89€",
      description: "La combinaison parfaite pour un véhicule impeccable à l'intérieur comme à l'extérieur.",
      features: ["Tous les services Intérieur Classique", "Tous les services Extérieur Premium", "Application cire de protection express"],
      image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Rénovation Sièges & Tissus",
      price: "Sur devis",
      description: "Traitement en profondeur pour éliminer taches et mauvaises odeurs.",
      features: ["Shampouinage extracteur", "Traitement cuir spécifique", "Désodorisation habitacle", "Protection anti-taches"],
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="py-24 bg-herbes-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos Prestations</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez nos différentes formules de nettoyage, conçues pour répondre à tous les besoins et budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col overflow-hidden"
              >
                <div className="h-64 w-full relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-1.5 bg-herbes-100 text-herbes-700 rounded-full font-semibold text-sm mb-4">
                      {service.price}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 size={20} className="text-herbes-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/booking"
                    className="w-full text-center bg-herbes-50 text-herbes-700 hover:bg-herbes-600 hover:text-white px-6 py-3 rounded-2xl font-semibold transition-colors"
                  >
                    Réserver cette prestation
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Invisible Tape / Logo Marquee */}
      <section className="bg-white pb-12">
        <div className="text-center mb-8">
          <p className="text-gray-500 font-medium">Nous prenons soin de toutes les marques</p>
        </div>
        <LogoMarquee />
      </section>
    </div>
  );
}
