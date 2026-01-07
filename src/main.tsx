import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Debug: print environment mode to verify dev/production
console.log('APP ENV:', { MODE: import.meta.env.MODE, DEV: import.meta.env.DEV });

createRoot(document.getElementById("root")!).render(<App />);
