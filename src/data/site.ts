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
  /** key under src/assets/images/ (see data/images.ts), or null for a styled placeholder */
  image: string | null;
}

export const services: Service[] = [
  {
    slug: "aluminyum-cephe-giydirme",
    icon: "building",
    title: "Alüminyum Cephe Giydirme",
    summary:
      "Alüminyum taşıyıcı sistemlerle binaya modern ve korumalı bir dış kabuk.",
    description:
      "Binanın dış yüzeyinin alüminyum taşıyıcı profiller ve kaplama panelleriyle giydirilmesidir. Yapıya çağdaş ve kurumsal bir kimlik kazandırırken ısı, su ve ses yalıtımını güçlendirir; eski cephelerin yenilenmesinde de en kalıcı çözümdür.",
    features: [
      "Isı, su ve ses yalıtımında yüksek performans",
      "Eski cepheleri yenilemede kalıcı çözüm",
      "Hafif taşıyıcı sistem, hızlı montaj",
      "Proje bazlı renk ve doku seçenekleri",
    ],
    image: "services/aluminyum-cephe-giydirme.jpg",
  },
  {
    slug: "cam-cephe",
    icon: "grid",
    title: "Cam Cephe Sistemleri",
    summary:
      "Geniş cam paneller ve alüminyum profillerle ışıl ışıl, prestijli cepheler.",
    description:
      "Bina cephesinin geniş cam paneller ve alüminyum konstrüksiyonla kaplanmasıdır. İçeriye maksimum gün ışığı alır, kesintisiz manzara sunar ve iş merkezlerinden rezidanslara kadar her yapıya prestijli bir görünüm kazandırır.",
    features: [
      "Maksimum gün ışığı ve kesintisiz manzara",
      "Modern, şık ve kurumsal görünüm",
      "Isı ve ses yalıtımı performansı",
      "Özel ölçü ve tasarıma uygun üretim",
    ],
    image: "services/cam-cephe.jpg",
  },
  {
    slug: "silikon-cephe-kaplama",
    icon: "frame",
    title: "Silikon Cephe Kaplama",
    summary:
      "Dışarıdan profil görünmeyen, kesintisiz ayna gibi pürüzsüz cam yüzeyler.",
    description:
      "Cam panellerin taşıyıcı sisteme strüktürel silikonla bağlandığı, dışarıdan alüminyum profillerin görünmediği cephe sistemidir. Binaya tek parça, ayna gibi kesintisiz bir cam yüzey kazandırır; modern iş kulelerinin imza görünümüdür.",
    features: [
      "Dışarıdan profilsiz, kesintisiz cam görünüm",
      "Strüktürel silikonla güvenli bağlantı",
      "Rüzgar ve deprem yüklerine mühendislik hesabı",
      "Yüksek yapılar için ideal",
    ],
    image: "services/silikon-cephe-kaplama.jpg",
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
    image: "services/kompozit-panel-kaplama.jpg",
  },
  {
    slug: "cam-balkon",
    icon: "blinds",
    title: "Cam Balkon Sistemleri",
    summary:
      "Balkonu dört mevsim kullanılır kılan katlanır ve sürme cam kapatmalar.",
    description:
      "Balkon ve terasların katlanır veya sürme cam panellerle kapatılmasıdır. Manzarayı kapatmadan rüzgar, yağmur ve tozdan korur; balkonu dört mevsim kullanılabilen ferah bir yaşam alanına dönüştürür.",
    features: [
      "Katlanır ve sürme sistem seçenekleri",
      "Temperli güvenlik camı",
      "Manzarayı kapatmayan çerçevesiz görünüm",
      "Kolay temizlik için içe açılan paneller",
    ],
    image: "services/cam-balkon.jpg",
  },
  {
    slug: "giyotin-cam",
    icon: "arrow-up-down",
    title: "Giyotin Cam Sistemleri",
    summary:
      "Tek tuşla dikey açılan, kış bahçesi ve kafelerin vazgeçilmez cam sistemi.",
    description:
      "Cam panellerin dikey eksende motorlu veya manuel olarak hareket ettiği sistemdir. Kış bahçeleri, kafe ve restoran cepheleri ile teraslarda mekânı saniyeler içinde açık ya da kapalı alana dönüştürür; ısı yalıtımlı cam seçenekleriyle dört mevsim konfor sağlar.",
    features: [
      "Uzaktan kumandalı motorlu kullanım",
      "Isıcam ve temperli cam seçenekleri",
      "Kafe, restoran ve kış bahçeleri için ideal",
      "Rüzgara dayanıklı alüminyum profiller",
    ],
    image: "services/giyotin-cam.jpg",
  },
  {
    slug: "aluminyum-surme-sistemleri",
    icon: "move-horizontal",
    title: "Alüminyum Sürgü & Sürme Sistemleri",
    summary:
      "Geniş açıklıkları zahmetsizce açıp kapatan yalıtımlı sürme kapı ve pencereler.",
    description:
      "Geniş cam açıklıkların raylar üzerinde zahmetsizce kayan alüminyum doğramalarla açılıp kapanmasını sağlayan sistemlerdir. Teras, salon ve bahçe geçişlerinde alan kaybı yaratmadan panoramik açıklıklar sunar; ısı yalıtımlı profil seçenekleriyle enerji kaybını önler.",
    features: [
      "Alan kaybı yaratmayan raylı sistem",
      "Isı yalıtımlı profil seçenekleri",
      "Geniş panoramik açıklıklar",
      "Sessiz ve yumuşak kayar mekanizma",
    ],
    image: "services/aluminyum-surme-sistemleri.jpg",
  },
  {
    slug: "aluminyum-dograma",
    icon: "window",
    title: "Alüminyum Cam & Doğrama",
    summary:
      "Kapı ve pencerelerde uzun ömürlü, yalıtımlı alüminyum doğrama çözümleri.",
    description:
      "Kapı ve pencerelerin alüminyum profillerle üretilmesidir. Ahşap ve PVC'ye göre çok daha uzun ömürlü, dayanıklı ve bakım gerektirmeyen alüminyum doğramalar; ısı bariyerli profil ve çift cam seçenekleriyle enerji verimliliği sağlar.",
    features: [
      "Isı bariyerli profil teknolojisi",
      "Çürümez, paslanmaz, solmaz yüzey",
      "Çift ve üçlü cam seçenekleri",
      "Her RAL renginde eloksal ve boya",
    ],
    image: "services/aluminyum-dograma.jpg",
  },
  {
    slug: "aluminyum-ofis-bolme",
    icon: "columns-3",
    title: "Alüminyum Ofis Bölme",
    summary:
      "Ofisleri ışığı bölmeden ayıran cam ve alüminyum bölme duvar sistemleri.",
    description:
      "Ofis iç mekanlarının alüminyum karkas ve cam panellerle bölünmesidir. Gün ışığını engellemeden çalışma alanları oluşturur; tek cam, çift cam ve jaluzili seçenekleriyle ses yalıtımı ve mahremiyet ihtiyacına göre uyarlanır.",
    features: [
      "Gün ışığını kesmeyen şeffaf bölme",
      "Jaluzili ve buzlu cam mahremiyet seçenekleri",
      "Ses yalıtımlı çift cam alternatifi",
      "Sökülüp yeniden kurulabilir modüler yapı",
    ],
    image: "services/aluminyum-ofis-bolme.jpg",
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
    image: "services/korkuluk-ve-kupeste.jpg",
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
  /** slugs of the services this project showcases (see `services`) */
  serviceSlugs: string[];
  /** key under src/assets/images/ (see data/images.ts), or null for a styled placeholder */
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
    serviceSlugs: ["cam-cephe"],
    image: "projects/lapis-plaza.jpg",
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
    serviceSlugs: ["aluminyum-dograma", "korkuluk-ve-kupeste"],
    image: "projects/mevsim-rezidans.jpg",
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
    serviceSlugs: ["kompozit-panel-kaplama"],
    image: "projects/liman-is-merkezi.jpg",
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
    serviceSlugs: ["korkuluk-ve-kupeste"],
    image: "projects/vadi-konutlari.jpg",
  },
  {
    slug: "aura-kule",
    title: "Aura Kule",
    category: "GİYDİRME CEPHE",
    location: "İzmir",
    year: "2022",
    summary: "Ofis kulesinde dalga formlu alüminyum ve cam giydirme cephe.",
    description:
      "Aura Kule'nin akışkan mimarisi, özel bükümlü alüminyum profiller ve kavisli cam panellerle cepheye taşındı. Dalga formlu hatlar gün ışığını gün boyu farklı açılardan yansıtarak binaya dinamik bir karakter kazandırıyor.",
    serviceSlugs: ["aluminyum-cephe-giydirme"],
    image: "projects/aura-kule.jpg",
  },
  {
    slug: "meridyen-plaza",
    title: "Meridyen Plaza",
    category: "CAM CEPHE",
    location: "İstanbul",
    year: "2021",
    summary: "A+ ofis plazasında yüksek performanslı cam cephe sistemi.",
    description:
      "Meridyen Plaza'da ısı yalıtımlı, düşük-E kaplamalı cam üniteler ve gizli kanat alüminyum doğramalarla kesintisiz bir cam yüzey oluşturuldu. Yüksek kule cephesi, rüzgar yüklerine göre mühendislik hesaplarıyla projelendirildi.",
    serviceSlugs: ["silikon-cephe-kaplama", "cam-cephe"],
    image: "projects/meridyen-plaza.jpg",
  },
  {
    slug: "pera-ofis",
    title: "Pera Ofis",
    category: "KOMPOZİT PANEL",
    location: "Bursa",
    year: "2022",
    summary: "Beyaz kompozit panellerle heykelsi bir ofis cephesi.",
    description:
      "Pera Ofis'in cephesi, üç boyutlu derinlik veren özel kesim beyaz kompozit panellerle kaplandı. Panellerin ritmik dizilimi, sade malzeme paletine rağmen güçlü bir mimari ifade yaratıyor.",
    serviceSlugs: ["kompozit-panel-kaplama"],
    image: "projects/pera-ofis.jpg",
  },
  {
    slug: "kristal-avm",
    title: "Kristal AVM",
    category: "KOMPOZİT PANEL",
    location: "Ankara",
    year: "2021",
    summary: "AVM cephesinde kompozit panel ve cam kombinasyonu.",
    description:
      "Kristal AVM'de geniş açıklıklı cam yüzeyler, gümüş kompozit panellerle çerçevelendi. İki malzemenin kesişimi giriş aksını vurgularken, panel altı gizli LED aydınlatma gece silüetini tamamlıyor.",
    serviceSlugs: ["kompozit-panel-kaplama", "cam-cephe"],
    image: "projects/kristal-avm.jpg",
  },
  {
    slug: "marin-villalari",
    title: "Marin Villaları",
    category: "KORKULUK SİSTEMLERİ",
    location: "Bodrum",
    year: "2023",
    summary: "Villa teraslarında minimal korkuluk ve küpeşte uygulaması.",
    description:
      "Marin Villaları'nın deniz manzaralı teraslarında, görüşü kesmeyen ince profilli alüminyum küpeşteler ve temperli cam korkuluklar uygulandı. Tuzlu hava koşullarına dayanıklı eloksal kaplama uzun ömür sağlıyor.",
    serviceSlugs: ["korkuluk-ve-kupeste", "cam-balkon"],
    image: "projects/marin-villalari.jpg",
  },
];

/** Projects that showcase the given service, newest first. */
export function getRelatedProjects(serviceSlug: string, limit = 3): Project[] {
  return projects
    .filter((p) => p.serviceSlugs.includes(serviceSlug))
    .slice(0, limit);
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** company / project the person represents (optional) */
  company?: string;
  /** 1–5 star rating (optional; render stars only when present) */
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Yeni cephemizin bitişi inanılmaz. Tasarımın nüanslarını anlayan, son derece profesyonel bir ekip.",
    name: "SELİN K.",
    role: "BAŞ MİMAR",
    company: "Atölye Mimarlık",
    rating: 5,
  },
  {
    quote:
      "Star Alüminyum binamızı dönüştürdü. Kaplama kalitesi mevcut pazarda benzersiz. Gerçek bir fark yaratıyor.",
    name: "MEHMET R.",
    role: "PROJE GELİŞTİRİCİ",
    company: "Lapis Plaza",
    rating: 5,
  },
  {
    quote:
      "Ticari mülkümüz için yaptığımız en iyi yatırım. Modern, şık ve bakım gerektirmiyor. Beklentilerimizi aştı.",
    name: "DAVUT L.",
    role: "MÜLK SAHİBİ",
    company: "Liman İş Merkezi",
    rating: 5,
  },
];

export const stats = [
  { value: "20+", label: "Yıl Tecrübe" },
  { value: "500+", label: "Tamamlanan Proje" },
  { value: "100%", label: "Müşteri Memnuniyeti" },
] as const;
