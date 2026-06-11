import "./App.css";
import { useEffect, useState } from "react";
import CursorTrails from "./components/CursorTrails";
import AboutPage from "./pages/AboutPage";
import WelcomePage from "./pages/WelcomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import VenuePage from "./pages/VenuePage";

const routes = {
  "/about-rolly-kings": {
    component: AboutPage,
  },
  "/restaurants": {
    eyebrow: "Dining destination",
    title: "Restaurants",
    description:
      "Signature plates, rich flavors, and a refined dining experience curated for long evenings at Rolly Kings.",
  },
  "/vip-lounge": {
    eyebrow: "Private arrival",
    title: "VIP Lounge",
    description:
      "An intimate, quiet space for premium guests, private meetings, and unhurried service.",
  },
  "/bush-bar": {
    eyebrow: "Open-air lounge",
    title: "Bush Bar",
    description:
      "A relaxed social setting with a warm nightlife mood, ideal for drinks, music, and informal gatherings.",
  },
  "/rooftop-bar": {
    eyebrow: "Skyline evenings",
    title: "Rooftop Bar",
    description:
      "Elevated drinks, panoramic views, and a polished rooftop atmosphere for sunsets and late-night conversations.",
  },
  "/pool-bar": {
    eyebrow: "Poolside service",
    title: "Pool Bar",
    description:
      "Cool refreshments and light bites served beside the pool in a calm, resort-style setting.",
  },
  "/privacy-policy": {
    component: PrivacyPolicyPage,
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const route = routes[normalizePath(pathname)];
  const RouteComponent = route?.component;

  return (
    <div className="min-h-screen bg-gray-100">
      <CursorTrails />
      {RouteComponent ? (
        <RouteComponent />
      ) : route ? (
        <VenuePage
          eyebrow={route.eyebrow}
          title={route.title}
          description={route.description}
        />
      ) : (
        <WelcomePage />
      )}
    </div>
  );
}
