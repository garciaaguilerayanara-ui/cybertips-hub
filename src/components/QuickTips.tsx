import { 
  CheckCircle, 
  XCircle, 
  AlertCircle 
} from "lucide-react";

const doList = [
  "Usa autenticación de dos factores",
  "Actualiza tu software regularmente",
  "Usa contraseñas únicas y fuertes",
  "Cifra tus dispositivos",
  "Haz copias de seguridad"
];

const dontList = [
  "Reutilizar contraseñas",
  "Hacer clic en enlaces sospechosos",
  "Compartir información personal",
  "Ignorar actualizaciones de seguridad",
  "Conectarte a WiFi público sin VPN"
];

const QuickTips = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-cyber">Haz</span> y <span className="text-destructive">No Hagas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reglas básicas para mantener tu seguridad digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* DO Column */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-cyber-green/30 glow-cyber">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-cyber-green/20">
                <CheckCircle className="w-8 h-8 text-cyber-green" />
              </div>
              <h3 className="font-display text-2xl font-bold text-cyber-green">HAZ ESTO</h3>
            </div>
            <ul className="space-y-4">
              {doList.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyber-green flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DON'T Column */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-destructive/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-destructive/20">
                <XCircle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="font-display text-2xl font-bold text-destructive">NO HAGAS ESTO</h3>
            </div>
            <ul className="space-y-4">
              {dontList.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 p-6 rounded-xl bg-cyber-orange/10 border border-cyber-orange/30">
            <AlertCircle className="w-8 h-8 text-cyber-orange flex-shrink-0" />
            <p className="text-foreground">
              <strong className="text-cyber-orange">Recuerda:</strong> La ciberseguridad no es un producto, es un proceso continuo. 
              Mantente informado y actualiza tus prácticas regularmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickTips;
