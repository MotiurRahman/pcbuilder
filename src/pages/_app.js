import BaseLayout from "@/components/layout/BaseLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BaseLayout>
      <div className="min-h-screen flex flex-col">
        <Component {...pageProps} />
      </div>
    </BaseLayout>
  );
}
