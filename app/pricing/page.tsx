import type { Metadata } from "next";
import { PricingPageClient } from "./client";

export const metadata: Metadata = {
  title: "Harga",
  description: "Pilihan harga pembuatan website yang terjangkau untuk UMKM Indonesia - Starter, Business, dan Premium.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}