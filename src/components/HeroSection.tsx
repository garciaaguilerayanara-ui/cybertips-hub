import { Shield, Lock, Eye } from "lucide-react";
import heroCyber from "@/assets/hero-cyber.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCyber})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow bg-secondary/50 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Protege tu vida digital</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gradient-cyber">Ciber</span>
            <span className="text-foreground">Consejos</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-body">
            Tu guía definitiva para navegar seguros en el mundo digital. 
            Aprende a proteger tus datos, privacidad y dispositivos.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border-glow">
              <Lock className="w-5 h-5 text-primary animate-pulse-glow" />
              <span className="font-medium">Contraseñas Seguras</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border-glow">
              <Eye className="w-5 h-5 text-cyber-purple" />
              <span className="font-medium">Privacidad Online</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border-glow">
              <Shield className="w-5 h-5 text-cyber-green" />
              <span className="font-medium">Anti-Phishing</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
