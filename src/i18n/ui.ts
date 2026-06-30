/**
 * i18n dictionary. Turkish is complete; English is stubbed for the final
 * translation step. Wire with getLangFromUrl/useTranslations in i18n/utils.ts.
 */
export const languages = {
  tr: "Türkçe",
  en: "English",
} as const;

export const defaultLang = "tr";

export const ui = {
  tr: {
    "nav.services": "Hizmetler",
    "nav.projects": "Projeler",
    "nav.reviews": "Yorumlar",
    "nav.contact": "İletişim",
    "cta.quote": "TEKLİF AL",
    "hero.title": "Binanıza Modern Bir Kimlik",
    "hero.subtitle":
      "Cam cephe, kompozit panel ve korkuluk sistemlerinde uzman çözümler ile mimari vizyonunuzu gerçeğe dönüştürüyoruz.",
    "hero.services": "HİZMETLERİMİZ",
    "hero.scroll": "KEŞFET",
    "services.kicker": "UZMANLIK ALANLARIMIZ",
    "services.title": "Hizmetlerimiz",
    "projects.kicker": "SEÇKİN PROJELER",
    "projects.title": "Projelerimiz",
    "reviews.kicker": "KANITLANMIŞ PERFORMANS",
    "reviews.title": "Müşteri Yorumları",
    "contact.title": "Hadi, kalıcı bir şeyler inşa edelim.",
    "contact.name": "Ad Soyad",
    "contact.email": "E-posta",
    "contact.message": "Mesajınız",
    "contact.send": "TALEP GÖNDER",
    "contact.studio": "ADRES",
    "contact.line": "TELEFON",
    "contact.mail": "E-POSTA",
    "footer.rights": "Tüm hakları saklıdır.",
  },
  en: {
    // TODO: final translation step
  },
} as const;
