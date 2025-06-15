import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebApplications from "./pages/WebApplications";
import MobileApps from "./pages/MobileApps";
import EnterpriseSoftware from "./pages/EnterpriseSoftware";
import IoTDevices from "./pages/IoTDevices";
import MicrocontrollerKits from "./pages/MicrocontrollerKits";
import CustomElectronics from "./pages/CustomElectronics";
import ProductKits from "./pages/ProductKits";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import UpdatePassword from "./pages/UpdatePassword";
import MobileProject from "./pages/MobileProject";
import InstallationService from "./pages/InstallationService";
import WarrantyService from "./pages/WarrantyService";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/web-applications" element={<WebApplications />} />
            <Route path="/mobile-apps" element={<MobileApps />} />
            <Route path="/enterprise-software" element={<EnterpriseSoftware />} />
            <Route path="/iot-devices" element={<IoTDevices />} />
            <Route path="/microcontroller-kits" element={<MicrocontrollerKits />} />
            <Route path="/custom-electronics" element={<CustomElectronics />} />
            <Route path="/product-kits" element={<ProductKits />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/mobile-apps/start-project" element={<MobileProject />} />
            <Route path="/installation-service" element={<InstallationService />} />
            <Route path="/warranty-service" element={<WarrantyService />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<ProtectedRoute />}>
              {/* Add protected routes here in the future */}
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
