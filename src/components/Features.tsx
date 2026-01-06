import { Wifi, Mountain, UtensilsCrossed, ParkingCircle, Trees, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Home,
    title: "Komfortable Ausstattung",
    description: "Modern eingerichtete Wohnung mit vollem Komfort für Ihren perfekten Urlaub",
  },
  {
    icon: Mountain,
    title: "Atemberaubende Aussicht",
    description: "Panoramablick auf die malerischen Schwarzwald-Berge",
  },
  {
    icon: Trees,
    title: "Mitten in der Natur",
    description: "Umgeben von Wäldern und Wanderwegen direkt vor der Haustür",
  },
  {
    icon: Wifi,
    title: "Kostenfreies WLAN",
    description: "Schnelles Internet für Arbeit und Unterhaltung",
  },
  {
    icon: UtensilsCrossed,
    title: "Voll ausgestattete Küche",
    description: "Moderne Küche mit allen notwendigen Geräten und Utensilien",
  },
  {
    icon: ParkingCircle,
    title: "Kostenloser Parkplatz",
    description: "Privater Parkplatz direkt am Haus mit E-Auto Ladestation (Kostenpflichtig)",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Ihre Vorteile
          </h2>
          {/*<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Genießen Sie erstklassigen Komfort in idyllischer Lage
          </p>*/}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
