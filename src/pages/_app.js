import NavBar from "@/components/NavBar";
import { store } from "@/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return <Provider store={store}><NavBar /><Component {...pageProps} /></Provider>;
}
