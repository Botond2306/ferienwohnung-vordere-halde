import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>+49 1590 6551496</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>ferienwohnung@vordere-halde.de</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Tribergerstr. 33, 79215 Elzach, Deutschland</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <NavLink to="/" className="hover:text-accent transition-colors">
                Home
              </NavLink>
              <NavLink to="/ueber-uns" className="hover:text-accent transition-colors">
                Über uns
              </NavLink>
              <NavLink to="/buchung" className="hover:text-accent transition-colors">
                Buchung
              </NavLink>
              <NavLink to="/impressum" className="hover:text-accent transition-colors">
                Impressum
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Über uns</h3>
            <p className="text-primary-foreground/90">
              Ihre gemütliche Ferienwohnung im Herzen des Schwarzwaldes. Erleben Sie 
              unvergessliche Momente in der Natur.
            </p>
          </div>
        </div>

{/*        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80">
            © 2025 Ferienwohnung "Vordere Halde". Alle Rechte vorbehalten.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
