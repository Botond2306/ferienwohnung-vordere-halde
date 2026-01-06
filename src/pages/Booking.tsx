import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Mail, Phone, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";

const Booking = () => {
  return (
    <div className="min-h-screen py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-8 text-center">
            Buchung
          </h1>

          <Card className="mb-8 shadow-medium">
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-primary">
                So buchen Sie Ihren Aufenthalt
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Verfügbarkeit prüfen</h3>
                  <p className="text-muted-foreground">
                    Kontaktieren Sie uns telefonisch oder per E-Mail mit Ihrem gewünschten 
                    Reisezeitraum. Wir prüfen gerne die Verfügbarkeit für Sie.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Buchung bestätigen</h3>
                  <p className="text-muted-foreground">
                    Nach Prüfung der Verfügbarkeit erhalten Sie von uns ein Angebot. 
                    Mit Ihrer Buchungsbestätigung wird Ihr Aufenthalt reserviert.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Anreise genießen</h3>
                  <p className="text-muted-foreground">
                    Sie erhalten alle wichtigen Informationen zur Anreise und zum Check-in. 
                    Wir freuen uns auf Ihren Besuch!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Euro className="h-6 w-6 text-accent" />
                  Preise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pro Nacht (2 Personen)</span>
                    <span className="font-semibold">ab 75 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Jede weitere Person</span>
                    <span className="font-semibold">+ 10 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kurtaxe (pro Nacht und erw. Person)</span>
                    <span className="font-semibold">2,20 €</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      * Preise können je nach Saison variieren
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      ** Handtücher und Bettwäsche sind im Preis inbegriffen
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Calendar className="h-6 w-6 text-accent" />
                  Mindestaufenthalt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Neben- und Hauptsaison</span>
                    <span className="font-semibold">2 Nächte</span>
                  </div>
                  {/*<div className="flex justify-between">
                    <span className="text-muted-foreground">Hauptsaison</span>
                    <span className="font-semibold">3 Nächte</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Feiertage</span>
                    <span className="font-semibold">4 Nächte</span>
                  </div> */}
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Check-in: 16:00 Uhr<br />
                      Check-out: 11:00 Uhr<br />
                      Individueller Check-in und Check-out nach Absprache möglich
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Self Check-in mit Schlüsselbox
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-accent text-accent-foreground shadow-medium">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center">
                Kontaktieren Sie uns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full text-lg h-auto py-4 min-w-0"
                  asChild
                >
                  <a href="tel:+4915906551496" className="flex items-center justify-center gap-3 min-w-0 overflow-hidden">
                    <Phone className="h-5 w-5" />
                    <span className="truncate">+49 1590 6551496</span>
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full text-lg h-auto py-4 min-w-0"
                  asChild
                >
                  <a href="mailto:ferienwohnung@vordere-halde.de" className="flex items-center justify-center gap-3 min-w-0 overflow-hidden">
                    <Mail className="h-5 w-5" />
                    <span className="hidden sm:inline truncate">ferienwohnung@vordere-halde.de</span>
                    <span className="inline sm:hidden">E‑Mail</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;
