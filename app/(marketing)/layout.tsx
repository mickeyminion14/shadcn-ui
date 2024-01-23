import React from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import ScrollToTopButton from "./_components/scroll-to-top-button";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 80px)",
        }}
      >
        {children}
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default MarketingLayout;
