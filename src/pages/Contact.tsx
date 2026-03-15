import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Map } from '../components/ui/Map';

export function Contact() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une question sur nos services ? Besoin d'un devis personnalisé ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-herbes-50 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations Pratiques</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="text-herbes-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Adresse</h3>
                    <p className="text-gray-600">Sérignan, France</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="text-herbes-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Téléphone</h3>
                    <p className="text-gray-600">06 83 34 86 06</p>
                    <p className="text-sm text-gray-500">Richard Gomez</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="text-herbes-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                    <p className="text-gray-600">contact@rg-nettoyage.fr</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="text-herbes-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Horaires</h3>
                    <p className="text-gray-600">Lundi - Samedi : 8h00 - 19h00</p>
                    <p className="text-gray-600">Dimanche : Fermé</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 focus:border-transparent outline-none transition-all" placeholder="Jean" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 focus:border-transparent outline-none transition-all" placeholder="Dupont" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 focus:border-transparent outline-none transition-all" placeholder="jean.dupont@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button type="button" className="w-full bg-herbes-600 hover:bg-herbes-700 text-white font-semibold py-4 rounded-2xl transition-colors shadow-md">
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Localisation</h2>
            <p className="text-lg text-gray-600">
              Venez nous rendre visite à Sérignan.
            </p>
          </div>
          <Map />
        </motion.div>
      </div>
    </div>
  );
}
