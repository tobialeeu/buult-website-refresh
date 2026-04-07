import { Suspense, lazy, useEffect, type ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Index from "./pages/Index";
const OverOns = lazy(() => import("./pages/OverOns"));
const HoeWerkenWij = lazy(() => import("./pages/HoeWerkenWij"));
const Contact = lazy(() => import("./pages/Contact"));
const Kennismaking = lazy(() => import("./pages/Kennismaking"));
const Tarieven = lazy(() => import("./pages/Tarieven"));
const Studies = lazy(() => import("./pages/Studies"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return <div className="min-h-[40vh] bg-background" aria-hidden="true" />;
}

function LazyRoute({ children }: { children: ReactNode }) {
  return <Suspense fallback={<RouteFallback />}>{children}</Suspense>;
}

const App = () => (
  <>
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/over-ons" element={<LazyRoute><OverOns /></LazyRoute>} />
        <Route path="/hoe-werken-wij" element={<LazyRoute><HoeWerkenWij /></LazyRoute>} />
        <Route path="/tarieven" element={<LazyRoute><Tarieven /></LazyRoute>} />
        <Route path="/contact" element={<LazyRoute><Contact /></LazyRoute>} />
        <Route path="/gratis-kennismaking" element={<LazyRoute><Kennismaking /></LazyRoute>} />
        <Route path="/gratiskennismaking" element={<Navigate to="/gratis-kennismaking" replace />} />
        <Route path="/studies" element={<LazyRoute><Studies /></LazyRoute>} />
        <Route path="/privacy" element={<LazyRoute><Privacy /></LazyRoute>} />
        <Route path="*" element={<LazyRoute><NotFound /></LazyRoute>} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
