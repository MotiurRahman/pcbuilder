import BaseLayout from "@/components/layout/BaseLayout";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <BaseLayout>
        <div className="min-h-screen flex flex-col">
          <Component {...pageProps} />
        </div>
      </BaseLayout>
    </SessionProvider>
  );
}
