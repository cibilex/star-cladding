import * as React from "react";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Contact form island built from shadcn/ui primitives.
 * Submit is stubbed — wire to Formspree / Web3Forms / your API.
 */
export default function ContactForm() {
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST to a form backend (Formspree / Web3Forms / Resend).
    setSent(true);
  }

  if (sent) {
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
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-10">
      <div>
        <label className="mb-2 block text-label font-semibold uppercase tracking-widest text-primary">
          Ad Soyad
        </label>
        <Input required name="name" placeholder="Ahmet Yılmaz" />
      </div>
      <div>
        <label className="mb-2 block text-label font-semibold uppercase tracking-widest text-primary">
          E-posta
        </label>
        <Input required type="email" name="email" placeholder="ahmet@mimarlik.com" />
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
      <Button type="submit" variant="accent" size="lg" className="w-full shimmer-btn">
        TALEP GÖNDER
      </Button>
    </form>
  );
}
