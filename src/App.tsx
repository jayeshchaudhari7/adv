import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import GoogleAds from "./pages/services/GoogleAds";
import MetaAds from "./pages/services/MetaAds";
import TikTokAds from "./pages/services/TikTokAds";
import AmazonAds from "./pages/services/AmazonAds";
import MarketplaceAds from "./pages/services/MarketplaceAds";
import Shopify from "./pages/services/Shopify";
import WooCommerce from "./pages/services/WooCommerce";
import BigCommerce from "./pages/services/BigCommerce";
import Magento from "./pages/services/Magento";
import Analytics from "./pages/services/Analytics";
import EmailMarketing from "./pages/services/EmailMarketing";
import Creative from "./pages/services/Creative";
import CRO from "./pages/services/CRO";
import Influencer from "./pages/services/Influencer";
import Fashion from "./pages/industries/Fashion";
import Beauty from "./pages/industries/Beauty";
import HomeGarden from "./pages/industries/HomeGarden";
import Electronics from "./pages/industries/Electronics";
import HealthWellness from "./pages/industries/HealthWellness";
import FoodBeverage from "./pages/industries/FoodBeverage";
import PetSupplies from "./pages/industries/PetSupplies";
import Jewelry from "./pages/industries/Jewelry";
import SportingGoods from "./pages/industries/SportingGoods";
import Custom from "./pages/industries/Custom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/meta-ads" element={<MetaAds />} />
          <Route path="/services/tiktok-ads" element={<TikTokAds />} />
          <Route path="/services/amazon-ads" element={<AmazonAds />} />
          <Route path="/services/marketplace-ads" element={<MarketplaceAds />} />
          <Route path="/services/shopify" element={<Shopify />} />
          <Route path="/services/woocommerce" element={<WooCommerce />} />
          <Route path="/services/bigcommerce" element={<BigCommerce />} />
          <Route path="/services/magento" element={<Magento />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/email-marketing" element={<EmailMarketing />} />
          <Route path="/services/creative" element={<Creative />} />
          <Route path="/services/cro" element={<CRO />} />
          <Route path="/services/influencer" element={<Influencer />} />
          <Route path="/industries/fashion" element={<Fashion />} />
          <Route path="/industries/beauty" element={<Beauty />} />
          <Route path="/industries/home-garden" element={<HomeGarden />} />
          <Route path="/industries/electronics" element={<Electronics />} />
          <Route path="/industries/health-wellness" element={<HealthWellness />} />
          <Route path="/industries/food-beverage" element={<FoodBeverage />} />
          <Route path="/industries/pet-supplies" element={<PetSupplies />} />
          <Route path="/industries/jewelry" element={<Jewelry />} />
          <Route path="/industries/sporting-goods" element={<SportingGoods />} />
          <Route path="/industries/custom" element={<Custom />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
