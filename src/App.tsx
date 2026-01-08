import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const queryClient = new QueryClient();

const App = () => {
  const { consent } = useCookieConsent();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Analytics/SpeedInsights only rendered if consent.analytics === true */}
        {consent?.analytics ? <SpeedInsights /> : null}
        {consent?.analytics ? <Analytics /> : null}
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ueber-uns" element={<About />} />
              <Route path="/buchung" element={<Booking />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
    </QueryClientProvider>
  );
};
export default App;
