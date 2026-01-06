import { Card, CardContent } from "@/components/ui/card";

const Impressum = () => {
  return (
    <div className="min-h-screen py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-8 text-center">
            Impressum
          </h1>

          <Card className="shadow-medium mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-2 text-foreground">
                <p className="font-semibold">Ferienwohnung "Vordere Halde"</p>
                <p>Sven Bartha</p>
                <p>Triberger Str. 33</p>
                <p>79215 Elzach</p>
                <p>Deutschland</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Kontakt
              </h2>
              <div className="space-y-2 text-foreground">
                <p>
                  <span className="font-semibold">Telefon:</span> +49 1590 6551496
                </p>
                <p>
                  <span className="font-semibold">E-Mail:</span> ferienwohnung@vordere-halde.de
                </p>
              </div>
            </CardContent>
          </Card>
{/*
          <Card className="shadow-medium mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                DE123456789
              </p>
            </CardContent>
          </Card>
*/}
          <Card className="shadow-medium mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Haftungsausschluss
              </h2>
              <div className="space-y-4 text-foreground">
                <div>
                  <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
                  <p className="text-sm text-muted-foreground">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die 
                    Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch 
                    keine Gewähr übernehmen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Haftung für Links</h3>
                  <p className="text-sm text-muted-foreground">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren 
                    Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden 
                    Inhalte auch keine Gewähr übernehmen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Urheberrecht</h3>
                  <p className="text-sm text-muted-foreground">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen 
                    Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
                    Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
                    jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Datenschutz
              </h2>
              <p className="text-foreground text-sm">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener 
                Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise 
                Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit 
                möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche 
                Zustimmung nicht an Dritte weitergegeben.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
