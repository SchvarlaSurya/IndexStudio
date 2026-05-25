import type { Metadata } from "next";
import { ServicesPageClient } from "./client";

export const metadata: Metadata = {
  title: "Layanan",
  description: "Layanan pembuatan website profesional untuk UMKM Indonesia - Landing Page, Company Profile, Menu Digital, dan lainnya.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}