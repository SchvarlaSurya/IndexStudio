import type { Metadata } from "next";
import { ContactPageClient } from "./client";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi IndexStudio untuk konsultasi gratis pembuatan website. Chat WhatsApp atau isi form kontak.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}