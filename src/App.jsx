import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { User, ShoppingCart } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Updated to use sidebar layout
import Index from "./pages/Index.jsx";
import CustomerDetails from "./pages/CustomerDetails.jsx";
import PurchaseSummary from "./pages/PurchaseSummary.jsx";
import { useState } from "react";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Customer Details",
    to: "/customer-details",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Purchase Summary",
    to: "/purchase-summary",
    icon: <ShoppingCart className="h-4 w-4" />,
  },
];

const App = () => {
  const [purchaseList, setPurchaseList] = useState({});

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index purchaseList={purchaseList} setPurchaseList={setPurchaseList} />} />
              <Route path="customer-details" element={<CustomerDetails />} />
              <Route path="purchase-summary" element={<PurchaseSummary purchaseList={purchaseList} />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;