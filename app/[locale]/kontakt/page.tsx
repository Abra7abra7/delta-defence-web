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
              Get in touch with our team for inquiries about our defense technologies and services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
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
                      <h3 className="font-semibold mb-1">Office Location</h3>
                      <p className="text-muted-foreground">
                        DELTA DEFENCE, a.s.<br />
                        Bratislava, Slovakia
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
                      <p className="text-muted-foreground font-mono">
                        info@deltadefence.sk
                      </p>
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


