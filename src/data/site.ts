/**
 * Central, typed content for the site.
 * Turkish copy now; English will be added alongside when i18n is wired.
 */
import type { IconName } from "@/components/icon-registry";

export const company = {
  name: "STAR ALÜMİNYUM",
  legalName: "Star Alüminyum",
  domain: "https://staraluminyum.com",
  email: "info@staraluminyum.com",
  phone: "+90 540 098 19 99",
  phoneHref: "tel:+905400981999",
  whatsapp: "https://wa.me/905400981999",
  address: "100. Yıl, Tamirci Sk. No:1/D, Süleymanpaşa/Tekirdağ",
  addressLong:
    "100. Yıl Mah. Tamirci Sk. Sanayi Sitesi No:1/D, 59100 Süleymanpaşa/Tekirdağ, Türkiye",
  addressLocality: "Süleymanpaşa",
  addressRegion: "Tekirdağ",
  postalCode: "59100",
  mapsLink: "https://maps.app.goo.gl/kSP91jJK3CVCvnPg8",
  hours: "Pazartesi – Cumartesi, 08:30 – 18:00",
  // for LocalBusiness JSON-LD
  geo: { lat: 40.9737478, lng: 27.4872465 },
} as const;

export const nav = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Yorumlar", href: "/#yorumlar" },
  { label: "İletişim", href: "/#iletisim" },
] as const;

// Social profiles — replace the "#" hrefs with the real profile URLs.
export const social: { label: string; href: string; icon: IconName }[] = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
];

export interface Service {
  slug: string;
  icon: IconName; // see components/icon-registry.ts
  title: string;
  /** short one-liner for cards / previews */
  summary: string;
  /** full description for the detail page */
  description: string;
  /** bullet highlights shown on the detail page */
  features: string[];
  image: string | null;
}

export const services: Service[] = [
  {
    slug: "cam-ve-cephe-giydirme",
    icon: "window",
    title: "Cam ve Cephe Giydirme Sistemleri",
    summary:
      "Geniş cam paneller ve alüminyum profillerle modern, ışıl ışıl cepheler.",
    description:
      "Binanın dış yüzeyini geniş cam paneller ve alüminyum profillerle kaplama işidir. Binaya modern, şık ve kurumsal bir imaj kazandırırken, içeriye maksimum gün ışığı girmesini sağlar ve dışarıyı kesintisiz görme imkanı sunar.",
    features: [
      "Maksimum gün ışığı ve kesintisiz manzara",
      "Modern, şık ve kurumsal görünüm",
      "Isı ve ses yalıtımı performansı",
      "Özel ölçü ve tasarıma uygun üretim",
    ],
    image: null,
  },
  {
    slug: "korkuluk-ve-kupeste",
    icon: "fence",
    title: "Korkuluk ve Küpeşte Sistemleri",
    summary:
      "Balkon, teras ve merdivenlerde güvenliği estetikle birleştiren bariyerler.",
    description:
      "Balkonlarda, teraslarda ve merdivenlerde güvenliği sağlamak amacıyla yapılan koruyucu bariyerlerdir. Alüminyum, paslanmaz çelik veya cam malzemeler kullanılarak hem düşmeyi önleyen emniyetli alanlar yaratılır hem de yapının estetiği tamamlanır.",
    features: [
      "Alüminyum, paslanmaz çelik veya cam seçenekleri",
      "Yönetmeliklere uygun güvenli yükseklik ve dayanım",
      "Estetik ve yapıyla bütünleşik tasarım",
      "Dış mekan koşullarına dayanıklı yüzey",
    ],
    image: null,
  },
  {
    slug: "kompozit-panel-kaplama",
    icon: "dashboard",
    title: "Kompozit Panel Kaplama",
    summary:
      "Hafif, dayanıklı, pürüzsüz kompozit panellerle korumalı dış cepheler.",
    description:
      "İki alüminyum levha arasındaki özel dolgudan oluşan hafif, dayanıklı ve düz pürüzsüz panellerle dış cephenin kaplanmasıdır. Hava şartlarına karşı binayı korur, temizliği kolaydır ve özellikle iş merkezleri ile modern tasarımlarda cam cephelerle mükemmel bir uyum yakalar.",
    features: [
      "Hafif ve yüksek dayanıklılık",
      "Hava şartlarına karşı koruma",
      "Kolay temizlik ve düşük bakım",
      "Cam cephelerle mükemmel uyum",
    ],
    image: null,
  },
];

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  description: string;
  // local image under /public/images, or null for a styled placeholder
  image: string | null;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    slug: "lapis-plaza",
    title: "Lapis Plaza",
    category: "DIŞ CEPHE KAPLAMA",
    location: "İstanbul",
    year: "2024",
    summary: "16 katlı iş merkezinin tam cam cephe giydirme uygulaması.",
    description:
      "Lapis Plaza için tasarlanan tam cam cephe sistemi, binaya kurumsal ve modern bir kimlik kazandırırken yüksek enerji verimliliği sağladı. Alüminyum taşıyıcı profiller ve düşük-E kaplamalı cam paneller milimetrik hassasiyetle monte edildi.",
    image: null,
  },
  {
    slug: "mevsim-rezidans",
    title: "Mevsim Rezidans",
    category: "DOĞRAMA SİSTEMLERİ",
    location: "İstanbul",
    year: "2023",
    summary: "Lüks rezidans projesinde alüminyum doğrama ve korkuluk işleri.",
    description:
      "Mevsim Rezidans'ın tüm bloklarında alüminyum doğrama ve cam korkuluk sistemleri uygulandı. Balkonlarda güvenlik ve estetik bir arada çözülerek yapının bütünsel tasarımı tamamlandı.",
    image: null,
  },
  {
    slug: "liman-is-merkezi",
    title: "Liman İş Merkezi",
    category: "KOMPOZİT PANEL",
    location: "İzmir",
    year: "2023",
    summary: "Ticari merkezin kompozit panel cephe yenileme projesi.",
    description:
      "Liman İş Merkezi'nin eskiyen dış cephesi, hafif ve dayanıklı kompozit alüminyum panellerle yenilendi. Düşük bakım maliyeti ve modern görünüm ile binanın değeri artırıldı.",
    image: null,
  },
  {
    slug: "vadi-konutlari",
    title: "Vadi Konutları",
    category: "KORKULUK SİSTEMLERİ",
    location: "Ankara",
    year: "2022",
    summary: "Konut sitesinde cam korkuluk ve küpeşte uygulaması.",
    description:
      "Vadi Konutları'nın balkon ve teraslarında paslanmaz çelik bağlantılı cam korkuluk sistemleri uygulandı. Manzarayı kapatmayan güvenli bariyerler ile yaşam alanları güçlendirildi.",
    image: null,
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Yeni cephemizin bitişi inanılmaz. Tasarımın nüanslarını anlayan, son derece profesyonel bir ekip.",
    name: "SELİN K.",
    role: "BAŞ MİMAR",
  },
  {
    quote:
      "Star Alüminyum binamızı dönüştürdü. Kaplama kalitesi mevcut pazarda benzersiz. Gerçek bir fark yaratıyor.",
    name: "MEHMET R.",
    role: "PROJE GELİŞTİRİCİ",
  },
  {
    quote:
      "Ticari mülkümüz için yaptığımız en iyi yatırım. Modern, şık ve bakım gerektirmiyor. Beklentilerimizi aştı.",
    name: "DAVUT L.",
    role: "MÜLK SAHİBİ",
  },
];

export const stats = [
  { value: "20+", label: "Yıl Tecrübe" },
  { value: "500+", label: "Tamamlanan Proje" },
  { value: "100%", label: "Müşteri Memnuniyeti" },
] as const;
