import { motion } from 'motion/react';

export function LogoMarquee() {
  const brands = [
    "PEUGEOT", "VOLKSWAGEN", "RENAULT", "CITROËN", "FIAT",
    "SEAT", "AUDI", "BMW", "MERCEDES", "ALFA ROMEO",
    "PORSCHE", "DACIA", "SKODA", "OPEL", "TOYOTA"
  ];

  return (
    <div className="w-full overflow-hidden bg-transparent py-10 border-y border-gray-100/50 flex relative">
      {/* Gradient masks for smooth fade effect on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className="inline-flex justify-center items-center px-12">
            <span className="text-2xl font-bold text-gray-300 hover:text-herbes-300 transition-colors tracking-widest uppercase">
              {brand}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
