import { Router, Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/i18n";
import Home from "@/pages/Home";
import { ServiceRouter } from "@/pages/services/ServiceRouter";
import { PluginDetailPage } from "@/pages/services/PluginDetailPage";
import { AdminPage } from "@/pages/AdminPage";
import { SuccessStoriesPage } from "@/pages/SuccessStoriesPage";
import { PricingPage } from "@/pages/PricingPage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import BlogList from "@/pages/BlogList";
import BlogPost from "@/pages/BlogPost";
import DocsList from "@/pages/DocsList";
import DocsPost from "@/pages/DocsPost";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router base={base} ssrPath={ssrPath}>
          <Switch>
            <Route path="/admin" component={AdminPage} />
            <Route path="/pricing" component={PricingPage} />
            <Route path="/success-stories" component={SuccessStoriesPage} />
            <Route path="/services/plugins/:pluginSlug" component={PluginDetailPage} />
            <Route path="/services/:slug" component={ServiceRouter} />
            <Route path="/blog" component={BlogList} />
            <Route path="/blog/:slug" component={BlogPost} />
            <Route path="/docs" component={DocsList} />
            <Route path="/docs/:slug" component={DocsPost} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        <WhatsAppButton />
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
