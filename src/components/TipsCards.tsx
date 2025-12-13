import passwordSecurity from "@/assets/password-security.jpg";
import phishingAlert from "@/assets/phishing-alert.jpg";
import wifiSecurity from "@/assets/wifi-security.jpg";

const tipCards = [
  {
    image: passwordSecurity,
    title: "Contraseñas Fuertes",
    description: "Una contraseña segura es tu primera línea de defensa. Combina letras, números y símbolos para crear barreras impenetrables.",
    stat: "81%",
    statLabel: "de brechas usan contraseñas débiles"
  },
  {
    image: phishingAlert,
    title: "Detecta el Phishing",
    description: "Los atacantes se disfrazan de entidades confiables. Aprende a identificar señales de alerta en emails y mensajes sospechosos.",
    stat: "3.4B",
    statLabel: "emails de phishing enviados diariamente"
  },
  {
    image: wifiSecurity,
    title: "Redes Seguras",
    description: "Las redes WiFi públicas son terreno peligroso. Protege tus conexiones con VPN y configuraciones de seguridad adecuadas.",
    stat: "60%",
    statLabel: "de usuarios usan WiFi público sin protección"
  }
];

const TipsCards = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Amenazas <span className="text-gradient-cyber">Principales</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce las principales amenazas digitales y cómo protegerte de ellas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tipCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border-glow transition-all duration-500 hover:scale-[1.02] hover:glow-strong"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {card.description}
                </p>

                {/* Stat */}
                <div className="flex items-end gap-3 pt-4 border-t border-border">
                  <span className="font-display text-4xl font-bold text-gradient-cyber">
                    {card.stat}
                  </span>
                  <span className="text-sm text-muted-foreground pb-1">
                    {card.statLabel}
                  </span>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-primary/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsCards;
