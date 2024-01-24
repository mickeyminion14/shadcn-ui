"use client";
import React from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import ScrollToTopButton from "./_components/scroll-to-top-button";
import MainLoader from "@/components/loader";
import { useState, useEffect } from "react";
import Router from "next/router";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);
  return (
    <>
      {loading && <MainLoader />}
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
