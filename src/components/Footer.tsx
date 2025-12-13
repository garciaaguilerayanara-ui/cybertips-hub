import { Shield, Heart, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <span className="font-display text-xl font-bold">
                <span className="text-gradient-cyber">Ciber</span>Consejos
              </span>
              <p className="text-sm text-muted-foreground">Tu guía de seguridad digital</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
              aria-label="Github"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-destructive" /> para proteger tu vida digital
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © 2024 CiberConsejos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
