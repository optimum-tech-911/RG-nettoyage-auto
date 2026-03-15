import { motion } from 'motion/react';
import { Calendar, Clock, Car, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Booking() {
  const [step, setStep] = useState(1);

  return (
    <div className="py-24 bg-herbes-50/30 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Réserver une prestation</h1>
          <p className="text-xl text-gray-600">Planifiez votre rendez-vous en quelques clics.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full z-0"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-herbes-500 rounded-full z-0 transition-all duration-500" style={{ width: `${(step - 1) * 50}%` }}></div>
            
            {[
              { num: 1, label: "Service", icon: <Car size={20} /> },
              { num: 2, label: "Date & Heure", icon: <Calendar size={20} /> },
              { num: 3, label: "Coordonnées", icon: <CheckCircle2 size={20} /> }
            ].map((s) => (
              <div key={s.num} className="relative z-10 flex flex-col items-center gap-2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-colors ${step >= s.num ? 'bg-herbes-600 text-white shadow-md' : 'bg-white text-gray-400 border-2 border-gray-200'}`}>
                  {s.icon}
                </div>
                <span className={`text-sm font-medium ${step >= s.num ? 'text-herbes-700' : 'text-gray-500'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
        >
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sélectionnez un service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Nettoyage Intérieur', 'Nettoyage Extérieur', 'Formule Intégrale', 'Rénovation Sièges'].map((service) => (
                  <label key={service} className="relative flex cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-herbes-500 hover:bg-herbes-50 transition-all">
                    <input type="radio" name="service" className="peer sr-only" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900 peer-checked:text-herbes-700">{service}</span>
                      <span className="text-sm text-gray-500 mt-1">À partir de 49€</span>
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-herbes-600 peer-checked:bg-herbes-600 flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-white opacity-0 peer-checked:opacity-100" />
                    </div>
                  </label>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button onClick={() => setStep(2)} className="bg-herbes-600 hover:bg-herbes-700 text-white px-8 py-3 rounded-2xl font-semibold transition-colors">
                  Continuer
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choisissez une date et heure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date souhaitée</label>
                  <input type="date" className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Créneau horaire</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['09:00', '11:00', '14:00', '16:00'].map((time) => (
                      <label key={time} className="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-3 text-center hover:border-herbes-500 hover:bg-herbes-50 transition-all justify-center">
                        <input type="radio" name="time" className="peer sr-only" />
                        <span className="font-medium text-gray-700 peer-checked:text-herbes-700">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button onClick={() => setStep(1)} className="text-gray-600 hover:text-gray-900 px-6 py-3 font-medium">Retour</button>
                <button onClick={() => setStep(3)} className="bg-herbes-600 hover:bg-herbes-700 text-white px-8 py-3 rounded-2xl font-semibold transition-colors">
                  Continuer
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vos coordonnées</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input type="text" className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input type="text" className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 focus:border-transparent outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 focus:border-transparent outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Modèle du véhicule</label>
                <input type="text" placeholder="Ex: Peugeot 308, Renault Clio..." className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 focus:border-transparent outline-none" />
              </div>
              <div className="mt-8 flex justify-between">
                <button onClick={() => setStep(2)} className="text-gray-600 hover:text-gray-900 px-6 py-3 font-medium">Retour</button>
                <button type="button" className="bg-herbes-600 hover:bg-herbes-700 text-white px-8 py-3 rounded-2xl font-semibold transition-colors shadow-md">
                  Confirmer la réservation
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
