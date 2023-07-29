import BaseLayout from "@/components/layout/BaseLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BaseLayout>
      <div className="h-[100vh]">
        <Component {...pageProps} />
      </div>
    </BaseLayout>
  );
}
