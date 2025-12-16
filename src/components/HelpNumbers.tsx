import { Phone, Shield, Users, AlertTriangle, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const helpLines = [
  {
    icon: Shield,
    name: "INCIBE",
    number: "017",
    description: "Línea de Ayuda en Ciberseguridad",
    available: "9:00 - 21:00 (L-D)",
    color: "text-primary",
  },
  {
    icon: AlertTriangle,
    name: "Policía Nacional",
    number: "091",
    description: "Delitos informáticos y cibercrimen",
    available: "24 horas",
    color: "text-destructive",
  },
  {
    icon: Users,
    name: "Guardia Civil",
    number: "062",
    description: "Grupo de Delitos Telemáticos",
    available: "24 horas",
    color: "text-green-500",
  },
  {
    icon: Headphones,
    name: "AEPD",
    number: "901 100 099",
    description: "Protección de datos personales",
    available: "9:00 - 14:00 (L-V)",
    color: "text-amber-500",
  },
  {
    icon: Phone,
    name: "Emergencias",
    number: "112",
    description: "Emergencias generales",
    available: "24 horas",
    color: "text-red-500",
  },
];

const HelpNumbers = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            ¿Necesitas ayuda?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Números de <span className="text-gradient-cyber">Emergencia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Si has sido víctima de un ciberataque o necesitas asesoramiento, contacta con estos servicios especializados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {helpLines.map((line, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-secondary ${line.color}`}>
                    <line.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {line.name}
                    </h3>
                    <a
                      href={`tel:${line.number.replace(/\s/g, "")}`}
                      className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors block mt-1"
                    >
                      {line.number}
                    </a>
                    <p className="text-muted-foreground text-sm mt-2">
                      {line.description}
                    </p>
                    <span className="inline-block mt-2 text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                      {line.available}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm">
            🔒 Recuerda: nunca compartas datos sensibles por teléfono a menos que hayas iniciado tú la llamada
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpNumbers;
