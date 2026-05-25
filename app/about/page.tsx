import type { Metadata } from "next";
import { AboutPageClient } from "./client";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali IndexStudio - tim yang passion bikin website keren untuk UMKM Indonesia. Misi kami bantu bisnis lokal naik level.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}