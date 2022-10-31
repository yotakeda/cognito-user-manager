import "../styles/globals.css";
import "antd/dist/antd.dark.css";
import { AppPropsWithLayout } from "../types";
import { MainLayout } from "../layouts/MainLayout";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? MainLayout;
  return <>{getLayout(<Component {...pageProps} />)}</>;
}
