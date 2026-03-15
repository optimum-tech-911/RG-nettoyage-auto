import { motion } from 'motion/react';
import { User, Calendar, FileText, Settings, LogOut } from 'lucide-react';

export function ClientSpace() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-herbes-100 rounded-full flex items-center justify-center text-herbes-700 font-bold text-xl">
                  JD
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">Jean Dupont</h2>
                  <p className="text-sm text-gray-500">Client Fidèle</p>
                </div>
              </div>
              <nav className="space-y-2">
                <a href="#" className="flex items-center gap-3 px-4 py-3 bg-herbes-50 text-herbes-700 rounded-2xl font-medium">
                  <Calendar size={20} />
                  Mes rendez-vous
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl font-medium transition-colors">
                  <FileText size={20} />
                  Mes factures
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl font-medium transition-colors">
                  <User size={20} />
                  Mon profil
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl font-medium transition-colors">
                  <Settings size={20} />
                  Paramètres
                </a>
              </nav>
            </div>
            <button className="flex items-center gap-3 px-6 py-3 text-red-600 hover:bg-red-50 rounded-2xl font-medium w-full transition-colors">
              <LogOut size={20} />
              Se déconnecter
            </button>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Prochain rendez-vous</h2>
                <span className="bg-herbes-100 text-herbes-700 px-4 py-1.5 rounded-full text-sm font-semibold">Confirmé</span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="bg-gray-50 p-6 rounded-2xl text-center min-w-[150px]">
                  <p className="text-gray-500 font-medium mb-1">Mars</p>
                  <p className="text-4xl font-bold text-gray-900 mb-1">15</p>
                  <p className="text-gray-600 font-medium">14:00</p>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Formule Intégrale</h3>
                  <p className="text-gray-600 mb-4">Peugeot 308 - Nettoyage complet intérieur et extérieur avec cire de protection.</p>
                  <div className="flex gap-4">
                    <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-4 py-2 rounded-xl font-medium transition-colors text-sm">
                      Modifier
                    </button>
                    <button className="bg-white border border-red-200 hover:border-red-300 text-red-600 px-4 py-2 rounded-xl font-medium transition-colors text-sm">
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Historique</h2>
              <div className="space-y-4">
                {[
                  { date: "10 Janvier 2026", service: "Nettoyage Extérieur Premium", price: "59€", status: "Terminé" },
                  { date: "05 Novembre 2025", service: "Formule Intégrale", price: "89€", status: "Terminé" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 hover:bg-gray-50 rounded-2xl transition-colors border border-transparent hover:border-gray-100">
                    <div>
                      <h4 className="font-bold text-gray-900">{item.service}</h4>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 sm:mt-0">
                      <span className="font-bold text-gray-900">{item.price}</span>
                      <button className="text-herbes-600 hover:text-herbes-700 text-sm font-medium">Facture</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
