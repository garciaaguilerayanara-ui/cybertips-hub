import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Lock, 
  Mail, 
  Wifi, 
  Smartphone, 
  CreditCard, 
  Users,
  AlertTriangle,
  Shield,
  Key,
  Globe
} from "lucide-react";

const cyberTips = [
  {
    id: "passwords",
    icon: Lock,
    title: "Contraseñas Seguras",
    color: "text-primary",
    tips: [
      "Usa contraseñas de al menos 12 caracteres con mayúsculas, minúsculas, números y símbolos",
      "Nunca uses la misma contraseña en múltiples cuentas",
      "Utiliza un gestor de contraseñas como Bitwarden, 1Password o LastPass",
      "Activa la autenticación de dos factores (2FA) siempre que sea posible",
      "Cambia tus contraseñas cada 3-6 meses en cuentas sensibles"
    ]
  },
  {
    id: "phishing",
    icon: Mail,
    title: "Protección Anti-Phishing",
    color: "text-cyber-pink",
    tips: [
      "Verifica siempre la dirección del remitente antes de abrir emails",
      "No hagas clic en enlaces de emails sospechosos",
      "Los bancos nunca te pedirán contraseñas por email",
      "Revisa la URL antes de introducir datos personales",
      "Si algo parece demasiado bueno para ser verdad, probablemente sea una estafa"
    ]
  },
  {
    id: "wifi",
    icon: Wifi,
    title: "Seguridad en Redes WiFi",
    color: "text-cyber-purple",
    tips: [
      "Evita conectarte a redes WiFi públicas sin VPN",
      "Cambia la contraseña por defecto de tu router",
      "Usa WPA3 o WPA2 como protocolo de seguridad",
      "Desactiva la administración remota del router",
      "Crea una red separada para dispositivos IoT"
    ]
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Seguridad en Móviles",
    color: "text-cyber-green",
    tips: [
      "Mantén tu sistema operativo siempre actualizado",
      "Descarga apps solo de tiendas oficiales",
      "Revisa los permisos que solicitan las aplicaciones",
      "Activa el bloqueo de pantalla con biometría",
      "Haz copias de seguridad regularmente"
    ]
  },
  {
    id: "banking",
    icon: CreditCard,
    title: "Banca y Compras Online",
    color: "text-cyber-orange",
    tips: [
      "Verifica que la web tenga HTTPS y candado de seguridad",
      "Usa tarjetas virtuales o prepago para compras online",
      "Activa las alertas de movimientos bancarios",
      "Nunca guardes datos de tarjeta en sitios poco conocidos",
      "Revisa regularmente tus extractos bancarios"
    ]
  },
  {
    id: "social",
    icon: Users,
    title: "Redes Sociales y Privacidad",
    color: "text-primary",
    tips: [
      "Configura la privacidad de tus perfiles al máximo",
      "No compartas información personal sensible públicamente",
      "Desconfía de perfiles que no conoces personalmente",
      "No publiques fotos que revelen tu ubicación en tiempo real",
      "Revisa qué aplicaciones tienen acceso a tus redes"
    ]
  },
  {
    id: "malware",
    icon: AlertTriangle,
    title: "Protección contra Malware",
    color: "text-destructive",
    tips: [
      "Instala y mantén actualizado un antivirus confiable",
      "No descargues software de fuentes desconocidas",
      "Escanea los archivos antes de abrirlos",
      "Mantén el firewall del sistema activado",
      "Ten cuidado con los archivos adjuntos en emails"
    ]
  },
  {
    id: "backups",
    icon: Shield,
    title: "Copias de Seguridad",
    color: "text-cyber-green",
    tips: [
      "Sigue la regla 3-2-1: 3 copias, 2 medios diferentes, 1 fuera de casa",
      "Automatiza tus copias de seguridad",
      "Cifra las copias de seguridad sensibles",
      "Verifica regularmente que las copias funcionan",
      "Usa servicios cloud confiables como respaldo adicional"
    ]
  }
];

const CyberTipsAccordion = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-cyber">Guía</span> de Ciberseguridad
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora cada categoría para conocer los mejores consejos de seguridad digital
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {cyberTips.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border-glow bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-secondary ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <span className="font-display text-xl font-semibold text-left">
                      {category.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="space-y-3 pt-2">
                    {category.tips.map((tip, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <Key className={`w-4 h-4 mt-1 flex-shrink-0 ${category.color}`} />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CyberTipsAccordion;
