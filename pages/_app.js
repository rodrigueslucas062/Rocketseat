import "@/styles/globals.scss";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster richColors />
    </>
  );
}
