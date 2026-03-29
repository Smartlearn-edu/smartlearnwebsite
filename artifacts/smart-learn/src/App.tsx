import { Router, Route, Switch } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/i18n";
import Home from "@/pages/Home";
import { ServiceRouter } from "@/pages/services/ServiceRouter";
import { PluginDetailPage } from "@/pages/services/PluginDetailPage";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router base={base}>
          <Switch>
            <Route path="/services/plugins/:pluginSlug" component={PluginDetailPage} />
            <Route path="/services/:slug" component={ServiceRouter} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
