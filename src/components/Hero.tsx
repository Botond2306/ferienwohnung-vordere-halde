import heroImage from "@/assets/hero-apartment.jpeg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
          Willkommen im Schwarzwald
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md font-light">
          Ihre gemütliche Ferienwohnung im Wandergebiet Oberprechtal
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            variant="secondary"
            className="text-lg px-8 shadow-medium"
            onClick={() => navigate("/buchung")}
          >
            Jetzt buchen
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-card/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-card/30"
            onClick={() => navigate("/ueber-uns")}
          >
            Mehr erfahren
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
