import "../styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../app/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
