import { motion } from 'motion/react';
import { Map } from '../components/ui/Map';

export function About() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">À propos de RG Nettoyage</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Fondée par Richard Gomez, notre entreprise est née d'une passion pour l'automobile et du désir d'offrir un service de nettoyage d'exception à Sérignan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
              alt="Richard Gomez au travail"
              className="rounded-3xl shadow-xl object-cover h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Philosophie</h2>
              <p className="text-gray-600 leading-relaxed">
                Nous croyons que chaque véhicule mérite une attention particulière. Que ce soit pour un entretien régulier ou une rénovation complète, nous utilisons les meilleures techniques et produits du marché pour garantir un résultat à la hauteur de vos attentes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Engagement</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-herbes-500 rounded-full" />
                  Satisfaction client garantie
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-herbes-500 rounded-full" />
                  Produits respectueux de l'environnement
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-herbes-500 rounded-full" />
                  Transparence sur les tarifs et prestations
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-herbes-50/50 rounded-3xl p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Retrouvez-nous à Sérignan</h2>
            <p className="text-lg text-gray-600">
              Notre centre de nettoyage vous accueille au cœur de Sérignan.
            </p>
          </div>
          <Map />
        </motion.div>
      </div>
    </div>
  );
}
