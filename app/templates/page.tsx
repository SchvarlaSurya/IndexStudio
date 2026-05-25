import type { Metadata } from "next";
import { TemplatesPageClient } from "./client";

export const metadata: Metadata = {
  title: "Template Demo",
  description: "Lihat contoh website yang bisa kami bikin untuk cafe, barbershop, laundry, gym, dan fashion store.",
};

export default function TemplatesPage() {
  return <TemplatesPageClient />;
}