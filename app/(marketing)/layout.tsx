import React, { Suspense } from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import ScrollToTopButton from "./_components/scroll-to-top-button";
import MainLoader from "@/components/loader";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <Suspense fallback={<MainLoader />}> {children}</Suspense>
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default MarketingLayout;
