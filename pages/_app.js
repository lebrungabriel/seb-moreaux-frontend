import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Sébastien Moreaux</title>
        <meta
          name="description"
          content="Sébastien Moreaux est un pianiste, compositeur et arrangeur français basé à Paris."
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
