import { Layout } from "@components/Layout";
import { ModalProvider } from "@contexts/ModalContext";
import "styles/globals.css";

function MyApp({ Component, pageProps }): React.ReactNode {
  return (
    <ModalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalProvider>
  );
}

export default MyApp;
