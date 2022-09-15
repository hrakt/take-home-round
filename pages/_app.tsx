import { defineCustomElements as ionDefineCustomElements } from "@ionic/core/loader";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "../relay/environment";

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/core/css/display.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/padding.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";

import "../styles/overrides.css";
import "../theme/variables.css";

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ionDefineCustomElements(window);
  });

  return (
    <RelayEnvironmentProvider environment={environment}>
      <ion-app>
        <Component {...pageProps} />
      </ion-app>
    </RelayEnvironmentProvider>
  );
}

export default CustomApp;
