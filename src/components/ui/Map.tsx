export function Map() {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative">
      <iframe
        title="Carte de Sérignan, France"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=S%C3%A9rignan,+France&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  );
}
