"use client";

import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

export default function ScaffoldLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
}
