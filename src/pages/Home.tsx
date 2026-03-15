import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { LogoMarquee } from '../components/ui/LogoMarquee';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
            alt="Car detailing"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32 lg:pt-36 lg:pb-48">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-herbes-100 text-herbes-700 font-semibold text-sm mb-6">
                Expertise & Passion à Sérignan
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                Redonnez à votre voiture son <span className="text-herbes-600">éclat d'origine</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                RG Nettoyage Automobile vous propose des services de nettoyage intérieur et extérieur haut de gamme. Confiez-nous votre véhicule, nous en prenons soin comme si c'était le nôtre.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-herbes-600 hover:bg-herbes-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Réserver maintenant
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-herbes-200 hover:bg-herbes-50 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
                >
                  Découvrir nos services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Invisible Tape / Logo Marquee */}
      <section className="bg-white">
        <LogoMarquee />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-herbes-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir RG Nettoyage ?</h2>
            <p className="text-lg text-gray-600">Nous nous engageons à fournir un service de la plus haute qualité, avec une attention particulière aux détails.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="text-herbes-500" size={32} />,
                title: "Qualité Premium",
                description: "Utilisation de produits professionnels haut de gamme pour un résultat impeccable et durable."
              },
              {
                icon: <Shield className="text-herbes-500" size={32} />,
                title: "Savoir-faire",
                description: "Une expertise technique pour traiter chaque surface de votre véhicule avec le soin approprié."
              },
              {
                icon: <Clock className="text-herbes-500" size={32} />,
                title: "Gain de temps",
                description: "Un service efficace et ponctuel. Réservez facilement en ligne selon vos disponibilités."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-herbes-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services Phares</h2>
              <p className="text-lg text-gray-600">Des formules adaptées aux besoins de votre véhicule.</p>
            </div>
            <Link to="/services" className="text-herbes-600 font-semibold hover:text-herbes-700 flex items-center gap-2">
              Voir tous les services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Formule Intégrale",
                price: "À partir de 89€",
                image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=2000&auto=format&fit=crop",
                features: ["Aspiration complète", "Nettoyage plastiques", "Lavage carrosserie", "Séchage microfibre", "Brillant pneus"]
              },
              {
                title: "Rénovation Sièges",
                price: "Sur devis",
                image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2000&auto=format&fit=crop",
                features: ["Shampouinage tissus", "Traitement cuir", "Détachage en profondeur", "Désodorisation", "Protection anti-taches"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl bg-gray-900"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="relative p-8 md:p-12 h-full flex flex-col justify-end min-h-[400px]">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full font-medium text-sm mb-4">
                      {service.price}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-6">{service.title}</h3>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-200">
                        <CheckCircle2 size={20} className="text-herbes-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/booking"
                    className="inline-flex items-center justify-center w-full bg-white text-gray-900 hover:bg-herbes-50 px-6 py-4 rounded-2xl font-bold transition-colors"
                  >
                    Réserver cette formule
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-herbes-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-herbes-600 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-herbes-500 rounded-full blur-3xl opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à faire briller votre véhicule ?</h2>
          <p className="text-xl text-herbes-100 mb-10">
            Contactez Richard Gomez au 06 83 34 86 06 ou réservez directement en ligne.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2 bg-white text-herbes-900 hover:bg-herbes-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Prendre rendez-vous
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
