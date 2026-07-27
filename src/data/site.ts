/**
 * Central, typed content for the site.
 * Turkish copy now; English will be added alongside when i18n is wired.
 */
import type { IconName } from "@/components/icon-registry";

export const company = {
  name: "YILMAZ ALÜMİNYUM",
  legalName: "Yılmaz Alüminyum",
  // Punycode of the IDN "yılmazalüminyum.com" — must stay identical to `site`
  // in astro.config.mjs, which drives canonicals, the sitemap and robots.txt.
  domain: "https://xn--ylmazalminyum-2ob20f.com",
  /** Unicode form, for display in copy where a human reads it. */
  domainDisplay: "yılmazalüminyum.com",
  email: "yilmaz-aluminyum@outlook.com.tr",
  phone: "+90 543 648 22 85",
  phoneHref: "tel:+905436482285",
  whatsapp: "https://wa.me/905436482285",
  /** owner — surfaced on /hakkimizda and as `founder` in Organization JSON-LD */
  owner: "Ramazan Yılmaz",
  ownerRole: "Kurucu",
  // placeholder handle — replace with the real profile URL
  instagram: "https://www.instagram.com/staraluminyum",
  instagramHandle: "@staraluminyum",
  address: "100. Yıl Mah. Serap Sk. No:13, Süleymanpaşa/Tekirdağ",
  addressLong:
    "100. Yıl Mahallesi, Serap Sokak No:13, 59100 Süleymanpaşa/Tekirdağ, Türkiye",
  addressLocality: "Süleymanpaşa",
  addressRegion: "Tekirdağ",
  postalCode: "59100",
  mapsLink:
    "https://www.google.com/maps/place/100.+Y%C4%B1l,+Serap+Sk.+No:13,+59100+Tekirda%C4%9F+Merkez%2FTekirda%C4%9F/@40.9750517,27.4988579,17z/data=!4m6!3m5!1s0x14b461d5272b94ff:0x443576b48daa2462!8m2!3d40.9750508!4d27.5016413!16s%2Fg%2F11csd7yyhf",
  // keyless Google Maps embed (iframe src) — coordinates match `geo` below
  mapsEmbed:
    "https://www.google.com/maps?q=40.9750508,27.5016413&z=16&hl=tr&output=embed",
  hours: "Pazartesi – Cumartesi, 08:30 – 18:00",
  // for LocalBusiness JSON-LD
  geo: { lat: 40.9750508, lng: 27.5016413 },
  /** schema.org openingHoursSpecification — keep in sync with `hours` above */
  openingHours: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:30",
    closes: "18:00",
  },
  /** shown to Google as `priceRange`; quote-based work, so a band not a number */
  priceRange: "₺₺",
  foundingYear: "2005",
} as const;

/**
 * Local-SEO service area. First entry is the home city (drives the local pack);
 * the rest are the districts/cities we actively take work in. Used for
 * `areaServed` in JSON-LD and for city copy on the contact page.
 */
export const serviceAreas = {
  primary: "Tekirdağ",
  districts: [
    "Süleymanpaşa",
    "Çorlu",
    "Çerkezköy",
    "Kapaklı",
    "Ergene",
    "Malkara",
    "Saray",
    "Marmaraereğlisi",
  ],
  cities: ["Tekirdağ", "İstanbul", "Edirne", "Kırklareli"],
} as const;

// İletişim points at the real page, not the homepage anchor — an indexable URL
// is what directory citations and "firma + iletişim" searches need to land on.
export const nav = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
] as const;

// Social profiles — hrefs come from `company` (placeholder until the real profile URL is set).
export const social: { label: string; href: string; icon: IconName }[] = [
  { label: "Instagram", href: company.instagram, icon: "instagram" },
];

/** One question/answer pair — rendered as static <details> + FAQPage JSON-LD. */
export interface Faq {
  q: string;
  a: string;
}

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
  /**
   * SEO overrides. Keep `seoTitle` under ~60 chars and `seoDescription` around
   * 150–160 so Google renders them whole instead of truncating. Both are
   * city-targeted on purpose — local intent is where the leads are.
   */
  seoTitle: string;
  seoDescription: string;
  /** long-tail capture + FAQPage rich result; 3–5 entries per service */
  faqs: Faq[];
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
    seoTitle: "Alüminyum Cephe Giydirme Tekirdağ | Yılmaz Alüminyum",
    seoDescription:
      "Tekirdağ ve çevresinde alüminyum cephe giydirme: taşıyıcı profil, panel kaplama ve yalıtım. 20+ yıllık uygulama tecrübesi, ücretsiz keşif ve fiyat teklifi.",
    faqs: [
      {
        q: "Alüminyum cephe giydirme fiyatı metrekare olarak nasıl hesaplanır?",
        a: "Fiyat; cephe alanı, seçilen panel tipi (kompozit, tek kat alüminyum), taşıyıcı konstrüksiyon detayı, bina yüksekliği ve iskele ihtiyacına göre belirlenir. Bu yüzden liste fiyatı vermek yerine ücretsiz keşif yapıp projeye özel teklif çıkarıyoruz. Tekirdağ merkez ve ilçelerinde keşif ücretsizdir.",
      },
      {
        q: "Mevcut binamın cephesini yıkmadan giydirme yapılabilir mi?",
        a: "Evet. Alüminyum cephe giydirme büyük ölçüde mevcut duvarın üzerine kurulan bir taşıyıcı sisteme monte edilir; yıkım gerekmez. Eskiyen sıvalı veya boyalı cephelerin yenilenmesinde en çok tercih edilen yöntem budur. İç mekân kullanımı çoğu projede kesintisiz devam eder.",
      },
      {
        q: "Cephe giydirme ısı yalıtımı sağlar mı?",
        a: "Taşıyıcı sistem ile duvar arasına yalıtım levhası uygulandığında evet. Bu boşluklu (havalandırmalı) kurgu hem ısı kaybını azaltır hem de yoğuşma nemini dışarı atar. Kombine uygulamada mantolamaya göre daha uzun ömürlü ve bakımı kolay bir kabuk elde edilir.",
      },
      {
        q: "Uygulama ne kadar sürer?",
        a: "Ortalama bir apartman cephesi (600–1.000 m²) hava koşulları normal seyrederse 3–6 hafta arasında tamamlanır. Süreye ölçü alımı, atölyede kesim-büküm ve montaj dahildir. Kesin takvimi keşif sonrası sözleşmede yazılı olarak veriyoruz.",
      },
    ],
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
    seoTitle: "Cam Cephe Sistemleri Tekirdağ | Yılmaz Alüminyum",
    seoDescription:
      "Tekirdağ'da cam cephe ve giydirme cephe uygulaması. Isı yalıtımlı cam üniteler, alüminyum konstrüksiyon, rüzgar yükü hesabı. Ücretsiz keşif ve fiyat teklifi.",
    faqs: [
      {
        q: "Cam cephe ile giydirme cephe arasındaki fark nedir?",
        a: "Giydirme cephe, binanın dış kabuğunun taşıyıcı yapıya asılan bir sistemle kaplanmasının genel adıdır; dolgu malzemesi cam, kompozit panel veya taş olabilir. Cam cephe ise bu kabuğun ağırlıklı olarak camdan oluşan halidir. Yani her cam cephe bir giydirme cephedir, ama her giydirme cephe cam değildir.",
      },
      {
        q: "Cam cephe yazın aşırı ısınmaya yol açar mı?",
        a: "Doğru cam seçilirse hayır. Düşük-E (low-e) kaplamalı ve güneş kontrol camlı üniteler, gün ışığını içeri alırken ısı kazancının büyük bölümünü dışarıda tutar. Cephenin yönüne göre farklı cam reçetesi öneriyoruz; güney ve batı cepheler için daha yüksek güneş kontrol değeri kullanılır.",
      },
      {
        q: "Sistem deprem ve rüzgar yüklerine dayanıklı mı?",
        a: "Cephe konstrüksiyonu, binanın yüksekliği ve bulunduğu bölgenin rüzgar yükü verilerine göre statik hesapla projelendirilir. Bağlantı noktalarında deprem hareketini karşılayan tolerans bırakılır. Tekirdağ kıyı şeridindeki projelerde rüzgar yükü daha yüksek alınır.",
      },
      {
        q: "Cam cephenin bakımı nasıl yapılır?",
        a: "Yüzey temizliği dışında rutin bakım gerektirmez. Yılda bir fitil ve silikon derzlerin gözle kontrolü, tıkanan drenaj deliklerinin açılması yeterlidir. Bu kontrolleri teslim ettiğimiz projelerde talep üzerine biz de yapıyoruz.",
      },
    ],
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
    seoTitle: "Silikon Cephe Kaplama Tekirdağ | Yılmaz Alüminyum",
    seoDescription:
      "Strüktürel silikon cephe kaplama: dışarıdan profilsiz, kesintisiz cam görünüm. Tekirdağ ve Trakya genelinde mühendislik hesaplı uygulama, ücretsiz keşif.",
    faqs: [
      {
        q: "Silikon cephe ile klasik kapaklı cephe arasındaki fark nedir?",
        a: "Kapaklı (stick) sistemde camı tutan alüminyum baskı profilleri dışarıdan görünür ve cephede ızgara görüntüsü oluşur. Strüktürel silikon cephede cam, taşıyıcıya yapısal silikonla bağlanır; dışarıdan yalnızca ince derz çizgileri görünür. Sonuç, tek parça ayna gibi bir yüzeydir.",
      },
      {
        q: "Camı sadece silikon mu tutuyor, güvenli mi?",
        a: "Kullanılan malzeme normal mastik değil, yapısal (strüktürel) silikondur ve taşıyıcı eleman olarak sertifikalıdır. Derz kalınlığı, cam ağırlığı ile rüzgar yüküne göre hesaplanır. Yüksek yapılarda ayrıca mekanik emniyet elemanı eklenir, yani tek bir bağlantıya güvenilmez.",
      },
      {
        q: "Silikon cephe kaç yıl ömürlüdür?",
        a: "Doğru uygulanmış yapısal silikonun beklenen ömrü 20–25 yıldır. UV dayanımı yüksek ürün kullanmak ve derzi hesaplanan kalınlıkta bırakmak belirleyicidir. Periyodik derz kontrolüyle bu süre daha da uzar.",
      },
      {
        q: "Hangi binalar için uygun?",
        a: "Özellikle iş merkezleri, plazalar ve prestij projeleri için tercih edilir. Cephede kesintisiz cam yüzey isteyen her yapıya uygulanabilir; ancak maliyeti kapaklı sisteme göre daha yüksektir, bu yüzden düşük katlı konutlarda genellikle kapaklı sistem öneriyoruz.",
      },
    ],
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
    seoTitle: "Kompozit Panel Kaplama Tekirdağ | Yılmaz Alüminyum",
    seoDescription:
      "Tekirdağ'da alüminyum kompozit panel cephe kaplama. A2 yanmaz panel seçeneği, hafif taşıyıcı sistem, hızlı montaj. Ücretsiz keşif ve metrekare fiyat teklifi.",
    faqs: [
      {
        q: "Kompozit panel yanıcı mı?",
        a: "Panelin dolgu tipine bağlıdır. Yönetmelik gereği yüksek yapılarda ve kamu binalarında A2-s1,d0 sınıfı mineral dolgulu yanmaz panel kullanılması zorunludur. Biz standart olarak A2 panel öneriyoruz; yanıcı PE dolgulu paneli yalnızca yönetmeliğin izin verdiği alçak yapılarda ve müşteri talebiyle uyguluyoruz.",
      },
      {
        q: "Kompozit panel kaç yıl solmadan kalır?",
        a: "PVDF boyalı kaliteli paneller 15–20 yıl renk garantilidir ve üretici garantisi belge ile verilir. Daha ucuz polyester boyalı paneller 5–7 yılda gözle görülür şekilde solar. Deniz etkisindeki Tekirdağ kıyı hattında PVDF dışına çıkmamanızı öneriyoruz.",
      },
      {
        q: "Kompozit panel mi kaset panel mi tercih edilmeli?",
        a: "Kompozit panel iki alüminyum levha arasında dolgu bulunan sandviç bir üründür; büküm kolaylığı ve düzgün yüzeyi ile öne çıkar. Tek kat alüminyum kaset panel ise tamamen metaldir, yangın açısından avantajlıdır ama büyük yüzeylerde hafif dalgalanma yapabilir. Seçim, cephe ölçüsü ve yangın sınıfı gereksinimine göre yapılır.",
      },
      {
        q: "Eski cephe üstüne kompozit kaplama yapılabilir mi?",
        a: "Evet, en yaygın kullanım alanlarından biri budur. Mevcut duvara dübellenen alüminyum karkas üzerine paneller monte edilir; istenirse araya yalıtım levhası girer. Yıkım ve moloz çıkmadığı için hem hızlı hem de düşük maliyetli bir yenileme yöntemidir.",
      },
    ],
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
    seoTitle: "Cam Balkon Sistemleri Tekirdağ | Yılmaz Alüminyum",
    seoDescription:
      "Tekirdağ cam balkon: katlanır ve sürme sistemler, 8 mm temperli cam, ısıcamlı seçenek. Süleymanpaşa, Çorlu ve Çerkezköy'de ücretsiz keşif ve montaj.",
    faqs: [
      {
        q: "Cam balkon için ruhsat veya izin gerekiyor mu?",
        a: "Cam balkon, cephede kalıcı kütle değişikliği yaratmadığı için çoğu belediyede ruhsata tabi değildir. Ancak apartmanlarda cephe bütünlüğü nedeniyle yönetim planı ya da kat malikleri kararı aranabilir. Montaj öncesi bina yönetiminden onay almanızı öneriyoruz.",
      },
      {
        q: "Katlanır mı sürme mi daha iyi?",
        a: "Katlanır (akordeon) sistemde tüm camlar bir kenara toplanır, balkon tamamen açılır — manzara önceliğinizse bu. Sürme sistemde camlar raylarda yan yana kayar, açıklık yarıya kadar olur ama sızdırmazlık ve ses yalıtımı daha iyidir. Rüzgarlı cephelerde sürme sistemi öneriyoruz.",
      },
      {
        q: "Cam balkon kışın soğuğu keser mi?",
        a: "Tek cam katlanır sistem rüzgar, yağmur ve tozu keser; balkonu dış ortama göre yaklaşık 5–8 °C ılıtır ama ısıtılmış bir oda hissi vermez. Isıcamlı (çift cam) ısı yalıtımlı profilli sistem tercih edilirse balkon dört mevsim kullanılabilir bir yaşam alanına dönüşür.",
      },
      {
        q: "Kullanılan cam kırılırsa tehlikeli olur mu?",
        a: "Sistemlerde 8 mm temperli güvenlik camı kullanıyoruz. Temperli cam darbe aldığında keskin parçalara değil, küçük ve künt tanelere ayrılır; yaralanma riski normal cama göre çok düşüktür. Bu, yönetmeliğin de balkon uygulamalarında istediği cam tipidir.",
      },
    ],
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
    seoTitle: "Giyotin Cam Sistemleri Tekirdağ | Yılmaz Alüminyum",
    seoDescription:
      "Tekirdağ'da motorlu ve manuel giyotin cam uygulaması. Kafe, restoran, kış bahçesi ve teraslar için ısıcamlı çözümler. Ücretsiz keşif ve fiyat teklifi.",
    faqs: [
      {
        q: "Giyotin cam motorlu mu manuel mi olmalı?",
        a: "Panel ağırlığı ve kullanım sıklığı belirler. Kafe ve restoran gibi gün içinde defalarca açılıp kapanan yerlerde uzaktan kumandalı motorlu sistem neredeyse zorunludur. Evlerde ve kış bahçelerinde manuel karşı ağırlıklı sistem yeterli olur ve maliyeti belirgin şekilde düşüktür.",
      },
      {
        q: "Elektrik kesilirse motorlu sistem açılır mı?",
        a: "Evet. Motorlu sistemlerde manuel kurtarma mekanizması bulunur; elektrik olmadığında paneller elle indirilip kaldırılabilir. İsteyen müşterilerimize kesintisiz güç kaynağı bağlantısı da yapıyoruz.",
      },
      {
        q: "Yağmur ve rüzgar sızdırır mı?",
        a: "Paneller arasında ve profil kanallarında EPDM fitil ve fırça conta kullanılır; kapalı konumda su sızdırmaz. Rüzgar dayanımı profil kesiti ve panel genişliğine göre hesaplanır. Tekirdağ'ın açık kıyı hattındaki projelerde daha güçlü profil ve ara dikme öneriyoruz.",
      },
      {
        q: "Kış bahçesi için ısı yalıtımı yeterli mi?",
        a: "Isıcam (çift cam) ve ısı bariyerli profil seçildiğinde evet — mekân kışın ısıtılabilir bir hacim haline gelir. Tek camlı ekonomik sistemler yalnızca rüzgar-yağmur koruması sağlar, kış bahçesi amaçlı kullanımda önerilmez.",
      },
    ],
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
    seoTitle: "Alüminyum Sürme Sistemleri Tekirdağ | Yılmaz Alüminyum",
    seoDescription:
      "Tekirdağ'da alüminyum sürme kapı ve pencere sistemleri. Isı yalıtımlı profil, geniş panoramik açıklık, sessiz raylı mekanizma. Ücretsiz keşif ve teklif.",
    faqs: [
      {
        q: "Sürme sistem mi açılır kanat mı daha çok yalıtım yapar?",
        a: "Klasik açılır kanat, çevresel baskı contası sayesinde teorik olarak daha iyi sızdırmazlık verir. Ancak ısı bariyerli lift&slide (kaldır-sür) sürme sistemler, kanat kapanırken contaya bastırdığı için açılır kanata çok yakın değerlere ulaşır. Geniş açıklık isteniyorsa lift&slide doğru tercihtir.",
      },
      {
        q: "En fazla ne kadar geniş sürme kapı yapılabilir?",
        a: "Tek kanat genişliği profil serisine ve cam ağırlığına göre değişir; ısıcamlı bir kanatta pratikte 2,5–3,5 m genişlik ve 250–400 kg ağırlığa kadar çıkılabilir. Daha büyük açıklıklar çok kanatlı veya köşe birleşimli çözümlerle kurulur. Ölçüyü keşifte netleştiriyoruz.",
      },
      {
        q: "Raylar zamanla tıkanır veya zorlaşır mı?",
        a: "Ray kanalına giren toz ve kum en sık karşılaşılan sorundur. Yılda birkaç kez kanalın süpürülmesi ve makara yataklarının kontrolü sistemin ömrünü belirgin şekilde uzatır. Paslanmaz ray uygulaması ve kapalı makara seçimi bu bakımı azaltır.",
      },
      {
        q: "Sürme sistemde güvenlik nasıl sağlanıyor?",
        a: "Çok noktadan kilitleme mekanizması, kanadın raydan kaldırılmasını engelleyen anti-lift pimleri ve istenirse lamine güvenlik camı kullanılıyor. Zemin kat ve bahçe geçişlerinde bu üçünü birlikte öneriyoruz.",
      },
    ],
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
    seoTitle: "Alüminyum Doğrama Tekirdağ | Kapı & Pencere | Yılmaz",
    seoDescription:
      "Tekirdağ alüminyum doğrama: ısı bariyerli profil, çift ve üçlü cam, RAL renk seçenekleri. Kapı ve pencerede uzun ömürlü çözüm. Ücretsiz keşif ve teklif.",
    faqs: [
      {
        q: "Alüminyum doğrama mı PVC mi daha iyi?",
        a: "Alüminyum daha uzun ömürlü, daha ince görünümlü ve boyutsal olarak daha kararlıdır; büyük cam açıklıklarında PVC'nin taşıyamayacağı ölçülere çıkabilir. PVC ise ilk maliyeti düşük ve ısı iletkenliği doğal olarak daha azdır. Isı bariyerli alüminyum profil bu farkı büyük ölçüde kapatır.",
      },
      {
        q: "Isı bariyeri (poliamit) nedir, gerçekten fark eder mi?",
        a: "Alüminyum ısıyı çok iyi ilettiği için, iç ve dış profil arasına ısı iletmeyen poliamit çubuk yerleştirilir. Bu bariyer köprüyü keser, kışın camın iç yüzeyinde yoğuşmayı azaltır ve ısı kaybını ciddi ölçüde düşürür. Isıtılan mekânlarda bariyersiz profil kullanılmasını önermiyoruz.",
      },
      {
        q: "Hangi renk ve yüzey seçenekleri var?",
        a: "Tüm RAL renklerinde elektrostatik toz boya, ahşap desenli sublimasyon kaplama ve eloksal (mat/parlak metalik) seçenekleri sunuyoruz. Deniz etkisindeki cephelerde tuzlu havaya karşı eloksal veya deniz sınıfı boya öneriyoruz.",
      },
      {
        q: "Mevcut pencereleri değiştirmek duvarı tahrip eder mi?",
        a: "Söküm sırasında sıva kenarlarında sınırlı bir hasar oluşur; bu, montaj sonrası köşebent ve mastik ile kapatılır. Boyalı iç mekânlarda müşteriye önceden bilgi veriyoruz. Doğrama değişimi ortalama bir dairede 1–2 günde tamamlanır.",
      },
    ],
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
    seoTitle: "Alüminyum Ofis Bölme Tekirdağ | Yılmaz Alüminyum",
    seoDescription:
      "Tekirdağ'da cam ofis bölme duvar sistemleri. Tek cam, çift cam ve jaluzili seçenekler, sökülüp taşınabilir modüler yapı. Ücretsiz keşif ve fiyat teklifi.",
    faqs: [
      {
        q: "Cam ofis bölme ses yalıtımı yapar mı?",
        a: "Tek camlı bölme konuşmayı duyulmaz hale getirmez, yalnızca görsel ayrım ve kısmi ses azaltımı sağlar. Toplantı odaları gibi mahremiyet gereken yerlerde çift cam, farklı kalınlıkta cam kombinasyonu ve tavan-döşeme birleşiminde akustik bant kullanıyoruz; bu kurguda ses yalıtımı belirgin şekilde artar.",
      },
      {
        q: "Bölmeler ileride sökülüp başka yere taşınabilir mi?",
        a: "Evet, sistem modülerdir. Profiller ve cam üniteleri numaralandırılarak sökülür, yeni yerleşimde tekrar kurulur. Kayıp genellikle contalar ve bazı bağlantı elemanlarıyla sınırlı kalır. Kiralık ofislerde en çok bu nedenle tercih ediliyor.",
      },
      {
        q: "Mahremiyet için hangi seçenekler var?",
        a: "Çift cam arasına yerleştirilen ve kordonla ya da motorla kontrol edilen jaluzi en pratik çözümdür — toz tutmaz, temizlik gerektirmez. Alternatif olarak buzlu cam, kumlama, folyo bant ve akıllı film (elektrikle şeffaflaşan cam) uygulanabilir.",
      },
      {
        q: "Kurulum ofisteki çalışmayı durdurur mu?",
        a: "Hayır. Bölme sistemleri kuru montajdır; kırım, harç ve sıva yoktur. Toz ve gürültü minimum düzeydedir, çoğu projede mesai dışında veya bölüm bölüm ilerleyerek kuruyoruz. Ortalama bir kat 2–4 günde tamamlanır.",
      },
    ],
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
    seoTitle: "Korkuluk ve Küpeşte Sistemleri Tekirdağ | Yılmaz Alüminyum",
    seoDescription:
      "Tekirdağ'da cam korkuluk, alüminyum ve paslanmaz küpeşte uygulaması. Yönetmeliğe uygun yükseklik ve dayanım, balkon-teras-merdiven. Ücretsiz keşif.",
    faqs: [
      {
        q: "Balkon korkuluğu kaç cm yüksekliğinde olmalı?",
        a: "Türkiye'de yürürlükteki bina yönetmeliklerine göre konut balkonlarında korkuluk yüksekliği bitmiş döşemeden en az 110 cm olmalıdır. Dikey elemanlar arası boşluk, çocuk güvenliği için 10 cm'yi geçmemelidir. Tüm uygulamalarımızı bu ölçülere göre yapıyoruz.",
      },
      {
        q: "Cam korkuluk mu alüminyum korkuluk mu tercih edilmeli?",
        a: "Manzara önceliğinizse cam korkuluk görüşü hiç kesmez ve daha prestijli durur; buna karşılık maliyeti yüksektir ve düzenli temizlik ister. Alüminyum dikmeli korkuluk daha ekonomik, daha az bakım isteyen ve tamiri kolay bir çözümdür. Deniz manzaralı terasların çoğunda cam öneriyoruz.",
      },
      {
        q: "Cam korkulukta hangi cam kullanılıyor?",
        a: "Düşme riski olan yerlerde temperli-lamine (iki kat temperli cam arasında PVB folyo) cam kullanılır. Bu cam kırılsa bile parçalar folyoya yapışık kalır ve boşluk açılmaz — güvenlik açısından tek başına temperli camdan üstündür. Yönetmelik de bu uygulamayı ister.",
      },
      {
        q: "Deniz kenarında paslanma sorunu olur mu?",
        a: "Standart paslanmaz çelik tuzlu havada zamanla yüzeyde noktasal lekelenme yapabilir. Tekirdağ ve Marmara kıyı hattındaki projelerde 316 kalite paslanmaz veya eloksal kaplı alüminyum kullanıyoruz; bu malzemeler tuzlu havaya karşı belirgin şekilde dayanıklıdır.",
      },
    ],
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
  /** SERP title (~60 chars); falls back to `${title} | ${company.name}` when absent */
  seoTitle?: string;
  /** SERP meta description (~150–160 chars); falls back to `summary` when absent */
  seoDescription?: string;
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
    seoTitle: "Lapis Plaza Cam Cephe Projesi, İstanbul | Yılmaz Alüminyum",
    seoDescription:
      "16 katlı Lapis Plaza için tam cam cephe giydirme: düşük-E kaplamalı cam üniteler ve alüminyum taşıyıcı sistem. Yılmaz Alüminyum referans projesi, 2024.",
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
    seoTitle: "Mevsim Rezidans Doğrama & Korkuluk | Yılmaz Alüminyum",
    seoDescription:
      "Mevsim Rezidans'ın tüm bloklarında alüminyum doğrama ve cam korkuluk uygulaması. Balkonlarda güvenlik ve estetik bir arada. Yılmaz Alüminyum, İstanbul 2023.",
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
    seoTitle: "Liman İş Merkezi Kompozit Panel Cephe | Yılmaz Alüminyum",
    seoDescription:
      "Liman İş Merkezi'nin eskiyen dış cephesi hafif ve dayanıklı alüminyum kompozit panellerle yenilendi. Düşük bakım, modern görünüm. İzmir, 2023.",
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
    seoTitle: "Vadi Konutları Cam Korkuluk Uygulaması | Yılmaz Alüminyum",
    seoDescription:
      "Vadi Konutları balkon ve teraslarında paslanmaz çelik bağlantılı cam korkuluk sistemleri. Manzarayı kapatmayan güvenli bariyerler. Ankara, 2022.",
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
    seoTitle: "Aura Kule Giydirme Cephe Projesi, İzmir | Yılmaz Alüminyum",
    seoDescription:
      "Aura Kule'nin dalga formlu mimarisi, özel bükümlü alüminyum profiller ve kavisli cam panellerle cepheye taşındı. Yılmaz Alüminyum referansı, 2022.",
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
    seoTitle: "Meridyen Plaza Cam Cephe Sistemi | Yılmaz Alüminyum",
    seoDescription:
      "A+ ofis plazasında ısı yalıtımlı düşük-E cam üniteler ve gizli kanat doğramalarla kesintisiz cam yüzey. Rüzgar yükü hesaplı uygulama. İstanbul, 2021.",
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
    seoTitle: "Pera Ofis Kompozit Panel Cephesi, Bursa | Yılmaz Alüminyum",
    seoDescription:
      "Pera Ofis cephesi, üç boyutlu derinlik veren özel kesim beyaz kompozit panellerle kaplandı. Ritmik panel dizilimi, güçlü mimari ifade. 2022.",
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
    seoTitle: "Kristal AVM Kompozit Panel & Cam Cephe | Yılmaz Alüminyum",
    seoDescription:
      "Kristal AVM'de geniş cam yüzeyler gümüş kompozit panellerle çerçevelendi; panel altı gizli LED aydınlatma gece silüetini tamamlıyor. Ankara, 2021.",
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
    seoTitle: "Marin Villaları Korkuluk ve Küpeşte | Yılmaz Alüminyum",
    seoDescription:
      "Deniz manzaralı villa teraslarında ince profilli alüminyum küpeşte ve temperli cam korkuluk. Tuzlu havaya dayanıklı eloksal kaplama. Bodrum, 2023.",
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
      "Yılmaz Alüminyum binamızı dönüştürdü. Kaplama kalitesi mevcut pazarda benzersiz. Gerçek bir fark yaratıyor.",
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
