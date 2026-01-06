import forestImage from "@/assets/forest-view.jpeg";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-8 text-center">
            Über uns
          </h1>

          <div className="mb-12 rounded-lg overflow-hidden shadow-medium">
            <img
              src={forestImage}
              alt="Schwarzwald"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-lg p-8 shadow-soft mb-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Willkommen in unserer Ferienwohnung
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Unsere liebevoll eingerichtete Ferienwohnung liegt im Herzen des wunderschönen 
                Schwarzwaldes. Hier können Sie die Seele baumeln lassen und die  
                Natur in vollen Zügen genießen.
              </p>
              <p className="text-foreground leading-relaxed">
                Die 45 m² große Wohnung bietet Platz für bis zu 4 Personen und verfügt über eine vollständig 
                ausgestattete Küche, ein gemütliches Wohn- und
                Schlafzimmer mit zusätzlicher Schlafcouch und ein modernes Badezimmer, mit ebenerdig begehbarer Dusche.
              </p>
              <p className="text-foreground leading-relaxed">
                Zusätzlich verfügt die Ferienwohnung über eine ca. 18 m² große Terasse für gemütliche Sommerabende.
              </p>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 shadow-soft mb-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Ihre Gastgeber
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Wir sind eine Familie die sich vor über 20 Jahren in die idyllische Umgebung des Schwarzwaldes verliebt hat und dies gerne mit ihnen teilen würde. 
                Gerne geben wir Ihnen Tipps für Wanderungen, Ausflugsziele 
                und lokale Restaurants.
              </p>
              <p className="text-foreground leading-relaxed">
                Unser Ziel ist es, dass Sie sich bei uns wie zu Hause fühlen und einen 
                unvergesslichen Urlaub erleben.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-soft">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Die Umgebung
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Das Elztal bietet zu jeder Jahreszeit vielfältige Möglichkeiten für 
                Aktivitäten. Im Sommer können Sie wandern, radfahren oder die zahlreichen 
                Sehenswürdigkeiten der Region besuchen. 
                Im Winter, bei Schneelage, haben sie die Möglichkeit im 17 km entfernten Schonach 
                oder auf dem in 5 km Entfernung liegenden Rohrhardsberg auf präparierten Pisten Ski zu fahren. 
              </p>
              <p className="text-foreground leading-relaxed">
                Sehenswürdigkeiten wie die Triberger Wasserfälle, der Titisee und die 
                malerischen Schwarzwalddörfer sind bequem erreichbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
