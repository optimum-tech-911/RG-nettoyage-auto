import { motion } from 'motion/react';
import { Users, Calendar, Settings, LogOut, Search } from 'lucide-react';

export function Admin() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-herbes-950 text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold tracking-tight">RG Admin</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-herbes-800 rounded-xl text-white font-medium">
            <Calendar size={20} />
            Réservations
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-herbes-200 hover:bg-herbes-900 rounded-xl font-medium transition-colors">
            <Users size={20} />
            Clients
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-herbes-200 hover:bg-herbes-900 rounded-xl font-medium transition-colors">
            <Settings size={20} />
            Paramètres
          </a>
        </nav>
        <div className="p-4 border-t border-herbes-800">
          <button className="flex items-center gap-3 px-4 py-3 text-herbes-200 hover:text-white w-full transition-colors">
            <LogOut size={20} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Tableau de bord</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-herbes-500 outline-none"
                />
              </div>
              <div className="w-10 h-10 bg-herbes-100 rounded-full flex items-center justify-center text-herbes-700 font-bold">
                RG
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Réservations du jour", value: "4", trend: "+2" },
              { label: "Nouveaux clients", value: "12", trend: "+5%" },
              { label: "Chiffre d'affaires (Mois)", value: "3 450 €", trend: "+12%" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm font-medium mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                  <span className="text-herbes-500 font-medium text-sm bg-herbes-50 px-2 py-1 rounded-lg">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">Réservations récentes</h3>
              <button className="text-herbes-600 font-medium text-sm hover:text-herbes-700">Voir tout</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-sm">
                    <th className="px-6 py-4 font-medium">Client</th>
                    <th className="px-6 py-4 font-medium">Service</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                    <th className="px-6 py-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "Jean Dupont", service: "Formule Intégrale", date: "Aujourd'hui, 14:00", status: "Confirmé", color: "bg-herbes-100 text-herbes-700" },
                    { name: "Marie Martin", service: "Nettoyage Extérieur", date: "Demain, 09:00", status: "En attente", color: "bg-yellow-100 text-yellow-700" },
                    { name: "Paul Bernard", service: "Rénovation Sièges", date: "15 Mars, 11:00", status: "Confirmé", color: "bg-herbes-100 text-herbes-700" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                      <td className="px-6 py-4 text-gray-600">{row.service}</td>
                      <td className="px-6 py-4 text-gray-600">{row.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.color}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-herbes-600 transition-colors">Éditer</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
