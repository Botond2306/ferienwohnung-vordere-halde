import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useCookieConsent, getStoredConsent } from "@/hooks/useCookieConsent";

const INITIAL = { analytics: false, fonts: false };

const CookieConsent: React.FC = () => {
  const { consent, save } = useCookieConsent();
  const [visible, setVisible] = useState<boolean>(() => !getStoredConsent());
  const [local, setLocal] = useState(INITIAL);

  useEffect(() => {
    if (consent) setLocal(consent);

    const openHandler = () => setVisible(true);
    window.addEventListener("cookie-consent-open", openHandler);
    return () => window.removeEventListener("cookie-consent-open", openHandler);
  }, [consent]);

  function acceptAll() {
    const c = { analytics: true, fonts: true };
    save(c);
    setVisible(false);
  }

  function rejectAll() {
    const c = { analytics: false, fonts: false };
    save(c);
    setVisible(false);
  }

  function saveAndClose() {
    save(local);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed left-4 right-4 md:left-8 md:right-8 bottom-6 z-50">
      <Card className="shadow-lg">
        <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-xl">
            <h4 className="text-lg font-semibold">Cookie-Präferenzen</h4>
            <p className="text-sm text-muted-foreground mt-2">Wir verwenden Cookies und ähnliche Technologien, um Funktionalität und Analysen bereitzustellen. Wählen Sie aus, welche Dienste aktiviert werden dürfen. Technisch notwendige Funktionen sind immer aktiv.</p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Analytics (Vercel Analytics &amp; Speed Insights)</div>
                  <div className="text-sm text-muted-foreground">Erlaubt das Erheben von Besuchsstatistiken und Performance-Checks.</div>
                </div>
                <Switch checked={local.analytics} onCheckedChange={(v) => setLocal((s) => ({ ...s, analytics: Boolean(v) }))} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Google Fonts</div>
                  <div className="text-sm text-muted-foreground">Lädt Google Fonts vom CDN (erfordert Zustimmung wegen Datenübermittlung an Google).</div>
                </div>
                <Switch checked={local.fonts} onCheckedChange={(v) => setLocal((s) => ({ ...s, fonts: Boolean(v) }))} />
              </div>
            </div>
          </div>

          <div className="flex gap-2 ms-auto">
            <Button variant="outline" onClick={rejectAll}>Alle ablehnen</Button>
            <Button variant="secondary" onClick={saveAndClose}>Speichern</Button>
            <Button onClick={acceptAll}>Alle akzeptieren</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
