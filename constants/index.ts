import { type LucideIcon } from "lucide-react";

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export interface TemplateItem {
  id: string;
  title: string;
  description: string;
  color: string;
  gradient: string;
  category: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface TestimonialItem {
  name: string;
  business: string;
  quote: string;
  rating: number;
}

export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/templates", label: "Template" },
  { href: "/pricing", label: "Harga" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export const SERVICES = [
  {
    icon: "Monitor",
    title: "Landing Page",
    description: "Halaman landing page yang menarik untuk promosi bisnis Anda.",
    benefits: ["Desain modern & responsif", "SEO friendly", "Loading cepat", "CTA yang jelas"],
  },
  {
    icon: "Building2",
    title: "Company Profile",
    description: "Website profil perusahaan yang profesional dan informatif.",
    benefits: ["Tampilan profesional", "Portfolio showcase", "Sejarah perusahaan", "Kontak lengkap"],
  },
  {
    icon: "UtensilsCrossed",
    title: "Menu Digital",
    description: "Menu digital interaktif untuk restoran, cafe, dan bisnis F&B.",
    benefits: ["QR code menu", "Update harga mudah", "Tambah gambar menu", "Kategori lengkap"],
  },
  {
    icon: "Store",
    title: "Website UMKM",
    description: "Website lengkap untuk pelaku UMKM dengan fitur lengkap.",
    benefits: ["Katalog produk", "Informasi bisnis", "Peta lokasi", "Sosial media integration"],
  },
  {
    icon: "Coffee",
    title: "Website Cafe",
    description: "Website khusus untuk cafe dengan tampilan menarik.",
    benefits: ["Gallery suasana", "Menu lengkap", "Reservasi online", "Testimoni pelanggan"],
  },
  {
    icon: "Scissors",
    title: "Website Barbershop",
    description: "Website keren untuk barbershop dan salon keren.",
    benefits: ["Booking online", "Portofolio gaya", "Harga layanan", "Lokasi & jam buka"],
  },
  {
    icon: "Shirt",
    title: "Website Laundry",
    description: "Website praktis untuk laundry service.",
    benefits: ["Cek harga", "Booking pickup", "Status order", "Testimoni"],
  },
];

export const TEMPLATES: TemplateItem[] = [
  {
    id: "cafe",
    title: "Template Cafe",
    description: "Tampilan cozy dan hangat untuk cafe Anda",
    color: "from-amber-500 to-orange-600",
    gradient: "bg-gradient-to-br from-amber-50 to-orange-100",
    category: "F&B",
  },
  {
    id: "barbershop",
    title: "Template Barbershop",
    description: "Style modern dan maskulin",
    color: "from-gray-800 to-gray-900",
    gradient: "bg-gradient-to-br from-gray-100 to-gray-200",
    category: "Barbershop",
  },
  {
    id: "laundry",
    title: "Template Laundry",
    description: "Clean dan praktis untuk laundry",
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-50 to-cyan-100",
    category: "Laundry",
  },
  {
    id: "gym",
    title: "Template Gym",
    description: "Energetic dan powerful design",
    color: "from-red-500 to-pink-600",
    gradient: "bg-gradient-to-br from-red-50 to-pink-100",
    category: "Fitness",
  },
  {
    id: "fashion",
    title: "Template Fashion Store",
    description: "Elegant dan stylish untuk fashion",
    color: "from-purple-500 to-violet-600",
    gradient: "bg-gradient-to-br from-purple-50 to-violet-100",
    category: "Fashion",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "Rp 299k",
    description: "Untuk bisnis baru yang butuh kehadiran online sederhana.",
    features: [
      "1 Halaman website",
      "Desain responsif mobile",
      "Tombol WhatsApp",
      "Optimasi kecepatan",
      "SEO basic",
      "Revisi 2x",
      "Support 1 bulan",
    ],
    cta: "Mulai Sekarang",
  },
  {
    name: "Business",
    price: "Rp 799k",
    description: "Paket sesuai untuk UMKM yang serius dengan online presence.",
    features: [
      "3-5 Section landing page",
      "Desain sesuai brand",
      "Galeri foto",
      "Menu/layanan produk",
      "Integrasi Google Maps",
      "Tombol WhatsApp & sosmed",
      "SEO optimized",
      "Revisi hingga selesai",
      "Support 3 bulan",
    ],
    highlighted: true,
    cta: "Pilih Business",
  },
  {
    name: "Premium",
    price: "Rp 1.499k",
    description: "Solusi lengkap untuk brand yang ingin tampil beda.",
    features: [
      "3 Halaman website",
      "Desain premium custom",
      "Animasi micro-interaction",
      "Google Maps + sosmed",
      "SEO basic",
      "Kecepatan optimal",
      "Revisi hingga puas",
      "Support 6 bulan",
      "Panduan edit konten",
    ],
    cta: "Hubungi Kami",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Pak Budi",
    business: "Kedai Kopi Nusantara",
    quote: " Website dari IndexStudio bikin cafe kami keliatan lebih profesional. Customer yang datang makin banyak.",
    rating: 5,
  },
  {
    name: "Kak Siti",
    business: "Urban Barbershop",
    quote: "Booking online dari website mereka membantu banget ngatur jadwal barber. Customer pada suka.",
    rating: 5,
  },
  {
    name: "Mas Ahmad",
    business: "Fresh Laundry",
    quote: "Pelanggan bisa cek harga dan booking pickup langsung. Praktis banget buat bisnis laundry.",
    rating: 5,
  },
  {
    name: "Kak Dewi",
    business: "Bakerie House",
    quote: "Menu digitalnya bagus, customers bisa liat foto kue dengan jelas. Tambah penasaran mau order.",
    rating: 5,
  },
  {
    name: "Mas Rudi",
    business: "Gym Pro Center",
    quote: "Website baru kami keliatan premium dan modern. Banyak yang kaget padahal kami bisnis lokal biasa.",
    rating: 5,
  },
  {
    name: "Bu Ani",
    business: "Warung Kopi Segar",
    quote: "Alhamdulillah sekarang punya website. Pelanggan bisa lihat menu dan lokasi dari HP.",
    rating: 5,
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    icon: "Zap",
    title: "Cepat & Modern",
    description: "Website dibuat dengan teknologi terbaru, fast loading dan anti lag.",
  },
  {
    icon: "Heart",
    title: "Dibuat dengan Cinta",
    description: "Setiap project kami kerjakan dengan penuh dedikasi dan perhatian ke detail.",
  },
  {
    icon: "Users",
    title: "Fokus UMKM",
    description: "Kami memahami kebutuhan bisnis lokal Indonesia dan solusinya.",
  },
  {
    icon: "Clock",
    title: "Proses Cepat",
    description: "Website selesai dalam waktu singkat, siap digunakan dalam hitungan hari.",
  },
  {
    icon: "CheckCircle2",
    title: "Garansi Kepuasan",
    description: "Revisi unlimited sampai Anda 100% puas dengan hasilnya.",
  },
  {
    icon: "Star",
    title: "Konsultasi Gratis",
    description: "Kami bantu konsultasi gratis untuk memilih solusi terbaik untuk bisnis Anda.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Berapa lama pembuatan website?",
    answer: "Starter biasanya 3-5 hari kerja, Business 7-10 hari, Premium 14-21 hari. Tergantung kompleksitas dan revisi yang diminta.",
  },
  {
    question: "Sudah termasuk hosting dan domain?",
    answer: "Ya, semua paket sudah termasuk hosting 1 tahun dan SSL. Untuk domain, Anda bisa beli sendiri atau kami bantu carikan yang tersedia.",
  },
  {
    question: "Bagaimana kalau belum punya foto atau konten?",
    answer: "Kami bisa bantu standarisasi konten. Untuk foto, Anda bisa berikan sendiri atau kami gunakan stock photo berkualitas yang sesuai.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Pembayaran bisa full di awal atau DP 50% saat start dan lunas saat website jadi. Untuk paket Business ke atas, bisa cicilan 2x tanpa bunga.",
  },
  {
    question: "Ada garansi jika tidak puas?",
    answer: "Kami berikan waktu 30 hari setelah website selesai untuk minta revisi. Jika hasilnya tidak sesuai ekspektasi, kami bantu perbaiki sampai puas.",
  },
  {
    question: "Apakah bisa edit sendiri setelah jadi?",
    answer: "Bisa. Kami berikan panduan edit konten. Untuk perubahan layout atau fitur baru, bisa request ke kami dengan biaya tambahan yang wajar.",
  },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://instagram.com/indexstudio" },
  { name: "TikTok", href: "https://tiktok.com/@indexstudio" },
  { name: "WhatsApp", href: "https://wa.me/6281234567890" },
];

export const WA_LINK = "https://wa.me/6285184633733";
export const PHONE_NUMBER = "085184633733";