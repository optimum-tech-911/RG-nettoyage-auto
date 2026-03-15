import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const logoUrl = new URL('../../logo.png', import.meta.url).href;
  return (
    <footer className="bg-herbes-950 text-herbes-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logoUrl} alt="RG Nettoyage" className="w-9 h-9 rounded-2xl object-cover bg-white p-1" />
              <span className="font-bold text-xl tracking-tight text-white">RG Nettoyage</span>
            </Link>
            <p className="text-herbes-200 mb-6 leading-relaxed">
              L'excellence du nettoyage automobile à Sérignan. Redonnez à votre véhicule son éclat d'origine avec nos services professionnels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-2xl bg-herbes-900 flex items-center justify-center hover:bg-herbes-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-2xl bg-herbes-900 flex items-center justify-center hover:bg-herbes-800 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Liens Rapides</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-herbes-200 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-herbes-200 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/services" className="text-herbes-200 hover:text-white transition-colors">Nos Services</Link></li>
              <li><Link to="/booking" className="text-herbes-200 hover:text-white transition-colors">Réserver</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-herbes-200">Nettoyage Intérieur</li>
              <li className="text-herbes-200">Lavage Extérieur</li>
              <li className="text-herbes-200">Polissage & Lustrage</li>
              <li className="text-herbes-200">Traitement Céramique</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-herbes-200">
                <MapPin size={20} className="shrink-0 mt-1 text-herbes-400" />
                <span>Sérignan, France</span>
              </li>
              <li className="flex items-center gap-3 text-herbes-200">
                <Phone size={20} className="shrink-0 text-herbes-400" />
                <span>06 83 34 86 06</span>
              </li>
              <li className="flex items-center gap-3 text-herbes-200">
                <Mail size={20} className="shrink-0 text-herbes-400" />
                <span>contact@rg-nettoyage.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-herbes-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-herbes-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} RG Nettoyage Automobile. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-herbes-400">
            <Link to="/admin" className="hover:text-white transition-colors">Admin</Link>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
