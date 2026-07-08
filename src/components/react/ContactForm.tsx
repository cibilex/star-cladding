import * as React from "react";
import { CircleCheck, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Contact form island built from shadcn/ui primitives.
 * Submits to Netlify Forms via fetch so we control the success/error UI
 * ourselves. The build-time-only static detector form lives in Contact.astro.
 */
export default function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [channel, setChannel] = React.useState<"phone" | "email">("phone");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = new URLSearchParams();
    payload.set("form-name", "contact");
    payload.set("name", String(formData.get("name") ?? ""));
    payload.set(channel, String(formData.get(channel) ?? ""));
    payload.set("message", String(formData.get("message") ?? ""));

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });
      if (!res.ok) throw new Error(`Netlify Forms responded ${res.status}`);
      setStatus("sent");
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center bg-white p-10 text-center">
        <CircleCheck className="mb-4 size-12 text-vibrant-steel-blue" aria-hidden="true" />
        <p className="font-display text-headline font-bold text-primary">
          Teşekkürler!
        </p>
        <p className="mt-2 text-on-surface-variant">
          Talebiniz alındı. En kısa sürede size dönüş yapacağız.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      data-netlify="true"
      name="contact"
      netlify-honeypot="bot-field"
      className="space-y-6 bg-white p-10"
    >
      <div>
        <label className="mb-2 block text-label font-semibold uppercase tracking-widest text-primary">
          Ad Soyad
        </label>
        <Input required name="name" placeholder="Ahmet Yılmaz" />
      </div>
      <div>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <label className="block text-label font-semibold uppercase tracking-widest text-primary">
            {channel === "phone" ? "Telefon" : "E-posta"}
          </label>
          <div
            className="flex rounded-full border border-outline-variant p-0.5"
            role="tablist"
            aria-label="İletişim tercihi"
          >
            {(
              [
                { key: "phone", label: "Telefon" },
                { key: "email", label: "E-posta" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.key}
                type="button"
                role="tab"
                aria-selected={channel === opt.key}
                onClick={() => setChannel(opt.key)}
                className={
                  "whitespace-nowrap rounded-full px-3 py-1 text-label font-semibold uppercase tracking-wider transition-colors " +
                  (channel === opt.key
                    ? "bg-vibrant-steel-blue text-white"
                    : "text-on-surface-variant hover:text-primary")
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {channel === "phone" ? (
          <div className="flex items-center gap-3 border-b border-outline-variant transition-colors focus-within:border-vibrant-steel-blue">
            <input
              required
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              name="phone"
              placeholder="5XX XXX XX XX"
              pattern="[0-9\s()-]{10,16}"
              title="Örn: 5XX XXX XX XX"
              className="w-full bg-transparent py-3 text-primary placeholder:text-outline-variant focus:outline-none"
            />
            <span
              className="flex shrink-0 select-none items-center gap-1.5 rounded-md border border-outline-variant bg-surface-container-low px-2.5 py-1 text-sm font-semibold text-primary"
              aria-hidden="true"
            >
              🇹🇷 +90
            </span>
          </div>
        ) : (
          <Input required type="email" name="email" placeholder="ahmet@mimarlik.com" />
        )}
      </div>
      <div>
        <label className="mb-2 block text-label font-semibold uppercase tracking-widest text-primary">
          Proje Kapsamı
        </label>
        <Textarea
          required
          name="message"
          rows={4}
          placeholder="Vizyonunuzu anlatın..."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm font-medium text-red-600">
          <TriangleAlert className="size-4 shrink-0" aria-hidden="true" />
          Bir şeyler ters gitti, lütfen tekrar deneyin ya da bizi doğrudan arayın.
        </p>
      )}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full shimmer-btn"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "GÖNDERİLİYOR..." : "TALEP GÖNDER"}
      </Button>
    </form>
  );
}
