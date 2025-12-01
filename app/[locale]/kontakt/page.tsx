import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { getTranslations } from "next-intl/server";
import { MapPin, Phone, Mail } from "lucide-react";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-mono tactical-glow">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("contact.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.8299842536886!2d17.10722931571946!3d48.14393007922453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c894b3e8b5b77%3A0x8b5e5e5e5e5e5e5e!2zTsOhbS4gxL0uIMWgdMO6cmEgMiwgODExIDAyIEJyYXRpc2xhdmE!5e0!3m2!1sen!2ssk!4v1234567890123!5m2!1sen!2ssk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Map Overlay */}
              <div className="absolute top-4 left-4 glassmorphic px-4 py-2 rounded-lg border border-tactical-green/30">
                <p className="font-mono text-sm text-tactical-green">
                  📍 {t("contact.mapOverlay")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glassmorphic p-8 rounded-lg border">
                <h2 className="text-2xl font-bold font-mono mb-6 text-tactical-green">
                  {t("contact.address")}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-tactical-green/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-tactical-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.officeLocationTitle")}</h3>
                      <p className="text-muted-foreground text-sm">
                        DELTA DEFENCE, a.s.<br />
                        Nám. Ľ. Štúra 2<br />
                        811 02 Bratislava<br />
                        Slovakia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-tactical-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-tactical-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.phone")}</h3>
                      <p className="text-muted-foreground font-mono">
                        +421 XXX XXX XXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-tactical-green/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-tactical-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.email")}</h3>
                      <a
                        href="mailto:office@deltadefence.eu"
                        className="text-muted-foreground font-mono hover:text-tactical-green transition-colors"
                      >
                        office@deltadefence.eu
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


